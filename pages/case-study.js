import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#322d6a] to-[#6f27a5] text-white px-4 py-10 sm:px-8">
      <section className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold mb-4"
        >
          Real Results from Real Businesses
        </motion.h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12">
          Discover how we've helped entrepreneurs and small businesses boost their performance, conversions, and revenue.
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Case Study Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-purple-600/90 rounded-2xl p-6 shadow-xl"
          >
            <Image
              src="/images/case1.jpg"
              alt="Case Study 1"
              width={600}
              height={400}
              className="rounded-xl mb-4 w-full"
            />
            <h3 className="text-xl font-semibold mb-2">E-commerce Boost: +35% Revenue</h3>
            <p className="text-sm text-white/90 mb-2">
              We revamped the sales funnel and messaging for a fashion e-commerce brand, increasing their conversion rate by 22% and monthly revenue by 35%.
            </p>
            <ul className="text-sm list-disc list-inside text-white/80">
              <li>Full funnel audit + optimization</li>
              <li>Targeted email sequence rewrite</li>
              <li>Story-driven product positioning</li>
            </ul>
          </motion.div>

          {/* Case Study Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-purple-600/90 rounded-2xl p-6 shadow-xl"
          >
            <Image
              src="/images/case2.jpg"
              alt="Case Study 2"
              width={600}
              height={400}
              className="rounded-xl mb-4 w-full"
            />
            <h3 className="text-xl font-semibold mb-2">Coaching Program: 2x Clients in 30 Days</h3>
            <p className="text-sm text-white/90 mb-2">
              Helped a career coach scale their 1-on-1 offering with a new lead magnet and webinar funnel — doubling qualified consultations.
            </p>
            <ul className="text-sm list-disc list-inside text-white/80">
              <li>Strategic call-to-action redesign</li>
              <li>Landing page copy improvement</li>
              <li>Sales call script guidance</li>
            </ul>
          </motion.div>
        </div>

        <div className="bg-purple-700 p-4 rounded-2xl text-white max-w-xl mx-auto text-center mt-14">
          <h4 className="text-lg font-semibold mb-2">Let Your Business Be Next</h4>
          <p className="text-sm mb-3">Whether you're just starting or scaling, we have a custom plan for you.</p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-md rounded-full shadow-md">
            Book a Free Strategy Call
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

