"use client";

import { CalendarIcon, InboxStackIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import Drawer from "./drawer";

interface NotificationProps {
  date: string;
  subject: string;
  body: string;
}

const notificationsData: NotificationProps[] = [
  {
    date: "12 NOV",
    subject: "Annual Retreat",
    body: "The annual retreat is scheduled for December 1st.",
  },
  {
    date: "13 OCT",
    subject: "Policy Update",
    body: "New guidelines for remote work have been released.",
  },
  {
    date: "27 SEPT",
    subject: "Quarterly Results",
    body: "The Q3 performance review will be held on September 30th.",
  },
  {
    date: "23 SEPT",
    subject: "Maintenance Notification",
    body: "Office servers will be down for maintenance on September 25th.",
  },
  {
    date: "31 JULY",
    subject: "Team Building Exercise",
    body: "Join us for a team-building activity at the park on August 5th.",
  },
  {
    date: "05 MARCH",
    subject: "Health Workshop",
    body: "A mandatory health and safety training session.",
  },
];

export default function NotificationsAndDrawer() {
  const [notifications] = useState<NotificationProps[]>(notificationsData);
  const [showAll, setShowAll] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] =
    useState<NotificationProps | null>(null);

  const handleNotificationDetails = (notification: NotificationProps) => {
    setIsDrawerOpen(false);
    setTimeout(() => {
      setSelectedNotification(notification);
      setIsDrawerOpen(true);
    }, 200);
  };

  const displayedNotifications = showAll
    ? notifications
    : notifications.slice(0, 4);

  if (notifications.length === 0) {
    return (
      <div className="h-[250px] sm:h-[500px] p-2 md:p-4 bg-white rounded-md">
        <div className="md:pl-4 mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-base md:text-lg font-semibold">Notice Board</h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-gray-500 h-full">
          <CalendarIcon className="w-12 h-12 text-gray-500 mx-auto" />
          <p className="text-lg font-medium">You have no notifications</p>
          <p className="mt-2">
            Stay tuned for updates.{" "}
            <Link
              href={"/dashboard"}
              className="underline cursor-pointer text-indigo-500"
            >
              Go home
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-2 md:p-4 bg-white rounded-lg">
      <div className="md:pl-4 mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-base md:text-lg font-semibold">Notice Board</h2>
          <div
            onClick={() => setShowAll((prev) => !prev)}
            className="flex items-center gap-2 cursor-pointer pr-0 md:px-4 py-2 rounded-full transition-all md:hover:bg-indigo-500 group"
          >
            <span className="text-black md:group-hover:text-white text-sm">
              {showAll ? "Hide Notices" : "All Notices"}
            </span>
            <InboxStackIcon className="w-5 h-5 md:group-hover:text-white" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {displayedNotifications.map((notification, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md transition hover:shadow-lg flex gap-4 justify-between items-center"
          >
            <div className="flex gap-3 items-start">
              <CalendarIcon className="w-6 h-6 text-indigo-500" />
              <div>
                <p className="text-sm text-gray-500 font-medium">
                  {notification.date}
                </p>
                <h3 className="font-semibold text-base text-gray-700">
                  {notification.subject}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-1 md:line-clamp-2">
                  {notification.body}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleNotificationDetails(notification)}
              className="text-indigo-600 text-sm font-medium hover:text-indigo-800"
            >
              Details
            </button>
          </div>
        ))}

        {notifications.length > 4 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-indigo-600 text-white text-sm font-medium py-2 px-4 rounded-lg block mt-4 active:bg-indigo-700 md:hover:bg-indigo-700 transition"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        )}
      </div>

      {isDrawerOpen && selectedNotification && (
        <Drawer
          onClose={() => setIsDrawerOpen(false)}
          notificationBody={selectedNotification.body}
          notificationDate={selectedNotification.date}
          notificationSubject={selectedNotification.subject}
        />
      )}
    </div>
  );
}
