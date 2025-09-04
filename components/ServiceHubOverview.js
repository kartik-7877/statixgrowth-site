// components/ServiceHubOverview.js

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import { Compass, BarChart3, Workflow, Users } from "lucide-react";

export default function ServiceHubOverview() {
  return (
    <section className="bg-[#0B1221] text-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Intro */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-6xl leading-[120%]">
            Services Overview
          </h2>
          <p className="mt-6 font-sans font-normal text-sm sm:text-base lg:text-xl text-gray-300 leading-relaxed">
            Scan the mission map, lock onto the right service, and dive deeper
            fast. Each service follows the same playbook for clarity and
            momentum.
          </p>
        </motion.div>

        {/* Services Row */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Service 1 */}
          <motion.div variants={fadeInUp}>
            <Link href="#strategy" className="block group">
              <Compass className="mx-auto w-10 h-10 sm:w-12 sm:h-12 text-[#06B6D4] drop-shadow-[0_0_8px_#06B6D4] transition-transform duration-300 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_#06B6D4]" />
              <h3 className="mt-4 font-display font-semibold text-lg sm:text-xl text-white">
                Data Strategy
              </h3>
              <p className="mt-2 font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
                A 1-page plan to clarify KPIs, targets, and next 90-day moves.
              </p>
            </Link>
          </motion.div>

          {/* Service 2 */}
          <motion.div variants={fadeInUp}>
            <Link href="#dashboards" className="block group">
              <BarChart3 className="mx-auto w-10 h-10 sm:w-12 sm:h-12 text-[#06B6D4] drop-shadow-[0_0_8px_#06B6D4] transition-transform duration-300 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_#06B6D4]" />
              <h3 className="mt-4 font-display font-semibold text-lg sm:text-xl text-white">
                Custom Dashboards
              </h3>
              <p className="mt-2 font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
                Single source of truth that cuts prep time and shows trends.
              </p>
            </Link>
          </motion.div>

          {/* Service 3 */}
          <motion.div variants={fadeInUp}>
            <Link href="#automation" className="block group">
              <Workflow className="mx-auto w-10 h-10 sm:w-12 sm:h-12 text-[#06B6D4] drop-shadow-[0_0_8px_#06B6D4] transition-transform duration-300 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_#06B6D4]" />
              <h3 className="mt-4 font-display font-semibold text-lg sm:text-xl text-white">
                Automation Setup
              </h3>
              <p className="mt-2 font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
                Automate reports and workflows—free your team from busywork.
              </p>
            </Link>
          </motion.div>

          {/* Service 4 */}
          <motion.div variants={fadeInUp}>
            <Link href="#consulting" className="block group">
              <Users className="mx-auto w-10 h-10 sm:w-12 sm:h-12 text-[#06B6D4] drop-shadow-[0_0_8px_#06B6D4] transition-transform duration-300 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_#06B6D4]" />
              <h3 className="mt-4 font-display font-semibold text-lg sm:text-xl text-white">
                Ongoing Consulting
              </h3>
              <p className="mt-2 font-sans text-sm sm:text-base text-gray-300 leading-relaxed">
                Continuous improvements and reviews to keep systems battle-ready.
              </p>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

