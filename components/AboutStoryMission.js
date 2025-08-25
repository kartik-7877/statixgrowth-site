// components/AboutStoryMission.js
import { motion } from "framer-motion";

/* ----------------------- Animated Clustered Area Chart ---------------------- */
function ClusterAreaChart() {
  const curves = [
    { color: "rgba(0, 200, 255, 0.35)", amp: 5, phase: 0 },
    { color: "rgba(39, 142, 255, 0.30)", amp: 7, phase: 1 },
    { color: "rgba(0, 212, 255, 0.25)", amp: 9, phase: 2 },
  ];

  const W = 600;
  const H = 240;

  const basePoints = (offsetY = 0) => [
    [0, 140 + offsetY],
    [100, 120 + offsetY],
    [200, 160 + offsetY],
    [300, 110 + offsetY],
    [400, 150 + offsetY],
    [500, 100 + offsetY],
    [600, 135 + offsetY],
  ];

  const buildCurve = (pts) => {
    let d = `M ${pts[0][0]} ${pts[0][1]}`;
    for (let i = 1; i < pts.length; i++) {
      const [x0, y0] = pts[i - 1];
      const [x1, y1] = pts[i];
      const cx1 = x0 + (x1 - x0) / 3;
      const cy1 = y0;
      const cx2 = x0 + (x1 - x0) * (2 / 3);
      const cy2 = y1;
      d += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x1} ${y1}`;
    }
    return d;
  };

  const makeArea = (offsetY = 0) => {
    const pts = basePoints(offsetY);
    return `${buildCurve(pts)} L ${W} ${H} L 0 ${H} Z`;
  };

  const makeLine = (offsetY = 0) => buildCurve(basePoints(offsetY));

  return (
    <div className="relative w-full rounded-2xl border border-[#1E2A44] bg-[#0F1A2E] overflow-hidden">
      {/* subtle grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* glow accent */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px 300px at 20% 20%, rgba(0,200,255,0.15), transparent 60%), radial-gradient(600px 300px at 80% 60%, rgba(39,142,255,0.12), transparent 60%)",
        }}
      />

      <svg viewBox="0 0 600 240" className="block w-full h-[220px]">
        <defs>
          <radialGradient id="glow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="rgba(0,200,255,0.18)" />
            <stop offset="100%" stopColor="rgba(0,200,255,0)" />
          </radialGradient>
        </defs>
        <rect width="600" height="240" fill="url(#glow)" />

        {/* areas */}
        {curves.map((c, idx) => (
          <motion.path
            key={idx}
            d={makeArea(idx * 10)}
            fill={c.color}
            stroke="none"
            animate={{ y: [-c.amp, c.amp, -c.amp] }}
            transition={{
              duration: 6 + idx * 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* animated top line */}
        <motion.path
          d={makeLine(5)}
          fill="none"
          stroke="rgba(0,200,255,0.95)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="12 10"
          animate={{
            y: [-2, 2, -2],
            strokeDashoffset: [0, -44],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* dots */}
        {[60, 180, 300, 420, 540].map((x, i) => (
          <motion.circle
            key={x}
            cx={x}
            cy={110 + (i % 2 === 0 ? 0 : 10)}
            r="3"
            fill="rgba(0,200,255,0.9)"
            animate={{ cy: [100, 120, 100] }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

/* --------------------------- Section --------------------------- */
export default function AboutStoryMission() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative bg-[#0D1628] py-16 sm:py-20 px-6 sm:px-12 overflow-hidden">
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]
        [background-image:radial-gradient(rgba(0,200,255,0.18)_1px,transparent_1px)]
        [background-size:42px_42px]"
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-start">
        {/* Left column */}
        <div className="mb-12 sm:mb-16 md:mb-0">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            className="font-display text-white mb-4
                       text-2xl sm:text-3xl md:text-5xl
                       font-bold leading-[1.2] tracking-tight"
          >
            My Story & Mission
          </motion.h2>

          {/* Journey */}
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            className="font-display text-white mt-6 mb-2
                       text-lg sm:text-xl md:text-2xl font-semibold"
          >
            Founder’s Journey
          </motion.h3>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
            className="font-sans text-gray-300
                       text-sm sm:text-base md:text-xl leading-relaxed"
          >
            From the start of my career, I was fascinated by how numbers reveal
            patterns and opportunities. That curiosity led me to create{" "}
            <span className="text-cyan-400">StatixGrowth.info</span>—a platform
            dedicated to turning raw data into clear strategies that help
            businesses grow with confidence.
          </motion.p>

          {/* Passion */}
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={3}
            className="font-display text-white mt-8 mb-2
                       text-lg sm:text-xl md:text-2xl font-semibold"
          >
            What Drives My Passion
          </motion.h3>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={4}
            className="font-sans text-gray-300
                       text-sm sm:text-base md:text-xl leading-relaxed"
          >
            I work with entrepreneurs and teams who want growth without drowning
            in complexity. My passion lies in simplifying systems, automating
            the busywork, and transforming data into a reliable engine for
            smarter decisions and long-term success.
          </motion.p>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            className="relative rounded-2xl border border-[#1E2A44] bg-[#0F1A2E] p-6"
          >
            <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
            <h4 className="font-display text-white text-base sm:text-lg md:text-xl font-semibold">
              My Mission
            </h4>
            <p className="font-sans text-gray-300 mt-2 text-sm sm:text-base md:text-xl leading-relaxed">
              To empower business owners and teams to make confident,
              data-driven decisions by removing complexity and unlocking growth
              opportunities hidden in their numbers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <ClusterAreaChart />
          </motion.div>
        </div>
      </div>
    </section>
  );
}




