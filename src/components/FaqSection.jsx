"use client";

import React, { useState } from "react";

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-gray-700"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-gray-700"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </svg>
);

export default function FaqSection({ faqData }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqData || !faqData.faqs) {
    return null;
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-medium tracking-tight text-gray-900 sm:text-4xl">
            {faqData.headline}
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <dl className="space-y-0">
            {faqData.faqs.map((faq, index) => (
              <div key={faq.question} className="border-b border-gray-200 py-6">
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-left"
                  onClick={() => handleToggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="mt-6 pr-12">
                    <p className="text-base text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
