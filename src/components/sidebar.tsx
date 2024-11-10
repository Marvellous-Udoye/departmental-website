"use client"

import { BellIcon, ClipboardDocumentListIcon, DocumentIcon, HomeIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface MenuProps {
  title: string,
  href: string,
  icon: React.ReactNode,
}

const menus: MenuProps[] = [
  {
    title: 'Home',
    href: '/dashboard',
    icon: <HomeIcon />
  },
  {
    title: 'Documents',
    href: '/dashboard/documents',
    icon: <DocumentIcon />
  },
  {
    title: 'Courses',
    href: '/dashboard/courses',
    icon: <ClipboardDocumentListIcon />
  },
  {
    title: 'Notifications',
    href: '/dashboard/notifications',
    icon: <BellIcon />
  },
  {
    title: 'Profile',
    href: '/dashboard/profile',
    icon: <UserCircleIcon />
  }
]

export default function Sidebar() {
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null)
  const pathName = usePathname()
  const isMenuActive = "border-l-4 border-solid border-l-[#4f46e5] text-[#4f46e5] transition ease duration-100ms"

  return (
    <nav className='fixed hidden lg:flex left-0 top-0 z-10 h-full border border-r-[4px] w-1/6'>
      <div className="flex flex-col w-full">
        <h1 className="font-bold tracking-[1px] text-2xl text-[#4f46e5] pl-10 py-10">BellsDept.</h1>
        <ul className="flex flex-col w-full">
          {menus.map((menu, index) => {
            const isActive = pathName === menu.href 
            return (
              <Link href={menu.href} key={index}>
                <li
                  className={`flex gap-4 items-center w-full text-xs md:text-base pl-10 leading-6 md:leading-8 tracking-[0.32px] font-medium p-[14px] cursor-pointer border-l-4 hover:border-l-[#4f46e5] hover:bg-indigo-500 hover:text-white transition ease duration-100ms
                  ${isActive ? isMenuActive : ""}
               `}
                  onClick={() => { setSelectedMenu(index) }}
                >
                  <div className="w-5 h-5">
                    {menu.icon}
                  </div>
                  {menu.title}
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    </nav>
  );
};
