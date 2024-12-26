import { 
  DocumentTextIcon, 
  BellAlertIcon, 
  BookOpenIcon, 
  CalendarDaysIcon, 
  UserGroupIcon, 
  DocumentDuplicateIcon 
} from "@heroicons/react/24/outline";

interface FeatureProps {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const features: FeatureProps[] = [
  {
    name: "Document Tracking",
    description: "Track submissions and get instant confirmations for all departmental documents.",
    icon: DocumentTextIcon,
  },
  {
    name: "Advisor Updates",
    description: "Receive timely notifications and guidance from your course advisors.",
    icon: BellAlertIcon,
  },
  {
    name: "Research Resources",
    description: "Access academic materials, research papers, and digital libraries.",
    icon: BookOpenIcon,
  },
  {
    name: "Event Calendar",
    description: "Stay updated with examination schedules and departmental events.",
    icon: CalendarDaysIcon,
  },
  {
    name: "Direct Communication",
    description: "Connect with staff and schedule academic consultations easily.",
    icon: UserGroupIcon,
  },
  {
    name: "Course Materials",
    description: "Access lecture notes, past questions, and collaborative resources.",
    icon: DocumentDuplicateIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-indigo-600">
            Key Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Simplifying academic processes and enhancing collaboration between students and staff.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-7xl">
          <dl className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow duration-300"
              >
                <dt className="flex items-center gap-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">{feature.name}</span>
                </dt>
                <dd className="mt-4 text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}