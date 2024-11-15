"use client"

import { DeviceTabletIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Banner() {
  const [department, setDepartment] = useState('Electrical and Electronics Engineering');

  return (
    <div>
      <div className="bg-indigo-500 text-white mb-4 p-4 lg:p-8 rounded-lg shadow-lg max-h-[300px] flex flex-col md:flex-row sm:items-center justify-between space-y-4 md:space-y-0">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl md:text-3xl font-extrabold">Stay updated with the latest news and resources</h1>
          <p className="text-indigo-100 mt-2 tracking-[1px] text-sm md:text-base">Department of {department}</p>
        </div>
        <button className="flex self-start md:self-center items-center gap-2 bg-white text-black px-3 md:px-6 py-2 md:py-3 rounded-lg shadow transition">
          Contact
          <div className="w-5 h-5">
            <DeviceTabletIcon />
          </div>
        </button>
      </div>
    </div>
  );
}
