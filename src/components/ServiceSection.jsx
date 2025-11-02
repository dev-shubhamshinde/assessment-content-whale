// NO "use client" - This is a Server Component for SEO!

import React from "react";

// --- Icon components ---

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

// --- Specialty Icon components ---

const CardiologyIcon = () => (
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
);

const FamilyMedicineIcon = () => (
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
);

const DmeIcon = () => (
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
);

const GastroenterologyIcon = () => (
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
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 11s1 1.5 3 1.5" />
  </svg>
);

const HomeHealthIcon = () => (
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
);

const OrthopedicsIcon = () => (
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
);

const PrimaryCareIcon = () => (
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
);

const EmergencyMedicineIcon = () => (
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
);

const PediatricsIcon = () => (
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
);

const BehavioralHealthIcon = () => (
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
);

// Map string IDs from JSON to the actual components
const specialtyIconMap = {
  cardiology: CardiologyIcon,
  familyMedicine: FamilyMedicineIcon,
  dme: DmeIcon,
  gastroenterology: GastroenterologyIcon,
  homeHealth: HomeHealthIcon,
  orthopedics: OrthopedicsIcon,
  primaryCare: PrimaryCareIcon,
  emergencyMedicine: EmergencyMedicineIcon,
  pediatrics: PediatricsIcon,
  behavioralHealth: BehavioralHealthIcon,
};

// Accept `serviceData` as a prop
export default function ServiceSection({ serviceData }) {
  return (
    <div className="sm:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Use content from props */}
          <h2
            className="text-4xl font-medium tracking-tight text-gray-900 sm:text-4xl"
            // Use dangerouslySetInnerHTML to render line breaks from JSON
            dangerouslySetInnerHTML={{ __html: serviceData.mainHeadline }}
          />
        </div>
        <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 lg:grid-cols-6">
          {/* Map over services from props */}
          {serviceData.services.map((service, index) => {
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
                  href={service.cta.href}
                  className="mt-6 text-sm font-medium inline-flex items-center hover:text-gray-900"
                >
                  {service.cta.text} <ChevronRightIcon />
                </a>
              </div>
            );
          })}
        </div>

        <div className="mx-auto max-w-7xl mt-24 sm:mt-14">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {/* Map over stats from props */}
            {serviceData.stats.map((stat) => (
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
            <h2
              className="text-4xl font-medium tracking-tight text-gray-900 sm:text-4xl"
              dangerouslySetInnerHTML={{ __html: serviceData.featuresHeadline }}
            />
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 lg:mt-0 lg:ml-8">
              {serviceData.featuresDescription}
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {/* Map over features from props */}
            {serviceData.features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col rounded-2xl p-8 ring-1 ring-gray-200"
                style={{ backgroundColor: "#dceaf1" }}
              >
                {/* We use LightningIcon for all features as per original design */}
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
            <h2
              className="mt-4 text-4xl font-medium tracking-tight text-gray-900 sm:text-4xl"
              dangerouslySetInnerHTML={{ __html: serviceData.specialtiesHeadline }}
            />
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {/* Map over specialties from props */}
            {serviceData.specialties.map((specialty) => {
              const IconComponent =
                specialtyIconMap[specialty.iconId] || CardiologyIcon; // Default icon
              return (
                <div
                  key={specialty.name}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-900">
                    <IconComponent />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    {specialty.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {specialty.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <a
              href={serviceData.specialtiesCta.href}
              className="inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-700"
            >
              {serviceData.specialtiesCta.text}
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
      </div>
    </div>
  );
}
