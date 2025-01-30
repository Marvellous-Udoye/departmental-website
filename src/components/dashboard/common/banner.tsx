"use client";

import { BASE_URL } from "@/utils/constants";
import {
  AcademicCapIcon,
  ChevronRightIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function Banner() {
  // Using localStorage to persist department state
  const [department, setDepartment] = useState(() => {
    // Initialize from localStorage if available
    if (typeof window !== "undefined") {
      return localStorage.getItem("userDepartment") || "Portal";
    }
    return "Portal";
  });
  const [, setLoading] = useState(!department);
  const [, setError] = useState("");

  useEffect(() => {
    const fetchDepartment = async () => {
      if (department !== "Portal") {
        setLoading(false);
        return;
      }

      try {
        const token = localStorage.getItem("access");
        const user_id = localStorage.getItem("user_id");

        const response = await fetch(`${BASE_URL}/api/users/${user_id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }

        const data = await response.json();
        // Store in localStorage for persistence
        localStorage.setItem("userDepartment", data.department);
        setDepartment(data.department);
      } catch {
        setError("Failed to fetch department data");
      } finally {
        setLoading(false);
      }
    };

    fetchDepartment();
  }, [department]);

  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white shadow-md md:shadow-lg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 sm:p-6 gap-6">
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm max-sm:hidden">
              <AcademicCapIcon className="h-8 w-8" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-xl sm:text-2xl font-bold truncate">
                {department === "Portal" ? "Departmental Portal" : `Department of ${department}`}
              </h2>
              <p className="text-blue-50 mt-1 text-sm sm:text-base max-md:hidden">
                Stay connected with departmental updates and academic resources
              </p>
            </div>
          </div>

          <button className="group flex items-center justify-center space-x-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 backdrop-blur-sm w-full sm:w-auto max-md:hidden">
            <EnvelopeIcon className="h-5 w-5" />
            <span>Contact Department</span>
            <ChevronRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
