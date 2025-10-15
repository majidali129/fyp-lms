import { GraduationCap } from "lucide-react"


export const Logo = () => {

    return (
        <div className="flex items-center gap-1.5">
            <GraduationCap className="text-orange-500" />
            <span className="font-medium text-gray-900 dark:text-gray-50 text-lg">E-tutor</span>
        </div>
    )
}