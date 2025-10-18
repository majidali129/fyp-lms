"use client";
import { Search } from "lucide-react";
import { useState } from "react";

import { SearchInput } from "@/components/search-input";

export const InstructorGlobalSearch = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex items-center gap-1 border rounded bg-input dark:bg-sidebar px-2 md:min-w-sm">
      <Search className="w-4 h-4" />
      <SearchInput onchange={setSearch} placeholder="Search..." value={search} />
    </div>
  );
};
