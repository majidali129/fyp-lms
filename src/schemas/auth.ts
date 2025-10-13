import * as z from "zod";

const RoleEnum = ['STUDENT', 'INSTRUCTOR', 'ADMIN'] as const;
export const signUpSchema  = z.object({
    userName: z.string().min(1, "Username is required"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.email("Invalid email address"),
    role: z.enum(RoleEnum, {
        message: "Role must be either STUDENT, INSTRUCTOR, or ADMIN" 
    }),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
}).superRefine((value, ctx) => {
    // if(!value.email) {
    //     ctx.addIssue({
    //         code: "custom",
    //         message: "Email is required",
    //         path: ['email']
    //     });
    // }
     // SuperRefine is now only for cross-field validation
    if (value.password !== value.confirmPassword) {
        ctx.addIssue({
            code: 'custom',
            message: "Passwords do not match",
            path: ['confirmPassword']
        });
    }
})

export const loginSchema = z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(1, "Password is required"),
})
// .superRefine((value, ctx) => {
//     if(!value.email || value.email.trim() === '') {
//         ctx.addIssue({
//             code: "custom",
//             message: "Email is required",
//         });
//     }
// });


export const passwordUpdateSchema = z.object({
    oldPassword: z.string().min(1, 'Old password is required'),
    newPassword: z.string().min(8, 'Password must be 8 characters long'),
     confirmNewPassword: z.string().min(1, "Please confirm your new password"),
}).superRefine((data, ctx) => {
    if(data.confirmNewPassword !== data.newPassword) {
        ctx.addIssue({
            code: 'custom',
            message: 'Passwords do not match'
        , path: ['confirmNewPassword']
        })
    }
})
export type SignUpType = z.infer<typeof signUpSchema>;
export type LoginType = z.infer<typeof loginSchema>;
export type updatePasswordType = z.infer<typeof passwordUpdateSchema>;


