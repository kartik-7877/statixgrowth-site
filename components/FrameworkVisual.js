import { useRef, useState, useEffect } from "react";
import { Search, BarChart3, Sliders, Play, Rocket } from "lucide-react";

export default function FrameworkVisual() {
  const circleRef = useRef(null);
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    const updateRadius = () => {
      if (circleRef.current) {
        const { width } = circleRef.current.getBoundingClientRect();
        setRadius(width / 2);
      }
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const steps = [
    { Icon: Search, label: "Audit" },
    { Icon: BarChart3, label: "Analyze" },
    { Icon: Sliders, label: "Apply" },
    { Icon: Play, label: "Act" },
    { Icon: Rocket, label: "Accele" }, // shortened
  ];

  return (
    <section className="w-full bg-[#0a0f1c] text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="font-display tracking-tight text-white mb-4 
                         text-2xl sm:text-3xl md:text-5xl 
                         font-semibold md:font-bold leading-[1.2]">
            How I Accelerate Sustainable Growth:{" "}
            <span className="block text-cyan-400">
              The 5A Data Success Framework
            </span>
          </h2>

          <p className="font-sans mt-4 text-sm sm:text-base md:text-xl 
                        text-gray-300 mb-8 max-w-xl">
            Growth doesn’t come from data alone—it comes from actionable insights, 
            targeted improvement, and a proactive approach. My proven 5A framework 
            is designed to turn raw numbers into measurable, real-world impact.
          </p>
        </div>

        {/* RIGHT CIRCLE WITH ICONS */}
        <div className="relative flex items-center justify-center">
          <div
            ref={circleRef}
            className="relative aspect-square w-[270px] md:w-[350px] lg:w-[410px] 
                       rounded-full border border-cyan-500/40"
          >
            {steps.map(({ Icon, label }, i) => {
              const angle = (i * 360) / steps.length - 90;

              // Center of each badge sits exactly on the big circle's circumference.
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={i}
                  className="absolute flex items-center justify-center"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="flex flex-col items-center justify-center 
                                  w-20 h-20 rounded-full border border-cyan-400
                                  bg-[#0a0f1c] shadow-md hover:scale-105 
                                  transition-transform duration-300">
                    <Icon
                      className="w-7 h-7 text-cyan-400"
                      strokeWidth={2.2}
                      aria-hidden="true"
                    />
                    <span className="font-sans text-xs sm:text-sm mt-1">
                      {label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}










