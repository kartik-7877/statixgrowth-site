import React from "react";
import Image from "next/image";
import actionableIcon from "../public/icons/actionable.png";
import automationIcon from "../public/icons/automation.png";
import growthIcon from "../public/icons/growth.png";
import partnershipIcon from "../public/icons/partnership.png";

export default function WhyWorkWithUs() {
  return (
    <section className="w-full bg-gradient-to-b from-[#0b0b2e] to-[#0b0b2e] py-16 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Why Work With Us
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-12">
          Turning insights into growth across multiple markets.
        </p>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center bg-transparent p-6 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_35px_rgba(0,255,255,0.3)] transition">
            <Image src={actionableIcon} alt="Actionable Dashboards" width={60} height={60} />
            <h3 className="text-white text-xl font-semibold mt-4">Actionable Dashboards</h3>
            <p className="text-gray-400 text-base mt-2">
              Clear insights dashboards to drive decisions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center bg-transparent p-6 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_35px_rgba(0,255,255,0.3)] transition">
            <Image src={automationIcon} alt="Automation That Saves Hours" width={60} height={60} />
            <h3 className="text-white text-xl font-semibold mt-4">Automation That Saves Hours</h3>
            <p className="text-gray-400 text-base mt-2">
              Automate tasks to reclaim your time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center bg-transparent p-6 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_35px_rgba(0,255,255,0.3)] transition">
            <Image src={growthIcon} alt="Proven Growth Results" width={60} height={60} />
            <h3 className="text-white text-xl font-semibold mt-4">Proven Growth Results</h3>
            <p className="text-gray-400 text-base mt-2">
              Results backed by data-driven success.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center bg-transparent p-6 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_35px_rgba(0,255,255,0.3)] transition">
            <Image src={partnershipIcon} alt="Hands-On Partnership" width={60} height={60} />
            <h3 className="text-white text-xl font-semibold mt-4">Hands-On Partnership</h3>
            <p className="text-gray-400 text-base mt-2">
              Dedicated collaboration for your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}





































