'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";
import { cloneElement, ReactElement } from "react";

type InstructorSidebarItemPrps = {
    item: {
        label: string;
        href: string;
        icon: ReactElement<{className: string}>;
    }
}
export const InstructorSidebarItem = ({item: {href, icon, label}}: InstructorSidebarItemPrps) => {
    const pathName = usePathname()
    const isActive = pathName === href;

    return (
        <Link href={href} className={`py-2 px-4 hover:bg-orange-600 w-full text-white/60 hover:text-white flex items-center gap-2 text-nowrap ${isActive? 'bg-orange-600 text-white/100': ''}`}>
            {cloneElement(icon, {className: 'w-[18px] h-[18px]'})}
            {label}
        </Link>
    )
}