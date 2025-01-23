"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/dashboard/common/card";

import {
  BookOpenIcon,
  CalendarDateRangeIcon,
  ChevronRightIcon,
  ClockIcon,
  DocumentTextIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import React from "react";
import { CourseProps, courses } from "../../../../public/data/courses";

const CourseCard: React.FC<CourseProps> = ({
  courseTitle,
  unit,
  courseCode,
}) => {
  const router = useRouter();
  const handleSeeDetails = (courseCode: string) => {
    const courseDetail = courseCode.replace(" ", "-").toLocaleLowerCase();
    router.push(`/dashboard/courses/${courseDetail}`);
  };

  return (
    <div className="rounded-lg border hover:shadow-md transition-all duration-300 bg-white relative group">
      <div className="absolute top-0 right-0 py-1.5 px-4 rounded-bl-lg rounded-tr-lg bg-blue-500 font-medium text-sm text-white flex items-center gap-2">
        <BookOpenIcon className="w-4 h-4" />
        {unit}
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-start">
          <div>
            <h6 className="text-gray-800 text-lg font-semibold">
              {courseCode}
            </h6>
            <p className="text-gray-600 text-sm">{courseTitle}</p>
          </div>
        </div>
        <div className="pt-2">
          <button
            onClick={() => handleSeeDetails(courseCode)}
            className="text-blue-600 text-sm group-hover:text-blue-700 flex items-center transition-colors"
          >
            <DocumentTextIcon className="w-4 h-4 mr-1" />
            See details
            <ChevronRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Courses() {
  return (
    <div className="pt-10 pb-4">
      <h1 className="text-xl font-semibold text-gray-800 lg:text-2xl">
        Registered Courses
      </h1>
      <p className="mt-1 text-gray-600 text-sm">
        Stay updated with the latest trends, strategies, and insights tailored
        to help you excel academically and professionally.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 my-8">
        {courses.map((course) => (
          <CourseCard
            key={course.courseCode}
            courseTitle={course.courseTitle}
            unit={course.unit}
            courseCode={course.courseCode}
          />
        ))}
      </div>

      <Card className="shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-blue-800 text-xl font-bold">
            Semester Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-200 divide-y divide-gray-100">
              <div className="p-4">
                <h3 className="text-base font-semibold text-blue-700 mb-3">
                  Academic Information
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CalendarDateRangeIcon className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">
                      Academic Year: <strong>2024/2025</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">
                      Current Semester: <strong>First</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">
                      Level: <strong>300</strong>
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-base font-semibold text-green-700 mb-3">
                  Course Statistics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Total Courses</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {courses.length}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Units</p>
                    <p className="text-2xl font-bold text-gray-900">21</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Core Courses</p>
                    <p className="text-2xl font-bold text-gray-900">9</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Electives</p>
                    <p className="text-2xl font-bold text-gray-900">2</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200">
              <div className="p-4">
                <h3 className="text-base font-semibold text-red-700 mb-3">
                  Important Dates
                </h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Course Registration Deadline
                    </p>
                    <p className="text-sm text-gray-600">January 31, 2024</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Mid-Semester Exam
                    </p>
                    <p className="text-sm text-gray-600">March 15-22, 2024</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Final Examination
                    </p>
                    <p className="text-sm text-gray-600">May 1-15, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
