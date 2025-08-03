import Head from "next/head";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import SuccessGraph from "../components/SuccessGraph";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>StatixGrowth</title>
      </Head>

      <HeroSection />
      <WhyChooseUs />
      <SuccessGraph />
      <ServicesSection />
      <Footer />
    </>
  );
}
















