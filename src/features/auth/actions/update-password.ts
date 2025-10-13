'use server';

import { ActionState, fromErrorToActionState, toActionState } from "@/components/form/utils/to-action-state";
import { passwordUpdateSchema } from "@/schemas/auth";
import bcrypt from 'bcrypt'
import { getAuth } from "../queries/get-auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { signInPath } from "@/paths";
import { clearAuthCookies } from "@/utils/jwts";



export const updatePassword = async (_initialState: ActionState, formData: FormData) => {
    try {
        const parsedData = await passwordUpdateSchema.parse(Object.fromEntries(formData));

        const auth = await getAuth();
        if (!auth.user) {
            return toActionState('ERROR', 'Unauthorized Access!');
        }

        const userWithPassword = await prisma.user.findFirst({ where: { id: auth.userId }, select: { password: true } });
        if (!userWithPassword) {
            return toActionState('ERROR', 'Unauthorized Access!');
        }

        const isPasswordCorrect = await bcrypt.compare(parsedData.newPassword, userWithPassword?.password)

        if (!isPasswordCorrect) {
            return toActionState('ERROR', 'Invalid old password');
        }

        const newHashedPassword = await bcrypt.hash(parsedData.newPassword, 10);
        await clearAuthCookies()

        await prisma.user.update({ where: { id: auth.userId }, data: { password: newHashedPassword, isActive: false, refreshToken: undefined } });
    } catch (error) {
        console.log('Password update error:', error)
        return fromErrorToActionState(error, formData)
    }

    redirect(signInPath())
}