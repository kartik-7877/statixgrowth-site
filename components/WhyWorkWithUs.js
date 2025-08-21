import { LayoutDashboard, Cog, TrendingUp, Handshake } from "lucide-react";

export default function WhyWorkWithUs() {
  const iconSize = "w-12 h-12"; // consistent size across breakpoints

  const features = [
    {
      Icon: LayoutDashboard,
      title: <>Actionable <br className="hidden sm:block" /> Dashboards</>,
      text: "Clear insights dashboards to drive decisions.",
    },
    {
      Icon: Cog,
      title: <>Automation <br className="hidden sm:block" /> That Saves Hours</>,
      text: "Automate tasks to reclaim your time.",
    },
    {
      Icon: TrendingUp,
      title: <>Proven Growth <br className="hidden sm:block" /> Results</>,
      text: "Results backed by data-driven success.",
    },
    {
      Icon: Handshake,
      title: <>Hands-On <br className="hidden sm:block" /> Partnership</>,
      text: "Dedicated collaboration for your goals.",
    },
  ];

  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-[#0b0b2e]     /* background color from image */
        py-16 sm:py-20 md:py-24
      "
    >
      {/* dotted background */}
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
        {/* Heading */}
        <h2
          className="
            font-display tracking-tight text-white mb-4
            text-2xl sm:text-3xl md:text-5xl
            font-semibold md:font-bold leading-[1.2] text-center
          "
        >
          Why Work With Us
        </h2>

        <p
          className="
            font-sans mt-4 sm:mt-4 text-sm sm:text-base md:text-xl 
            text-gray-300 text-center mb-10 sm:mb-12 md:mb-14
          "
        >
          Turning insights into growth across multiple markets.
        </p>

        {/* Grid - phone becomes stacked with cards */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
            gap-6 sm:gap-10 md:gap-14
          "
        >
          {features.map(({ Icon, title, text }, i) => (
            <div
              key={i}
              className="
                flex flex-col items-center text-center 
                bg-[#0b0b2e]/60 rounded-2xl p-6 shadow-md
                transition-transform duration-300 
                hover:scale-[1.04]
                sm:bg-transparent sm:shadow-none sm:p-0 sm:rounded-none
              "
            >
              <Icon
                className={`
                  ${iconSize} text-cyan-400 
                  drop-shadow-[0_0_18px_rgba(0,200,255,0.35)]
                  transition-transform duration-300 
                  hover:scale-110
                `}
                strokeWidth={2.2}
              />
              <h3 className="font-display text-white font-semibold text-base sm:text-lg mt-5 leading-tight">
                {title}
              </h3>
              <p className="font-sans text-gray-300 mt-3 text-xs sm:text-sm leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}













































