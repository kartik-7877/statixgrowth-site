// components/ServicesSection.js

import React from "react";
import { FaLightbulb, FaChartBar, FaRocket } from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section className="bg-gradient-to-r from-purple-800 to-blue-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">💡 What We Offer</h2>
        <p className="text-lg md:text-xl text-gray-200">
          Get expert insights and proven strategies to grow your business faster.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-purple-700 bg-opacity-20 backdrop-blur-md p-6 rounded-xl text-center shadow-md hover:scale-105 transition-transform">
          <FaLightbulb className="text-pink-400 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Data-Driven Strategy Calls</h3>
          <p className="text-gray-200">
            One-on-one consultations where we analyze your sales funnel and uncover growth levers.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-purple-700 bg-opacity-20 backdrop-blur-md p-6 rounded-xl text-center shadow-md hover:scale-105 transition-transform">
          <FaChartBar className="text-purple-400 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Sales Funnel Optimization</h3>
          <p className="text-gray-200">
            We audit your current process and improve your conversion steps to make every click count.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-purple-700 bg-opacity-20 backdrop-blur-md p-6 rounded-xl text-center shadow-md hover:scale-105 transition-transform">
          <FaRocket className="text-blue-400 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Growth Acceleration Plan</h3>
          <p className="text-gray-200">
            A tailored 30-day roadmap built from deep insights, giving you clear action steps to increase growth.
          </p>
        </div>
      </div>
    </section>
  );
}


