"use client";

import DashboardPageLoader from "@/components/loaders/dashboardPages";
import { BASE_URL } from "@/utils/constants";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Select from "react-select";
import { resourceList } from "../../../../public/data/resources";

interface ResourceProps {
  image: string;
  title: string;
  description: string;
  date: string;
  category: string;
  href: string;
}

const ITEMS_PER_PAGE = 4;
const categories = [
  "All",
  "Engineering",
  "Science",
  "Technology",
  "Mathematics",
  "General",
  "Health",
  "Environment",
  "Psychology",
  "Business",
];

const categoryOptions = categories.map((category) => ({
  value: category,
  label: category,
}));

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState({
    value: "All",
    label: "All",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [resources, setResources] = useState<ResourceProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const token = localStorage.getItem("access");

        const response = await fetch(`${BASE_URL}/api/users/resources/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch resources");
        }

        // const data = await response.json();
        setResources(resourceList);
      } catch {
        setError("Failed to load resources");
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory.value === "All" ||
      resource.category === selectedCategory.value;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredResources.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedResources = filteredResources.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

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
    <section>
      <div className="pt-10 pb-4">
        <h1 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl">
          Find useful resources
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Stay updated with the latest trends, strategies, and insights tailored
          to help you excel academically and professionally.
        </p>

        {/* Search and Filter Section */}
        <div className="mt-6 space-y-4 md:space-y-0 flex max-md:flex-col md:items-center md:space-x-4 max-w-3xl">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <Select
            value={selectedCategory}
            onChange={(selectedOption) =>
              setSelectedCategory(
                selectedOption || { value: "All", label: "All" }
              )
            }
            options={categoryOptions}
            className="md:w-48"
            classNamePrefix="react-select"
          />
        </div>

        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 mt-6 md:mt-8 md:grid-cols-2">
            {paginatedResources.map((item, index) => (
              <div key={index} className="lg:flex">
                <Image
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src={item.image}
                  alt={item.title}
                  width={256}
                  height={224}
                />
                <div className="flex flex-col justify-between py-6 lg:mx-4">
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-gray-800 hover:underline transition linear duration-300"
                  >
                    {item.title}
                  </Link>
                  <p className="text-gray-600 text-base line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <span className="text-sm px-3 py-1 bg-gray-100 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center py-10">
            <ExclamationCircleIcon className="w-8 h-8 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">
              No Resources Found
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              No resources found matching your criteria.
            </p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center items-center space-x-2 mt-8 md:mt-16">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 mb-3"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 border rounded-lg mb-3 ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 mb-3"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
