"use client";

import React, { useState } from "react";
import Select from "react-select";
import {
  ArrowDownTrayIcon,
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import DocumentList, {
  documents,
} from "@/components/dashboard/document/documentList";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import DocumentForm from "@/components/dashboard/document/documentForm";

export default function Documents() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const categoryOptions = [
    { value: "Academics", label: "Academics" },
    { value: "Finance", label: "Finance" },
    { value: "Accommodation", label: "Accommodation" },
    { value: "Health", label: "Health" },
    { value: "Library", label: "Library" },
    { value: "Administration", label: "Administration" },
  ];

  const statusOptions = [
    { value: "approved", label: "Approved" },
    { value: "pending", label: "Pending" },
    { value: "complete", label: "Complete" },
    { value: "incomplete", label: "Incomplete" },
  ];

  const handleShowForm = () => {
    setIsFormVisible(true);
  };

  const handleShowList = () => {
    setIsFormVisible(false);
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<{
    value: string;
    label: string;
  } | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    setSelectedCategory(selectedOption);
  };

  const handleStatusChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    setSelectedStatus(selectedOption);
  };

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory
      ? doc.category === selectedCategory.value
      : true;
    const matchesStatus = selectedStatus
      ? doc.status === selectedStatus.value
      : true;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const pendingCount = documents.filter(
    (doc) => doc.status === "pending"
  ).length;
  const approvedCount = documents.filter(
    (doc) => doc.status === "approved"
  ).length;
  const incompleteCount = documents.filter(
    (doc) => doc.status === "incomplete"
  ).length;

  return (
    <div className="py-6 sm:py-10">
      {/* Header */}
      <div className="flex max-md:flex-col justify-between gap-4 md:items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Document Management
          </h1>
          <p className="text-gray-600 text-sm">
            Manage and track your departmental documents
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
        <div className="bg-blue-50 text-blue-600 rounded-xl border border-transparent p-4 sm:p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <ChartBarIcon className="w-5 h-5" />
            <span className="font-normal">Total Documents</span>
          </div>
          <p className="text-2xl font-bold">{documents.length}</p>
        </div>
        <div className="bg-amber-50 text-[#FF9600] rounded-xl border border-transparent p-4 sm:p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <ClockIcon className="w-5 h-5" />
            <span className="font-normal">Pending Review</span>
          </div>
          <p className="text-2xl font-bold">{pendingCount}</p>
        </div>
        <div className="bg-green-50 text-green-600 rounded-xl border border-transparent p-4 sm:p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircleIcon className="w-5 h-5" />
            <span className="font-normal">Approved</span>
          </div>
          <p className="text-2xl font-bold">{approvedCount}</p>
        </div>
        <div className="bg-red-50 text-[#EF6E68] rounded-xl border border-transparent p-4 sm:p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <XCircleIcon className="w-5 h-5" />
            <span className="font-normal">Incomplete</span>
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
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <Select
            options={categoryOptions}
            placeholder="All Categories"
            value={selectedCategory}
            onChange={handleCategoryChange}
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
            value={selectedStatus}
            onChange={handleStatusChange}
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

      {isFormVisible ? (
        <div>
          <button
            onClick={handleShowList}
            className="mb-4 py-2 px-4 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
          >
            Back to Document List
          </button>
          <DocumentForm />
        </div>
      ) : (
        <div>
          <DocumentList
            documents={filteredDocuments}
            onAddNewDocument={handleShowForm}
          />
        </div>
      )}
    </div>
  );
}
