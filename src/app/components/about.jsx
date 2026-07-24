"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaCode,
  FaLaptopCode,
  FaFootballBall,
  FaHeart,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

// Shared Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardData = [
  {
    icon: FaCode,
    title: "Programming Journey",
    description:
      "Started with sheer curiosity about how web apps function under the hood, evolving into full-stack development.",
    accent: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-500",
  },
  {
    icon: FaLaptopCode,
    title: "What I Enjoy",
    description:
      "Building seamless user experiences, crafting clean frontends, and scaling robust backend architectures.",
    accent: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-500",
  },
  {
    icon: FaFootballBall,
    title: "Hobbies & Passions",
    description:
      "Avid football fan, creative visual explorer, and constantly learning about world cultures & tech trends.",
    accent: "from-fuchsia-500/20 to-pink-500/20",
    iconColor: "text-fuchsia-500",
  },
  {
    icon: FaHeart,
    title: "Mindset & Goals",
    description:
      "Driven by consistency, continuous learning, and turning complex problem statements into functional solutions.",
    accent: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500",
  },
];

const techStack = ["React", "Next.js", "Tailwind CSS", "MongoDB", "Express", "Node.js"];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-slate-50 text-slate-900 py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-violet-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-300/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 text-violet-700 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
            <HiOutlineSparkles className="w-4 h-4" />
            Get To Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            About <span className="text-violet-600">Shifat</span>
          </h2>
        </motion.div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT COLUMN: Bio & Story */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-4 sm:space-y-5">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-slate-900">
                Passionate Full-Stack Developer &{" "}
                <span className="text-violet-600 underline decoration-violet-300 underline-offset-4">
                  Creative Thinker
                </span>
              </h3>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Hello! I&apos;m <span className="text-slate-900 font-semibold">Shifat</span>, an ambitious full-stack software developer based in Bangladesh. My path into code began with an intense curiosity about how digital products operate behind the screen.
              </p>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Today, I build responsive, accessible, and fast web applications. I bridge the gap between creative visual designs and clean back-end engineering logic.
              </p>
            </motion.div>

            {/* Tech Stack Chips */}
            <motion.div variants={fadeInUp} className="space-y-3 pt-2">
              <h4 className="text-xs uppercase font-bold tracking-widest text-slate-500">
                Core Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-white text-slate-700 border border-slate-200 rounded-lg shadow-sm hover:border-violet-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Social Links & Call to Action */}
            <motion.div
              variants={fadeInUp}
              className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            >
              <div className="flex items-center gap-3">
                <SocialLink
                  href="https://github.com/Symun-Hossain-Shifat"
                  ariaLabel="GitHub Profile"
                  icon={FaGithub}
                />
                <SocialLink
                  href="https://www.linkedin.com/in/symun-hossain-shifat-35612338b/"
                  ariaLabel="LinkedIn Profile"
                  icon={FaLinkedinIn}
                />
                <SocialLink
                  href="https://www.facebook.com/saymon.hossain.shifat"
                  ariaLabel="Facebook Profile"
                  icon={FaFacebookF}
                />
              </div>

              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 rounded-xl shadow-lg shadow-violet-500/25 transition-all duration-200 active:scale-95"
              >
                Let&apos;s Connect
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Feature Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {cardData.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="relative group bg-white border border-slate-200/80 p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Background Accent Gradient on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  />

                  <div className="relative z-10 space-y-4">
                    <div className="p-3 w-fit rounded-2xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`text-2xl sm:text-3xl ${card.iconColor}`} />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-violet-600 transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Helper Social Link Component
function SocialLink({ href, icon: Icon, ariaLabel }) {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      aria-label={ariaLabel}
      className="p-3 bg-white border border-slate-200 text-slate-700 hover:text-violet-600 hover:border-violet-300 hover:shadow-md rounded-xl transition-all duration-200 active:scale-95"
    >
      <Icon className="w-5 h-5" />
    </Link>
  );
}