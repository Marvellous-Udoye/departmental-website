"use client";

import Drawer from "@/components/drawer";
import { ArrowRightCircleIcon, InboxStackIcon } from "@heroicons/react/24/outline";
import { MusicalNoteIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

interface NotificationsProps {
  date: string;
  subject: string;
  body: string;
}

export default function Notifications() {
  const notifications: NotificationsProps[] = [
    {
      date: "12 NOV",
      subject: "Annual Retreat",
      body: "The annual retreat is scheduled for December 1st."
    },
    {
      date: "13 OCT",
      subject: "Policy Update",
      body: "New guidelines for remote work have been released."
    },
    {
      date: "27 SEPT",
      subject: "Quarterly Results",
      body: "The Q3 perf review will be held on September 30th."
    },
    {
      date: "23 SEPT",
      subject: "Maintenance Notification",
      body: "Office servers will be down for maintenance on September 25th."
    },
    {
      date: "31 JULY",
      subject: "Team Building Exercise",
      body: "Join us for a team-building activity at the park on August 5th."
    },
    {
      date: "05 MARCH",
      subject: "Health Workshop",
      body: "A mandatory health and safety training session."
    }
  ];

  const [showAll, setShowAll] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState<NotificationsProps | null>(null);

  const handleNotificationDetails = (notification: NotificationsProps) => {
    setIsDrawerOpen(false);
    setTimeout(() => {
      setSelectedNotification(notification);
      setIsDrawerOpen(true);
    }, 200);
  };

  const displayedNotifications = showAll ? notifications : notifications.slice(0, 4);

  return (
    <div>
      <div className="bg-white rounded-md flex flex-col gap-3 p-3 border-b">
        <div className="flex justify-between">
          <p className="text-base font-bold leading-5">Notice</p>
          <div
            className="flex items-center gap-1 cursor-pointer text-indigo-500"
            onClick={() => setShowAll((prev) => !prev)}
          >
            <p className="text-[14px] leading-4.5">{showAll ? "Hide Notices" : "All Notices"}</p>
            <InboxStackIcon className="w-4 h-4" />
          </div>
        </div>

        {displayedNotifications.map((notification, index) => (
          <div key={index} className="flex justify-between py-3 items-center border-b">
            <div className="flex flex-col gap-1">
              <p className="text-gray-500 font-bold text-sm leading-[15px]">{notification.date}</p>
              <p className="font-semibold">
                {notification.subject} - <span className="text-gray-500 font-thin">{notification.body}</span>
              </p>
            </div>
            <p
              onClick={() => handleNotificationDetails(notification)}
              className="font-medium text-sm text-gray-500 cursor-pointer"
            >
              Details
            </p>
          </div>
        ))}

        {showAll ? (
          <button
            className="text-center bg-indigo-500 p-3 text-white font-medium text-sm max-w-[100px] mx-auto rounded-md cursor-pointer"
            onClick={() => setShowAll(false)}
          >
            See Less
          </button>
        ) : (
          <button
            className="text-center bg-indigo-500 p-3 text-white font-medium text-sm max-w-[100px] mx-auto rounded-md cursor-pointer"
            onClick={() => setShowAll(true)}
          >
            See More
          </button>
        )}
      </div>

      {isDrawerOpen && selectedNotification && (
        <Drawer
          onClose={() => setIsDrawerOpen(false)}
          notificationBody={selectedNotification.subject}
          notificationDate={selectedNotification.date}
          notificationSubject={selectedNotification.body}

        />
      )}
    </div>
  );
}
