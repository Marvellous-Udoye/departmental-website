"use client";

import DashboardPageLoader from "@/components/loaders/dashboardPages";
import { BASE_URL } from "@/utils/constants";
import {
  ClockIcon,
  ExclamationCircleIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";
import {
  CheckCircleIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import Pagination from "../common/pagination";

interface DocumentItem {
  id: number;
  document_name: string;
  document_category: string;
  document_deadline: string;
  document_status: "approved" | "pending" | "complete" | "incomplete";
}

interface DocumentListProps {
  onAddNewDocument: () => void;
}

interface CategoryOption {
  value: string;
  label: string;
}

const getStatusClasses = (status: string): string => {
  switch (status.toLocaleLowerCase()) {
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
  switch (status.toLocaleLowerCase()) {
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

export default function DocumentList({ onAddNewDocument }: DocumentListProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryOption | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<CategoryOption | null>(
    null
  );

  const categoryOptions: CategoryOption[] = [
    { value: "", label: "All" },
    { value: "Academics", label: "Academics" },
    { value: "Finance", label: "Finance" },
    { value: "Accommodation", label: "Accommodation" },
    { value: "Health", label: "Health" },
    { value: "Library", label: "Library" },
    { value: "Administration", label: "Administration" },
  ];

  const statusOptions: CategoryOption[] = [
    { value: "", label: "All" },
    { value: "approved", label: "Approved" },
    { value: "pending", label: "Pending" },
    { value: "complete", label: "Complete" },
    { value: "incomplete", label: "Incomplete" },
  ];

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const token = localStorage.getItem("access");

        const response = await fetch(`${BASE_URL}/api/users/documents/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch documents");
        }

        const data = await response.json();
        setDocuments(data);
      } catch {
        setError("Failed to load documents");
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(documents.length / itemsPerPage);

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.document_name
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory?.value
      ? doc.document_category === selectedCategory.value
      : true;
    const matchesStatus = selectedStatus?.value
      ? doc.document_status.toLocaleLowerCase() === selectedStatus.value
      : true;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  if (loading) return <DashboardPageLoader />;
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-[70dvh] my-10 mx-4 sm:mx-8 xl:mx-auto px-4 sm:px-8 lg:px-10 text-center text-red-500">
        <h1 className="text-3xl font-bold">
          <ExclamationCircleIcon className="text-red-500" />
          Oops!
        </h1>
        <p className="text-lg mt-2">
          Something went wrong. <br className="sm:hidden" /> Error: {error}
        </p>
        <button
          className="mt-4 py-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
          onClick={() => window.location.reload()}
        >
          Reload Page
        </button>
      </div>
    );
  }

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
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Search documents..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 flex-1">
                    <Select
                      options={categoryOptions}
                      placeholder="Categories"
                      value={selectedCategory}
                      onChange={setSelectedCategory}
                      className="flex-1"
                      menuPlacement="auto"
                    />
                    <Select
                      options={statusOptions}
                      placeholder="Status"
                      value={selectedStatus}
                      onChange={setSelectedStatus}
                      className="flex-1"
                      menuPlacement="auto"
                    />
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
                    {filteredDocuments.length > 0 ? (
                      filteredDocuments.map((doc) => (
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
                              <FolderIcon className="w-5 h-5" />
                              <span className="ml-2 text-sm text-gray-600">
                                {doc.document_name}
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="text-sm text-gray-600">
                                {doc.document_category}
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span
                                className={`flex items-center justify-center py-1 px-1.5 gap-x-1 text-xs font-medium rounded-full w-24 ${getStatusClasses(
                                  doc.document_status
                                )}`}
                              >
                                {getStatusIcon(doc.document_status)}
                                {doc.document_status.charAt(0).toUpperCase() +
                                  doc.document_status.slice(1)}
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="text-sm text-gray-600">
                                {doc.document_deadline}
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
