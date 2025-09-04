// components/ServiceStrategySection.js

"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/utils";
import { Compass } from "lucide-react";
import Link from "next/link";

export default function ServiceStrategySection() {
  return (
    <section
      id="strategy"
      className="bg-[#0B1221] text-white py-20 sm:py-28 border-t border-gray-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Icon + Title */}
        <motion.div
          className="flex items-center justify-center gap-3 text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Compass className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-[#06B6D4] drop-shadow-[0_0_10px_#06B6D4]" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[120%]">
            Data Strategy Sessions
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
          A focused working session to align leadership, clarify KPIs, and set a
          90-day plan that drives faster decisions.
        </motion.p>

        {/* Who it’s for */}
        <motion.div
          className="mt-10 space-y-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <h3 className="font-display font-semibold text-xl text-white">
            Who it’s for
          </h3>
          <ul className="list-disc list-inside font-sans text-gray-300 text-sm sm:text-base lg:text-lg space-y-2">
            <li>
              Founders/operators needing a clear growth roadmap without tool
              bloat.
            </li>
            <li>
              Teams stuck in spreadsheets or slow cycles who need one source of
              truth.
            </li>
            <li>
              Organizations wanting KPIs tied to outcomes and automation
              priorities.
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
            Get My Strategy Plan
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

