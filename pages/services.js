// app/services.js (or pages/services.js depending on your setup)

import ServiceHeroSection from "@/components/ServiceHeroSection";
import ServiceHubOverview from "@/components/ServiceHubOverview";
import ServiceStrategySection from "@/components/ServiceStrategySection";
import ServiceOutcomesSection from "@/components/ServiceOutcomesSection";
import ServiceDeliverablesSection from "@/components/ServiceDeliverablesSection";
import ServiceProcessSection from "@/components/ServiceProcessSection"; // ✅ new import

export default function ServicesPage() {
  return (
    <>
      <ServiceHeroSection />
      <ServiceHubOverview />
      <ServiceStrategySection />
      <ServiceOutcomesSection />
      <ServiceDeliverablesSection />
      <ServiceProcessSection />   {/* ✅ new section added */}
    </>
  );
}












