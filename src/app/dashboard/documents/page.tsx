"use client";

import DocumentForm from "@/components/dashboard/document/documentForm";
import DocumentList from "@/components/dashboard/document/documentList";
import { FolderIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  ArrowDownTrayIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Select from "react-select";

interface CategoryOption {
  value: string;
  label: string;
}

interface DocumentItem {
  id: number;
  name: string;
  icon: React.ReactNode;
  category: string;
  deadline: string;
  status: "approved" | "pending" | "complete" | "incomplete";
}

const initialDocuments: DocumentItem[] = [
  {
    id: 1,
    name: "Course Registration Form",
    icon: <FolderIcon className="w-5 h-5" />,
    category: "Academics",
    deadline: "2024-11-20",
    status: "approved",
  },
  {
    id: 2,
    name: "Tuition Fee Receipt",
    icon: <FolderIcon className="w-5 h-5" />,
    category: "Finance",
    deadline: "2024-12-01",
    status: "pending",
  },
  {
    id: 3,
    name: "Hostel Allocation Letter",
    icon: <FolderIcon className="w-5 h-5" />,
    category: "Accommodation",
    deadline: "2024-11-25",
    status: "complete",
  },
  {
    id: 4,
    name: "Medical Clearance Form",
    icon: <FolderIcon className="w-5 h-5" />,
    category: "Health",
    deadline: "2024-11-18",
    status: "incomplete",
  },
  {
    id: 5,
    name: "Library Clearance",
    icon: <FolderIcon className="w-5 h-5" />,
    category: "Library",
    deadline: "2024-11-22",
    status: "approved",
  },
  {
    id: 6,
    name: "Examination Permit",
    icon: <FolderIcon className="w-5 h-5" />,
    category: "Academics",
    deadline: "2024-11-30",
    status: "pending",
  },
  {
    id: 7,
    name: "Identity Card Request",
    icon: <FolderIcon className="w-5 h-5" />,
    category: "Administration",
    deadline: "2024-11-15",
    status: "complete",
  },
];

export default function Documents() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [documentList, setDocumentList] =
    useState<DocumentItem[]>(initialDocuments);

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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (selectedOption: CategoryOption | null) => {
    setSelectedCategory(selectedOption);
  };

  const handleStatusChange = (selectedOption: CategoryOption | null) => {
    setSelectedStatus(selectedOption);
  };

  const handleAddDocument = (newDocument: DocumentItem) => {
    setDocumentList([...documentList, newDocument]);
    setIsFormVisible(false);
  };

  const filteredDocuments = documentList.filter((doc) => {
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

  const pendingCount = documentList.filter(
    (doc) => doc.status === "pending"
  ).length;
  const approvedCount = documentList.filter(
    (doc) => doc.status === "approved"
  ).length;
  const incompleteCount = documentList.filter(
    (doc) => doc.status === "incomplete"
  ).length;

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
        <DocumentForm
          documents={documentList}
          onDocumentAdded={handleAddDocument}
          onBackToList={() => setIsFormVisible(false)}
        />
      ) : (
        <DocumentList
          documents={filteredDocuments}
          onAddNewDocument={() => setIsFormVisible(true)}
        />
      )}
    </div>
  );
}
