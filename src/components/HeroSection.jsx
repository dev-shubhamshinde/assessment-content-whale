// NO "use client" - This is now a Server Component for SEO!

import React from "react";

// --- Icon components ---
// (We keep these in the component file)

const EmrIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-blue-900"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.75M9 11.25h6.75M9 15.75h6.75M9 20.25h6.75"
    />
  </svg>
);

const AuthIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-blue-900"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const StatesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-blue-900"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className="w-5 h-5 ml-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className="w-5 h-5 ml-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
    />
  </svg>
);
// --- End Icon components ---

// Map string IDs from JSON to the actual components
const iconMap = {
  emr: EmrIcon,
  auth: AuthIcon,
  states: StatesIcon,
};

// Accept `heroData` as a prop
export default function HeroSection({ heroData }) {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-16 lg:px-8 lg:py-12">
        <div className="relative z-10">
          {/* Use content from props */}
          <h1 className="text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl lg:text-4xl">
            {heroData.headline}
          </h1>
          {/* Use content from props */}
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {heroData.description}
          </p>

          <div className="mt-12 space-y-8">
            {/* Map over features from props */}
            {heroData.features.map((feature) => {
              // Get the correct icon component from our map
              const IconComponent = iconMap[feature.iconId] || EmrIcon;
              return (
                <div key={feature.name} className="flex gap-x-4">
                  <div className="flex-shrink-0">
                    <IconComponent aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-1 text-base leading-7 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
            {/* Use CTA content from props */}
            <a
              href={heroData.primaryCta.href}
              className="flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              {heroData.primaryCta.text}
              <ArrowRightIcon />
            </a>
            <a
              href={heroData.secondaryCta.href}
              className="flex items-center text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700"
            >
              {heroData.secondaryCta.text}
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>
        <div className="hidden lg:block" aria-hidden="true"></div>
      </div>
    </div>
  );
}

