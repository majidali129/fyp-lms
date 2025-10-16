'use client';
import { ChangeEvent } from "react";
import { Input } from "./ui/input"


type SearchInput = {
    className?: string;
    value: string;
    onchange: (value: string) => void;
    placeholder?: string;
}
export const SearchInput = ({onchange, value, className, placeholder}:SearchInput) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
const {value} = e.target;
onchange(value);
    }
    return (
        <Input className={` border-none focus-visible:ring-0  shadow-none ${className}`} placeholder={placeholder} defaultValue={value} onChange={handleChange} />
    )
}