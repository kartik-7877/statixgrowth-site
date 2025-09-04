// pages/about.js
import { motion } from "framer-motion";

// 👇 relative paths to components
import AboutHero from "../components/AboutHero";
import AboutStoryMission from "../components/AboutStoryMission";
import AboutCoreValues from "../components/AboutCoreValues";
import AboutExperienceTimeline from "../components/AboutExperienceTimeline";
import AboutTrustedBy from "../components/AboutTrustedBy";
import About5ARecap from "../components/About5ARecap";
import AboutTeamSection from "../components/AboutTeamSection";
import AboutFAQ from "../components/AboutFAQ";        
import AboutFinalCTA from "../components/AboutFinalCTA";
import Footer from "../components/Footer";   // 👈 Footer import

// 🔹 Container + FadeIn Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={fadeIn}>
        <AboutHero />
      </motion.div>

      <motion.div variants={fadeIn}>
        <AboutStoryMission />
      </motion.div>

      <motion.div variants={fadeIn}>
        <AboutCoreValues />
      </motion.div>

      <motion.div variants={fadeIn}>
        <AboutExperienceTimeline />
      </motion.div>

      <motion.div variants={fadeIn}>
        <AboutTrustedBy />
      </motion.div>

      <motion.div variants={fadeIn}>
        <AboutTeamSection />
      </motion.div>

      <motion.div variants={fadeIn}>
        <About5ARecap />
      </motion.div>

      {/* 👇 FAQ Section */}
      <motion.div variants={fadeIn}>
        <AboutFAQ />
      </motion.div>

      {/* 👇 Final CTA Section */}
      <motion.div variants={fadeIn}>
        <AboutFinalCTA />
      </motion.div>

      {/* 👇 Footer Section with spacing */}
      <motion.div variants={fadeIn} className="mt-12">
        <Footer />
      </motion.div>
    </motion.div>
  );
}







































