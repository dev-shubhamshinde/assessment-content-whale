import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import SupportAndTestimonialSection from "@/components/SupportAndTestimonialSection";
import FaqSection from "@/components/FaqSection";

import homeContent from "../content/home.json";

export const metadata = homeContent.metadata;
export default function Home() {
  return (
    <main>
      <div className="with-bg-pattern">
        <Header />
        <HeroSection heroData={homeContent.hero} />
      </div>
      <ServiceSection serviceData={homeContent.serviceSection} />
      <SupportAndTestimonialSection
        supportData={homeContent.supportAndTestimonialSection}
      />
      <FaqSection faqData={homeContent.faqSection} />
    </main>
  );
}
