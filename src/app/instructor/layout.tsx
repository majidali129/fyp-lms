import type { ReactNode } from "react";

import { InstructorHeader } from "../_navigation/instructor/instructor-header";
import { InstructorSidebar } from "../_navigation/instructor/instructor-sidebar";

export default function InstructorLayout({ children }: { children: ReactNode }) {
  return (
    <section className="bg-background flex min-h-screen overflow-y-hidden">
      <InstructorSidebar />
      <div className="flex-1 flex flex-col">
        <InstructorHeader />
        <div className="tw-container overflow-y-auto">{children}</div>
      </div>
    </section>
  );
}
