'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { useActionState, useState } from "react"
import { loginUser } from "../actions/sign-in";
import { Initial_Empty_State } from "@/components/form/utils/to-action-state";
import { TextField } from "@/components/form/text-field";
import Form from "@/components/form/form";
import { SubmitButton } from "@/components/form/submit-button";


export const SignInForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [actionState, formAction] = useActionState(loginUser, Initial_Empty_State)
    return (
        <Card className="max-w-md w-full">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl">
                    Welcome Back
                </CardTitle>
            </CardHeader>

            <CardContent>
                <Form action={formAction} actionState={actionState} onSuccess={() => console.log('Login successfully!')}>
                    <TextField actionState={actionState} label="Email" name="email" placeholder="test-user@gmail.com" />
                    <TextField actionState={actionState} label="Password" className="border-none focus-visible:ring-0 bg-transparent" name="password" type="password" placeholder="Create password" show={showPassword} setShow={setShowPassword} />

                    <div className="pt-3 flex justify-end">
                        <SubmitButton  label="Sign In" icon={<ArrowRight />} / >
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