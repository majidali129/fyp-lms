import { CourseSortSelectByCategory } from "@/components/course-sort-select-by-category"
import { InstructorCourseSearch } from "./instructor-course-search"
import { CourseSortSelectByRating } from "@/components/course-sort-select-by-ratings"
import { CourseSortSelectFilter } from "@/components/course-sort-select-filter"
import { CourseCard } from "./course-card"


export const InstructorCourses = () => {
    return (
        <div className="py-2.5 space-y-7">
            <div className="grid grid-cols-[6fr_2fr_2fr_2fr] gap-x-4">
                <InstructorCourseSearch />
                <CourseSortSelectFilter className="w-full" />
                <CourseSortSelectByCategory className="w-full" />
                <CourseSortSelectByRating className="w-full" />
            </div>
            <ul className="grid grid-cols-4 gap-4">
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </ul>
            {/* TODO: Pagination'll be below */}
        </div>
    )
}