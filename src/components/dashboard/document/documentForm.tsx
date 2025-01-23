import React, { useState } from "react";
import { FolderIcon } from "@heroicons/react/24/outline";

import { documents as importedDocuments } from "@/components/dashboard/document/documentList";
interface DocumentItem {
  id: number;
  name: string;
  icon: React.ReactNode;
  category: string;
  deadline: string;
  status: "pending" | "approved" | "complete" | "incomplete";
}

export default function DocumentForm() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    deadline: "",
  });

  const [documents, setDocuments] = useState<DocumentItem[]>(importedDocuments); // Initialize state with imported array

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a new document
    const newDocument: DocumentItem = {
      id: documents.length + 1,
      name: formData.name,
      icon: <FolderIcon className="w-5 h-5" />,
      category: formData.category,
      deadline: formData.deadline,
      status: "pending", // Default status
    };

    // Append the new document to the existing state
    setDocuments([...documents, newDocument]);

    setIsFormVisible(true);
    setFormData({ name: "", category: "", deadline: "" }); // Reset form
  };

  return (
    <div className="w-full py-10">
      <div className="bg-white rounded-xl border sm:p-7">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Add new document
          </h2>
          <p className="text-sm text-gray-600">
            Fill in the details of the documents
          </p>
        </div>
        {!isFormVisible ? (
          <form onSubmit={handleSubmit}>
            <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
              {/* <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
            <label
              htmlFor="personal-info"
              className="inline-block text-sm font-medium"
            >
              Personal Information
            </label>

            <div className="mt-2 space-y-3">
              <input
                id="personal-info"
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white placeholder-gray-500"
                placeholder="Student/Staff ID"
              />
              <input
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white placeholder-gray-500"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white placeholder-gray-500"
                placeholder="Department Email"
              />
            </div>
          </div> */}

              <label
                htmlFor="document-details"
                className="inline-block text-lg font-bold"
              >
                Document Details
              </label>
              <div className="mt-2 space-y-3">
                {/* <input
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white placeholder-gray-500"
                placeholder="Purpose of Request"
              /> */}
                <select
                  id="document-details"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white placeholder-gray-500"
                >
                  <option value="">Select Document Type</option>
                  <option value="Course Registration Form">
                    Course Registration Form
                  </option>
                  <option value="Tuition Fee Receipt">
                    Tuition Fee Receipt
                  </option>
                  <option value="Hostel Allocation Letter">
                    Hostel Allocation Letter
                  </option>
                  <option value="Medical Clearance Form">
                    Medical Clearance Form
                  </option>
                  <option value="Examination Result Slip">
                    Examination Result Slip
                  </option>
                  <option value="Student ID Card">Student ID Card</option>
                  <option value="Certificate of Attendance">
                    Certificate of Attendance
                  </option>
                  <option value="Financial Status">Financial Status</option>
                </select>
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* <input
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white placeholder-gray-500"
                placeholder="Purpose of Request"
              /> */}
                  <select
                    className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white placeholder-gray-500"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">All Categories</option>
                    <option value="Academics">Academics</option>
                    <option value="Finance">Finance</option>
                    <option value="Accommodation">Accommodation</option>
                    <option value="Health">Health</option>
                    <option value="Library">Library</option>
                    <option value="Administration">Administration</option>
                  </select>
                  <label
                    htmlFor="deadline"
                    className="inline-block text-lg font-medium mt-1.5 mb-1.5"
                  >
                    Deadline:
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    id="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white placeholder-gray-500"
                    required
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Add Document
            </button>
          </form>
        ) : (
          <div>
            <h2>Document added successfully!</h2>
            <button
              onClick={() => setIsFormVisible(false)}
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg"
            >
              Add Another
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
