import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const listContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const listItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const faqs = [
  {
    question: "How long does a typical engagement take?",
    answer:
      "Most projects run 2–6 weeks from audit to delivered dashboards/automations. Using Excel, Power BI, Python, and MySQL, I adapt to your business needs and ensure delivery speed without sacrificing quality.",
  },
  {
    question: "What tools are used?",
    answer:
      "I specialize in Excel, Power BI, Python, and MySQL. These cover dashboards, automation, and analysis across industries (e-commerce, real estate, local businesses, gyms, boutiques). I don’t lock you into one vendor; instead, I adapt tools to your context.",
  },
  {
    question: "What deliverables are included?",
    answer:
      "You’ll get a prioritized action plan, decision-ready dashboards (Power BI or Excel), and core automations (Python scripts or SQL processes) to reduce manual work.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Fixed-scope packages for smaller builds and milestone-based pricing for larger/custom projects. Pricing is transparent and agreed upon before we start.",
  },
  {
    question: "What does onboarding require?",
    answer:
      "Access to your data sources (databases, spreadsheets, or APIs), one point of contact, and clarity on your KPIs. I provide a short checklist to keep onboarding smooth.",
  },
  {
    question: "Can the team be trained to maintain dashboards?",
    answer:
      "Yes. I provide Loom walkthroughs and short docs so your team can update and extend dashboards independently. If needed, I can run a short training session.",
  },
];

export default function AboutFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 font-sans text-gray-800">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
        Frequently Asked Questions
      </h2>

      <motion.div
        variants={listContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-4"
      >
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <motion.div
              key={index}
              variants={listItem}
              className="border rounded-xl shadow-sm bg-white overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-base sm:text-lg hover:bg-gray-50 transition"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <motion.div
                  initial={false}
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-4 sm:px-6 pb-3 sm:pb-4 text-sm sm:text-base text-gray-700"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}





