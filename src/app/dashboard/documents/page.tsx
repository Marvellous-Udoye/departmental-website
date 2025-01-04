"use client";

import DocumentList, {
  documents,
} from "@/components/dashboard/document/documentList";
import {
  ArrowDownTrayIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import Select from "react-select";

const pendingCount = documents.filter((doc) => doc.status === "pending").length;
const approvedCount = documents.filter(
  (doc) => doc.status === "approved"
).length;
const incompleteCount = documents.filter(
  (doc) => doc.status === "incomplete"
).length;

export default function Documents() {
  const categoryOptions = [
    { value: "academics", label: "Academics" },
    { value: "finance", label: "Finance" },
    { value: "accommodation", label: "Accommodation" },
    { value: "health", label: "Health" },
    { value: "library", label: "Library" },
    { value: "administration", label: "Administration" },
  ];

  const statusOptions = [
    { value: "approved", label: "Approved" },
    { value: "pending", label: "Pending" },
    { value: "complete", label: "Complete" },
    { value: "incomplete", label: "Incomplete" },
  ];

  return (
    <div className="py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Document Management</h1>
          <p className="text-gray-500 text-sm">
            Manage and track your departmental documents
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <PlusIcon className="w-5 h-5" />
          New Document
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-2 text-blue-600 mb-2">
            <ChartBarIcon className="w-5 h-5" />
            <span className="font-medium">Total Documents</span>
          </div>
          <p className="text-2xl font-bold">{documents.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-2 text-yellow-600 mb-2">
            <ClockIcon className="w-5 h-5" />
            <span className="font-medium">Pending Review</span>
          </div>
          <p className="text-2xl font-bold">{pendingCount}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-2 text-green-600 mb-2">
            <CheckCircleIcon className="w-5 h-5" />
            <span className="font-medium">Approved</span>
          </div>
          <p className="text-2xl font-bold">{approvedCount}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-2 text-red-600 mb-2">
            <XCircleIcon className="w-5 h-5" />
            <span className="font-medium">Incomplete</span>
          </div>
          <p className="text-2xl font-bold">{incompleteCount}</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search documents..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <Select
            options={categoryOptions}
            placeholder="All Categories"
            className="flex-1"
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: "0.5rem",
                borderColor: "#d1d5db",
                boxShadow: "none",
                "&:hover": {
                  borderColor: "#2563eb",
                },
              }),
              menu: (base) => ({
                ...base,
                zIndex: 10,
              }),
            }}
          />
          <Select
            options={statusOptions}
            placeholder="All Status"
            className="flex-1"
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: "0.5rem",
                borderColor: "#d1d5db",
                boxShadow: "none",
                "&:hover": {
                  borderColor: "#2563eb",
                },
              }),
              menu: (base) => ({
                ...base,
                zIndex: 10,
              }),
            }}
          />
        </div>
        <button className="px-4 py-2 text-sm border rounded-lg flex items-center gap-2 hover:bg-gray-50">
          <ArrowDownTrayIcon className="w-5 h-5" />
          Export
        </button>
      </div>

      {/* Document List */}
      <DocumentList />
    </div>
  );
}
