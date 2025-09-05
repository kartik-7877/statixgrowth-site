import ServiceHeroSection from "@/components/ServiceHeroSection";
import ServiceHubOverview from "@/components/ServiceHubOverview";   // ✅ Correct
import ServiceStrategySection from "@/components/ServiceStrategySection";
import ServiceOutcomesSection from "@/components/ServiceOutcomesSection";
import ServiceDeliverablesSection from "@/components/ServiceDeliverablesSection";
import ServiceProcessSection from "@/components/ServiceProcessSection";
import ServiceTimelineSection from "@/components/ServiceTimelineSection"; // ✅ new

export default function ServicesPage() {
  return (
    <>
      <ServiceHeroSection />
      <ServiceHubOverview />
      <ServiceStrategySection />
      <ServiceOutcomesSection />
      <ServiceDeliverablesSection />
      <ServiceProcessSection />
      <ServiceTimelineSection />   {/* ✅ new section */}
    </>
  );
}













