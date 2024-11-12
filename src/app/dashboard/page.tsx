import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import { BookmarkIcon, BookOpenIcon, CalendarIcon, ChartBarIcon, ClockIcon, DocumentTextIcon, InboxIcon, NewspaperIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface ResourceProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  color?: string;
}

interface TeamMemberProps {
  name: string;
  position: string;
  imageUrl: string;
}

const upcomingEvents = [
  { id: 1, title: 'Faculty Meeting', date: 'Nov 15', time: '14:00', type: 'meeting' },
  { id: 2, title: 'Research Symposium', date: 'Nov 18', time: '09:00', type: 'event' },
  { id: 3, title: 'Thesis Defense', date: 'Nov 20', time: '13:30', type: 'academic' }
];

const quickAccessItems = [
  {
    title: 'Recent Documents',
    description: 'Access your most recent or frequently used documents here.',
    actionLabel: 'View Documents',
    color: 'blue'
  },
  {
    title: 'Notifications Summary',
    description: 'Stay informed with the latest notifications and alerts.',
    actionLabel: 'View Notifications',
    color: 'green'
  },
  {
    title: 'Pending Tasks',
    description: 'Check your pending tasks and reminders here.',
    actionLabel: 'View Tasks',
    color: 'yellow'
  },
  {
    title: 'Profile Completion Status',
    description: 'Complete your profile to enhance your experience.',
    actionLabel: 'Complete Profile',
    color: 'purple'
  },
  {
    title: 'Quick Links',
    description: 'Navigate quickly to important pages and contact support.',
    actionLabel: 'Explore Links',
    color: 'red'
  }
];

const resources = [
  {
    title: 'BUESA Library',
    description: 'Access our comprehensive digital library containing thousands of academic resources, journals, and research papers.',
    icon: <BookOpenIcon />
  },
  {
    title: 'Kortext',
    description: 'Your gateway to digital textbooks and interactive learning materials from leading publishers worldwide.',
    icon: <BookmarkIcon />
  },
  {
    title: 'BUSA Letters',
    description: 'Stay informed with official communications, newsletters, and important updates from BUSA.',
    icon: <InboxIcon />
  },
  {
    title: 'Latest News',
    description: 'Get real-time updates on campus events, academic announcements, and community highlights.',
    icon: <NewspaperIcon />
  }
];

const teamMembers: TeamMemberProps[] = [
  {
    name: "John Doe",
    position: "Software Engineer",
    imageUrl: "https://placehold.co/100x100",
  },
  {
    name: "Jane Smith",
    position: "Product Manager",
    imageUrl: "https://placehold.co/100x100",
  },
  {
    name: "Emily Johnson",
    position: "UX Designer",
    imageUrl: "https://placehold.co/100x100",
  },
  {
    name: "Michael Brown",
    position: "Marketing Specialist",
    imageUrl: "https://placehold.co/100x100",
  },
];

const QuickAccessCard = ({ title, description, actionLabel, color = 'blue' }: ResourceProps) => (
  <div className="p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl relative overflow-hidden">
    <div className={`absolute -top-8 -right-8 bg-${color}-100 p-4 rounded-full`}></div>
    <h4 className="font-bold text-lg mb-2 text-gray-900">{title}</h4>
    <p className="text-sm text-gray-500 mb-3">{description}</p>
    <button className={`text-${color}-500 text-sm font-semibold transition cursor-pointer hover:text-${color}-600`}>
      {actionLabel}
    </button>
  </div>
);

const ResourceCard = ({ title, description, icon }: ResourceProps) => (
  <div className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-indigo-500 rounded-lg group-hover:bg-indigo-800 transition-colors">
        <div className="w-6 h-6 text-white">
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {description}
        </p>
        <button className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
          Learn more →
        </button>
      </div>
    </div>
  </div>
);

const TeamMember = ({ name, position, imageUrl }: TeamMemberProps) => (
  <div className="bg-white pb-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
    <div className='rounded-tr-md rounded-tl-md overflow-hidden'>
      <img
        src={imageUrl}
        alt={name}
        className="max-w-30 w-full max-h-30 mx-auto object-cover transform group-hover:scale-105 transition ease duration-300ms"
      />
    </div>
    <div className='py-3'>
      <h4 className="font-semibold text-gray-900 text-center">{name}</h4>
      <p className="text-sm text-gray-500 text-center">{position}</p>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="min-h-screen rounded-xl p-6 bg-white">
      {/* Quick Access Section */}
      <section className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickAccessItems.map((item, index) => (
            <QuickAccessCard key={index} {...item} />
          ))}
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
                <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className='flex items-center flex-1'>
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <ClockIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 tracking-[0.5px]">{event.title}</h4>
                      <p className="text-sm text-gray-500">{event.date} at {event.time}</p>
                    </div>
                  </div>
                  <div className='flex justify-center items-center max-w-[80px] w-full'>
                    <span className={`px-1.5 py-1 text-[13px] leading-4 rounded-[4px] text-center font-normal
                     ${event.type === 'meeting' ? 'bg-[#FFF3DE] text-[#FF9600]' :
                        event.type === 'event' ? 'bg-[#FFEAED] text-[#EF6E68]' :
                          'bg-[#E3F2FD] text-[#2196F3]'
                      }`}>
                      {event.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpenIcon className="w-5 h-5 text-blue-600" />
              <span>Quick Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { label: 'Download Documents', icon: <DocumentTextIcon className="w-4 h-4" /> },
                { label: 'Download Academic Calender', icon: <CalendarIcon className="w-4 h-4" /> },
                { label: 'View Course Materials', icon: <BookOpenIcon className="w-4 h-4" /> },
                { label: 'Visit Student Portal', icon: <ChartBarIcon className="w-4 h-4" /> }
              ].map((action, index) => (
                <button
                  key={index}
                  className="w-full flex items-center space-x-3 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-indigo-100">
                    {action.icon}
                  </div>
                  <span className="text-[14px] font-medium text-gray-700 tracking-[1px]">{action.label}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team Section */}
      <section className="pt-6">
        <h2 className="text-xl font-semibold tracking-tight mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>
    </div>
  );
}