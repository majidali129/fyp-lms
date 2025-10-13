'use server';

import prisma from "@/lib/prisma";
import { getAuth } from "../queries/get-auth";
import { redirect } from "next/navigation";
import { signInPath } from "@/paths";
import { clearAuthCookies } from "@/utils/jwts";

export const logoutUser = async () => {
        const auth = await getAuth();
        if (!auth.user) redirect(signInPath());

        await prisma.user.update({ where: { id: auth.userId }, data: { isActive: false, refreshToken: undefined } })

        await clearAuthCookies()

        redirect(signInPath())
}