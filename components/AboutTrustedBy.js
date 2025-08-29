// components/AboutTrustedBy.js
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function AboutTrustedBy() {
  return (
    <section className="bg-[#0B1220] text-white py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        {/* Heading matches AboutHero scale */}
        <h3
          className="font-display tracking-tight text-white mb-2
                     text-2xl sm:text-3xl md:text-5xl
                     font-semibold md:font-bold leading-[1.2]"
        >
          Trusted by growing businesses
        </h3>

        {/* Stats Row */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <StatItem number="50+" label="hours saved monthly" />
          <Divider />
          <StatItem number="12+" label="growth channels identified" />
          <Divider />
          <StatItem number="70%" label="faster reporting" />
        </motion.div>

        {/* Testimonial */}
        <motion.blockquote
          className="max-w-xl mx-auto text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="font-sans italic text-gray-300 flex items-start
                        text-sm sm:text-base md:text-xl">
            <Quote className="w-5 h-5 mr-2 text-cyan-400 shrink-0" aria-hidden="true" />
            “Cut weekly reporting from 4 hours to 45 minutes.”
          </p>
          <cite className="font-sans mt-2 block text-sm sm:text-base text-gray-400">
            — Marketing Lead, Real Estate
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
}

function StatItem({ number, label }) {
  return (
    <div className="flex flex-col items-center md:items-start">
      {/* Numbers made bigger but still matching AboutHero */}
      <span className="font-sans font-semibold text-cyan-300
                       text-base sm:text-lg md:text-2xl">
        {number}
      </span>
      <span className="font-sans text-gray-300
                       text-sm sm:text-base md:text-xl">
        {label}
      </span>
    </div>
  );
}

function Divider() {
  return <div className="hidden md:block w-px h-10 bg-cyan-300/25" />;
}
