"use client";

import { useState } from "react";

import { RATING_FILTERS } from "@/constants";

import { SortSelect } from "./sort-select";

type CourseSortSelectByRatingProps = {
  className?: string;
};
export const CourseSortSelectByRating = ({ className }: CourseSortSelectByRatingProps) => {
  const [rating, setRating] = useState<string>(RATING_FILTERS[0].value);

  const handleChange = (value: string) => {
    setRating(value);
  };

  return (
    <div className="flex flex-col gap-0.5">
      <label className="text-gray-800/70" htmlFor="search">
        Rating:
      </label>

      <SortSelect
        className={className}
        onchange={handleChange}
        options={RATING_FILTERS}
        placeholder={RATING_FILTERS[0].label}
        value={rating}
      />
    </div>
  );
};
