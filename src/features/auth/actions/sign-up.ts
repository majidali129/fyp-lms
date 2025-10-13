'use server'

import { fromErrorToActionState, toActionState } from "@/components/form/utils/to-action-state";
import prisma from "@/lib/prisma";
import { signInPath } from "@/paths";
import { signUpSchema } from "@/schemas/auth"
import { Prisma } from "@prisma/client";
import bcrypt from 'bcrypt'
import { redirect } from "next/navigation";


export const signUpUser = async (formData: FormData) => {
    try {
        const parsedData = await signUpSchema.parse(Object.fromEntries(formData));
        console.log('Validated User Data:', parsedData);
        const {userName, firstName, lastName, email, password, role} = parsedData;

        // const existingUser = await prisma.user.findFirst({
        //    where: {
        //     OR: [
        //         {userName}, {email}
        //     ]
        //    }
        // })

        // if(existingUser) {
        //     return toActionState('ERROR', 'User with this email or username already exists', formData);
        // }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({data: {
            userName, firstName, lastName, email, password: hashedPassword, role, createdAt: new Date(), updatedAt: new Date()
        }})

        // if(!newUser) {
        //     return toActionState('ERROR', 'Failed to create user', formData);
        // }

        console.log('New User Created:', newUser);

    } catch (error) {
        if(error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            return toActionState('ERROR', 'Either email or username is already in use', formData);
        }
        console.error('Error during sign-up:', error);
        return fromErrorToActionState(error, formData);
    }

    redirect(signInPath())
}