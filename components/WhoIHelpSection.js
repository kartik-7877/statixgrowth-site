import { motion } from "framer-motion";
import { ShoppingCart, Home, Store, Lightbulb, MoreHorizontal } from "lucide-react";

export default function WhoIHelpSection() {
  const categories = [
    { icon: ShoppingCart, title: "E-commerce Stores", description: "Boost sales & retention" },
    { icon: Home, title: "Real Estate Agencies", description: "Generate qualified leads" },
    { icon: Store, title: "Local Service Businesses", description: "Win more clients" },
    { icon: Lightbulb, title: "Digital Product Creators", description: "Scale revenue streams" },
    { icon: MoreHorizontal, title: "More Markets", description: "Adaptable solutions for every industry" },
  ];

  return (
    <section
      className="relative w-full h-auto md:h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20 md:py-0 text-white"
      style={{
        backgroundColor: "#1A0B35",
        backgroundImage: `
          radial-gradient(rgba(0, 200, 255, 0.15) 1px, transparent 1px),
          radial-gradient(rgba(0, 200, 255, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        backgroundPosition: "0 0, 20px 20px",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div
          className="
            rounded-3xl
            bg-[#14052A]
            p-6 sm:p-10 md:p-12
            ring-1 ring-white/5
            shadow-[0_0_0_1px_rgba(0,200,255,0.12),0_18px_50px_-15px_rgba(0,0,0,0.7),0_0_70px_-25px_rgba(0,200,255,0.22)]
          "
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display tracking-tight text-white mb-4
                       text-2xl sm:text-3xl md:text-5xl
                       font-semibold md:font-bold leading-[1.2] text-center"
          >
            Who I Help!
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-sans mt-4 sm:mt-4 text-sm sm:text-base md:text-xl text-gray-300
                       text-center mb-10 sm:mb-12 md:mb-14"
          >
            Turning insights into growth across multiple markets.
          </motion.p>

          {/* Categories Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 md:gap-10"
          >
            {categories.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <item.icon
                  className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 mb-3"
                  aria-hidden="true"
                />
                <h3 className="font-display font-semibold text-base sm:text-lg text-white mb-1">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}



































