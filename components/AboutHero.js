import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const points = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    let animationId;

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#0B1221"; // deep navy background
      ctx.fillRect(0, 0, width, height);

      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 200, 255, 0.8)";
        ctx.fill();
      });

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = `rgba(0, 200, 255, ${1 - dist / 150})`;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative w-full h-auto min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
        
        {/* Left Content */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display tracking-tight text-white mb-4
                       text-2xl sm:text-3xl md:text-5xl
                       font-semibold md:font-bold leading-[1.2]"
          >
            About Kartik Bhaskar{" "}
            <span className="text-cyan-400">(Founder of StatixGrowth)</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-sans mt-4 sm:mt-4 text-sm sm:text-base md:text-xl text-gray-300"
          >
            Empowering business owners and teams to grow with clarity, confidence,
            and data-driven strategy. Discover the person behind StatixGrowth.info
            and the mission driving smarter business decisions.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-sans mt-6 sm:mt-6 text-sm sm:text-base md:text-xl text-gray-300"
          >
            With years of hands-on experience across diverse industries, Kartik
            combines technical expertise, practical strategies, and a commitment
            to real-world results. The journey is about more than numbers—it’s
            about helping businesses unlock lasting success and simplified growth.
          </motion.p>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/founder.png"
            alt="Founder of StatixGrowth"
            width={400}
            height={400}
            className="rounded-2xl object-cover 
                       w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] 
                       h-auto max-h-[450px]"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

