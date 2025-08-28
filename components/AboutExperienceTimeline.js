// components/AboutExperienceTimeline.js
import { motion } from "framer-motion";

export default function AboutExperienceTimeline() {
  return (
    <section className="bg-[#0b1623] text-white py-10 px-4 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-display font-bold">
          Experience Timeline & Credentials
        </h2>
        <p className="mt-1 text-sm lg:text-base text-gray-300">
          A track record of applied analytics, automation, and measurable impact.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.4fr] gap-8 max-w-6xl mx-auto">
        {/* LEFT COLUMN – TIMELINE */}
        <div className="relative">
          {/* Animated vertical rail */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-blue-500/80"
          />

          <div className="space-y-6">
            {[
              {
                year: "2019–2020",
                title: "First analytics deployment in real estate",
                outcome: "Weekly dashboards; cut prep time to 1hr",
                tools: "Excel, MySQL (basics)",
              },
              {
                year: "2021–2022",
                title: "Scaled reporting for an e-commerce client",
                outcome: "15% higher ROAS from better ad tracking",
                tools: "Power BI, Excel, MySQL",
              },
              {
                year: "2023",
                title: "Automation win for real-estate client",
                outcome: "Saved ~6 hrs/week with reporting scripts",
                tools: "Python, Excel",
              },
              {
                year: "2024",
                title: "Repeatable reporting framework",
                outcome: "Applied method across 3+ industries",
                tools: "Power BI, Python, MySQL",
              },
              {
                year: "2025 (Now)",
                title: "Launch StatixGrowth info + 5A Framework",
                outcome: "Playbooks & automation kits live",
                tools: "Excel, Power BI, Python",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="grid grid-cols-[1fr_40px_1fr] gap-6 items-center"
              >
                {/* YEAR */}
                <div className="text-sm lg:text-base font-semibold text-right pr-4 text-gray-200">
                  {item.year}
                </div>

                {/* DOT */}
                <div className="relative flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="z-10 w-3 h-3 rounded-full bg-blue-500 shadow-md shadow-blue-500/40"
                  />
                </div>

                {/* CONTENT */}
                <div className="max-w-sm text-left pl-2 sm:text-center lg:text-left">
                  <p className="text-sm font-medium text-gray-200">{item.title}</p>
                  <p className="text-xs text-blue-300 font-medium">
                    Outcome:{" "}
                    <span className="font-normal text-blue-200">{item.outcome}</span>
                  </p>
                  <p className="text-xs text-gray-400 italic">Tools: {item.tools}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN – CREDENTIALS */}
        <div className="space-y-5 w-full max-w-sm lg:max-w-xs mx-auto lg:mx-0 text-center lg:text-left">
          {[
            {
              title: "Certifications",
              items: [
                "Excel Specialist (2020)",
                "Power BI Data Analyst Associate (2022)",
                "SQL for Data Analysis (2020)",
              ],
            },
            {
              title: "Training",
              items: [
                "Python for Data Analysis (2021)",
                "Data Visualization with Power BI (2022)",
              ],
            },
            {
              title: "Recognitions",
              items: [
                "Featured project in a local business case study",
                "Invited workshop: Data for Growth (2024)",
              ],
            },
            {
              title: "Tool Stack",
              items: [
                "Excel • Power BI • MySQL • Python",
                "Founder & Lead Consultant",
              ],
            },
          ].map((card, index) => (
            <div key={index} className="bg-[#101c2a]/40 p-3 rounded-xl">
              <h3 className="text-sm font-semibold text-gray-200 mb-1">
                {card.title}
              </h3>
              <ul className="space-y-0.5 text-gray-400 text-xs">
                {card.items.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}














