import { AuthHeader } from "@/features/auth/components/auth-header";
import { Metadata } from "next";
import { ReactNode } from "react";



export const authMetadata: Metadata = {
    title: "Create New Account",
}


export default function AuthLayout ({children}: {children: ReactNode}) {

    return (
        <section className="flex flex-col h-screen">
        <AuthHeader />
        <main className="flex-center flex-1">
            {children}
        </main>
        </section>
    )
}