"use client";

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

  const handleDownload = (resource: ResourceItem) => {
    console.log(`Downloading ${resource.fileName}`);

  };

  const getDayClassName = (day: number) => {
    const isToday = day === new Date().getDate();
    const isSelected = day === selectedDate;
    return `text-center p-2 cursor-pointer transition-colors
      ${isToday ? "ring-2 ring-blue-500" : ""}
      ${isSelected ? "bg-blue-600 text-white rounded-md" : "hover:bg-blue-50"}`;
  };

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Course Overview */}
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="text-sm text-gray-500">Course Overview</div>
            <div className="flex items-baseline justify-between">
              <div>
                <h1 className="text-2xl font-bold">{course.courseCode}</h1>
                <div className="text-blue-600">{course.courseTitle} </div>
              </div>
              <div className="text-6xl font-semibold">
                {course.unit.split(" ")[0]}
                <span className="text-lg font-light">
                  {" "}
                  unit{parseInt(course.unit) > 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{course.description}</p>
          </CardContent>
        </Card>

        {/* Lecture Info */}
        <div className="bg-white rounded-lg shadow-sm border-2 p-6">
          <div className="space-y-4">
            <div className="text-sm">Lecture taken by {course.instructor}</div>
            <div className="flex items-center gap-2 text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{course.venue}</span>
            </div>
            {course.projectDeadline && (
              <div className="flex items-center gap-2 text-sm text-red-600">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Project submission due {course.projectDeadline}</span>
              </div>
            )}
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-lg shadow-sm border-2 p-6">
          <div className="text-sm font-semibold mb-4">COURSE CALENDAR</div>
          <div className="space-y-4">
            <div className="text-blue-600 font-medium">{currentMonth}</div>
            <div className="grid grid-cols-7 text-sm gap-2">
              {["M", "T", "W", "T", "F", "S", "S"].map((day) => (
                <div key={day} className="text-center font-medium">
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
        <div className="bg-white rounded-lg shadow-sm border-2 p-6">
          <div className="divide-y">
            {course.schedule?.map((item, index) => (
              <div key={index} className="flex items-center gap-4 py-4">
                <div className="text-sm text-gray-500">{item.time}</div>
                <div className="text-sm">{item.event}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-lg shadow-sm border-2 p-6">
          <div className="text-lg font-semibold mb-4">STUDENT RESOURCES</div>
          <div className="space-y-2">
            {course.resources?.map((resource, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b last:border-0 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="text-sm">{resource.fileName}</div>
                  <div className="text-xs text-gray-400">
                    {resource.fileSize}
                  </div>
                </div>
                <button
                  onClick={() => handleDownload(resource)}
                  className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
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
