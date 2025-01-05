"use client";

import { Dialog, Transition } from "@headlessui/react";
import {
  BellIcon,
  CalendarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment, useState } from "react";

interface NotificationProps {
  id: string;
  date: string;
  subject: string;
  body: string;
  isRead: boolean;
}

export const notificationsData: NotificationProps[] = [
  {
    id: "1",
    date: "12 NOV",
    subject: "Research Symposium",
    body: "The annual Department Research Symposium is scheduled for December 1st. All faculty and graduate students are encouraged to present their current research. Abstract submissions are due by November 20th.",
    isRead: false,
  },
  {
    id: "2",
    date: "13 OCT",
    subject: "Curriculum Update",
    body: "Important changes to the undergraduate curriculum for the upcoming semester. New elective courses have been added in AI and Sustainable Engineering. Updated course catalogs are now available.",
    isRead: true,
  },
  {
    id: "3",
    date: "22 SEPT",
    subject: "Lab Maintenance",
    body: "The Advanced Computing Lab will be undergoing maintenance from September 30th to October 2nd. All ongoing projects should be saved and backed up by September 29th.",
    isRead: true,
  },
  {
    id: "4",
    date: "04 JUL",
    subject: "Welcome New Faculty",
    body: "Please join us in welcoming Dr. Sarah Chen and Dr. James Martinez to our department. Their research focuses on Machine Learning and Quantum Computing respectively. Meet-and-greet session scheduled for July 5th.",
    isRead: true,
  },
  {
    id: "5",
    date: "15 JUN",
    subject: "Grant Deadline Alert",
    body: "Reminder: The National Science Foundation (NSF) research grant proposal deadline is approaching. Internal review submissions are due by June 30th. Contact the Research Office for assistance.",
    isRead: false,
  },
  {
    id: "6",
    date: "30 MAY",
    subject: "Workshop Series",
    body: "A series of workshops on 'Emerging Technologies in Education' will be conducted throughout June. First session covers 'AI in Education' on June 10th. Registration is mandatory for all teaching staff.",
    isRead: false,
  },
  {
    id: "7",
    date: "18 APR",
    subject: "New Research Center",
    body: "The Department is proud to announce the establishment of the Center for Advanced Computing and AI Research. Grand opening ceremony will be held on May 1st. All students and faculty are welcome to attend.",
    isRead: true,
  },
];

function Drawer({
  notification,
  isOpen,
  onClose,
}: {
  notification: NotificationProps | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!notification) return null;

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          Notification Details
                        </Dialog.Title>
                        <button
                          type="button"
                          className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                          onClick={onClose}
                        >
                          <XMarkIcon className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                    <div className="relative flex-1 px-4 sm:px-6">
                      <div className={`rounded-lg p-4`}>
                        <div className="mb-4">
                          <span className="text-sm text-gray-500">
                            {notification.date}
                          </span>
                          <h3 className="text-lg font-medium text-gray-900">
                            {notification.subject}
                          </h3>
                        </div>
                        <p className="text-gray-700 whitespace-pre-wrap">
                          {notification.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default function NotificationsAndDrawer() {
  const [notifications, setNotifications] =
    useState<NotificationProps[]>(notificationsData);
  const [showAll, setShowAll] = useState(false);
  const [selectedNotification, setSelectedNotification] =
    useState<NotificationProps | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const markAsRead = (id: string) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const handleNotificationClick = (notification: NotificationProps) => {
    setSelectedNotification(notification);
    setIsDrawerOpen(true);
    markAsRead(notification.id);
  };

  const displayedNotifications = showAll
    ? notifications
    : notifications.slice(0, 4);
  const unreadCount = notifications.filter((n) => !n.isRead).length;

  if (notifications.length === 0) {
    return (
      <div className="h-[250px] sm:h-[500px] p-4 bg-white rounded-lg shadow-sm">
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <BellIcon className="w-12 h-12 text-gray-400" />
          <p className="text-lg font-medium text-gray-900">
            You have no notifications
          </p>
          <Link
            href="/dashboard"
            className="text-indigo-600 hover:text-indigo-800"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6 sm:py-10">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
          {unreadCount > 0 && (
            <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {unreadCount} unread
            </span>
          )}
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
        >
          <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>

      <div className="space-y-4">
        {displayedNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`
              relative rounded-lg border px-2 py-4 sm:p-4 transition-all
              ${notification.isRead ? "bg-white" : "bg-indigo-50"}
              hover:shadow-md cursor-pointer
            `}
            onClick={() => handleNotificationClick(notification)}
          >
            <div className="flex gap-4 items-start">
              <div
                className={`
                p-2 rounded-full bg-blue-100
              `}
              >
                <CalendarIcon className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="text-sm text-gray-500">{notification.date}</p>
                  {!notification.isRead && (
                    <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full" />
                  )}
                </div>
                <h3 className="font-medium text-gray-900 mt-1">
                  {notification.subject}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mt-1">
                  {notification.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Drawer
        notification={selectedNotification}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
}
