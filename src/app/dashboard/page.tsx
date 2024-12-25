import { Card, CardContent, CardHeader, CardTitle } from "@/components/dashboard/common/card";
import QuickAccessCard from "@/components/dashboard/home/quickAccessCard";

import {
  BookmarkIcon,
  BookOpenIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ClockIcon,
  DocumentTextIcon,
  InboxIcon,
  NewspaperIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";

interface ResourceProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  color?: string;
}

const upcomingEvents = [
  {
    id: 1,
    title: "Faculty Meeting",
    date: "Nov 15",
    time: "14:00",
    type: "meeting",
  },
  {
    id: 2,
    title: "Research Symposium",
    date: "Nov 18",
    time: "09:00",
    type: "event",
  },
  {
    id: 3,
    title: "Thesis Defense",
    date: "Nov 20",
    time: "13:30",
    type: "academic",
  },
];

const quickActions = [
  {
    label: "Download Documents",
    icon: <DocumentTextIcon className="w-4 h-4" />,
  },
  {
    label: "Download Academic Calender",
    icon: <CalendarIcon className="w-4 h-4" />,
  },
  {
    label: "View Course Materials",
    icon: <BookOpenIcon className="w-4 h-4" />,
  },
  { label: "Visit Student Portal", icon: <ChartBarIcon className="w-4 h-4" /> },
];

const quickAccessItems = [
  {
    title: "Recent Documents",
    description: "Access your most recent or frequent documents here.",
    actionLabel: "View Documents",
    color: "blue",
  },
  {
    title: "Notifications Summary",
    description: "Stay informed with the latest notifications and alerts.",
    actionLabel: "View Notifications",
    color: "green",
  },
  {
    title: "Profile Completion Status",
    description: "Complete your profile to enhance your experience.",
    actionLabel: "Complete Profile",
    color: "purple",
  },
];

const activities = [
  {
    icon: <BookmarkIcon className="h-5 w-5 text-blue-600" />,
    title: "Documentation updated",
    description: "Project guidelines were updated",
    time: "2h ago",
    color: "bg-blue-50",
  },
  {
    icon: <UserCircleIcon className="h-5 w-5 text-purple-600" />,
    title: "New team member added",
    description: "Sarah joined the Design team",
    time: "4h ago",
    color: "bg-purple-50",
  },
  {
    icon: <CalendarIcon className="h-5 w-5 text-green-600" />,
    title: "Meeting scheduled",
    description: "Team sync for Project Alpha",
    time: "6h ago",
    color: "bg-green-50",
  },
];

const stats = [
  {
    label: "Total Projects",
    value: 48,
    color: "bg-blue-50",
    textColor: "text-blue-600",
    icon: <BookmarkIcon className="h-5 w-5" />,
  },
  {
    label: "Active Tasks",
    value: 32,
    color: "bg-purple-50",
    textColor: "text-purple-600",
    icon: <CalendarIcon className="h-5 w-5" />,
  },
  {
    label: "Team Members",
    value: 12,
    color: "bg-green-50",
    textColor: "text-green-600",
    icon: <UserCircleIcon className="h-5 w-5" />,
  },
  {
    label: "Completed",
    value: 89,
    color: "bg-amber-50",
    textColor: "text-amber-600",
    icon: <CheckCircleIcon className="h-5 w-5" />,
  },
];

const resources = [
  {
    title: "BUESA Library",
    description:
      "Access our comprehensive digital library containing thousands of academic resources, journals, and research papers.",
    icon: <BookOpenIcon />,
  },
  {
    title: "Kortext",
    description:
      "Your gateway to digital textbooks and interactive learning materials from leading publishers worldwide.",
    icon: <BookmarkIcon />,
  },
  {
    title: "BUSA Letters",
    description:
      "Stay informed with official communications, newsletters, and important updates from BUSA.",
    icon: <InboxIcon />,
  },
  {
    title: "Latest News",
    description:
      "Get real-time updates on campus events, academic announcements, and community highlights.",
    icon: <NewspaperIcon />,
  },
];

const ResourceCard = ({ title, description, icon }: ResourceProps) => (
  <div className="group bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-md lg:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-indigo-500 rounded-lg group-hover:bg-indigo-800 transition-colors">
        <div className="w-6 h-6 text-white">{icon}</div>
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 md:line-clamp-none">
          {description}
        </p>
        <button className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
          Learn more →
        </button>
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="min-h-screen rounded-xl p-2 md:p-6 bg-white">
      <div className="space-y-12">
        {/* Statistics Section */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`${stat.color} rounded-xl border border-transparent p-6 shadow-sm`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`${stat.textColor}`}>{stat.icon}</div>
                  <div
                    className={`text-xs font-medium px-2 py-1 rounded-full ${stat.color} ${stat.textColor} border border-current`}
                  >
                    Last 30 days
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className={`text-2xl font-bold ${stat.textColor}`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Recent Activities */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 my-6">
          Recent Activities
        </h3>
        <div className="bg-white rounded-xl border border-gray-300 shadow-sm pt-3 pb-6">
          <div className="space-y-4 divide-y">
            {activities.map((activity, i) => (
              <div
                key={i}
                className="flex items-center gap-4 py-3 px-6 hover:bg-gray-50"
              >
                <div
                  className={`h-10 w-10 rounded-full ${activity.color} flex items-center justify-center`}
                >
                  {activity.icon}
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-semibold text-gray-900">
                    {activity.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {activity.description}
                  </p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end mt-4">
            <p className="flex items-center text-blue-600 gap-1.5 font-normal text-sm pr-6 active:text-gray-900 cursor-pointer">
              See more <CalendarIcon className="w-4 h-4" />
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-6">
        <h2 className="text-xl font-semibold tracking-tight mb-6">Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar & Events */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CalendarIcon className="w-5 h-5 text-blue-600" />
              <span>Upcoming Events</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex justify-between flex-col md:flex-row md:items-center p-3 bg-gray-50 rounded-lg "
                >
                  <div className="flex items-center flex-1">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <ClockIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 tracking-[0.5px]">
                        {event.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {event.date} at {event.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end md:justify-center items-center">
                    <span
                      className={`px-1.5 py-1 text-[13px] leading-4 rounded-[4px] text-center font-semibold w-[70px]
                     ${
                       event.type === "meeting"
                         ? "bg-[#FFF3DE] text-[#FF9600]"
                         : event.type === "event"
                         ? "bg-[#FFEAED] text-[#EF6E68]"
                         : "bg-[#E3F2FD] text-[#2196F3]"
                     }`}
                    >
                      {event.type}
                    </span>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-end">
                <p className="flex items-center text-blue-600 gap-1.5 font-normal text-sm pr-3 active:text-gray-900 cursor-pointer">
                  See more <CalendarIcon className="w-4 h-4" />
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center  space-x-2">
              <BookOpenIcon className="w-5 h-5 text-blue-600" />
              <span>Quick Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className="w-full flex items-center space-x-3 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-blue-100">
                    {action.icon}
                  </div>
                  <span className="text-[14px] font-medium text-gray-700 tracking-[1px]">
                    {action.label}
                  </span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Access Section */}
      <div className="flex items-center gap-2 my-6 text-xl font-semibold">
        <p>Quick Access</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {quickAccessItems.map((item, index) => (
          <QuickAccessCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
