// components/ServiceOutcomesSection.js

"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/utils";
import { Target } from "lucide-react";
import Link from "next/link";

export default function ServiceOutcomesSection() {
  return (
    <section
      id="outcomes"
      className="bg-[#0B1221] text-white py-20 sm:py-28 border-t border-gray-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Icon + Title */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Target className="w-12 h-12 sm:w-14 sm:h-14 text-[#06B6D4] drop-shadow-[0_0_10px_#06B6D4]" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[120%]">
            Outcomes
          </h2>
        </motion.div>

        {/* Intro */}
        <motion.p
          className="mt-6 text-center font-sans text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          A 1-page roadmap that makes growth decisions faster and repeatable.
          It captures KPIs, targets, owners, and review rhythms so teams stay
          aligned and progress remains visible.
        </motion.p>

        {/* Bullet List */}
        <motion.div
          className="mt-10 space-y-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <h3 className="font-display font-semibold text-xl text-white">
            What you get
          </h3>
          <ul className="list-disc list-inside font-sans text-gray-300 text-sm sm:text-base lg:text-lg space-y-2">
            <li>A clear 1-page roadmap linking KPIs, targets, and owners.</li>
            <li>Simple dashboards to answer key business questions at a glance.</li>
            <li>Automations that remove repetitive work and reduce errors.</li>
            <li>Stakeholder alignment on a 90-day build order tied to growth and efficiency.</li>
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-10 flex justify-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.6 }}
        >
          <Link
            href="#"
            className="px-6 py-3 text-base sm:text-lg font-sans font-semibold text-white bg-[#06B6D4] rounded-2xl shadow-md hover:bg-cyan-500 transition-colors"
          >
            See My Outcomes Plan
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
