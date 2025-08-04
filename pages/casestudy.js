import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const CaseStudy = () => {
  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
        <motion.h1
          className="text-4xl font-bold text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Real Results. Real Growth.
        </motion.h1>

        <motion.p
          className="text-center"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeInUp}
        >
          How we helped a small business scale its sales funnel and double their conversions.
        </motion.p>

        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeInUp}
        >
          <a
            href="https://kartikbhask.systeme.io/job-to-business-ebook-f337b6f0-7796dda8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded inline-block"
          >
            Yes! I Want to Grow Sales Fast
          </a>
        </motion.div>

        <motion.div initial="hidden" animate="visible" custom={3} variants={fadeInUp}>
          <h2 className="text-2xl font-bold mb-2">The Challenge</h2>
          <p className="mb-6">
            The client struggled with poor lead quality and low conversion rates. Their website traffic was stagnant,
            and most visitors weren’t converting into paying customers.
          </p>
        </motion.div>

        <motion.div initial="hidden" animate="visible" custom={4} variants={fadeInUp}>
          <h2 className="text-2xl font-bold mb-2">Our Strategy</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Optimized the sales funnel and fixed drop-off points</li>
            <li>Ran data-driven ad campaigns targeting specific segments</li>
            <li>Improved website UI for better mobile experience</li>
          </ul>
        </motion.div>

        <motion.div initial="hidden" animate="visible" custom={5} variants={fadeInUp}>
          <h2 className="text-2xl font-bold mb-2">The Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-center">
            {['+120% Website Traffic', '2x Lead Conversion Rate', '30 Days To Reach Results'].map((text, i) => (
              <motion.div
                key={i}
                className="bg-blue-700 p-4 rounded text-white font-bold text-xl"
                custom={i + 6}
                variants={fadeInUp}
              >
                {text.split(' ')[0]}<br />
                <span className="text-sm">{text.split(' ').slice(1).join(' ')}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" custom={9} variants={fadeInUp}>
          <h2 className="text-2xl font-bold text-center mb-6">Case Studies</h2>
          <div className="grid gap-6 sm:grid-cols-2 mb-10">
            {[
              {
                title: 'E-commerce Boost: +35% Revenue',
                points: ['Full funnel audit + optimization', 'Targeted email sequence rewrite', 'Story-driven product positioning'],
              },
              {
                title: 'Real Estate: 3x Qualified Leads',
                points: ['Landing page redesign', 'Local SEO + Google Ads retargeting', 'Lead magnet integration for home buyers'],
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="bg-purple-700 p-6 rounded-lg text-white"
                custom={i + 10}
                variants={fadeInUp}
              >
                <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  {card.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" custom={12} variants={fadeInUp}>
          <h2 className="text-2xl font-bold text-center mb-6">Client Testimonials</h2>
          <div className="grid gap-4 sm:grid-cols-3 text-black">
            {[
              {
                text: 'I wasn’t a data person, but this E-Book – Boost by 15% In 30 Days – made everything so simple. I now track my sales like pro and doubled my revenue in 3 weeks!',
                author: '— Riya Sakya, E-Commerce owner',
              },
              {
                text: 'I always thought sales was about the luck – until I used Kartik’s system. It’s like having personal sales strategist on call 24/7.',
                author: '— Rohit Sinha, Startup Founder',
              },
              {
                text: 'I had no clue how to use data. But this E-Book changed everything. I fixed my funnel and close 3x more leads in just two weeks.',
                author: '— Aman Mehra, Small Business Owner',
              },
            ].map((t, i) => (
              <motion.blockquote
                key={i}
                className="bg-white rounded p-4 text-sm italic shadow"
                custom={i + 13}
                variants={fadeInUp}
              >
                “{t.text}”<br />
                <span className="font-semibold mt-2 block">{t.author}</span>
              </motion.blockquote>
            ))}
          </div>
        </motion.div>

        <motion.div className="text-center mt-10" initial="hidden" animate="visible" custom={17} variants={fadeInUp}>
          <h2 className="text-xl font-semibold mb-2">Want similar results?</h2>
          <a
            href="https://kartikbhask.systeme.io/j2bebook-oto-call-ea16ec82-cc9f0140"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded inline-block"
          >
            Book a Strategy Call
          </a>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default CaseStudy;





