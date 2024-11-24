"use client"

import React, { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can I cancel at any time?",
      answer:
        "Yes, you can cancel anytime no questions are asked while you cancel, but we would highly appreciate if you will give us some feedback.",
    },
    {
      question: "My team has credits. How do we use them?",
      answer:
        "Once your team signs up for a subscription plan, this is where we sit down, grab a cup of coffee, and dial in the details.",
    },
    {
      question: "How does Preline's pricing work?",
      answer:
        "Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.",
    },
    {
      question: "How secure is Preline?",
      answer:
        "Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.",
    },
    {
      question: "How do I get access to a theme I purchased?",
      answer:
        "If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.",
    },
    {
      question: "Upgrade License Type",
      answer:
        "If you need to upgrade your license type, you can do so easily in your account settings.",
    },
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-20 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-5 gap-10">
        {/* Heading Section */}
        <div className="md:col-span-2">
          <div className="max-w-sm">
            <h2 className="text-3xl font-semibold md:text-4xl md:leading-tight">
              Frequently asked questions
            </h2>
            <p className="mt-1 hidden md:block text-gray-600">
              Answers to the most frequently asked questions.
            </p>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="md:col-span-3">
          <div className="hs-accordion-group divide-y divide-gray-500">
            {faqs.map((faq, index) => (
              <div
                className={`hs-accordion pt-6 pb-3 ${activeIndex === index ? "active" : ""
                  }`}
                key={index}
              >
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition focus:outline-none focus:text-gray-500"
                  aria-expanded={activeIndex === index}
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  <svg
                    className={`${activeIndex === index ? "hidden" : "block"
                      } shrink-0 size-5 text-gray-600 group-hover:text-gray-500`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className={`${activeIndex === index ? "block" : "hidden"
                      } shrink-0 size-5 text-gray-600 group-hover:text-gray-500`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  className={`hs-accordion-content ${activeIndex === index ? "block" : "hidden"
                    } w-full overflow-hidden transition-[height] duration-300`}
                >
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

