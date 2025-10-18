"use client";

import { Search } from "lucide-react";
import { useState } from "react";

import { SearchInput } from "@/components/search-input";

export const InstructorCourseSearch = () => {
  const [courseQuery, setCourseQuery] = useState("");

  return (
    <div className="flex flex-col gap-0.5">
      <label className="text-gray-800/70" htmlFor="search">
        Search:
      </label>
      <div className="flex items-center gap-1 rounded  px-3  bg-sidebar-accent">
        <Search className="w-4 h-4" />
        <SearchInput
          className=" h-auto py-2.5"
          onchange={setCourseQuery}
          placeholder="Search in your courses..."
          value={courseQuery}
        />
      </div>
    </div>
  );
};
