import { Logo } from "@/components/logo";
import { InstructorSidebarItem } from "./instructor-sidebar-item";
import { ListVideo, LucideChartLine, PlusCircle, Settings } from "lucide-react";
import { createNewCoursePath, instructorCoursesPath, instructorDashboardPath, instructorSettingsPath } from "@/paths";


const sidebarItems = [{ label: 'Dashboard', href: instructorDashboardPath(), icon: <LucideChartLine /> }, { label: 'Create New Course', href: createNewCoursePath(), icon: <PlusCircle /> }, { label: 'My Courses', href: instructorCoursesPath(), icon: <ListVideo /> }, { label: 'Settings', href: instructorSettingsPath(), icon: <Settings /> }];

export const InstructorSidebar = () => {
    return (
        <aside className="w-[200px] bg-gray-950 space-y-3">
            <div className="px-4 py-4 border-b border-input/40 min-h-[50px] flex items-center">
                <Logo textClass="text-white text-xl" />
            </div>
            <ul className="py-2 space-y-2 flex flex-col">
                {
                    sidebarItems.map(item => <InstructorSidebarItem key={item.href} item={item} />)
                }
            </ul>
        </aside>
    )
}