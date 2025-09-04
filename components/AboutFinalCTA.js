import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutFinalCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center rounded-2xl shadow-xl hover:shadow-2xl transition max-w-5xl mx-auto mt-16 mb-16">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl font-extrabold mb-6"
      >
        Ready to Transform Your Business with Data?
      </motion.h2>

      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-lg mb-8 max-w-2xl mx-auto"
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
        className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition"
      >
        Get in Touch
      </motion.a>
    </section>
  );
}



