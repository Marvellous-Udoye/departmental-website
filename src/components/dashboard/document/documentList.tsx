"use client";

import { ClockIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import {
  CheckCircleIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Pagination from "../common/pagination";

interface DocumentItem {
  id: number;
  name: string;
  icon: React.ReactNode;
  category: string;
  deadline: string;
  status: "approved" | "pending" | "complete" | "incomplete";
}

interface DocumentListProps {
  documents: DocumentItem[];
  onAddNewDocument: () => void;
}

const getStatusClasses = (status: string): string => {
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

const getStatusIcon = (status: string): React.ReactNode => {
  switch (status) {
    case "approved":
      return <CheckIcon className="w-3 h-3 mr-1" />;
    case "pending":
      return <ClockIcon className="w-3 h-3 mr-1" />;
    case "complete":
      return <CheckCircleIcon className="w-3 h-3 mr-1" />;
    case "incomplete":
      return <XMarkIcon className="w-3 h-3 mr-1" />;
    default:
      return null;
  }
};

export default function DocumentList({
  documents,
  onAddNewDocument,
}: DocumentListProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(documents.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDocuments = documents.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div className="pt-6">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      Documents
                    </h2>
                    <p className="text-sm text-gray-600">
                      Manage the documents you have uploaded for various
                      departments.
                    </p>
                  </div>
                  <div>
                    <div className="inline-flex gap-x-2">
                      <a
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                        href="#"
                      >
                        Delete
                      </a>
                      <button onClick={onAddNewDocument}>
                        <a
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                          href="#"
                        >
                          <svg
                            className="shrink-0 w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                          </svg>
                          New
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="ps-6 py-3 text-start">
                        <label htmlFor="select-all" className="flex">
                          <input
                            type="checkbox"
                            className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                            id="select-all"
                          />
                          <span className="sr-only">Select all</span>
                        </label>
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Document
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Category
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Status
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Deadline
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-end"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {currentDocuments.length > 0 ? (
                      currentDocuments.map((doc) => (
                        <tr key={doc.id}>
                          <td className="whitespace-nowrap">
                            <div className="ps-6 py-3">
                              <label
                                htmlFor={`select-${doc.id}`}
                                className="flex"
                              >
                                <input
                                  type="checkbox"
                                  className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                  id={`select-${doc.id}`}
                                />
                                <span className="sr-only">Select</span>
                              </label>
                            </div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="flex items-center px-6 py-3">
                              {doc.icon}
                              <span className="ml-2 text-sm text-gray-600">
                                {doc.name}
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="text-sm text-gray-600">
                                {doc.category}
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span
                                className={`flex items-center justify-center py-1 px-1.5 gap-x-1 text-xs font-medium rounded-full w-24 ${getStatusClasses(
                                  doc.status
                                )}`}
                              >
                                {getStatusIcon(doc.status)}
                                {doc.status.charAt(0).toUpperCase() +
                                  doc.status.slice(1)}
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="text-sm text-gray-600">
                                {doc.deadline}
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="px-6 py-1.5">
                              <div className="hs-dropdown [--placement:bottom-right] relative inline-block">
                                <button
                                  id={`dropdown-${doc.id}`}
                                  type="button"
                                  className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  aria-label="Dropdown"
                                >
                                  <svg
                                    className="shrink-0 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <circle cx="12" cy="12" r="1" />
                                    <circle cx="19" cy="12" r="1" />
                                    <circle cx="5" cy="12" r="1" />
                                  </svg>
                                </button>
                                <div
                                  className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-40 z-10 bg-white shadow-2xl rounded-lg p-2 mt-2"
                                  role="menu"
                                  aria-orientation="vertical"
                                  aria-labelledby={`dropdown-${doc.id}`}
                                >
                                  <div className="py-2 first:pt-0 last:pb-0">
                                    <a
                                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                      href="#"
                                    >
                                      Edit
                                    </a>
                                    <a
                                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                      href="#"
                                    >
                                      Archive
                                    </a>
                                    <a
                                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                      href="#"
                                    >
                                      Share
                                    </a>
                                  </div>
                                  <div className="py-2 first:pt-0 last:pb-0">
                                    <a
                                      className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                                      href="#"
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="text-center py-10">
                          <div className="flex flex-col items-center">
                            <ExclamationCircleIcon className="w-8 h-8 text-gray-400 mb-4" />
                            <h3 className="text-lg font-medium text-gray-900">
                              No Documents Found
                            </h3>
                            <p className="mt-2 text-sm text-gray-500">
                              Try adjusting your search or filter criteria.
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200">
          <div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800">
                {documents.length}
              </span>{" "}
              results
            </p>
          </div>
          <div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
