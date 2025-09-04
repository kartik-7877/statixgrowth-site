{/* CTA Buttons */}
<motion.div
  className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
>
  {/* Primary CTA */}
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      href="https://kartikbhask.systeme.io/j2bebook-oto-call-ea16ec82-f57c408e"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 text-base sm:text-lg font-sans font-semibold text-white bg-[#06B6D4] rounded-2xl shadow-md hover:bg-cyan-500 transition-colors text-center inline-block"
    >
      Book a Strategy Call
    </Link>
  </motion.div>

  {/* Secondary CTA */}
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      href="#"
      className="px-6 py-3 text-base sm:text-lg font-sans font-semibold text-white border border-gray-500 rounded-2xl hover:bg-white/10 transition-colors text-center inline-block"
    >
      Request a Data Audit
    </Link>
  </motion.div>
</motion.div>





