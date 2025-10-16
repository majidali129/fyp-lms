'use client'

import { useState } from "react";
import { SortSelect } from "./sort-select"
import { CATEGORY_FILTERS } from "@/constants";


type CourseSortSelectByCategoryProps = {
    className?: string;
}
export const CourseSortSelectByCategory = ({className}: CourseSortSelectByCategoryProps) => {

    const [category, setCategory] = useState(CATEGORY_FILTERS[0].value as string);

    const handleChange = (value: string) => {
        setCategory(value);
    }

    return (
        <div className="flex flex-col gap-0.5">
            <label htmlFor="search" className="text-gray-800/70">Category:</label>

        <SortSelect className={className} value={category} onchange={handleChange} options={CATEGORY_FILTERS} placeholder={CATEGORY_FILTERS[0].label} />
        </div>
    )
}