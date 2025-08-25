import { motion } from "framer-motion";

export default function Testimonials() {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative bg-[#0B1221] py-20 px-6 sm:px-12 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            radial-gradient(700px 700px at 15% 12%, rgba(0,190,255,0.10), transparent 60%),
            radial-gradient(600px 600px at 85% 15%, rgba(39,142,255,0.10), transparent 60%),
            radial-gradient(500px 500px at 50% 85%, rgba(0,212,255,0.07), transparent 60%)
          `,
          backgroundSize: "200% 200%",
        }}
      />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Animated heading */}
        <motion.h2
          className="font-display tracking-tight text-white mb-14
                     text-2xl sm:text-3xl md:text-5xl
                     font-semibold md:font-bold leading-[1.2]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Client Results & Success Stories
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            className="bg-[#0F1A2E] border border-[#1E2A44] rounded-2xl p-6 h-full flex flex-col"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0,190,255,0.15)" }}
          >
            <span className="text-cyan-400 text-5xl mb-4">“</span>
            <p className="font-sans text-gray-300 flex-grow
                          text-sm sm:text-base md:text-xl">
              Kartik’s dashboard helped me see my top selling products at a glance.
            </p>
            <p className="text-gray-400 mt-6
                          text-xs sm:text-sm md:text-base">
              Service Business Owner
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-[#0F1A2E] border border-[#1E2A44] rounded-2xl p-6 h-full flex flex-col"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0,190,255,0.15)" }}
          >
            <span className="text-cyan-400 text-5xl mb-4">“</span>
            <p className="font-sans text-gray-300 flex-grow
                          text-sm sm:text-base md:text-xl">
              We simplified our marketing reporting and immediately spotted two new growth channels.
            </p>
            <p className="text-gray-400 mt-6
                          text-xs sm:text-sm md:text-base">
              Real Estate Lead (Pilot/Test)
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-[#0F1A2E] border border-[#1E2A44] rounded-2xl p-6 h-full flex flex-col"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0,190,255,0.15)" }}
          >
            <span className="text-cyan-400 text-5xl mb-4">“</span>
            <p className="font-sans text-gray-300 flex-grow
                          text-sm sm:text-base md:text-xl">
              With just a basic data review, I saved at least 2 hours per week.
            </p>
            <p className="text-gray-400 mt-6
                          text-xs sm:text-sm md:text-base">
              Beta Tester (Anonymized)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}





