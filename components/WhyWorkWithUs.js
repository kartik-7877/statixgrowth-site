import { LayoutDashboard, Cog, TrendingUp, Handshake } from "lucide-react";

export default function WhyWorkWithUs() {
  const iconSize = "w-12 h-12"; // consistent size

  const features = [
    {
      Icon: LayoutDashboard,
      title: (
        <>
          Actionable <br className="hidden sm:block" /> Dashboards
        </>
      ),
      text: "Clear insights dashboards to drive decisions.",
    },
    {
      Icon: Cog,
      title: (
        <>
          Automation <br className="hidden sm:block" /> That Saves Hours
        </>
      ),
      text: "Automate tasks to reclaim your time.",
    },
    {
      Icon: TrendingUp,
      title: (
        <>
          Proven Growth <br className="hidden sm:block" /> Results
        </>
      ),
      text: "Results backed by data-driven success.",
    },
    {
      Icon: Handshake,
      title: (
        <>
          Hands-On <br className="hidden sm:block" /> Partnership
        </>
      ),
      text: "Dedicated collaboration for your goals.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#14052A] py-16 sm:py-20 md:py-24">
      {/* dotted background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15] 
                   [background-image:radial-gradient(rgba(0,200,255,0.18)_1px,transparent_1px)] 
                   [background-size:40px_40px] [background-position:0_0,20px_20px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <h2 className="font-display tracking-tight text-white mb-4 
                       text-2xl sm:text-3xl md:text-5xl 
                       font-bold leading-[1.2] text-center">
          Why Work With Us
        </h2>
        <p className="font-sans mt-4 text-sm sm:text-base md:text-xl 
                      text-gray-300 text-center mb-10 sm:mb-12 md:mb-14 max-w-2xl mx-auto">
          Turning insights into growth across multiple markets.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 md:gap-14">
          {features.map(({ Icon, title, text }, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center 
                         bg-[#0b0b2e]/60 rounded-2xl p-6 shadow-md 
                         transition-transform duration-300 hover:scale-[1.05] 
                         sm:bg-transparent sm:shadow-none sm:p-0 sm:rounded-none"
            >
              {/* subtle glow behind */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.08),transparent_70%)] blur-xl rounded-2xl" />

              {/* Icon */}
              <Icon
                className={`${iconSize} relative text-cyan-400 
                           drop-shadow-[0_0_12px_rgba(0,200,255,0.25)] 
                           transition-transform duration-300 hover:scale-110`}
                strokeWidth={2.2}
                aria-hidden="true"
              />

              {/* Title */}
              <h3 className="font-display text-white font-semibold 
                             text-base sm:text-lg mt-5 leading-tight relative z-10">
                {title}
              </h3>

              {/* Description */}
              <p className="font-sans text-gray-300 mt-3 
                            text-xs sm:text-sm leading-relaxed relative z-10 max-w-xs">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



















































