"use client";

import { motion } from "framer-motion";
import {
  Target,
  TrendingUp,
  ShieldCheck,
  Handshake,
  RefreshCw,
} from "lucide-react";

/** -----------------------------------------------
 *  AboutCoreValues Section
 *  - Only md breakpoint tweaks for card subheading & paragraph
 * ------------------------------------------------ */

const VALUES = [
  {
    title: "Clarity over complexity",
    desc:
      "We deliver clear insights that cut through noise, so decisions are simple and confident.",
    Icon: Target,
  },
  {
    title: "Results that matter",
    desc:
      "Our work is measured by outcomes—revenue, qualified leads, and hours saved.",
    Icon: TrendingUp,
  },
  {
    title: "Integrity first",
    desc:
      "We provide honest advice, transparent reporting, and realistic expectations at every step.",
    Icon: ShieldCheck,
  },
  {
    title: "Partnership mindset",
    desc:
      "We collaborate closely, implement together, and support beyond the handoff.",
    Icon: Handshake,
  },
  {
    title: "Continuous improvement",
    desc:
      "We ship, measure, and refine—because small changes compound into sustainable growth.",
    Icon: RefreshCw,
  },
];

const sectionFade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const gridStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardFade = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AboutCoreValues() {
  return (
    <section className="relative bg-[#101B33] py-16 sm:py-20 px-6 sm:px-12 overflow-hidden">
      {/* Background accent grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]
        [background-image:radial-gradient(rgba(0,200,255,0.18)_1px,transparent_1px)]
        [background-size:42px_42px]"
      />

      <motion.div
        variants={sectionFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative max-w-6xl mx-auto"
      >
        {/* Section Title (unchanged) */}
        <h2
          className="font-display text-white mb-3
                     text-2xl sm:text-3xl md:text-5xl
                     font-bold leading-[1.2] tracking-tight"
        >
          Core Values at StatixGrowth
        </h2>

        {/* Intro Line (unchanged) */}
        <p
          className="font-sans text-gray-300 max-w-3xl
                     text-sm sm:text-base md:text-xl leading-relaxed"
        >
          These principles guide every partnership—from the first audit to long-term growth.
        </p>

        {/* Values Grid */}
        <motion.div
          variants={gridStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-5 md:gap-6"
        >
          {VALUES.map(({ title, desc, Icon }, i) => {
            const titleId = `value-title-${i}`;
            const descId = `value-desc-${i}`;

            const mobileLastCardClass =
              i === 4 ? "col-span-2 justify-self-center sm:col-span-1" : "";

            return (
              <motion.article
                key={title}
                variants={cardFade}
                aria-label={title}
                aria-labelledby={titleId}
                aria-describedby={descId}
                className={`group relative rounded-2xl border border-[#1E2A44] bg-[#0F1A2E]
                           p-4 sm:p-5 md:p-5
                           transition-all duration-300 ease-out
                           hover:-translate-y-1 hover:shadow-lg
                           hover:border-cyan-400/40 focus-within:border-cyan-400/50
                           focus-within:shadow-lg outline-none ${mobileLastCardClass}`}
                tabIndex={0}
              >
                {/* top hairline glow */}
                <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

                {/* icon (unchanged) */}
                <div className="mb-3 md:mb-4 inline-flex items-center justify-center rounded-xl
                                bg-white/0 text-cyan-300 group-hover:text-cyan-400
                                transition-colors duration-300">
                  <Icon aria-hidden="true" className="h-6 w-6 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                </div>

                {/* card subheading — md font size slightly smaller */}
                <h3
                  id={titleId}
                  className="font-display text-white
                             text-lg sm:text-xl md:text-xl
                             font-semibold leading-snug"
                >
                  {title}
                </h3>

                {/* card paragraph — md font size & line-height slightly tighter */}
                <p
                  id={descId}
                  className="font-sans text-gray-300 mt-1.5 md:mt-1
                             text-sm sm:text-base md:text-lg
                             leading-relaxed md:leading-snug"
                >
                  {desc}
                </p>

                {/* hover ring */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-cyan-400/0 transition-all duration-300 group-hover:ring-1 group-hover:ring-cyan-400/25" />
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

