import React from "react";

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4 ml-1 text-gray-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

const LightningIcon = () => (
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
      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
    />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-12 h-12 text-blue-900"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.282-.178-2.515-.512-3.698A11.959 11.959 0 0115 2.714.75.75 0 0014.25 2h-4.5a.75.75 0 00-.75.714z"
    />
  </svg>
);

const SpecialtyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10 text-blue-800"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
    />
  </svg>
);

const services = [
  {
    title: "Accelerate Cash Conversion",
    description:
      "Swift follow-up reduces lag time between billing and payment, boosting liquidity.",
  },
  {
    title: "Recover Hard-to-Collect AR",
    description:
      "We pursue aging claims others abandon, boosting AR recovery solutions for your bottom line.",
  },
  {
    title: "Streamline AR in Health Care",
    description:
      "Our workflows keep every claim moving efficiently within healthcare accounts receivable tracking systems.",
  },
  {
    title: "Minimize Denials During Follow-Up",
    description:
      "Proactive re-submissions and clean-up guard against errors and strengthen denial and AR management.",
  },
  {
    title: "Real-Time AR Performance Metrics",
    description:
      "Live dashboards reveal trends and KPIs across AR workflow optimization and collections.",
  },
  {
    title: "Improve Outstanding Claims Follow-Up",
    description:
      "Focused attention on unpaid files ensures no revenue is overlooked or forgotten.",
  },
  {
    title: "Optimized Medical Billing AR Process",
    description:
      "Integrated systems align billing and follow-up to reduce backlogs and error propagation.",
  },
  {
    title: "Scalable AR Collections Support",
    description:
      "Flexible follow-up teams expand with your volume to maintain recovery momentum.",
  },
];

const stats = [
  {
    value: "63K",
    label:
      "Patient collection rate supported by real-time eligibility and payment tracking.",
  },
  {
    value: "36 Days",
    label:
      "Average collection cycle achieved through payer-driven workflow optimization.",
  },
  {
    value: "75%",
    label:
      "Credentialing applications processed with automated healthcare billing process integrations.",
  },
];

const features = [
  {
    name: "Predictive Claim Alerts",
    description:
      "Early warning signals trigger follow-ups for high-risk unpaid claims before they age out.",
  },
  {
    name: "Escalation Workflow Trigger",
    description:
      "Automatically escalates unresolved accounts to higher review levels for faster resolution.",
  },
  {
    name: "Payment Promise Tracking",
    description:
      "Track payer commitments and enforce timely payments to prevent revenue delays.",
  },
  {
    name: "Denial & AR Routing",
    description:
      "Combine dental and AR management to route issues to the right team promptly.",
  },
];

