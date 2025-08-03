// pages/about.js

import Image from 'next/image';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              About <span className="text-blue-400">StatixGrowth</span>
            </h1>
            <p className="text-lg mb-4">
              At StatixGrowth, we specialize in helping ambitious{' '}
              <strong>entrepreneurs</strong> and small business owners elevate
              their digital presence and drive meaningful growth.
            </p>
            <p className="text-lg mb-4">
              Our mission is to craft data-driven marketing strategies tailored
              to your brand, backed by performance analytics and real results.
            </p>
            <p className="text-lg">
              Whether you're just starting or scaling fast, we’re your digital
              growth partner.
            </p>
          </div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-[300px] sm:w-[340px] md:w-[360px] rounded-xl overflow-hidden shadow-xl bg-purple-800 p-2">
              <Image
                src="/target.png"
                alt="Target Graphic"
                width={360}
                height={360}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* How We Work Section */}
        <section className="bg-purple-800/90 rounded-2xl px-6 py-16">
          <h2 className="text-4xl font-bold text-center mb-12">How We Work</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-10 px-2">
            {[
              {
                icon: '📊',
                title: 'Analyze',
                desc: 'We dig deep into your funnel data to spot leaks and opportunities.',
              },
              {
                icon: '⚙️',
                title: 'Optimize',
                desc: 'We create actionable plans and experiment-driven fixes.',
              },
              {
                icon: '🚀',
                title: 'Accelerate',
                desc: 'We implement strategies that directly boost conversions and growth.',
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                className="bg-purple-700 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center transition-transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-purple-100">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Meet the Founder Section */}
        <section className="text-white text-center px-4">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              MEET THE FOUNDER
            </motion.h2>

            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/founder.png"
                  alt="Kartik Bhaskar"
                  width={176}
                  height={176}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              viewport={{ once: true }}
            >
              Kartik Bhaskar
            </motion.h3>

            <motion.p
              className="text-purple-300 text-lg font-medium mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              viewport={{ once: true }}
            >
              Founder & Growth Strategist
            </motion.p>

            <motion.p
              className="text-purple-100 text-base leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              I'm passionate about helping small businesses grow through performance marketing,
              clear strategies, and data–driven results. StatixGrowth is built with a mission to
              support entrepreneurs and startups who want to level up their digital game.
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="https://kartikbhask.systeme.io/j2bebook-oto-call-ea16ec82-cc9f0140"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 rounded-full text-white font-semibold bg-blue-500 hover:bg-blue-600 transition"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              Book a Free Strategy Call
            </motion.a>
          </motion.div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default About;

























