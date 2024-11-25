"use client"

import Banner from '@/components/dashboard/common/banner';
import { Bars3Icon, BellAlertIcon, BellIcon, BriefcaseIcon, CalendarDateRangeIcon, ChevronDownIcon, ChevronUpIcon, HomeIcon, LinkSlashIcon, UserCircleIcon, UsersIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [, setSelectedMenu] = useState<number | null>(null);
  const pathName = usePathname();

  const navItems = [
    { id: 'home', icon: <HomeIcon className="size-4" />, label: 'Home', href: '/dashboard' },
    { id: 'documents', icon: <UsersIcon className="size-4" />, label: 'Documents', href: '/dashboard/documents' },
    { id: 'courses', icon: <UserCircleIcon className="size-4" />, label: 'Courses', href: '/dashboard/courses' },
    { id: 'projects', icon: <BriefcaseIcon className="size-4" />, label: 'Projects', href: '/dashboard/projects' },
    { id: 'calendar', icon: <CalendarDateRangeIcon className="size-4" />, label: 'Calendar', href: '/dashboard/calendar' },
    { id: 'notifications', icon: <BellAlertIcon className="size-4" />, label: 'Notifications', href: '/dashboard/notifications' },
    { id: 'profile', icon: <BellAlertIcon className="size-4" />, label: 'Profile', href: '/dashboard/profile' },
  ];

  const dropdownItems = [
    { id: 'first', label: 'First', href: '/dashboard/first' },
    { id: 'second', label: 'Second', href: '/dashboard/second' },
    { id: 'third', label: 'Third', href: '/dashboard/third' },
  ];

  const Logo = () => (
    <div className="px-6 pt-4">
      <Link href="/dashboard" className="flex justify-between items-center rounded-xl text-xl inline-block font-semibold">
        <div className="hidden sm:flex flex-shrink-0 items-center animate-pulse">
          <Image
            alt=""
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
            className="h-8 w-auto"
            width={100}
            height={100}
          />
        </div>
        <XMarkIcon
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className='block sm:hidden size-5 text-white cursor-pointer'
        />
      </Link>
    </div>
  );

  const MobileHeader = () => (
    <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
      <div className="flex items-center justify-between py-2">
        <button
          type="button"
          className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 dark:border-neutral-700 dark:text-neutral-200"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Bars3Icon className="size-4" />
        </button>
        <Link href={'/dashboard/notifications'}>
          <button
            type="button"
            className="relative rounded-full p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </Link>
      </div>
    </div>
  );

  const Sidebar = () => (
    <div className={`fixed inset-y-0 start-0 z-[60] w-[260px] bg-white border-e border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
      <div className="relative flex flex-col h-full">
        <Logo />
        <nav className="p-3 overflow-y-auto flex-1">
          <ul className="space-y-1">
            {navItems.map((item, index) => {
              const isActive = pathName === item.href;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`p-2 flex items-center gap-x-3.5 text-sm rounded-lg focus:outline-none 
                      ${isActive
                        ? 'border-l-4 border-solid border-l-blue-600 text-blue-600 bg-blue-50 dark:bg-neutral-700 dark:text-blue-400'
                        : 'text-gray-800 hover:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700'}`}
                    onClick={() => setSelectedMenu(index)}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full p-2 flex items-center gap-x-3.5 text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700"
              >
                <LinkSlashIcon className="size-4" />
                Dropdown
                {isDropdownOpen ? (
                  <ChevronUpIcon className="ms-auto size-4" />
                ) : (
                  <ChevronDownIcon className="ms-auto size-4" />
                )}
              </button>
              {isDropdownOpen && (
                <ul className="ps-8 pt-1 space-y-1">
                  {dropdownItems.map((item, index) => {
                    const isActive = pathName === item.href;
                    return (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg focus:outline-none
                            ${isActive
                              ? 'border-l-4 border-solid border-l-blue-600 text-blue-600 bg-blue-50 dark:bg-neutral-700 dark:text-blue-400'
                              : 'text-gray-800 hover:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700'}`}
                          onClick={() => setSelectedMenu(navItems.length + index)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );

  const MainContent = ({ children }: { children: React.ReactNode }) => (
    <div className="lg:ps-[260px]">
      <div className="min-h-[55rem] p-4">
        <Banner />
        {children}
      </div>
    </div>
  );

  return (
    <div>
      <MobileHeader />
      <Sidebar />
      <MainContent>
        {children}
      </MainContent>
    </div>
  );
};
