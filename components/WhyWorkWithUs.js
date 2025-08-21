import { LayoutDashboard, Cog, TrendingUp, Handshake } from "lucide-react";

export default function WhyWorkWithUs() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-[#0b0b2e] 
        py-16 sm:py-20 md:py-24
      "
    >
      {/* dotted background like hero */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          opacity-[0.15]
          [background-image:radial-gradient(rgba(0,200,255,0.18)_1px,transparent_1px)]
          [background-size:40px_40px]
          [background-position:0_0,20px_20px]
        "
      />

      {/* soft cyan glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -bottom-24 right-0
          w-[70vw] h-[70vw] md:w-[45vw] md:h-[45vw]
          bg-[radial-gradient(ellipse_at_center,rgba(0,200,255,0.20),transparent_60%)]
          blur-3xl
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Main Heading */}
        <h2
          className="
            font-display tracking-tight text-white mb-4
            text-2xl sm:text-3xl md:text-5xl
            font-semibold md:font-bold leading-[1.2] text-center
          "
        >
          Why Work With Us
        </h2>

        {/* Section Subheading */}
        <p
          className="
            font-sans mt-4 sm:mt-4 text-sm sm:text-base md:text-xl 
            text-gray-300 text-center mb-10 sm:mb-12 md:mb-14
          "
        >
          Turning insights into growth across multiple markets.
        </p>

        {/* Features Grid */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
            gap-10 sm:gap-12 md:gap-14
          "
        >
          {/* Item */}
          <div className="flex flex-col items-center text-center">
            <LayoutDashboard
              className="w-16 h-16 text-cyan-400 drop-shadow-[0_0_18px_rgba(0,200,255,0.35)]"
              strokeWidth={2.2}
            />
            <h3 className="font-display text-white font-semibold text-base sm:text-lg mt-5 leading-tight">
              Actionable <br className="hidden sm:block" /> Dashboards
            </h3>
            <p className="font-sans text-gray-300 mt-3 text-xs sm:text-sm leading-relaxed">
              Clear insights dashboards to drive decisions.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Cog
              className="w-16 h-16 text-cyan-400 drop-shadow-[0_0_18px_rgba(0,200,255,0.35)]"
              strokeWidth={2.2}
            />
            <h3 className="font-display text-white font-semibold text-base sm:text-lg mt-5 leading-tight">
              Automation <br className="hidden sm:block" /> That Saves Hours
            </h3>
            <p className="font-sans text-gray-300 mt-3 text-xs sm:text-sm leading-relaxed">
              Automate tasks to reclaim your time.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <TrendingUp
              className="w-16 h-16 text-cyan-400 drop-shadow-[0_0_18px_rgba(0,200,255,0.35)]"
              strokeWidth={2.2}
            />
            <h3 className="font-display text-white font-semibold text-base sm:text-lg mt-5 leading-tight">
              Proven Growth <br className="hidden sm:block" /> Results
            </h3>
            <p className="font-sans text-gray-300 mt-3 text-xs sm:text-sm leading-relaxed">
              Results backed by data-driven success.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Handshake
              className="w-16 h-16 text-cyan-400 drop-shadow-[0_0_18px_rgba(0,200,255,0.35)]"
              strokeWidth={2.2}
            />
            <h3 className="font-display text-white font-semibold text-base sm:text-lg mt-5 leading-tight">
              Hands-On <br className="hidden sm:block" /> Partnership
            </h3>
            <p className="font-sans text-gray-300 mt-3 text-xs sm:text-sm leading-relaxed">
              Dedicated collaboration for your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}








































