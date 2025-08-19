import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const canvasRef = useRef(null);

  // Background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const points = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#14052A";
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

      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden font-[Montserrat]">
      {/* Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Logo - fixed top left */}
      <div className="absolute top-6 left-6 z-20">
        <img
          src="/logo-white.png"
          alt="StatixGrowth Logo"
          className="h-28 md:h-40 lg:h-44 w-auto"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mt-16 md:mt-0">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-white mb-4"
        >
          Data-Powered Strategies for Next-Level Business Growth
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto"
        >
          We transform numbers into growth — empowering e-commerce, real estate,
          local services, and digital products with insights that unlock sales,
          leads, and sustainable success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 md:mt-8"
        >
          <a
            href="https://kartikbhask.systeme.io/j2bebook-oto-call-ea16ec82-f57c408e"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow"
            >
              Book a Strategy Call
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
















