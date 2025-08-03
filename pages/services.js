"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, LineChart, Rocket } from "lucide-react";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#322d6a] to-[#6f27a5] px-4 py-10 sm:px-8 text-white">
        <section className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4"
          >
            Our <span className="text-blue-400">Services</span>
          </motion.h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12">
            Get expert insights and proven strategies to grow your business faster.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              icon: <Phone className="h-10 w-10 text-orange-400" />,
              title: "Data-Driven Strategy Calls",
              desc: "One-on-one consultations where we analyze your funnel and uncover growth levers tailored to your business.",
              bullets: [
                "Custom growth recommendations",
                "Funnel performance breakdown",
                "Actionable next steps"
              ]
            }, {
              icon: <LineChart className="h-10 w-10 text-pink-400" />,
              title: "Sales Funnel Optimization",
              desc: "We audit your current pipelines and improve your weakest stages to make every click and visitor count.",
              bullets: [
                "Comprehensive funnel review",
                "Conversion improvement strategies",
                "Fix drop-off points"
              ]
            }, {
              icon: <Rocket className="h-10 w-10 text-red-400" />,
              title: "Growth Acceleration Plan",
              desc: "A tailored 30-day strategy built from deep insights to align your solution, story, and revenue growth.",
              bullets: [
                "30-day roadmap to scale",
                "Messaging & positioning clarity",
                "Revenue-focused recommendations"
              ]
            }].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 + i * 0.1 }}
                className="h-full flex"
              >
                <Card className="bg-purple-600/90 text-white rounded-2xl shadow-xl flex flex-col justify-between w-full">
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-center mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-white/90">{service.desc}</p>
                    <ul className="text-sm mt-3 list-disc list-inside text-white/80">
                      {service.bullets.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Why Trust Section */}
          <section className="mt-12 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-3">Why Trust StatixGrowth?</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>✔ Built by marketers, not just designers</li>
              <li>✔ Backed by real data and proven strategies</li>
              <li>✔ 100% tailored recommendations for your business</li>
              <li>✔ Transparent, no-fluff consultations</li>
            </ul>
          </section>

          {/* What You’ll Walk Away With Box */}
          <div className="bg-purple-700 p-4 rounded-2xl text-white max-w-xl mx-auto text-center mt-10">
            <h4 className="text-lg font-semibold mb-2">What You’ll Walk Away With:</h4>
            <ul className="text-sm space-y-1">
              <li>✔ A clear plan to improve your funnel</li>
              <li>✔ Specific action steps tailored to your business</li>
              <li>✔ Expert insights — even if you’re starting from zero</li>
            </ul>
          </div>

          {/* Final CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg rounded-full shadow-md">
              Book a Stratgie Call
            </Button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}




