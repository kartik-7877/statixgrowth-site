import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutFinalCTA() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center rounded-2xl shadow-xl hover:shadow-2xl transition max-w-5xl mx-auto mt-10 sm:mt-12 mb-12 sm:mb-16 px-4 sm:px-6 font-sans">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-6"
      >
        Ready to Transform Your Business with Data?
      </motion.h2>

      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-sm sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto"
      >
        Let’s collaborate to turn your raw data into decision-ready insights and automations. 
        From dashboards to workflows, I’ll help you grow with clarity and speed.
      </motion.p>

      <motion.a
        href="/contact"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="inline-block bg-white text-blue-700 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition text-sm sm:text-base"
      >
        Get in Touch
      </motion.a>
    </section>
  );
}




