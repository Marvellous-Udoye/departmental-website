"use client";

import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: "How can I play for my appointment?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
  },
  {
    question:
      "Is the cost of the appointment covered by private health insurance?",
    answer:
      "Yes, the cost may be covered depending on your provider. Please check with your insurance provider for more details.",
  },
  {
    question: "Do I need a referral?",
    answer:
      "In most cases, you don't need a referral. However, it's always best to check with your healthcare provider beforehand.",
  },
  {
    question: "What are your opening hours?",
    answer: "We are open Monday to Friday from 9 AM to 5 PM.",
  },
  {
    question: "What can I expect at my first consultation?",
    answer:
      "At your first consultation, we will discuss your needs and goals to provide the best care for you.",
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index); 
    }
  };

  return (
    <section className="bg-white">
      <div className="container flex justify-between px-6 py-12 mx-auto">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl md:leading-tight">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-gray-600 md:block text-lg">
            Answers to the most frequently asked questions.
          </p>
        </div>
        <div className="space-y-8 max-w-2xl w-full">
          {faqData.map((faq, index) => (
            <div key={index} className="p-8 bg-gray-100 rounded-lg shadow-sm">
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleAnswer(index)}
              >
                <h1 className="font-semibold text-gray-700 max-w-md text-left">
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

              {activeIndex === index && (
                <p className="mt-6 text-md text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
