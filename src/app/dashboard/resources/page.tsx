"use client";

import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ResourceProps {
  image: string;
  title: string;
  description: string;
  date: string;
  category: string;
  href: string;
}

const resources: ResourceProps[] = [
  {
    image:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Top Strategies for Effective Time Management",
    description:
      "Learn how to organize your schedule, prioritize tasks, and boost productivity with these proven time management techniques.",
    date: "On: 15 September 2023",
    category: "General",
    href: "https://books.google.com.ng/books?id=t4ukXjfFaBgC&printsec=frontcover&dq=give+me+a+book+titled+top+strategies+for+effective+time+management&hl=en&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwjjicDby-GKAxUfT0EAHV-xFA0Q6AF6BAgLEAI"
  },
  {
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "The Future of Artificial Intelligence in Education",
    description:
      "Explore how AI is transforming learning experiences, from personalized tutoring to automating administrative tasks.",
    date: "On: 20 October 2023",
    category: "Technology",
    href: "https://books.google.com.ng/books?id=Bf5REAAAQBAJ&printsec=frontcover&dq=give+me+a+book+titled+the+future+of+artificial+intelligence+in+education&hl=en&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwi-hNT6y-GKAxU6UkEAHZY8CC4Q6AF6BAgJEAI"
  },
  {
    image:
      "https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "How to Build a Career in Software Development",
    description:
      "Step-by-step guidance on starting and advancing your journey in the ever-evolving software development industry.",
    date: "On: 10 November 2023",
    category: "Engineering",
    href: "https://books.google.com.ng/books?id=W8XMzQEACAAJ&dq=give+me+a+book+titled+how+to+build+a+career+path+in+software+development&hl=en&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwjYyMSTzOGKAxWaUEEAHb2EJicQ6AF6BAgEEAI"
  },
  {
    image:
      "https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80",
    title: "Understanding Blockchain: A Beginner's Guide",
    description:
      "Delve into the basics of blockchain technology and its applications beyond cryptocurrency.",
    date: "On: 30 August 2023",
    category: "Technology",
    href: "https://books.google.com.ng/books?id=KmPltAEACAAJ&dq=give+me+a+book+titled+understanding+blockchain:+a+beginners+guide&hl=en&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwiMzqmpzOGKAxWsVkEAHRKMKGIQ6AF6BAgFEAI"
  },
  {
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80",
    title: "Minimalism in Workspace Design",
    description:
      "Discover how creating a clean, functional workspace can enhance focus, creativity, and efficiency.",
    date: "On: 10 October 2023",
    category: "General",
    href: "https://books.google.com.ng/books?id=n4mQEAAAQBAJ&dq=give+me+a+book+titled+minimalism+in+workspace+design&hl=en&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwi1o-69zOGKAxWCU0EAHVG8ABMQ6AF6BAgEEAI"
  },
  {
    image:
      "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Emerging Trends in Tech for 2024",
    description:
      "Stay ahead by learning about the latest technological advancements shaping the industry.",
    date: "On: 20 November 2023",
    category: "Technology",
    href: "https://books.google.com.ng/books?id=N1wrAgAAQBAJ&printsec=frontcover&dq=give+me+a+book+titled+emerging+trends+for+tech+in+2024&hl=en&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwin1ZXXzOGKAxVKYEEAHe7vDXAQ6AF6BAgLEAI"
  },
];

const ITEMS_PER_PAGE = 4;
const categories = [
  "All",
  "Engineering",
  "Science",
  "Technology",
  "Mathematics",
  "General",
];

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredResources.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedResources = filteredResources.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section>
      <div className="py-6 sm:py-10">
        <h1 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl">
          Find useful resources
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Stay updated with the latest trends, strategies, and insights tailored
          to help you excel academically and professionally.
        </p>

        {/* Search and Filter Section */}
        <div className="mt-6 space-y-0 flex items-center space-x-4 max-w-3xl">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="max-md:w-20 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Resources Grid */}
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-8 md:mt-16">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 border rounded-lg ${currentPage === page
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
              className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
