"use client";

import Pagination from "@/components/pagination";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  FolderIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

interface DocumentsProps {
  name: string;
  icon: React.ReactNode;
  category: string;
  date: string;
  status: string;
}

const documents: DocumentsProps[] = [
  {
    name: "Course Registration Form",
    icon: <FolderIcon className="w-5 h-5" />,
    category: "Academics",
    date: "2024-11-20",
    status: "approved",
  },
  {
    name: "Tuition Fee Receipt",
    icon: <FolderIcon className="w-5 h-5" />,
    category: "Finance",
    date: "2024-12-01",
    status: "pending",
  },
  {
    name: "Hostel Allocation Letter",
    icon: <FolderIcon className="w-5 h-5" />,
    category: "Accommodation",
    date: "2024-11-25",
    status: "complete",
  },
  {
    name: "Medical Clearance Form",
    icon: <FolderIcon className="w-5 h-5" />,
    category: "Health",
    date: "2024-11-18",
    status: "incomplete",
  },
  {
    name: "Library Clearance",
    icon: <FolderIcon className="w-5 h-5" />,
    category: "Library",
    date: "2024-11-22",
    status: "approved",
  },
  {
    name: "Examination Permit",
    icon: <FolderIcon className="w-5 h-5" />,
    category: "Academics",
    date: "2024-11-30",
    status: "pending",
  },
  {
    name: "Identity Card Request",
    icon: <FolderIcon className="w-5 h-5" />,
    category: "Administration",
    date: "2024-11-15",
    status: "complete",
  },
];

export default function Documents() {
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDocuments = documents.filter(
    (doc) => doc.name.toLowerCase().includes(searchTerm.toLowerCase())
    // doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || doc.date.includes(searchTerm) || doc.status.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filterOptions = ["Incomplete", "Pending", "Complete", "Approved"];
  const visibleDocuments = showAll
    ? filteredDocuments
    : filteredDocuments.slice(0, 5);

  const onSelect = (option: string) => {};

  const getStatusClass = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-600";
      case "complete":
        return "bg-[#E3F2FD] text-[#2196F3]";
      case "incomplete":
        return "bg-[#FFEAED] text-[#EF6E68]";
      case "pending":
        return "bg-[#FFF3DE] text-[#FF9600]";
      default:
        return "";
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl">
      {/* Search Input */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold mb-4">Student Documents</h1>
        <Menu>
          <div className="relative mb-4 lg:max-w-[400px] lg:w-full">
            <MagnifyingGlassIcon className="absolute w-5 h-5 text-gray-500 top-1/2 left-4 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-[300px] border border-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none pl-12 py-2 rounded-full text-sm placeholder:text-xs sm:placeholder:text-sm"
            />

            <MenuButton>
              <FunnelIcon className="absolute w-5 h-5 text-gray-500 top-1/2 right-4 -translate-y-1/2 cursor-pointer" />
            </MenuButton>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                {filterOptions.map((option, index) => (
                  <MenuItem
                    key={index}
                    as="button"
                    onClick={() => onSelect && onSelect(option)}
                    className="w-full text-left block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    {option}
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </div>
        </Menu>
      </div>

      <div
        className="hidden md:table text-left w-full"
        style={{ borderSpacing: "0 10px" }}
      >
        <table className="text-left w-full" style={{ borderSpacing: "0 10px" }}>
          <thead>
            <tr>
              <th className="py-4">Document Title</th>
              <th className="py-4">Category</th>
              <th className="py-4">Deadline</th>
              <th className="py-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {visibleDocuments.map((document, index) => (
              <tr
                key={index}
                className="border-t border-solid border-gray-150 rounded-lg border-collapse"
              >
                <td className="py-4 flex gap-2 items-center text-sm">
                  {document.icon} {document.name}
                </td>
                <td className="py-4 text-gray-600 text-sm">
                  {document.category}
                </td>
                <td className="py-4 text-gray-500 text-sm">{document.date}</td>
                <td className="w-[80px]">
                  <span
                    className={`inline-block px-1.5 py-1 text-[13px] text-center rounded-[4px] leading-4 font-semibold w-[80px]
                    ${getStatusClass(document.status)}`}
                  >
                    {document.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Responsiveness for Mobile Screens 325px */}
      <div className="block md:hidden">
        {visibleDocuments.map((document, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 mb-4 shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                {document.icon}
                <h2 className="text-sm font-semibold">{document.name}</h2>
              </div>
              <span
                className={`text-[13px] px-2 py-1 rounded leading-4 font-semibold ${getStatusClass(
                  document.status
                )}`}
              >
                {document.status}
              </span>
            </div>
            <div className="text-sm text-gray-500">
              <p>Category: {document.category}</p>
              <p>Deadline: {document.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Pagination />
      </div>
    </div>
  );
}
