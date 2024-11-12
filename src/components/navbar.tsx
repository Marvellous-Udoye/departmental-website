"use client"

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, ClipboardDocumentListIcon, DocumentIcon, HomeIcon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

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

function classNames(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null)
  const isMenuActive = "border-l-4 border-solid border-l-[#4f46e5] text-[#4f46e5] transition ease duration-100ms"
  const router = useRouter()
  const pathName = usePathname()

  const handlePageRoute = (page: string) => {
    if (page === 'Notifications') {
      router.push('/dashboard/notifications')
    }
    if (page === 'Profile') {
      router.push('/dashboard/profile')
    }
    if (page === 'Signout') {
      router.push('/')
    }
  }

  return (
    <Disclosure as="nav">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">

            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:bg-gray-700 focus:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden md:flex flex-shrink-0 items-center animate-pulse">
              <Image
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
                width={100}
                height={100}
              />
            </div>
            {/* <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? ' bg-indigo-600 text-white' : 'hover:bg-indigo-600 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div> */}
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              onClick={() => handlePageRoute('Notifications')}
              className="relative rounded-full p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <Image
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                    width={100}
                    height={100}
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <span
                    onClick={() => handlePageRoute('Profile')}
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 cursor-pointer">
                    Your Profile
                  </span>
                </MenuItem>
                <MenuItem>
                  <span
                    onClick={() => handlePageRoute('Signout')}
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 cursor-pointer">
                    Sign out
                  </span>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        {/* <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div> */}
        <ul className="flex flex-col w-full border-b-[2px] border-t-[2px]">
          {menus.map((menu, index) => {
            const isActive = pathName === menu.href
            return (
              <Link href={menu.href} key={index}>
                <li
                  className={`flex gap-4 items-center w-full text-xs md:text-base pl-10 leading-6 md:leading-8 tracking-[0.32px] font-medium p-[14px] cursor-pointer border-l-4 hover:border-l-[#4f46e5] active:bg-indigo-500 md:hover:bg-indigo-500 active:text-white transition ease duration-100ms 
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
      </DisclosurePanel>
    </Disclosure>
  )
}
