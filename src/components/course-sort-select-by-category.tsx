"use client";

import { useState } from "react";

import { CATEGORY_FILTERS } from "@/constants";

import { SortSelect } from "./sort-select";

type CourseSortSelectByCategoryProps = {
  className?: string;
};
export const CourseSortSelectByCategory = ({ className }: CourseSortSelectByCategoryProps) => {
  const [category, setCategory] = useState(CATEGORY_FILTERS[0].value as string);

  const handleChange = (value: string) => {
    setCategory(value);
  };

  return (
    <div className="flex flex-col gap-0.5">
      <label className="text-gray-800/70" htmlFor="search">
        Category:
      </label>

      <SortSelect
        className={className}
        onchange={handleChange}
        options={CATEGORY_FILTERS}
        placeholder={CATEGORY_FILTERS[0].label}
        value={category}
      />
    </div>
  );
};
