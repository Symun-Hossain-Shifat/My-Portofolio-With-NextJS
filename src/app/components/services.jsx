"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaGlobe,
  FaBolt,
  FaArrowUp,
} from "react-icons/fa";

const services = [
  {
    id: "01",
    title: "Frontend Development",
    desc: "Modern, fast and responsive websites using React, Next.js and Tailwind CSS.",
    icon: FaCode,
  },
  {
    id: "02",
    title: "Backend Development",
    desc: "Modern, fast and smooth websites using mongodb , expressjs.",
    icon: FaPalette,
  },
  {
    id: "03",
    title: "Responsive Design",
    desc: "Pixel-perfect layouts optimized for desktop, tablet and mobile devices.",
    icon: FaMobileAlt,
  },
  {
    id: "04",
    title: "Web App Development",
    desc: "Interactive dashboards, booking systems and custom web applications.",
    icon: FaGlobe,
  },
  {
    id: "05",
    title: "Performance Optimization",
    desc: "Boost loading speed, SEO score and overall website performance.",
    icon: FaBolt,
  },
];

export default function ServicesComponent() {
  return (
    <section className=" py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-violet-400 font-semibold tracking-widest uppercase mb-3">
            My Services
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Smart Solutions For <br />
            Your Business Growth
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            I create premium websites with clean design, smooth animation and
            high performance to grow your brand online.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 hover:border-violet-500 transition-all duration-500"
              >
                
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-violet-500/20 to-transparent"></div>

                {/* Number */}
                <span className="text-5xl font-bold text-white/10 absolute top-5 right-5">
                  {service.id}
                </span>

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-violet-600/20 flex items-center justify-center mb-6 group-hover:bg-violet-600 transition">
                  <Icon className="text-violet-400 text-3xl" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-violet-400 transition">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-7 mb-6">
                    {service.desc}
                  </p>

                  <button className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-violet-400 transition">
                    Learn More
                    <FaArrowUp className="rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}