"use client";

import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: "What resources are available for academic research?",
    answer:
      "The portal provides access to a variety of academic resources, including articles, e-books, and research materials tailored to the Department of Engineering.",
  },
  {
    question: "Can I receive notifications from my course advisor?",
    answer:
      "Yes, the portal allows you to receive notifications and updates directly from your course advisor regarding courses, schedules, and other important information.",
  },
  {
    question: "How can I track the submission of my documents?",
    answer:
      "You can easily track the submission of your documents through the departmental portal. Log in with your student credentials to view the status of your submissions.",
  },
  {
    question: "What are the features of the departmental website?",
    answer:
      "The website is designed to ease activities between students and staff. It allows students to track submissions, access resources, and stay updated with university events and announcements.",
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white">
      <div className="container flex max-md:flex-col gap-10 justify-between px-6 py-12 mx-auto">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl md:leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-600 md:block text-lg">
            Answers to the most frequently asked questions about the
            departmental portal.
          </p>
        </div>
        <div className="space-y-8 max-w-2xl w-full">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-sm"
            >
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleAnswer(index)}
              >
                <h1 className="font-semibold text-gray-700 max-w-md max-sm:max-w-[230px] text-left">
                  {faq.question}
                </h1>
                <span
                  className={`text-white ${
                    activeIndex === index ? "bg-blue-200" : "bg-blue-500"
                  } rounded-full p-1`}
                >
                  {activeIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v12M6 12h12"
                      />
                    </svg>
                  )}
                </span>
              </button>

              <div
                style={{
                  maxHeight: activeIndex === index ? "200px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease-in-out",
                }}
              >
                <p className="mt-6 text-md text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
