// NO "use client" - This is a Server Component for SEO!

import React from "react";

// --- Icon Components ---

const UserCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-10 h-10 text-gray-400"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75
           s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75
           S17.385 2.25 12 2.25zm0 3a3 3 0 110 6 3 3 0 010-6zM6.52 17.54
           a7.47 7.47 0 0110.96 0A8.963 8.963 0 0112 20.25
           a8.963 8.963 0 01-5.48-2.71z"
      clipRule="evenodd"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 text-yellow-400"
  >
    <path
      fillRule="evenodd"
      d="M10.868 2.884a.75.75 0 00-1.35 0L7.84 6.338
           l-3.81.554a.75.75 0 00-.416 1.279l2.758 2.687
           -.65 3.795a.75.75 0 001.088.791L10 13.347
           l3.4 1.787a.75.75 0 001.088-.79l-.65-3.796
           2.758-2.687a.75.75 0 00-.416-1.279l-3.81-.554
           -1.68-3.454z"
      clipRule="evenodd"
    />
  </svg>
);

// --- Main Component ---

// Accept `supportData` as a prop
export default function SupportAndTestimonialSection({ supportData }) {
  return (
    <div className="bg-white py-24 sm:py-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl">
          <div className="mx-auto max-w-2xl text-center">
            {/* Use content from props */}
            <h2
              className="text-4xl font-medium tracking-tight text-gray-900 sm:text-4xl"
              dangerouslySetInnerHTML={{ __html: supportData.insightsHeadline }}
            />
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Map over insights from props */}
            {supportData.insights.map((item, index) => (
              <div
                key={index}
                className="flex flex-col bg-white p-6 rounded-lg shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <div className="mt-6 flex items-center gap-x-4">
                  <UserCircleIcon />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {item.author}
                    </p>
                    <p className="text-sm text-gray-600">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 sm:mt-12">
          <div className="mx-auto max-w-2xl text-center">
            {/* Use content from props */}
            <h2
              className="text-4xl font-medium tracking-tight text-gray-900 sm:text-4xl"
              dangerouslySetInnerHTML={{
                __html: supportData.testimonialsHeadline,
              }}
            />
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {supportData.testimonialsDescription}
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Map over testimonials from props */}
            {supportData.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col rounded-2xl p-8 shadow-lg"
                style={{
                  backgroundColor: "#005892",
                }}
              >
                <div className="flex items-center gap-x-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                </div>
                <p className="mt-6 text-base leading-7 text-gray-200">
                  {testimonial.quote}
                </p>
                <div className="mt-6 flex items-center gap-x-4">
                  <UserCircleIcon />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-300">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
