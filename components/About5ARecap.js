// components/About5ARecap.js
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Search, BarChart3, Sliders, Play, Rocket } from "lucide-react";

const SHOW_SECONDARY_CTA = false;

export default function About5ARecap() {
  const steps = [
    {
      Icon: Search,
      label: "Audit",
      copy: "Inventory data and objectives to find immediate leverage.",
    },
    {
      Icon: BarChart3,
      label: "Analyze",
      copy: "Prioritize insights with clear targets and owners.",
    },
    {
      Icon: Sliders,
      label: "Apply",
      copy: "Launch dashboards/automations for fast wins.",
    },
    {
      Icon: Play,
      label: "Act",
      copy: "Execute and measure changes against KPIs.",
    },
    {
      Icon: Rocket,
      label: "Accelerate",
      copy: "Optimize, scale, and train for independence.",
    },
  ];

  return (
    <section className="relative z-0 bg-[#0F1A2E] text-white py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="font-display tracking-tight text-white text-2xl sm:text-3xl md:text-5xl font-semibold md:font-bold leading-[1.2]">
            How the 5A Framework Works
          </h3>
          <p className="font-sans mt-3 text-sm sm:text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
            A simple, five-step path—from audit to acceleration—keeps decisions
            clear and the next action obvious.
          </p>
        </motion.div>

        {/* Two-column layout (stacked on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT: one-line explanations */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="space-y-4"
          >
            {steps.map(({ Icon, label, copy }, i) => (
              <div
                key={i}
                className="bg-[#0a0f1c]/60 border border-cyan-500/10 rounded-xl p-4 sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-cyan-400/40 bg-[#0a0f1c] shrink-0"
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5 text-cyan-400" strokeWidth={2.2} />
                  </span>
                  <p className="font-sans text-sm sm:text-[15px] md:text-base leading-snug text-gray-200 break-words">
                    <span className="font-semibold">{label}:</span>{" "}
                    <span className="text-gray-300">{copy}</span>
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* RIGHT: circular flow */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="flex justify-center lg:justify-end mt-10 lg:mt-0"
          >
            <CircularFlow5A steps={steps} />
          </motion.div>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-3 justify-center"
        >
          <Link
            href="https://kartikbhask.systeme.io/job-to-business-ebook-f337b6f0-a48c36d9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get a copy of the guide"
            className="inline-flex items-center justify-center px-10 py-3 rounded-xl font-sans font-semibold bg-cyan-500 text-[#0B1220] hover:bg-cyan-400 transition-colors duration-200 text-lg"
          >
            Get a copy
          </Link>
          {SHOW_SECONDARY_CTA && (
            <Link
              href="#"
              aria-label="Get the Audit Template"
              className="inline-flex items-center justify-center px-10 py-3 rounded-xl font-sans font-semibold border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 transition-colors duration-200 text-lg"
            >
              Get the Audit Template
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* ===== Optimized Circular Flow for Mobile ===== */
function CircularFlow5A({ steps }) {
  const circleRef = useRef(null);
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    const updateRadius = () => {
      if (circleRef.current) {
        const { width } = circleRef.current.getBoundingClientRect();
        setRadius(width / 2.4); // slightly reduced radius for better spacing
      }
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      <div
        ref={circleRef}
        className="relative aspect-square w-[220px] sm:w-[240px] md:w-[280px] lg:w-[320px] rounded-full border border-cyan-500/40"
      >
        {steps.map(({ Icon, label }, i) => {
          const angle = (i * 360) / steps.length - 90;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <div
              key={i}
              className="absolute flex items-center justify-center"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="flex flex-col items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full border border-cyan-400 bg-[#0a0f1c] shadow-md hover:scale-105 transition-transform duration-300">
                <Icon
                  className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 text-cyan-400"
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
                <span className="font-sans text-[11px] sm:text-xs md:text-sm mt-1 text-gray-300">
                  {label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}














