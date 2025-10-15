'use client'

import { TextField } from "@/components/form/text-field"
import  Form  from "@/components/form/form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { useActionState, useState } from "react"
import { signUpUser } from "../actions/sign-up"
import { Initial_Empty_State } from "@/components/form/utils/to-action-state"
import { SubmitButton } from "@/components/form/submit-button"


export const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [actionState, formAction] = useActionState(signUpUser, Initial_Empty_State)


    return (
        <Card className="max-w-md w-full">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl">
                    Create your account
                </CardTitle>
            </CardHeader>

            <CardContent>
                <Form action={formAction} actionState={actionState}>
                    <div className="grid grid-cols-2 gap-3">
                        <TextField actionState={actionState} label="First Name" name="firstName" placeholder="majid" />
                        <TextField actionState={actionState} label="Last Name" name="lastName" placeholder="ali" />
                    </div>
                    <input type="hidden" name="role" value="STUDENT" />
                    <TextField actionState={actionState} label="Username" name="userName" placeholder="majidali129" />
                    <TextField actionState={actionState} label="Email" name="email" placeholder="test-user@gmail.com" />
                    <TextField actionState={actionState} label="Password" className="border-none focus-visible:ring-0 bg-transparent" name="password" type="password" placeholder="Create password" show={showPassword} setShow={setShowPassword} />
                    <TextField actionState={actionState} label="Confirm Password" className="border-none focus-visible:ring-0 bg-transparent" name="confirmPassword" type="password" placeholder="Confirm password" show={showConfirmPassword} setShow={setShowConfirmPassword} />
                    <div className="pt-3 flex justify-end">
                        <SubmitButton label="Create Account" icon={<ArrowRight />} />
                    </div>
                </Form>

                {/* TODO: Social Login Actions */}


                {/* <div className="flex items-center gap-2 mt-2">
                <div className="border-t w-full border-input"/>
                <p className="text-nowrap opacity-70">SIGN UP WITH</p>
                <div className="border-t w-full border-input"/>
            </div>
            <div className="mt-2 py-2 flex justify-end">
                    </div> */}
            </CardContent>
        </Card>
    )
}