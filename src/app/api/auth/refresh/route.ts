import prisma from "@/lib/prisma";
import { generateAccessToken, generateRefreshToken, getRefreshToken, verifyRefreshToken } from "@/utils/jwts";
import { NextRequest, NextResponse } from "next/server";


export default async function POST(req: NextRequest, res: NextResponse) {
    try {
        const refreshToken = await getRefreshToken();

         if (!refreshToken) {
      return NextResponse.json(
        { error: 'Missing refresh token' },
        { status: 401 }
      );
    }

    const payload = await verifyRefreshToken(refreshToken);
    const user = await prisma.user.findUnique({ where: { id: payload.userId } });

    if (!user) {
        return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );}

       if (user.refreshToken !== refreshToken) {
      // Token reuse detected! Possible attack
      // Invalidate all tokens for this user
      await prisma.user.update({
        where: { id: user.id },
        data: {
          refreshToken: null,
          tokenFamily: null,
          tokenVersion: user.tokenVersion + 1,
        },
      });
      
      return NextResponse.json(
        { error: 'Token reuse detected. Please login again.' },
        { status: 401 }
      );
    };

     if (user.tokenFamily !== payload.tokenFamily) {
      return NextResponse.json(
        { error: 'Invalid token family' },
        { status: 401 }
      );
    }
    
     // --- GENERATE NEW TOKENS ---
    
    const newAccessToken = await generateAccessToken({
      userId: user.id,
      email: user.email,
      role: user.role,
      type: 'access'
    });
    
    // Rotate refresh token (same family)
    const { token: newRefreshToken } = await generateRefreshToken(
      user.id,
      user.tokenFamily!
    );
    
    // Update database with new refresh token
    await prisma.user.update({
      where: { id: user.id },
      data: {
        refreshToken: newRefreshToken,
      },
    });

     // Set new cookies
    const response = NextResponse.json({ success: true });
    
    response.cookies.set('accessToken', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 15,
      path: '/',
    });
    
    response.cookies.set('refreshToken', newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });
    
    return response;
    } catch (error) {
        if(error instanceof Error) {
            return NextResponse.json({error: error.message}, {status: 401})
        }

        console.log('Error in /api/auth/refresh:', error)
    }
}