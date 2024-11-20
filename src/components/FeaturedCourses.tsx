'use client'
import Link from "next/link"
import courseData from "../data/music-courses.json"
import { BackgroundGradient } from "./ui/background-gradient"
import image from "next/image"

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: string,
    instructor: string,
    isFeatured: boolean,
    //image:typeof image,
        
}

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)


  return (
    <div className="py-12 bg-gray-900">
        <div>
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-yellow-500 sm:text-4xl">Learn With the Best</p>
            </div>
        </div>
        <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredCourses.map((course:Course)=> (
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col mt-30 rounded-[22px] bg-rgb(17,24,39) dark:bg-rgb(17,24,39) overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 w-80 flex flex-col items-center text-center flex">
                                <p className="text-lg sm:text-xl text-yellow-500 mt-4 mb-2 dark:text-yellow-500">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-white flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`}>
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-20 text-center">
            <Link href={"/courses"}
            
            >
            
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                View Course
            </button>

            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses