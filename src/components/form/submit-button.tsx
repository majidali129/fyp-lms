'use client'
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader, } from "lucide-react";
import { cloneElement, ReactElement } from "react";


type SubmitButtonProps = {
    label: string;
    icon?: ReactElement<{ className: string }>
}
export const SubmitButton = ({ label, icon }: SubmitButtonProps) => {
    const { pending } = useFormStatus()


    return (
        <Button type="submit" disabled={pending} >
            {pending ? 'Wait' : label}
            {pending && <Loader className="w-4 h-4 animate-spin repeat-infinite" />}
            {icon && !pending && cloneElement(icon, { className: 'w-4 h-4' })}
        </Button>
    )
} 