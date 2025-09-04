// components/ServiceDeliverablesSection.js

"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/utils";
import { ClipboardCheck } from "lucide-react";
import Link from "next/link";

export default function ServiceDeliverablesSection() {
  return (
    <section
      id="deliverables"
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
          <ClipboardCheck className="w-12 h-12 sm:w-14 sm:h-14 text-[#06B6D4] drop-shadow-[0_0_10px_#06B6D4]" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[120%]">
            Deliverables
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
          You leave the session with concrete outputs—not just ideas—so the plan
          is actionable from day one.
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
            <li>
              A 60–90 min workshop with leadership and team leads to align goals,
              metrics, and constraints.
            </li>
            <li>
              A 1-page prioritized plan with KPIs, targets, review cadence, and
              first sprints sequenced by impact.
            </li>
            <li>
              An implementation checklist covering sources, access, governance,
              and adoption steps.
            </li>
            <li>
              (Optional) A lightweight dashboard wireframe and pilot automation
              to kickstart momentum.
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
            See Deliverables
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
