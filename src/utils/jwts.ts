import { randomBytes } from "crypto";

import { SignJWT, jwtVerify } from "jose";
import * as jose from "jose";
import { cookies } from "next/headers";

import { config } from "@/config";
import prisma from "@/lib/prisma";

import {
  InvalidSignatureError,
  MalformedTokenError,
  TokenExpiredError,
  TokenVerificationError,
} from "./jwt-errors";

// ============================================================================
// TYPES
// ============================================================================

export type AccessTokenPayload = {
  userId: string;
  email: string;
  role: string;
  type: "access";
};

// Encode secrets once for reuse
const accessTokenSecretKey = new TextEncoder().encode(config.ACCESS_TOKEN_SECRET);
const refreshTokenSecretKey = new TextEncoder().encode(config.REFRESH_TOKEN_SECRET);

// ============================================================================
// TOKEN GENERATION
// ============================================================================

export async function generateAccessToken(payload: AccessTokenPayload) {
  return await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(config.ACCESS_TOKEN_EXPIRY)
    .sign(accessTokenSecretKey);
}

export const generateRefreshToken = async (userId: string, tokenFamily: string) => {
  const token = await new SignJWT({
    userId,
    tokenFamily,
    type: "refresh",
  })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(config.REFRESH_TOKEN_EXPIRY)
    .sign(refreshTokenSecretKey);

  return { token, tokenFamily };
};

// ============================================================================
// TOKEN VERIFICATION
// ============================================================================

export const verifyAccessToken = async (token: string) => {
  try {
    const { payload: accessTokenPayload } = await jwtVerify(token, accessTokenSecretKey);

    const payload = accessTokenPayload as AccessTokenPayload;
    if (payload.type !== "access") {
      throw new Error("Invalid token type");
    }

    return payload;
  } catch (error) {
    if (error instanceof jose.errors.JWTExpired) {
      throw new TokenExpiredError();
    }
    if (error instanceof jose.errors.JWSSignatureVerificationFailed) {
      throw new InvalidSignatureError();
    }
    if (error instanceof jose.errors.JWTClaimValidationFailed) {
      throw new TokenVerificationError("Invalid claims");
    }
    if (error instanceof jose.errors.JOSEError) {
      throw new MalformedTokenError();
    }

    throw new TokenVerificationError();
  }
};

export async function verifyRefreshToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, refreshTokenSecretKey);

    return payload as {
      userId: string;
      tokenFamily: string;
      type: "refresh";
    };
  } catch (error) {
    if (error instanceof jose.errors.JWTExpired) {
      throw new TokenExpiredError();
    }
    if (error instanceof jose.errors.JWSSignatureVerificationFailed) {
      throw new InvalidSignatureError();
    }
    if (error instanceof jose.errors.JWTClaimValidationFailed) {
      throw new TokenVerificationError("Invalid claims");
    }
    if (error instanceof jose.errors.JOSEError) {
      throw new MalformedTokenError();
    }

    throw new TokenVerificationError();
  }
}

export function generateTokenFamily(): string {
  return randomBytes(32).toString("base64url");
}

// ============================================================================
// COOKIE MANAGEMENT
// ============================================================================

/**
 * Set both access and refresh tokens as httpOnly cookies
 */

export async function setAuthCookies(accessToken: string, refreshToken: string): Promise<void> {
  const cookieStore = await cookies();
  const isProduction = config.NODE_ENV === "production";

  // Access token cookie - shorter expiry, available everywhere
  cookieStore.set("accessToken", accessToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: "strict",
    maxAge: 15 * 60, // 15 minutes in seconds
    path: "/",
  });

  // Refresh token cookie - longer expiry, restricted path
  cookieStore.set("refreshToken", refreshToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: "strict", // More strict for refresh token
    maxAge: 5 * 24 * 60 * 60, // 5 days in seconds
    path: "/api/auth", // Only accessible to auth endpoints
  });
}

export async function getAccessToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get("accessToken")?.value;
}

export async function getRefreshToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get("refreshToken")?.value;
}

export async function getAuthCookies() {
  const cookieStore = await cookies();
  return {
    accessToken: cookieStore.get("accessToken")?.value,
    refreshToken: cookieStore.get("refreshToken")?.value,
  };
}

export async function clearAuthCookies(): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
}

/**
 * Update only the access token cookie (after refresh)
 */
export async function updateAccessTokenCookie(accessToken: string): Promise<void> {
  const cookieStore = await cookies();
  const isProduction = process.env.NODE_ENV === "production";

  cookieStore.set("accessToken", accessToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: "strict",
    maxAge: 15 * 60,
    path: "/",
  });
}

export const rotateTokens = async () => {
  const currentRefreshToken = await getRefreshToken();
  if (!currentRefreshToken) {
    throw new Error("No refresh token provided");
  }
  const payload = await verifyRefreshToken(currentRefreshToken);

  const user = await prisma.user.findUnique({ where: { id: payload.userId } });

  if (!user) {
    throw new Error("User not found!");
  }

  // ⚠️ CRITICAL: Check for token reuse
  if (user.refreshToken !== currentRefreshToken) {
    await prisma.user.update({
      where: { id: user.id },
      data: {
        refreshToken: null,
        tokenFamily: null,
        tokenVersion: user.tokenVersion + 1,
      },
    });

    throw new Error("Token reuse detected. Please login again.");
  }

  if (user.tokenFamily !== payload.tokenFamily) {
    throw new Error("Invalid token family");
  }

  // Generate new tokens
  const newAccessToken = await generateAccessToken({
    userId: user.id,
    email: user.email,
    role: user.role as string,
    type: "access",
  });

  const { token: newRefreshToken } = await generateRefreshToken(user.id, user.tokenFamily);

  // Update database
  await prisma.user.update({
    where: { id: user.id },
    data: { refreshToken: newRefreshToken },
  });

  return {
    accessToken: newAccessToken,
    refreshToken: newRefreshToken,
  };
};
