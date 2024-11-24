import { ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface QuickAccessCardProps {
  title: string,
  description: string,
  actionLabel: string,
  color: string,
}

export default function QuickAccessCard({ title, description, actionLabel, color }: QuickAccessCardProps) {
  return (
    <a
      className={`group flex gap-y-6 w-full border hover:bg-gray-50 focus:outline-none focus:bg-gray-100 rounded-lg p-5`}
      href="#"
    >
      <div>
        <div>
          <h3 className="block font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>

        <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800">
          {actionLabel}
          <svg
            className="shrink-0 w-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
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
            <path d="m9 18 6-6-6-6" />
          </svg>
        </p>
      </div>
    </a >
  );
};

