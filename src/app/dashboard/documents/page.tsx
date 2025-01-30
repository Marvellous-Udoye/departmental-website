"use client";

import DocumentForm from "@/components/dashboard/document/documentForm";
import DocumentList from "@/components/dashboard/document/documentList";
import DashboardPageLoader from "@/components/loaders/dashboardPages";
import { BASE_URL } from "@/utils/constants";
import {
  ExclamationCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowDownTrayIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import Select from "react-select";

interface CategoryOption {
  value: string;
  label: string;
}

interface DocumentItem {
  id: number;
  document_name: string;
  document_category: string;
  document_deadline: string;
  document_status: "approved" | "pending" | "complete" | "incomplete";
}

export default function Documents() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [documentList, setDocumentList] = useState<DocumentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const categoryOptions: CategoryOption[] = [
    { value: "Academics", label: "Academics" },
    { value: "Finance", label: "Finance" },
    { value: "Accommodation", label: "Accommodation" },
    { value: "Health", label: "Health" },
    { value: "Library", label: "Library" },
    { value: "Administration", label: "Administration" },
  ];

  const statusOptions: CategoryOption[] = [
    { value: "approved", label: "Approved" },
    { value: "pending", label: "Pending" },
    { value: "complete", label: "Complete" },
    { value: "incomplete", label: "Incomplete" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryOption | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<CategoryOption | null>(
    null
  );

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
        setDocumentList(data);
      } catch {
        setError("Failed to load documents");
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (selectedOption: CategoryOption | null) => {
    setSelectedCategory(selectedOption);
  };

  const handleStatusChange = (selectedOption: CategoryOption | null) => {
    setSelectedStatus(selectedOption);
  };

  const pendingCount = documentList.filter(
    (doc) => doc.document_status.toLocaleLowerCase() === "pending"
  ).length;
  const approvedCount = documentList.filter(
    (doc) => doc.document_status.toLocaleLowerCase() === "approved"
  ).length;
  const incompleteCount = documentList.filter(
    (doc) => doc.document_status.toLocaleLowerCase() === "incomplete"
  ).length;

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
    <div className="pt-10 pb-4">
      <div className="flex max-md:flex-col justify-between gap-4 md:items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-800 lg:text-2xl">
            Document Management
          </h1>
          <p className="text-gray-600 text-sm">
            Manage and track your departmental documents
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
        <div className="bg-blue-50 text-blue-600 rounded-xl border border-transparent p-4 sm:p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <ChartBarIcon className="w-5 h-5" />
            <span className="font-normal">Total Documents</span>
          </div>
          <p className="text-2xl font-bold">{documentList.length}</p>
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
            placeholder="Categories"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="flex-1"
          />
          <Select
            options={statusOptions}
            placeholder="Status"
            value={selectedStatus}
            onChange={handleStatusChange}
            className="flex-1"
          />
        </div>
        <button className="px-4 py-2 text-sm border rounded-lg flex items-center gap-2 hover:bg-gray-50">
          <ArrowDownTrayIcon className="w-5 h-5" />
          Export
        </button>
      </div>

      {isFormVisible ? (
        <DocumentForm onBackToList={() => setIsFormVisible(false)} />
      ) : (
        <DocumentList onAddNewDocument={() => setIsFormVisible(true)} />
      )}
    </div>
  );
}
