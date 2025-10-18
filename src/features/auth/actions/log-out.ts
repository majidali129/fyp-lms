"use server";

import { redirect } from "next/navigation";

import prisma from "@/lib/prisma";
import { signInPath } from "@/paths";
import { clearAuthCookies } from "@/utils/jwts";

import { getAuth } from "../queries/get-auth";

export const logoutUser = async () => {
  const auth = await getAuth();
  if (!auth.user) redirect(signInPath());

  await prisma.user.update({
    where: { id: auth.userId },
    data: { isActive: false, refreshToken: undefined },
  });

  await clearAuthCookies();

  redirect(signInPath());
};
