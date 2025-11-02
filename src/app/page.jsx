import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import SupportAndTestimonialSection from "@/components/SupportAndTestimonialSection";
import FaqSection from "@/components/FaqSection";

// Import your new "CMS" content
import homeContent from "../content/home.json";

// --- THIS IS THE NEW LINE ---
// Export the metadata from our JSON file
export const metadata = homeContent.metadata;
// -----------------------------

export default function Home() {
  return (
    <main>
      <div className="with-bg-pattern">
        <Header />
        {/* Pass the hero content as a prop */}
        <HeroSection heroData={homeContent.hero} />
      </div>
      {/* Pass the service section content as a prop */}
      <ServiceSection serviceData={homeContent.serviceSection} />
      {/* Pass the support/testimonial content as a prop */}
      <SupportAndTestimonialSection
        supportData={homeContent.supportAndTestimonialSection}
      />
      {/* Pass the faq content as a prop */}
      <FaqSection faqData={homeContent.faqSection} />
    </main>
  );
}

