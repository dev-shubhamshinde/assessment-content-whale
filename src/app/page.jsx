import FaqSection from "@/components/FaqSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import SupportAndTestimonialSection from "@/components/SupportAndTestimonialSection";

export default function Home() {
  return (
    <main>
      <div className="with-bg-pattern">
        <Header />
        <HeroSection />
      </div>
      <ServiceSection />
      <SupportAndTestimonialSection />
      <FaqSection />
    </main>
  );
}
