// components/WhyWorkWithUs.js
import { Users, BarChart3, Handshake } from "lucide-react";

export default function WhyWorkWithUs() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Why Work With Us</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          We bring experience, proven strategies, and a track record of helping businesses grow.
          Our team is dedicated to delivering measurable results and long-term value for our clients.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">
              Work with specialists who understand your industry and your goals.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
            <BarChart3 className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Proven Results</h3>
            <p className="text-gray-600">
              We focus on strategies that consistently deliver measurable growth.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
            <Handshake className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Client First</h3>
            <p className="text-gray-600">
              Your success is our priority—we work as partners, not vendors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}






































