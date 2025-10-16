import { ReactNode } from "react";
import { InstructorSidebar } from "../_navigation/instructor/instructor-sidebar";
import { InstructorHeader } from "../_navigation/instructor/instructor-header";



export default function InstructorLayout({ children }: { children: ReactNode }) {

    return (
        <section className="bg-background flex min-h-screen overflow-y-hidden">
            <InstructorSidebar />
            <div className="flex-1 flex flex-col">
                <InstructorHeader />
                <div className="tw-container overflow-y-auto">
                    {children}
                </div>
            </div>

        </section>
    )
}