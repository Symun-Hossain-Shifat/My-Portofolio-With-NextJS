"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaCode,
  FaLaptopCode,
  FaPaintBrush,
  FaFootballBall,
  FaHeart,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Aboutpage() {
  return (
    <section
      id="about"
      className="min-h-screen border-2 bg-white text-black px-4 sm:px-6 md:px-16 py-14 md:py-20"
    >
      <p className="text-violet-600 font-bold text-xl sm:text-2xl text-center mb-6 tracking-widest uppercase">
        About Me
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Passionate Full stack Developer &
            <span className="text-violet-400"> Creative Thinker</span>
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-7 md:leading-8 mb-5 md:mb-6">
            Hello! I'm <span className="text-black font-semibold">Shifat</span>,
            a passionate programming learner and aspiring software developer
            from Bangladesh. My journey into programming started with curiosity
            about how websites and applications work behind the scenes.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-7 md:leading-8 mb-5 md:mb-6">
            I enjoy building modern, responsive, and interactive web
            applications using technologies like React, Next.js, Tailwind CSS,
            and MongoDB. I love turning ideas into real-world projects and
            constantly improving my problem-solving skills.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-7 md:leading-8">
            Outside of programming, I enjoy football, creative design, exploring
            new technologies, and spending time learning about different
            cultures and opportunities around the world. I believe consistency,
            creativity, and hard work can turn dreams into reality.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        >
          {/* CARD 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl hover:text-violet-400 transition duration-300"
          >
            <FaCode className="text-3xl md:text-4xl text-cyan-400 mb-3 md:mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
              Programming Journey
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-6 md:leading-7">
              Started learning programming with curiosity and gradually built
              skills in frontend and backend development.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl hover:text-violet-400 transition duration-300"
          >
            <FaLaptopCode className="text-3xl md:text-4xl text-violet-400 mb-3 md:mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
              What I Enjoy
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-6 md:leading-7">
              I enjoy creating beautiful user interfaces, solving coding
              problems, and building full-stack projects.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl hover:text-violet-400 transition duration-300"
          >
            <FaFootballBall className="text-3xl md:text-4xl text-cyan-400 mb-3 md:mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
              Hobbies
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-6 md:leading-7">
              I love football, exploring technology, traveling ideas, and
              learning about opportunities around the world.
            </p>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl hover:text-violet-400 transition duration-300"
          >
            <FaHeart className="text-3xl md:text-4xl text-violet-400 mb-3 md:mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
              Personality
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-6 md:leading-7">
              I'm ambitious, creative, and always eager to learn new things and
              challenge myself with exciting projects.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div>
        {/* Buttons */}
        <div className="flex my-6 md:my-8 justify-center items-center gap-5 md:gap-6">
          {/* Social Icons */}
          <Link target="_blank" href={"https://www.facebook.com/saymon.hossain.shifat"}>
            <FaFacebook
              size={26}
              className="hover:text-primary cursor-pointer sm:!w-[30px] sm:!h-[30px]"
            />
          </Link>

          <Link target="_blank" href={"https://github.com/Symun-Hossain-Shifat"}>
            <FaGithub
              size={26}
              className="hover:text-primary cursor-pointer sm:!w-[30px] sm:!h-[30px]"
            />
          </Link>

          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/symun-hossain-shifat-35612338b/"}
          >
            <FaLinkedin
              size={26}
              className="hover:text-primary cursor-pointer sm:!w-[30px] sm:!h-[30px]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}