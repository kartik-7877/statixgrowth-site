// components/ServiceProcessSection.js

"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/utils";
import { Workflow } from "lucide-react";
import Link from "next/link";

export default function ServiceProcessSection() {
  return (
    <section
      id="process"
      className="bg-[#0B1221] text-white py-20 sm:py-28 border-t border-gray-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Icon + Title */}
        <motion.div
          className="flex flex-row items-center justify-center gap-3 text-center sm:text-left"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Workflow className="w-12 h-12 sm:w-14 sm:h-14 text-[#06B6D4] drop-shadow-[0_0_10px_#06B6D4]" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[120%]">
            Process (5A Recap)
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
          A structured 5-step framework (5A) to turn scattered data into
          clarity, momentum, and sustained execution.
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
            The 5A Steps
          </h3>
          <ul className="list-disc list-inside font-sans text-gray-300 text-sm sm:text-base lg:text-lg space-y-2">
            <li>
              <strong>Audit:</strong> Inventory metrics, sources, and rituals to
              expose gaps and vanity signals.
            </li>
            <li>
              <strong>Analyze:</strong> Map KPIs to goals, clarifying definitions
              so every metric has purpose.
            </li>
            <li>
              <strong>Apply:</strong> Propose the smallest viable data model,
              dashboards, and review cadence.
            </li>
            <li>
              <strong>Act:</strong> Translate insights into owners, meeting
              rhythms, and escalation paths.
            </li>
            <li>
              <strong>Accelerate:</strong> Launch quick-win automations and
              experiments to compound progress.
            </li>
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
            Explore the 5A Framework
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

