import Link from "next/link";

interface QuickAccessCardProps {
  title: string;
  description: string;
  actionLabel: string;
  href: string;
  icon?: React.ReactNode;
}

export default function QuickAccessCard({
  title,
  description,
  actionLabel,
  href,
  icon,
}: QuickAccessCardProps) {
  return (
    <div className="group flex flex-col items-start w-full border hover:shadow-lg transition-shadow duration-300 focus:outline-none rounded-lg p-4 sm:p-6">
      <div className="w-full">
        {icon && (
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/80">
            {icon}
          </div>
        )}

        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-x-2 text-sm font-medium text-blue-600 group-hover:text-blue-700"
      >
        {actionLabel}
        <svg
          className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1"
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
      </Link>
    </div>
  );
}
