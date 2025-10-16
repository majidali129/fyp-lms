'use client'

import { SearchInput } from "@/components/search-input"
import { Search } from "lucide-react"
import { useState } from "react"


export const InstructorCourseSearch = () => {
    const [courseQuery, setCourseQuery] = useState('')

    return (
        <div className="flex flex-col gap-0.5">
            <label htmlFor="search" className="text-gray-800/70">Search:</label>
            <div className="flex items-center gap-1 rounded  px-3  bg-sidebar-accent">
                <Search className="w-4 h-4" />
                <SearchInput value={courseQuery} onchange={setCourseQuery} placeholder="Search in your courses..." className=" h-auto py-2.5" />
            </div>
        </div>
    )
}