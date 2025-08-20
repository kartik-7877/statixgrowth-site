<section className="relative w-full min-h-[70vh] md:min-h-0 md:h-screen flex items-center justify-center overflow-hidden 
  pt-8 pb-8 sm:pt-10 sm:pb-10 md:py-0">
  {/* Background Canvas */}
  <canvas ref={canvasRef} className="absolute inset-0 z-0" />

  {/* Content */}
  <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="font-display tracking-tight text-white mb-4
                 text-2xl sm:text-3xl md:text-5xl
                 font-semibold md:font-bold leading-[1.2]"
    >
      Data-Powered Strategies for Next-Level Business Growth
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="font-sans mt-4 sm:mt-4 text-sm sm:text-base md:text-xl text-gray-300"
    >
      We transform numbers into growth — empowering e-commerce, real estate,
      local services, and digital products with insights that unlock sales,
      leads, and sustainable success.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="mt-6 sm:mt-8"
    >
      <a
        href="https://kartikbhask.systeme.io/j2bebook-oto-call-ea16ec82-f57c408e"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow px-5 py-3 text-base sm:text-lg"
        >
          Book a Strategy Call
        </Button>
      </a>
    </motion.div>
  </div>
</section>

