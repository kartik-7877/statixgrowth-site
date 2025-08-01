// components/HeroSection.js
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1e1b4b] to-[#3b0764] text-white flex items-center justify-center px-6">
      <motion.div
        className="max-w-4xl text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Grow Your Sales <br />
          <span className="text-blue-400">by 15% in Just One Month</span>
        </h1>
        <p className="text-lg text-gray-300">
          Make smarter, data-driven decisions that move your business forward — faster.
        </p>
        <p className="text-md text-gray-400">
          At <span className="text-white font-semibold">StatixGrowth</span>, we turn raw data into actionable strategies
          that unlock revenue opportunities, improve conversions, and help you outperform competitors.
        </p>
        <motion.a
          href="https://kartikbhask.systeme.io/j2bebook-oto-call-ea16ec82-cc9f0140"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200 inline-block"
        >
          Book a Free Strategy Call
        </motion.a>
      </motion.div>
    </section>
  );
}


