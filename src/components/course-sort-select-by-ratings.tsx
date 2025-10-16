

'use client'

import { useState } from "react";
import { SortSelect } from "./sort-select"
import { RATING_FILTERS } from "@/constants";


type CourseSortSelectByRatingProps = {
    className?: string;
}
export const CourseSortSelectByRating = ({className}: CourseSortSelectByRatingProps) => {

    const [rating, setRating] = useState<string>(RATING_FILTERS[0].value);

    const handleChange = (value: string) => {
        setRating(value);
    }


    return (
        <div className="flex flex-col gap-0.5">
            <label htmlFor="search" className="text-gray-800/70">Rating:</label>

        <SortSelect className={className} value={rating} onchange={handleChange} options={RATING_FILTERS} placeholder={RATING_FILTERS[0].label} />
        </div>
    )
}