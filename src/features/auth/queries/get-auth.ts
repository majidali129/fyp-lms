import { cache } from "react";
import { getAccessToken, rotateTokens, setAuthCookies, verifyAccessToken } from "../../../utils/jwts"
import prisma from "@/lib/prisma";




export const getAuth = cache(async () => {
   let payload;
   try {
      // here we'll verify the access token from cookies
      // if invalid/expired, we'll throw an error to trigger token rotation
      const accessToken = await getAccessToken()
      if (!accessToken) {
         throw new Error('No access token provided')
      }

      // verify access token (this will throw if invalid/expired)
      payload = await verifyAccessToken(accessToken);
   } catch (error) {
      // we'll handle token rotation 
      try {
         const { accessToken: newAccessToken, refreshToken: newRefreshToken } = await rotateTokens()
         await setAuthCookies(newAccessToken, newRefreshToken);

         payload = await verifyAccessToken(newAccessToken);
      } catch (refreshError) {
         throw new Error('Session expired, please login again.');
      }
   };

   const user = await prisma.user.findUnique({
    where: { id: payload.userId },
    select: { id: true, profilePicture: true, firstName: true, lastName: true },
  });

  if (!user) throw new Error('User not found!');

  return {...payload, user };
})