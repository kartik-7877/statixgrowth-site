import { Search, BarChart3, Sliders, Play, Rocket } from "lucide-react";

export default function FrameworkVisual() {
  const steps = [
    {
      title: "Audit",
      text: "Dig deep into your current numbers, systems, and workflows.",
      icon: <Search className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Analyze",
      text: "Turn your raw data into clear insights, revealing gaps and opportunities.",
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Apply",
      text: "Build and implement custom dashboards and automations fast.",
      icon: <Sliders className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Act",
      text: "Execute efficient strategies that directly address your business goals.",
      icon: <Play className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Accelerate",
      text: "Optimize, scale, and support ongoing data-driven growth.",
      icon: <Rocket className="w-6 h-6 text-cyan-400" />,
    },
  ];

  return (
    <section className="w-full bg-[#0a0f1c] text-white py-16 px-6 md:px-12 lg:px-24 font-inter">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            How I Accelerate Sustainable Growth:{" "}
            <span className="block text-cyan-400">The 5A Data Success Framework</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl">
            Growth doesn’t come from data alone—it comes from actionable insights, 
            targeted improvement, and a proactive approach. My proven 5A framework 
            is designed to turn raw numbers into measurable, real-world impact for every client.
          </p>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="p-2 bg-cyan-900/40 rounded-xl">{step.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE CIRCULAR FLOW */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] rounded-full border-2 border-cyan-500/40">
            
            {/* Step 1 - Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 flex flex-col items-center">
              <Search className="w-8 h-8 text-cyan-400" />
              <span className="text-sm mt-1">Audit</span>
            </div>

            {/* Step 2 - Right Upper */}
            <div className="absolute right-0 top-1/4 translate-x-6 flex flex-col items-center">
              <BarChart3 className="w-8 h-8 text-cyan-400" />
              <span className="text-sm mt-1">Analyze</span>
            </div>

            {/* Step 3 - Right Lower */}
            <div className="absolute right-1 bottom-1/4 translate-x-6 flex flex-col items-center">
              <Sliders className="w-8 h-8 text-cyan-400" />
              <span className="text-sm mt-1">Apply</span>
            </div>

            {/* Step 4 - Left Lower */}
            <div className="absolute left-0 bottom-1/4 -translate-x-6 flex flex-col items-center">
              <Play className="w-8 h-8 text-cyan-400" />
              <span className="text-sm mt-1">Act</span>
            </div>

            {/* Step 5 - Left Upper */}
            <div className="absolute left-0 top-1/4 -translate-x-6 flex flex-col items-center">
              <Rocket className="w-8 h-8 text-cyan-400" />
              <span className="text-sm mt-1">Accelerate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






