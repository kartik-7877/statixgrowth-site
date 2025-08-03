'use client';
import { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import { BarChart3, RefreshCcw, Clock } from 'lucide-react';
import { motion } from 'framer-motion'; // ✅ Added for animation

const data = [
  { name: 'Week 1', value: 110 },
  { name: 'Week 2', value: 130 },
  { name: 'Week 3', value: 155 },
  { name: 'Week 4', value: 185 },
  { name: 'Week 5', value: 210 }
];

const SuccessGraph = () => {
  const [chartHeight, setChartHeight] = useState(280);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setChartHeight(window.innerWidth < 640 ? 220 : 280);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-br from-purple-700 to-fuchsia-700 text-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 flex items-center justify-center gap-2">
        <BarChart3 className="w-6 h-6" /> Success in Numbers
      </h2>

      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-4xl">
          <ResponsiveContainer width="100%" height={chartHeight}>
            <LineChart data={data}>
              <CartesianGrid stroke="rgba(255,255,255,0.2)" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: 'none' }}
                labelStyle={{ color: '#fff' }}
                itemStyle={{ color: '#fff' }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#fff"
                strokeWidth={2}
                dot
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Scorecards with animation */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 px-4 max-w-4xl mx-auto">
        {[
          {
            icon: <BarChart3 className="w-5 h-5" />,
            title: '15%',
            subtitle: 'Sales Growth'
          },
          {
            icon: <RefreshCcw className="w-5 h-5" />,
            title: '2x',
            subtitle: 'Conversions'
          },
          {
            icon: <Clock className="w-5 h-5" />,
            title: '30 Days',
            subtitle: 'Performance'
          }
        ].map((card, index) => (
          <motion.div
            key={index}
            className="bg-blue-800 text-white flex flex-col items-center justify-center rounded-2xl shadow-lg py-6 px-4 h-[130px] w-full sm:h-[150px] sm:px-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-2">{card.icon}</div>
            <div className="text-xl font-semibold">{card.title}</div>
            <div className="text-sm opacity-80">{card.subtitle}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SuccessGraph;




































