import { Target, BarChart3, Cog, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function MiniBioAndServices() {
  // consistent icon size
  const iconSize = "w-10 h-10 md:w-12 md:h-12";

  return (
    <>
      {/* Mini Bio */}
      <section className="relative bg-[#0B1221] py-20 px-6 sm:px-12 overflow-hidden">
        {/* subtle background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.15]
          [background-image:radial-gradient(rgba(0,200,255,0.18)_1px,transparent_1px)]
          [background-size:40px_40px] [background-position:0_0,20px_20px]"
        />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-[320px_1fr] gap-10 md:gap-14 items-start">
          {/* Headshot (square frame) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <img
              src="/founder.png"
              alt="Kartik Bhaskar"
              className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-xl border border-[#1E2A44] shadow-[0_10px_30px_rgba(0,200,255,0.08)]"
            />
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Heading (same style as Hero h1) */}
            <h2
              className="font-display tracking-tight text-white mb-2
                         text-2xl sm:text-3xl md:text-5xl
                         font-semibold md:font-bold leading-[1.2]"
            >
              About Kartik Bhaskar
            </h2>

            {/* Subheading */}
            <p className="font-sans text-gray-300 mb-6 text-sm sm:text-base md:text-xl">
              Founder of Statixgrowth.info
            </p>

            {/* Bio */}
            <div className="space-y-4 max-w-[65ch]">
              <p className="font-sans text-gray-300 text-sm sm:text-base md:text-xl leading-relaxed">
                Helping businesses unlock growth by transforming raw data into strategies
                that deliver real results—across e-commerce, real estate, services, and beyond.
              </p>
              <p className="font-sans text-gray-300 text-sm sm:text-base md:text-xl leading-relaxed">
                Driven by a passion for clarity and measurable outcomes, I combine technical
                expertise with hands-on support for every client. After years building my own
                streamlined dashboards and automations, I launched this business to make data
                work for everyone, not just big enterprises.
              </p>
              <p className="font-sans text-gray-300 text-sm sm:text-base md:text-xl leading-relaxed">
                My mission: empower growth, reduce manual work, and give business owners real
                control over their success.
              </p>
            </div>

            {/* Inline CTA link */}
            <a
              href="/about"
              className="font-sans inline-flex items-center gap-2 mt-6
                         text-sm sm:text-base md:text-xl font-medium text-white
                         hover:text-cyan-400 transition-colors"
            >
              Read full story <span aria-hidden>→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="relative bg-[#0B1221] py-16 sm:py-20 px-6 sm:px-12 overflow-hidden">
        {/* faint radial glows */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(600px 600px at 12% 10%, rgba(0,190,255,0.10), transparent 60%),
              radial-gradient(500px 500px at 90% 20%, rgba(39,142,255,0.08), transparent 60%)
            `,
          }}
        />

        <div className="relative max-w-6xl mx-auto text-center">
          {/* Section heading */}
          <motion.h3
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="font-display tracking-tight text-white mb-3
                       text-2xl sm:text-3xl md:text-5xl
                       font-semibold md:font-bold leading-[1.2]"
          >
            How I Can Help
          </motion.h3>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="font-sans text-gray-300 mb-10 sm:mb-12 md:mb-14
                        text-sm sm:text-base md:text-xl"
          >
            End-to-end data solutions tailored for any market or business model.
          </motion.p>

          {/* Service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-7">
            {[
              {
                icon: Target,
                title: "Data Strategy Sessions",
                text: "Uncover the hidden growth levers in your numbers with a guided, actionable plan.",
              },
              {
                icon: BarChart3,
                title: "Custom Dashboards",
                text: "Build real-time, easy-to-use dashboards so you always know what’s working.",
              },
              {
                icon: Cog,
                title: "Automation Setup",
                text: "Free up hours every week by automating repetitive reporting and admin tasks.",
              },
              {
                icon: MessageSquare,
                title: "Ongoing Consulting",
                text: "Get ongoing advice and tailored analytics as your business and data needs scale.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-[#0F1A2E]/80 border border-[#1E2A44] rounded-2xl p-6 h-full"
              >
                <service.icon
                  className={`${iconSize} text-cyan-400 drop-shadow-[0_0_12px_rgba(0,200,255,0.25)]`}
                  strokeWidth={2.2}
                  aria-hidden
                />
                <h4 className="font-display text-white font-semibold mt-4 text-base sm:text-lg">
                  {service.title}
                </h4>
                <p className="font-sans text-gray-300 mt-2 text-xs sm:text-sm leading-relaxed">
                  {service.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}