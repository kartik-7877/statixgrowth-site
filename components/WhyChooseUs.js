import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-r from-purple-800 to-blue-800 text-white pt-20 pb-20 md:pt-28 md:pb-28 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            At StatixGrowth
          </motion.h2>

          <motion.p
            className="mt-6 text-lg text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            At StatixGrowth, we specialize in helping ambitious <strong>entrepreneurs</strong> and small business owners boost their sales through data-backed decisions.
          </motion.p>

          <motion.p
            className="mt-4 text-base text-gray-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            We believe in clarity over guesswork, and our mission is simple:
            drive real results through smart strategies.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center items-center mt-6 md:mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px]">
            <Image
              src="/growth-chart.png"
              alt="Data-driven business growth"
              fill
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
























