"use client";

import { FolderIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Documents() {
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Array of document data with icons, dates, and statuses
  const documents = [
    {
      name: "Course Form",
      icon: <FolderIcon />,
      date: "2024-11-01",
      status: "Pending",
    },
    {
      name: "Buesa Receipt",
      icon: <FolderIcon />,
      date: "2024-11-02",
      status: "Pending",
    },
    {
      name: "Financial Status",
      icon: <FolderIcon />,
      date: "2024-11-03",
      status: "Paid",
    },
    {
      name: "Hostel Receipt",
      icon: <FolderIcon />,
      date: "2024-11-04",
      status: "Pending",
    },
    {
      name: "ID Card Application",
      icon: <FolderIcon />,
      date: "2024-11-05",
      status: "Completed",
    },
    {
      name: "Library Clearance",
      icon: <FolderIcon />,
      date: "2024-11-06",
      status: "Approved",
    },
    {
      name: "Medical Clearance",
      icon: <FolderIcon />,
      date: "2024-11-07",
      status: "Pending",
    },
  ];

  const filteredDocuments = documents.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.date.includes(searchTerm) ||
      doc.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleDocuments = showAll
    ? filteredDocuments
    : filteredDocuments.slice(0, 5);

  return (
    <div className="px-6 py-8 bg-[#ffffff] rounded-xl">
      {/* Search Input */}
      <h1 className="text-[#929293] text-[32px] mb-4">Documents</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search documents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-[300px] border border-indigo-500 shadow-lg px-4 py-2 rounded-md"
        />
      </div>

      <table className="text-left w-full" style={{ borderSpacing: "0 10px" }}>
        <thead>
          <tr>
            <th className="text-lef py-4">Documents</th>
            <th className="text-lef py-4">Deadline</th>
            <th className="text-lef py-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {visibleDocuments.map((doc, index) => (
            <tr
              key={index}
              className="border-t border-solid border-gray-150 rounded-lg border-collapse"
            >
              <td className="flex w-full items-center pr-10 py-4">
                <div className="mr-2">{doc.icon}</div>
                {doc.name}
              </td>
              <td className="pr-10 py-4 text-gray-500">{doc.date}</td>
              <td>
                <div
                  className={`w-[120px] py-2 px-4 text-center text-sm rounded-md ${getStatusClass(
                    doc.status
                  )}`}
                >
                  {getShortStatus(doc.status)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        {!showAll ? (
          <button
            onClick={() => setShowAll(true)}
            className="text-white bg-blue-500 rounded-lg py-3 px-4 font-semibold"
          >
            See More
          </button>
        ) : (
          <button
            onClick={() => setShowAll(false)}
            className="text-white bg-blue-500 rounded-lg py-3 px-4 font-semibold"
          >
            See Less
          </button>
        )}
      </div>
    </div>
  );
}

function getStatusClass(status: string) {
  switch (status) {
    case "Approved":
      return "bg-green-100 text-green-700 font-semibold";
    case "Pending":
      return "bg-orange-100 text-orange-700 font-semibold";
    case "Completed":
      return "bg-blue-100 text-blue-700 font-semibold";
    case "Paid":
      return "bg-purple-100 text-purple-700 font-semibold";
    case "Uncompleted":
      return "bg-red-100 text-red-700 font-semibold";
    default:
      return "";
  }
}

function getShortStatus(status: string) {
  switch (status) {
    case "Approved":
      return "Approved";
    case "Pending":
      return "Pending";
    case "Completed":
      return "Completed";
    case "Paid":
      return "Paid";
    case "Uncompleted":
      return "Uncompleted";
    default:
      return status;
  }
}
