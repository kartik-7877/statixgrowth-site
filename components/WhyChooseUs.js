// components/WhyChooseUs.js

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-r from-purple-800 to-blue-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">At StatixGrowth</h2>
          <p className="text-lg leading-relaxed mb-4">
            At StatixGrowth, we specialize in helping ambitious <strong>entrepreneurs</strong> and small business owners boost their sales through data-backed decisions.
          </p>
          <p className="text-lg leading-relaxed">
            We believe in clarity over guesswork, and our mission is simple: drive real results through smart strategies.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center items-center mt-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-[360px] h-[360px]">
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


















