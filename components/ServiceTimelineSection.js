// components/ServiceTimelineSection.js

"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/utils";
import Image from "next/image";

export default function ServiceTimelineSection() {
  return (
    <section
      id="timeline"
      className="bg-[#0B1221] text-white py-20 sm:py-28 border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Safe grid layout: 3/5 text, 2/5 image */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="lg:col-span-3">
            <motion.div
              className="text-center lg:text-left"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[120%]">
                Timeline
              </h2>
            </motion.div>

            <motion.p
              className="mt-3 text-center lg:text-left font-sans text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            >
              Most projects run in <strong>2–4 weeks</strong>, depending on
              scope, data sources, and historical clean-up requirements.
            </motion.p>

            <motion.div
              className="mt-4 space-y-4"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
              <h3 className="font-display font-semibold text-xl text-white text-center lg:text-left">
                Examples by Market
              </h3>
              <ul className="list-disc list-inside font-sans text-gray-300 text-sm sm:text-base lg:text-lg space-y-2">
                <li>
                  <strong>E-commerce:</strong> revenue by channel/cohort,
                  merchandising performance, funnel drop-offs, campaign ROI,
                  alerts for stockouts or CPC spikes.
                </li>
                <li>
                  <strong>Real Estate:</strong> source-to-closing timeline,
                  agent performance, listing velocity, and segmentation by
                  neighborhood or builder.
                </li>
                <li>
                  <strong>Fitness/Wellness:</strong> class occupancy,
                  trial-to-membership conversion, no-show rate, and retention
                  by program.
                </li>
                <li>
                  <strong>Local Services:</strong> calls, quotes, jobs, average
                  ticket size, technician utilization, and review velocity with
                  locality heatmaps.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right: Local PNG Image with Hover Effect */}
          <motion.div
            className="lg:col-span-2 flex justify-center lg:justify-end items-center lg:pl-12 xl:pl-16"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 25px rgba(6,182,212,0.4)",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="rounded-2xl cursor-pointer"
            >
              <Image
                src="/Timline.png" // file inside public/
                alt="Timeline Dashboard"
                width={500}
                height={350}
                className="rounded-2xl w-[300px] sm:w-[380px] lg:w-[400px] h-auto"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}











