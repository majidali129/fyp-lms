
'use server';

import { ActionState, fromErrorToActionState, toActionState } from "@/components/form/utils/to-action-state";
import prisma from "@/lib/prisma";
import { homePath } from "@/paths";
import { loginSchema } from "@/schemas/auth";
import { UserRole } from "@/types";
import { AccessTokenPayload, generateAccessToken, generateRefreshToken, generateTokenFamily, setAuthCookies } from "@/utils/jwts";
import bcrypt from 'bcrypt'
import { redirect } from "next/navigation";



export const loginUser = async (_initialState: ActionState, formData: FormData) => {
    try {
        const parsedData = await loginSchema.parse(Object.fromEntries(formData));
        const {email, password} = parsedData;

        const user = await prisma.user.findUnique({where: {email}});
        if(!user) {
            return toActionState('ERROR', 'Invalid email or password', formData)
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordCorrect) {
            return toActionState('ERROR', 'Invalid email or password', formData);
        }

        //TODO: check for email verification before token generation;

        const tokenPayload: AccessTokenPayload = {role: user.role as UserRole, userId: user.id, email: user.email, type: 'access'}
        const accessToken = await generateAccessToken(tokenPayload);
        const tokenFamily = await generateTokenFamily()
        const {token:refreshToken} = await generateRefreshToken(user.id, tokenFamily);
        

        await prisma.user.update({where: {email}, data: {refreshToken, isActive: true}})

        await setAuthCookies(accessToken, refreshToken)
    } catch (error) {
        console.error('Login error:',error)
        return fromErrorToActionState(error, formData)
    }

    redirect(homePath())
}