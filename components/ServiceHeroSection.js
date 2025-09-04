// components/ServiceHeroSection.js

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/utils";

export default function ServiceHeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#0B1221] to-[#111A2E] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
        {/* Heading */}
        <motion.h1
          className="font-display font-bold sm:font-extrabold text-3xl sm:text-4xl lg:text-6xl leading-[120%]"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Data Services Built For Clarity And Momentum.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-6 font-sans font-normal text-sm sm:text-base lg:text-xl text-gray-300 leading-relaxed"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          Turn raw data into decisions with strategy, dashboards, and smart
          automations—delivered fast and measured by outcomes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          {/* Primary CTA */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://kartikbhask.systeme.io/j2bebook-oto-call-ea16ec82-f57c408e"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-base sm:text-lg font-sans font-semibold text-white bg-[#06B6D4] rounded-2xl shadow-md hover:bg-cyan-500 transition-colors"
            >
              Book a Strategy Call
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#"
              className="px-6 py-3 text-base sm:text-lg font-sans font-semibold text-white border border-gray-500 rounded-2xl hover:bg-white/10 transition-colors"
            >
              Request a Data Audit
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


