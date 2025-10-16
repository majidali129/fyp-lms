

'use client'

import { useState } from "react";
import { SortSelect } from "./sort-select"
import { SORT_FILTERS } from "@/constants";


type CourseSortSelectFilterProps = {
    className?: string;
}
export const CourseSortSelectFilter = ({className}: CourseSortSelectFilterProps) => {

    const [filter, setFilter] = useState(SORT_FILTERS[0].value as string);

    const handleChange = (value: string) => {
        setFilter(value);
    }
    return (
        <div className="flex flex-col gap-0.5">
            <label htmlFor="search" className="text-gray-800/70">Sort by:</label>

        <SortSelect className={className} value={filter} onchange={handleChange} options={SORT_FILTERS} placeholder={SORT_FILTERS[0].label} />
        </div>
    )
}