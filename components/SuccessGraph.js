import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import { motion } from 'framer-motion';
import { BarChart2, Repeat, Clock } from 'lucide-react';

const data = [
  { name: 'Week 1', value: 110 },
  { name: 'Week 2', value: 130 },
  { name: 'Week 3', value: 155 },
  { name: 'Week 4', value: 185 },
  { name: 'Week 5', value: 210 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow text-sm text-black">
        <p className="font-semibold">{label}</p>
        <p>Sales: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const SuccessGraph = () => {
  return (
    <motion.section
      className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-700 to-blue-600 rounded-xl mx-4 sm:mx-8 md:mx-16 mt-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <div className="text-center mb-6">
        <div className="flex justify-center items-center gap-2 mb-2 text-white">
          <BarChart2 className="w-6 h-6" />
          <h2 className="text-2xl sm:text-3xl font-bold">Success in Numbers</h2>
        </div>
      </div>

      {/* Chart */}
      <div className="mx-auto max-w-4xl">
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data}>
            <CartesianGrid stroke="rgba(255,255,255,0.2)" horizontal={true} vertical={true} />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#fff"
              strokeWidth={3}
              dot={{ stroke: '#fff', strokeWidth: 2, fill: '#fff', r: 5 }}
              activeDot={{ r: 7, stroke: '#fff', strokeWidth: 3, fill: '#fff' }}
              isAnimationActive
            >
              <LabelList dataKey="value" position="top" fill="#fff" />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-blue-800 text-white p-4 sm:p-5 rounded-2xl text-center shadow-lg"
        >
          <BarChart2 className="mx-auto mb-2 w-6 h-6" />
          <h3 className="text-xl font-bold">15%</h3>
          <p className="text-sm text-gray-200">Sales Growth</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-blue-800 text-white p-4 sm:p-5 rounded-2xl text-center shadow-lg"
        >
          <Repeat className="mx-auto mb-2 w-6 h-6" />
          <h3 className="text-xl font-bold">2x</h3>
          <p className="text-sm text-gray-200">Conversions</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-blue-800 text-white p-4 sm:p-5 rounded-2xl text-center shadow-lg"
        >
          <Clock className="mx-auto mb-2 w-6 h-6" />
          <h3 className="text-xl font-bold">30 Days</h3>
          <p className="text-sm text-gray-200">Performance</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SuccessGraph;


















