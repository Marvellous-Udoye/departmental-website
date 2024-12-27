import Image from "next/image";

interface ResourceProps {
  image: string;
  title: string;
  description: string;
  date: string;
}

const resources: ResourceProps[] = [
  {
    image:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Top Strategies for Effective Time Management",
    description:
      "Learn how to organize your schedule, prioritize tasks, and boost productivity with these proven time management techniques.",
    date: "On: 15 September 2023",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "The Future of Artificial Intelligence in Education",
    description:
      "Explore how AI is transforming learning experiences, from personalized tutoring to automating administrative tasks.",
    date: "On: 20 October 2023",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "How to Build a Career in Software Development",
    description:
      "Step-by-step guidance on starting and advancing your journey in the ever-evolving software development industry.",
    date: "On: 10 November 2023",
  },
  {
    image:
      "https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80",
    title: "Understanding Blockchain: A Beginner's Guide",
    description:
      "Delve into the basics of blockchain technology and its applications beyond cryptocurrency.",
    date: "On: 30 August 2023",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80",
    title: "Minimalism in Workspace Design",
    description:
      "Discover how creating a clean, functional workspace can enhance focus, creativity, and efficiency.",
    date: "On: 10 October 2023",
  },
  {
    image:
      "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Emerging Trends in Tech for 2024",
    description:
      "Stay ahead by learning about the latest technological advancements shaping the industry.",
    date: "On: 20 November 2023",
  },
];

export default function Resources() {
  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl">
          Find useful resources
        </h1>
        <p className="mt-1 text-gray-600">
          Stay updated with the latest trends, strategies, and insights tailored
          to help you excel academically and professionally.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-6 md:mt-8 md:grid-cols-2">
          {resources.map((item, index) => (
            <div key={index} className="lg:flex">
              <Image
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src={item.image}
                alt={item.title}
                width={256}
                height={224}
              />
              <div className="flex flex-col justify-between py-6 lg:mx-4">
                <a
                  href="#"
                  className="text-lg font-semibold text-gray-800 hover:underline transition linear duration-300"
                >
                  {item.title}
                </a>
                <p className="text-gray-600 text-base line-clamp-2">
                  {item.description}
                </p>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
