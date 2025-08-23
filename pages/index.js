import Head from "next/head";
import HeroSection from "../components/HeroSection";
import WhoIHelpSection from "../components/WhoIHelpSection";
import WhyWorkWithUs from "../components/WhyWorkWithUs";
import FrameworkVisual from "../components/FrameworkVisual";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>StatixGrowth</title>
        <meta
          name="description"
          content="Accelerating sustainable growth with the 5A Data Success Framework."
        />
        <meta
          name="keywords"
          content="growth, data, analytics, automation, business intelligence, dashboards"
        />
      </Head>

      <HeroSection />
      <WhoIHelpSection />
      <WhyWorkWithUs />
      <FrameworkVisual />
      <Footer />
    </>
  );
}





















