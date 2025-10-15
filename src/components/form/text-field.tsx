'use client'

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { InputHTMLAttributes, memo, useCallback } from "react";
import { ErrorField } from "./error-field";
import { ActionState } from "./utils/to-action-state";



interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    name: string;
    type?: 'text' | 'email' | 'number' | 'password';
    label?: string;
    show?: boolean;
    setShow?: (show: boolean) => void;
    actionState: ActionState
}

const PasswordIcon = memo(({ show }: { show: boolean }) => (

    show ? <EyeOffIcon className="h-5 text-gray-800 w-5" /> : <EyeIcon className="h-5 text-gray-800 w-5" />
));

PasswordIcon.displayName = 'PasswordIcon'


export const TextField = memo(({ label,
    name,
    type = 'text',
    placeholder,
    show = true,
    setShow,
    disabled,
    required,
    actionState,
    className, ...props }: TextFieldProps) => {
    const isPasswordType = type === 'password';

    const handleTogglePasswordView = useCallback(() => {
        setShow?.(!show)
    }, [show, setShow])



    const renderInput = () => {
        const inputProps = {
            name, id: name, placeholder, disabled, required, className: ` ${className}`, ...props
        }
        if (isPasswordType) {
            return <div className="flex items-center border rounded pe-1">
                <Input type={show ? 'text' : 'password'} {...inputProps} defaultValue={actionState.payload?.get(name) as string} />

                {isPasswordType && <span onClick={handleTogglePasswordView}>
                    <PasswordIcon show={show} />
                </span>}
            </div>
        };
        return <Input type={type} {...inputProps} defaultValue={actionState?.payload?.get(name) as string} />

    }
    return (
        <div className="flex flex-col gap-1">
            {label && <Label htmlFor={name} >{label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </Label>}
            {renderInput()}
            <ErrorField actionState={actionState!} name={name}   />
        </div>
    )
})