const specialties = [
  {
    name: "Cardiology",
    description: "Cardiology",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.36 6.36 0 0116.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
    ),
  },
  {
    name: "Family medicine",
    description: "Family medicine",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 10-6 0m9 8v-1a3 3 0 00-3-3H9a3 3 0 00-3 3v1"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 7a2 2 0 11-4 0 2 2 0 014 0zm14 0a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    name: "Durable medical equipment",
    description: "Durable medical equipment",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m2 8H7a2 2 0 01-2-2V8l4-4h6l4 4v10a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    name: "Gastroenterology",
    description: "Gastroenterology",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.5 8.5c0-2.5 2-4.5 5.5-4.5s5.5 2 5.5 4.5c0 3.5-1 6-2.5 7.5C13.5 17.5 12 18 12 18s-1.5-.5-2.5-2C7.5 14 6.5 11.5 6.5 8.5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 11s1 1.5 3 1.5"
        />
      </svg>
    ),
  },
  {
    name: "Home Health",
    description: "Home Health",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 9.75L12 3l9 6.75M4.5 10.5V21h15V10.5M9 21V12h6v9"
        />
      </svg>
    ),
  },
  {
    name: "Orthopedics",
    description: "Orthopedics",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 6.5c1.5-1.5 3.5-1.5 5 0l3 3 3-3c1.5-1.5 3.5-1.5 5 0 1.5 1.5 1.5 3.5 0 5l-3 3 3 3c1.5 1.5 1.5 3.5 0 5-1.5 1.5-3.5 1.5-5 0l-3-3-3 3c-1.5 1.5-3.5 1.5-5 0-1.5-1.5-1.5-3.5 0-5l3-3-3-3c-1.5-1.5-1.5-3.5 0-5z"
        />
      </svg>
    ),
  },
  {
    name: "Primary Care",
    description: "Primary Care",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 9.75v10.5a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75V9.75m15 0L12 3.75m0 0L4.5 9.75m7.5-6v6"
        />
      </svg>
    ),
  },
  {
    name: "Emergency Medicine",
    description: "Emergency Medicine",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v8m4-4H8m-6 4V8a2 2 0 012-2h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    name: "Pediatrics",
    description: "Pediatrics",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM7.5 12a4.5 4.5 0 019 0v5.25a1.125 1.125 0 01-1.125 1.125h-6.75A1.125 1.125 0 017.5 17.25V12z"
        />
      </svg>
    ),
  },
  {
    name: "Behavioral Health",
    description: "Behavioral Health",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3c2 0 3.5 1 4.5 2.5C17.8 6.9 19 8.5 19 10.5c0 2-1 3.5-2.5 4.5S13 16 12 17.5 9.5 17 7.5 16 5 13.5 5 11.5 7 8 8.5 6.5 10 3 12 3z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6M9 12h6" />
      </svg>
    ),
  },
];

export default function ServiceSection() {
  return (
    <div className="sm:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-medium tracking-tight text-gray-900 sm:text-4xl">
            Drive Every Payment Home with AR Follow
            <br />
            Up Services
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 lg:grid-cols-6">
          {services.map((service, index) => {
            const isTwoCardRow = index === 3 || index === 4;
            const cardClass = isTwoCardRow ? "lg:col-span-3" : "lg:col-span-2";
            return (
              <div
                key={service.title}
                className={`flex flex-col rounded-2xl p-8 ring-1 ring-gray-200 ${cardClass}`}
                style={{ backgroundColor: "#dceaf1" }}
              >
                <h3 className="text-lg font-semibold leading-7 text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="mt-6 text-sm font-medium inline-flex items-center hover:text-gray-900"
                >
                  Explore Solutions <ChevronRightIcon />
                </a>
              </div>
            );
          })}
        </div>

        <div className="mx-auto max-w-7xl mt-24 sm:mt-14">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col">
                <dd className="mt-2 text-5xl font-medium tracking-tight text-gray-900">
                  {stat.value}
                </dd>
                <dt className="text-base mt-10 leading-7 text-gray-600">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-24 sm:mt-32">
          <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:justify-between">
            <h2 className="text-4xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              AR Follow-Up Services That
              <br />
              Maximize Recovery and Minimize Delays
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 lg:mt-0 lg:ml-8">
              Our accounts receivable follow-up services simplify payer
              communication and speed up reimbursements. From tracking aged
              claims to closing payment gaps, we ensure your revenue stays in
              motion.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col rounded-2xl p-8 ring-1 ring-gray-200"
                style={{ backgroundColor: "#dceaf1" }}
              >
                <LightningIcon />
                <h3 className="mt-4 text-lg font-semibold leading-7 text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 sm:mt-24">
          <div className="flex flex-col items-center justify-center mx-auto max-w-2xl text-center">
            <ShieldCheckIcon />
            <h2 className="mt-4 text-4xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              Expertise Across Accounts
              <br />
              Receivable Follow Up Services
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {specialties.map((specialty) => (
              <div
                key={specialty.name}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-900">
                  {specialty.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {specialty.name}
                </h3>
                <p className="text-sm text-gray-600">{specialty.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="#"
              className="inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-700"
            >
              View all our experts
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
