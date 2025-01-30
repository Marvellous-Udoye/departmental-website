"use client";

import Image from "next/image";
import { useState } from "react";
import Gallery1 from "../../../public/images/gallery-1.jpg";
import Gallery2 from "../../../public/images/gallery-2.jpg";
import Gallery3 from "../../../public/images/gallery-3.jpg";
import Gallery4 from "../../../public/images/gallery-4.jpg";
import Gallery5 from "../../../public/images/gallery-5.jpg";
import Gallery6 from "../../../public/images/gallery-6.jpg";

const images = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImageModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div id="gallery" className="px-4 sm:px-6 md:px-20 py-16 sm:py-20">
      <div className="max-w-2xl mx-auto text-left sm:text-center mb-4 lg:mb-10">
        <h2 className="text-3xl font-semibold md:text-5xl md:leading-tight">
          View Gallery
        </h2>
        <p className="mt-1 text-gray-600">
          Images that inspire learning and innovation
        </p>
      </div>

      <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 gap-2">
        {images.map((src, index) => (
          <a
            key={index}
            className="group block relative overflow-hidden rounded-lg"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              openImageModal(src.src);
            }}
          >
            <Image
              className="w-full h-40 md:h-60 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
              src={src}
              alt="Project"
              width={400}
              height={250}
            />
            <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
              <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                <svg
                  className="shrink-0 size-3"
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
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span className="text-xs">View</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="sm:hidden flex overflow-x-auto gap-4 py-4 scrollbar-hide">
        {images.map((src, index) => (
          <a
            key={index}
            className="shrink-0 w-3/4 sm:w-1/2 rounded-lg overflow-hidden"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              openImageModal(src.src);
            }}
          >
            <Image
              className="w-full h-60 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
              src={src}
              alt="Project"
              width={400}
              height={300}
            />
            <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
              <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                <svg
                  className="shrink-0 size-3"
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
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span className="text-xs">View</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative">
            <button
              onClick={closeImageModal}
              className="absolute top-0 right-2 text-white text-4xl p-2"
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Full View"
              className="max-w-full max-h-[70vh] object-contain"
              width={800}
              height={600}
            />
          </div>
        </div>
      )}
    </div>
  );
}
