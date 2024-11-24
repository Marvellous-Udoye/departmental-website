"use client"

import { Bars3Icon, BookOpenIcon, BriefcaseIcon, CalendarDateRangeIcon, ChevronDownIcon, ChevronRightIcon, ChevronUpDownIcon, HomeIcon, ListBulletIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function DashboardLayout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', icon: <HomeIcon className="size-4" />, label: 'Dashboard' },
    { id: 'users', icon: <UsersIcon className="size-4" />, label: 'Users' },
    { id: 'account', icon: <UserCircleIcon className="size-4" />, label: 'Account' },
    { id: 'projects', icon: <BriefcaseIcon className="size-4" />, label: 'Projects' },
    { id: 'calendar', icon: <CalendarDateRangeIcon className="size-4" />, label: 'Calendar' },
    { id: 'documentation', icon: <BookOpenIcon className="size-4" />, label: 'Documentation' },
  ];

  const dropdownItems = [
    { id: 'first', label: 'First' },
    { id: 'second', label: 'Second' },
    { id: 'third', label: 'Third' },
  ];

  const Logo = () => (
    <div className="px-6 pt-4">
      <a href="#" className="flex-none rounded-xl text-xl inline-block font-semibold">
        <svg className="w-28 h-auto" viewBox="0 0 116 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33.5696 30.8182V11.3182H37.4474V13.7003H37.6229C37.7952 13.3187 38.0445 12.9309 38.3707 12.5369C38.7031 12.1368 39.134 11.8045 39.6634 11.5398C40.1989 11.2689 40.8636 11.1335 41.6577 11.1335C42.6918 11.1335 43.6458 11.4044 44.5199 11.946C45.3939 12.4815 46.0926 13.291 46.6158 14.3743C47.139 15.4515 47.4006 16.8026 47.4006 18.4276C47.4006 20.0095 47.1451 21.3452 46.6342 22.4347C46.1295 23.518 45.4401 24.3397 44.5661 24.8999C43.6982 25.4538 42.7256 25.7308 41.6484 25.7308C40.8852 25.7308 40.2358 25.6046 39.7003 25.3523C39.1709 25.0999 38.737 24.7829 38.3984 24.4013C38.0599 24.0135 37.8014 23.6226 37.6229 23.2287H37.5028V30.8182H33.5696Z" className="fill-blue-600 dark:fill-white" />
          <path d="M1 29.5V16.5C1 9.87258 6.37258 4.5 13 4.5C19.6274 4.5 25 9.87258 25 16.5C25 23.1274 19.6274 28.5 13 28.5H12" className="stroke-blue-600 dark:stroke-white" strokeWidth="2" />
          <circle cx="13" cy="16.5214" r="5" className="fill-blue-600 dark:fill-white" />
        </svg>
      </a>
    </div>
  );

  const MobileHeader = () => (
    <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
      <div className="flex items-center py-2">
        <button
          type="button"
          className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 dark:border-neutral-700 dark:text-neutral-200"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Bars3Icon className="size-4" />
        </button>
        <div className="ms-3 flex items-center whitespace-nowrap">
          <span className="text-sm text-gray-800 dark:text-neutral-400">
            Application Layout
          </span>
          <ChevronRightIcon className="mx-3 size-2.5 text-gray-400" />
          <span className="text-sm font-semibold text-gray-800 dark:text-neutral-400">
            Dashboard
          </span>
        </div>
      </div>
    </div>
  );

  const Sidebar = () => (
    <div className={`fixed inset-y-0 start-0 z-[60] w-[260px] bg-white border-e border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
      <div className="relative flex flex-col h-full">
        <Logo />
        <nav className="p-3 overflow-y-auto flex-1">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="p-2 flex items-center gap-x-3.5 text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700"
                >
                  {item.icon}
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full p-2 flex items-center gap-x-3.5 text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700"
              >
                <ListBulletIcon className="size-4" />
                Dropdown
                {isDropdownOpen ? (
                  <ChevronUpDownIcon className="ms-auto size-4" />
                ) : (
                  <ChevronDownIcon className="ms-auto size-4" />
                )}
              </button>
              {isDropdownOpen && (
                <ul className="ps-8 pt-1 space-y-1">
                  {dropdownItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-200"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );

  const MainContent = () => (
    <div className="lg:ps-[260px]">
      <div className="min-h-[75rem] p-4 md:p-8">
        <div className="space-y-10 md:space-y-16">
          {[...navItems, ...dropdownItems].map((item) => (
            <div key={item.id} id={item.id} className="min-h-[25rem] scroll-mt-24">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                {item.label}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <MobileHeader />
      <Sidebar />
    </div>
  );
};

