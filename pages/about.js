// pages/about.js
import { motion } from "framer-motion";
import AboutHero from "@/components/AboutHero";
import AboutStoryMission from "@/components/AboutStoryMission";
import AboutCoreValues from "@/components/AboutCoreValues";
import AboutExperienceTimeline from "@/components/AboutExperienceTimeline";
import AboutTrustedBy from "../components/AboutTrustedBy"; // 👈 relative import for test

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutPage() {
  return (
    <>
      <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <AboutHero />
      </motion.div>

      <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <AboutStoryMission />
      </motion.div>

      <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <AboutCoreValues />
      </motion.div>

      <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <AboutExperienceTimeline />
      </motion.div>

      <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <AboutTrustedBy />   {/* 👌 should load now */}
      </motion.div>
    </>
  );
}































