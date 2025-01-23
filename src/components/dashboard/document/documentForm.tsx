"use client";
import { FolderIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Select from "react-select";

interface DocumentItem {
  id: number;
  name: string;
  icon: React.ReactNode;
  category: string;
  deadline: string;
  status: "pending" | "approved" | "complete" | "incomplete";
}

interface DocumentFormProps {
  documents: DocumentItem[];
  onDocumentAdded: (document: DocumentItem) => void;
  onBackToList: () => void;
}

export default function DocumentForm({
  documents,
  onDocumentAdded,
  onBackToList,
}: DocumentFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    deadline: "",
  });

  const documentOptions = [
    { value: "Course Registration Form", label: "Course Registration Form" },
    { value: "Tuition Fee Receipt", label: "Tuition Fee Receipt" },
    { value: "Hostel Allocation Letter", label: "Hostel Allocation Letter" },
    { value: "Medical Clearance Form", label: "Medical Clearance Form" },
    { value: "Examination Result Slip", label: "Examination Result Slip" },
    { value: "Student ID Card", label: "Student ID Card" },
    { value: "Certificate of Attendance", label: "Certificate of Attendance" },
    { value: "Financial Status", label: "Financial Status" },
  ];

  const categoryOptions = [
    { value: "Academics", label: "Academics" },
    { value: "Finance", label: "Finance" },
    { value: "Accommodation", label: "Accommodation" },
    { value: "Health", label: "Health" },
    { value: "Library", label: "Library" },
    { value: "Administration", label: "Administration" },
  ];

  const handleInputChange = (
    name: string,
    value: string | { value: string; label: string } | null
  ) => {
    if (value && typeof value === "object") {
      setFormData((prev) => ({ ...prev, [name]: value.value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.category || !formData.deadline) {
      alert("Please fill in all fields");
      return;
    }

    const newDocument: DocumentItem = {
      id: documents.length + 1,
      name: formData.name,
      icon: <FolderIcon className="w-5 h-5" />,
      category: formData.category,
      deadline: formData.deadline,
      status: "pending",
    };

    onDocumentAdded(newDocument);
    setFormData({ name: "", category: "", deadline: "" });
  };

  return (
    <div className="w-full py-10">
      <div className="bg-white rounded-xl md:border sm:p-7">
        <div className="flex max-md:flex-col justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Add New Document
            </h2>
            <p className="text-base text-gray-600">
              Fill in the details of the documents
            </p>
          </div>
          <button
            onClick={onBackToList}
            className="px-4 py-2 max-md:mt-4 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Back to Document List
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-base font-bold mb-2">
              Document Details
            </label>
            <div className="space-y-4">
              <Select
                options={documentOptions}
                placeholder="Select Document Type"
                value={
                  formData.name
                    ? { value: formData.name, label: formData.name }
                    : null
                }
                onChange={(selectedOption) =>
                  handleInputChange("name", selectedOption)
                }
                className="text-base"
                required
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Select
                    options={categoryOptions}
                    placeholder="Select Category"
                    value={
                      formData.category
                        ? { value: formData.category, label: formData.category }
                        : null
                    }
                    onChange={(selectedOption) =>
                      handleInputChange("category", selectedOption)
                    }
                    className="text-base"
                    required
                  />
                </div>
                <div className="flex-1 flex items-center gap-3">
                  <label htmlFor="deadline" className="text-base font-medium">
                    Deadline:
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    id="deadline"
                    value={formData.deadline}
                    onChange={(e) =>
                      handleInputChange("deadline", e.target.value)
                    }
                    className="py-2 px-3 block w-full border-gray-200 text-base rounded-lg focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white text-base rounded-lg hover:bg-blue-600"
          >
            Add Document
          </button>
        </form>
      </div>
    </div>
  );
}
