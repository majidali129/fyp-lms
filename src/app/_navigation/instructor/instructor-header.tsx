import { ProfileDropdown } from "@/components/profile-dropdown"
import { Button } from "@/components/ui/button"
import { InstructorGlobalSearch } from "@/features/instructor/components/instructor-global-search"
import { BellDot} from "lucide-react"


export const InstructorHeader = () => {
    return (
        <nav className=" py-0 bg-sidebar border-b  ">
            <div className="tw-container flex-between !py-2.5">
                <div >
                    <p className="opacity-80 text-sm">Good Morning</p>
                    <h5 className="font-medium leading-5">Dashboard</h5>
                </div>
                <div className="flex items-center gap-2.5">
                    <InstructorGlobalSearch />
                    <Button variant="secondary" size="icon">
                        <BellDot className="h-4 w-4 text-red-500" />
                    </Button>
                    <ProfileDropdown />
                </div>
            </div>
        </nav>
    )
}