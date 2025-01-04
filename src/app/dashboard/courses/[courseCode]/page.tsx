"use client";

import CourseDetails from "@/components/dashboard/courses/courseDetails";
import { BellAlertIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useParams } from "next/navigation";
import { courses } from "../../../../../public/data/courses";

export default function CourseDetailsPage() {
  const params = useParams();
  const courseCode = Array.isArray(params.courseCode)
    ? params.courseCode[0]
    : params.courseCode;

  if (!courseCode) {
    return (
      <div className="h-[250px] sm:h-[500px] p-4 bg-white rounded-lg shadow-sm">
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <BellAlertIcon className="w-12 h-12 text-gray-400" />
          <p className="text-lg font-medium text-gray-900">Course not found</p>
          <Link
            href="/dashboard"
            className="text-indigo-600 hover:text-indigo-800"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const normalizedParam = courseCode.replace("-", " ").toUpperCase();

  const course = courses.find(
    (c) => c.courseCode.toUpperCase() === normalizedParam
  );

  if (!course) {
    return (
      <div className="h-[250px] sm:h-[500px] p-4 bg-white rounded-lg shadow-sm">
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <BellAlertIcon className="w-12 h-12 text-gray-400" />
          <p className="text-lg font-medium text-gray-900">Course not found</p>
          <Link
            href="/dashboard"
            className="text-indigo-600 hover:text-indigo-800"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return <CourseDetails course={course} />;
}
