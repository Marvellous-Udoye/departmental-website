import {
  AcademicCapIcon,
  ArrowLeftEndOnRectangleIcon,
  BookOpenIcon,
  CalendarIcon,
  ClockIcon,
  DocumentArrowDownIcon,
  DocumentIcon,
  MapPinIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { CourseProps, ResourceItem } from "../../../../public/data/courses";
import { Card, CardContent, CardHeader } from "../common/card";

interface CourseDetailsProps {
  course: CourseProps;
}

export default function CourseDetails({ course }: CourseDetailsProps) {
  const [selectedDate, setSelectedDate] = useState<number>(
    new Date().getDate()
  );
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  const [downloadingFile, setDownloadingFile] = useState<string | null>(null);

  const handleDownload = async (resource: ResourceItem) => {
    setDownloadingFile(resource.fileName);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const dummyContent = `This is a dummy content for ${resource.fileName}`;
      const blob = new Blob([dummyContent], { type: "text/plain" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = resource.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } finally {
      setDownloadingFile(null);
    }
  };

  const getDayClassName = (day: number) => {
    const isToday = day === new Date().getDate();
    const isSelected = day === selectedDate;
    return `text-center p-2 cursor-pointer transition-all duration-200
      ${isToday ? "ring-2 ring-blue-500" : ""}
      ${
        isSelected
          ? "bg-blue-600 text-white rounded-md shadow-md"
          : "hover:bg-blue-50"
      }`;
  };

  return (
    <div className="py-6 sm:py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Course Overview */}
        <Card className="md:col-span-2 hover:shadow-md transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <AcademicCapIcon className="w-5 h-5" />
              Course Overview
            </div>
            <div className="flex items-baseline justify-between mt-2">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {course.courseCode}
                </h1>
                <div className="text-blue-600 font-medium mt-1">
                  {course.courseTitle}
                </div>
              </div>
              <div className="text-6xl font-bold text-gray-800">
                {course.unit.split(" ")[0]}
                <span className="text-lg font-normal text-gray-600">
                  {" "}
                  unit{parseInt(course.unit) > 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              {course.description}
            </p>
            <Link
              href={"/dashboard/courses"}
              className="py-2 text-blue-600 text-sm group-hover:text-blue-700 flex items-center transition-color"
            >
              Go back
              <ArrowLeftEndOnRectangleIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </CardContent>
        </Card>

        {/* Lecture Info */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow duration-300">
          <div className="space-y-3 sm:space-y-6">
            <div className="flex items-center gap-3">
              <UserIcon className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-800">
                Lecture by {course.instructor}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPinIcon className="w-5 h-5 text-blue-600" />
              <span className="text-gray-600">{course.venue}</span>
            </div>
            {course.projectDeadline && (
              <div className="flex items-center gap-3 text-red-600">
                <ClockIcon className="w-5 h-5" />
                <span>Due {course.projectDeadline}</span>
              </div>
            )}
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-2 mb-6">
            <CalendarIcon className="w-5 h-5 text-blue-600" />
            <span className="font-medium text-gray-800">Course Calendar</span>
          </div>
          <div className="space-y-4">
            <div className="text-blue-600 font-medium">{currentMonth}</div>
            <div className="grid grid-cols-7 text-sm gap-2">
              {["M", "T", "W", "T", "F", "S", "S"].map((day) => (
                <div
                  key={day}
                  className="text-center font-medium text-gray-500"
                >
                  {day}
                </div>
              ))}
              {Array.from({ length: 31 }, (_, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedDate(i + 1)}
                  className={getDayClassName(i + 1)}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-2 mb-6">
            <BookOpenIcon className="w-5 h-5 text-blue-600" />
            <span className="font-medium text-gray-800">Schedule</span>
          </div>
          <div className="divide-y divide-gray-100">
            {course.schedule?.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 py-2 sm:py-4 hover:bg-gray-50 transition-colors rounded-lg px-2"
              >
                <div className="text-sm font-medium text-gray-500">
                  {item.time}
                </div>
                <div className="text-sm text-gray-700">{item.event}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-2 mb-6">
            <DocumentIcon className="w-5 h-5 text-blue-600" />
            <span className="font-medium text-gray-800">Resources</span>
          </div>
          <div className="space-y-2">
            {course.resources?.map((resource, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-1 sm:p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <DocumentIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      {resource.fileName}
                    </div>
                    <div className="text-xs text-gray-400">
                      {resource.fileSize}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleDownload(resource)}
                  disabled={downloadingFile === resource.fileName}
                  className={`text-sm ${
                    downloadingFile === resource.fileName
                      ? "text-gray-400"
                      : "text-blue-600 hover:text-blue-800"
                  } flex items-center gap-2 transition-colors`}
                >
                  {downloadingFile === resource.fileName ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent" />
                  ) : (
                    <DocumentArrowDownIcon className="w-4 h-4" />
                  )}
                  .{resource.format}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
