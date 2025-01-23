import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/dashboard/common/card";
import QuickAccessCard from "@/components/dashboard/home/quickAccessCard";
import {
  BellIcon,
  BookmarkIcon,
  BookOpenIcon,
  CalendarIcon,
  ChartBarIcon,
  ClockIcon,
  DocumentIcon,
  DocumentTextIcon,
  InboxIcon,
  NewspaperIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

interface ResourceProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  color?: string;
  href?: string; // Added href property
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
    label: "Visit Payment Portal",
    icon: <DocumentTextIcon className="w-4 h-4" />,
    href: "https://portal.bellsuniversity.edu.ng/payments/",
  },
  {
    label: "Download Academic Calender",
    icon: <CalendarIcon className="w-4 h-4" />,
    href: "https://www.bellsuniversity.edu.ng/academic-calendar/",
  },
  {
    label: "View Course Materials",
    icon: <BookOpenIcon className="w-4 h-4" />,
    href: "https://drive.google.com/drive/folders/1-_odjuaoTKrPKFjOat8yCQi8oPyjHSSo/",
  },
  {
    label: "Visit Student Portal",
    icon: <ChartBarIcon className="w-4 h-4" />,
    href: "https://portal.bellsuniversity.edu.ng/",
  },
];

const quickAccessItems = [
  {
    title: "Recent Documents",
    description: "Access your most recent or frequent documents here.",
    actionLabel: "View Documents",
    href: "/dashboard/documents",
  },
  {
    title: "Notifications Summary",
    description: "Stay informed with the latest notifications and alerts.",
    actionLabel: "View Notifications",
    href: "/dashboard/notifications",
  },
  {
    title: "Profile Completion Status",
    description: "Complete your profile to enhance your experience.",
    actionLabel: "Complete Profile",
    href: "/dashboard/profile",
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
    label: "Total Documents",
    value: 120,
    color: "bg-indigo-50",
    textColor: "text-indigo-600",
    icon: <DocumentIcon className="h-5 w-5" />,
  },
  {
    label: "New Notifications",
    value: 5,
    color: "bg-red-50",
    textColor: "text-red-600",
    icon: <BellIcon className="h-5 w-5" />,
  },
  {
    label: "Courses Enrolled",
    value: 35,
    color: "bg-teal-50",
    textColor: "text-teal-600",
    icon: <BookOpenIcon className="h-5 w-5" />,
  },
  {
    label: "Upcoming Events",
    value: 12,
    color: "bg-yellow-50",
    textColor: "text-yellow-600",
    icon: <CalendarIcon className="h-5 w-5" />,
  },
];

const resources = [
  {
    title: "BUESA Library",
    description:
      "Access our comprehensive digital library containing thousands of academic resources, journals, and research papers.",
    icon: <BookOpenIcon />,
    href: "https://drive.google.com/drive/folders/1-_odjuaoTKrPKFjOat8yCQi8oPyjHSSo",
  },
  {
    title: "Kortext",
    description:
      "Your gateway to digital textbooks and interactive learning materials from leading publishers worldwide.",
    icon: <BookmarkIcon />,
    href: "https://read.kortext.com/library/books",
  },
  {
    title: "BUSA Letters",
    description:
      "Stay informed with official communications, newsletters, and important updates from BUSA.",
    icon: <InboxIcon />,
    href: "https://www.bellsuniversity.edu.ng/academic-activities-at-bells-university/bells-university-student-life/",
  },
  {
    title: "Latest News",
    description:
      "Get real-time updates on campus events, academic announcements, and community highlights.",
    icon: <NewspaperIcon />,
    href: "https://www.bellsuniversity.edu.ng/news/",
  },
];

const ResourceCard = ({ title, description, icon, href }: ResourceProps) => (
  <Link
    href={href || "#"} // Fallback to "#" if no href is provided
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-md lg:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
  >
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
  </Link>
);

export default function Dashboard() {
  return (
    <div className="pt-10 pb-4">
      <div className="space-y-12">
        {/* Statistics Section */}
        <section>
          <h3 className="text-xl font-semibold text-gray-800 lg:text-2xl">Overview</h3>
          <p className="mb-4 text-gray-500 text-sm">
            A summary of your key metrics and activities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`${stat.color} rounded-xl border border-transparent p-4 sm:p-6 shadow-sm`}
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
        <h3 className="text-xl font-semibold text-gray-800 lg:text-2xl mt-6">
          Recent Activities
        </h3>
        <p className="mb-4 text-gray-500 text-sm">
          Track the latest actions and updates in your dashboard.
        </p>
        <div className="bg-white rounded-xl border border-gray-300 shadow-sm pt-3 pb-6">
          <div className="space-y-4 divide-y">
            {activities.map((activity, i) => (
              <div
                key={i}
                className="flex items-center gap-4 py-3 px-4 sm:px-6 hover:bg-gray-50"
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
                <span className="text-sm text-gray-500 whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end mt-3">
            <p className="flex items-center text-blue-600 gap-1.5 font-normal text-sm pr-4 active:text-gray-900 cursor-pointer">
              See more <CalendarIcon className="w-4 h-4" />
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-6">
        <h2 className="text-xl font-semibold text-gray-800 lg:text-2xl">Resources</h2>
        <p className="mb-4 text-gray-500 text-sm">
          Access essential tools and documents to support your work.
        </p>
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
            <div className="py-3 space-y-4">
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
                     ${event.type === "meeting"
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
                <Link
                  key={index}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center space-x-3 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-blue-100">
                    {action.icon}
                  </div>
                  <span className="text-[14px] font-medium text-gray-700">
                    {action.label}
                  </span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Access Section */}
      <div className="mt-6">
        <h1 className="text-xl font-semibold text-gray-800 lg:text-2xl">Quick Access</h1>
        <p className="mb-4 text-gray-500 text-sm">
          Instantly reach your most used features and modules.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {quickAccessItems.map((item, index) => (
          <QuickAccessCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
