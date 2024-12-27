"use client";

import {
  EnvelopeIcon,
  AcademicCapIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Banner() {
  const [department] = useState("Electrical and Electronics Engineering");

  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white rounded-lg shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 gap-6">
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
              <AcademicCapIcon className="h-8 w-8" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-xl sm:text-2xl font-bold truncate">
                Department of {department}
              </h2>
              <p className="text-blue-50 mt-1 text-sm sm:text-base">
                Stay connected with departmental updates and academic resources
              </p>
            </div>
          </div>

          <button className="group flex items-center justify-center space-x-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 backdrop-blur-sm w-full sm:w-auto">
            <EnvelopeIcon className="h-5 w-5" />
            <span>Contact Department</span>
            <ChevronRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}