import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="px-4 divide-y bg-gray-50 text-gray-800 mt-6 md:mt-10">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <Link
            rel="noopener noreferrer"
            href="/"
            className="flex space-x-3 justify-start"
          >
            <HomeIcon className="size-10 text-indigo-600" />
            <span className="self-center text-2xl font-semibold">
              Departmental Portal
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase font-bold text-gray-900">
              About Us
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="/history">
                  Our History
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="/faculty">
                  Faculty Members
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="/achievements">
                  Achievements
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide font-bold uppercase text-gray-900">
              Resources
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="/courses">
                  Courses
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="/research">
                  Research
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="/library">
                  Library
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="/faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase font-bold text-gray-900">Get Involved</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="/alumni">
                  Alumni
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="/events">
                  Events
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="/support">
                  Support Us
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase font-bold text-gray-900">Follow Us</div>
            <div className="flex justify-start space-x-3">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/BellstechOta/"
                title="Facebook"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-5 h-5"
                >
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/bellstechota"
                title="Twitter"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                </svg>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://ng.linkedin.com/school/bells-university-of-technology/"
                title="LinkedIn"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-5 h-5"
                >
                  <path d="M29 0h-26c-1.657 0-3 1.343-3 3v26c0 1.657 1.343 3 3 3h26c1.657 0 3-1.343 3-3v-26c0-1.657-1.343-3-3-3zM10.4 27.4h-4.8v-13.2h4.8v13.2zM8 12.6c-1.542 0-2.8-1.257-2.8-2.8s1.257-2.8 2.8-2.8 2.8 1.257 2.8 2.8-1.257 2.8-2.8 2.8zM27.4 27.4h-4.8v-7.7c0-1.8-0.034-4.2-2.6-4.2-2.6 0-3 2.034-3 4.066v7.834h-4.8v-13.2h4.6v1.8h0.066c0.637-1.2 2.2-2.466 4.534-2.466 4.833 0 5.733 3.166 5.733 7.3v6.566z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-600">
        © {new Date().getFullYear()} BellsTech. All rights reserved.
      </div>
    </footer>
  );
}
