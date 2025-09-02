import React from "react";
import { Linkedin, Users } from "lucide-react";
import { motion } from "framer-motion";

const AboutTeamSection = () => {
  return (
    <section className="py-12 px-6 bg-[#0d1b2a] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display tracking-tight text-white mb-4
                       text-2xl sm:text-3xl md:text-4xl
                       font-bold leading-[1.2]"
          >
            Who collaborates on projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-gray-300 mt-2 text-sm sm:text-base md:text-lg"
          >
            Projects are led directly by Kartik Bhaskar, with trusted collaborators
            brought in when needed for data engineering, visualization, or
            automation support.
          </motion.p>
        </div>

        {/* Flex Layout */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-16">
          {/* Founder Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.img
              src="/founder.png"
              alt="Kartik Bhaskar"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-28 h-28 mx-auto md:mx-0 rounded-full object-cover mb-4 border-2 border-blue-500 cursor-pointer hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]"
            />
            <h3 className="font-display text-xl md:text-2xl font-semibold">
              Kartik Bhaskar
            </h3>
            <p className="font-sans text-blue-400 text-sm md:text-base font-medium mt-1">
              Founder & Lead Consultant
            </p>
            <p className="font-sans text-gray-300 text-sm sm:text-base md:text-lg mt-2 max-w-md">
              Hands-on analytics, dashboards, and automation—from audit to
              acceleration.
            </p>
            <div className="flex justify-center md:justify-start mt-3">
              <motion.a
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile of Kartik Bhaskar"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-gray-400 hover:text-blue-400 transition cursor-pointer hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.7)]"
              >
                <Linkedin size={22} />
              </motion.a>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:block w-px bg-gray-700 self-stretch origin-center"
          ></motion.div>

          {/* Collaborators Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div
              className="flex justify-center md:justify-start mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-blue-400 hover:text-blue-300 cursor-pointer hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.7)]"
              >
                <Users size={50} />
              </motion.div>
            </motion.div>
            <h3 className="font-display text-lg md:text-xl font-semibold text-gray-200">
              Collaborators on-call
            </h3>
            <p className="font-sans text-gray-400 text-sm sm:text-base md:text-lg mt-2 max-w-md">
              Data engineers, visualization specialists, and automation partners
              join as needed to ensure the right expertise for every project.
            </p>
          </motion.div>
        </div>

        {/* Micro-trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-sans text-center text-gray-400 text-sm sm:text-base mt-10"
        >
          Certified experience with Looker Studio, Google Sheets, Apps Script, and
          Zapier; references available on request.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutTeamSection;









