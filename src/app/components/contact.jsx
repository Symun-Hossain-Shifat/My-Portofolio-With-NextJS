"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function ContactComponent() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., EmailJS or API route)
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#1a2b44] text-white py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-1/3 -left-28 w-64 h-64 sm:w-80 sm:h-80 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-28 w-64 h-64 sm:w-80 sm:h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-10 sm:mb-14 md:mb-18"
        >
          <span className="inline-block text-violet-400 uppercase tracking-widest font-semibold text-xs sm:text-sm md:text-base bg-violet-500/10 px-4 py-1.5 rounded-full border border-violet-500/20 mb-4">
            Contact Me
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Let’s Build Something <br className="hidden sm:inline" />
            <span className="text-violet-400">Amazing Together</span>
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            Have a project idea or an opportunity to discuss? Reach out and
            let’s turn your concepts into reality with clean code and modern design.
          </p>
        </motion.div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Side: Contact Information Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5 space-y-4 sm:space-y-5"
          >
            {/* Email Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 sm:p-6 rounded-2xl hover:border-violet-500/50 hover:bg-white/[0.07] transition duration-300 flex items-start gap-4 sm:gap-5"
            >
              <div className="p-3 bg-violet-500/10 border border-violet-500/20 rounded-xl text-violet-400 text-xl sm:text-2xl shrink-0">
                <FaEnvelope />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  Email
                </h3>
                <a
                  href="mailto:saymonshifat569625@gmail.com"
                  className="text-gray-300 hover:text-violet-400 text-xs sm:text-sm md:text-base break-all transition-colors block mt-1"
                >
                  saymonshifat569625@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 sm:p-6 rounded-2xl hover:border-violet-500/50 hover:bg-white/[0.07] transition duration-300 flex items-start gap-4 sm:gap-5"
            >
              <div className="p-3 bg-violet-500/10 border border-violet-500/20 rounded-xl text-violet-400 text-xl sm:text-2xl shrink-0">
                <FaPhoneAlt />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  Phone
                </h3>
                <a
                  href="tel:+8801619050716"
                  className="text-gray-300 hover:text-violet-400 text-xs sm:text-sm md:text-base transition-colors block mt-1"
                >
                  +880 1619050716
                </a>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 sm:p-6 rounded-2xl hover:border-violet-500/50 hover:bg-white/[0.07] transition duration-300 flex items-start gap-4 sm:gap-5"
            >
              <div className="p-3 bg-violet-500/10 border border-violet-500/20 rounded-xl text-violet-400 text-xl sm:text-2xl shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  Location
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-1">
                  Rampura, Dhaka, Bangladesh
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Interactive Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase font-semibold text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full min-h-[48px] sm:min-h-[52px] px-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 text-white placeholder-gray-500 text-sm sm:text-base transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase font-semibold text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full min-h-[48px] sm:min-h-[52px] px-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 text-white placeholder-gray-500 text-sm sm:text-base transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase font-semibold text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 text-white placeholder-gray-500 resize-none text-sm sm:text-base transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full min-h-[48px] sm:min-h-[52px] flex items-center justify-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-700 active:scale-[0.98] transition-all font-semibold text-sm sm:text-base text-white shadow-lg shadow-violet-600/25 cursor-pointer"
              >
                Send Message
                <FaPaperPlane className="text-xs sm:text-sm" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}