"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import saymon from "@/asset/saymon.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f6f6f6] flex items-center pt-24 pb-20">
      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-purple-300 blur-3xl opacity-20"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-blue-300 blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <p className="text-lg sm:text-xl mb-3">Hello 👋</p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
              I'm{" "}
              <span className="text-primary">Symun Hossain</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                <span className="text-black">A </span>
                <span className="text-primary">
                  <Typewriter
                    words={[
                      "Frontend Developer",
                      "MERN Stack Developer",
                      "Problem Solver",
                      "Fast Learner",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </span>
            </h1>

            <p className="mt-8 text-base sm:text-lg leading-8 text-gray-600 max-w-xl mx-auto lg:mx-0">
              I build modern, responsive, and user-friendly web applications
              using React.js, Next.js, Node.js, Express.js, MongoDB, and
              Tailwind CSS. I enjoy transforming ideas into clean,
              high-performance digital experiences.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#contact" className="w-full sm:w-auto">
                <button className="btn btn-primary w-full sm:w-auto px-8">
                  Contact Me
                </button>
              </Link>

              <Link
                href="https://drive.google.com/file/d/1vmX6s1ibZTCdpD-uHcukBNd0p-Z1mxEM/view"
                target="_blank"
                className="w-full sm:w-auto"
              >
                <button className="btn btn-outline btn-primary w-full sm:w-auto px-8">
                  View Resume
                </button>
              </Link>
            </div>

            {/* Small Stats */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
              <div>
                <h3 className="text-2xl font-bold text-primary">15+</h3>
                <p className="text-gray-500">Projects Completed</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary">1+</h3>
                <p className="text-gray-500">Years Learning</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary">100%</h3>
                <p className="text-gray-500">Dedication</p>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center order-1 lg:order-2 min-h-[380px] sm:min-h-[500px] lg:min-h-[650px]"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[520px] lg:h-[520px] rounded-full bg-gradient-to-r from-primary/30 via-purple-300/30 to-blue-300/30 blur-3xl"></div>
            </div>

            {/* Profile Image */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-[8px] lg:border-[12px] border-white shadow-2xl bg-gradient-to-br from-purple-100 to-blue-100">
              <Image
                src={saymon}
                alt="Symun Hossain"
                fill
                priority
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute left-1/2 -translate-x-1/2 bottom-0 sm:-bottom-6 lg:bottom-8 bg-white rounded-2xl shadow-xl border border-gray-200 w-[95%] max-w-md px-5 py-5"
            >
              <div className="flex items-center justify-between">
                {/* Experience */}
                <div className="flex-1 text-center">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">
                    1+
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Experience
                  </p>
                </div>

                <div className="w-px h-12 bg-gray-300"></div>

                {/* Projects */}
                <div className="flex-1 text-center">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">
                    15+
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Projects
                  </p>
                </div>

                <div className="w-px h-12 bg-gray-300"></div>

                {/* Success */}
                <div className="flex-1 text-center">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-600">
                    100%
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Success
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}