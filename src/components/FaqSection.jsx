'use client';

import React, { useState } from 'react';

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </svg>
);

const faqs = [
  {
    question: "How does Qualigenix handle complex outstanding claims follow up?",
    answer: "Our system uses AI-driven prioritization to identify complex claims. These are immediately routed to senior specialists who have the expertise to negotiate with payers, appeal denials, and resolve intricate billing issues, ensuring no claim is left unresolved.",
  },
  {
    question: "What makes unpaid claim resolution faster with Qualigenix?",
    answer: "We accelerate resolution through automated status checks, denial categorization, and by triggering immediate follow-ups. Our process eliminates manual work, allowing our team to focus only on the claims that require human intervention.",
  },
  {
    question: "How do AR performance metrics healthcare improve collections?",
    answer: "Our live dashboards provide 24/7 transparency. You can track key metrics like Days in A/R, first-pass resolution rate, and denial rates. This data helps identify bottlenecks in your revenue cycle, allowing for targeted improvements that directly boost collections.",
  },
  {
    question: "Can your A/R follow-up process adapt to different specialties?",
    answer: "Yes. Our platform is system-agnostic and our teams are trained in a wide range of specialties, from Cardiology to Behavioral Health. We customize our follow-up workflows based on the specific rules and common denial reasons for each specialty.",
  },
  {
    question: "How do you ensure transparency during A/R recovery?",
    answer: "Transparency is central to our service. Clients have real-time access to performance dashboards and receive regular, detailed reports on all actions taken, recovery amounts, and the status of outstanding claims.",
  },
  {
    question: "What long-term value do your A/R services provide?",
    answer: "Beyond immediate cash flow improvement, we provide long-term value by identifying root causes of denials. We give you actionable feedback to improve your front-end processes (like registration and eligibility), reducing future denials and creating a healthier revenue cycle.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-medium tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <dl className="space-y-0">
            {faqs.map((faq, index) => (
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