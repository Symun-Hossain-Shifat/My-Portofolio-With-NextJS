"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactComponent() {
  return (
    <section
      id="contact"
      className="bg-[#1a2b44] text-white py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-violet-400 uppercase tracking-widest font-semibold text-sm sm:text-base">
            Contact Me
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 leading-tight">
            Let’s Build Something
            <br />
            Amazing Together
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-7">
            Have a project idea? Let’s discuss and bring it to life with modern
            design and clean code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 sm:p-6 rounded-2xl hover:border-violet-500 transition">
              <FaEnvelope className="text-violet-400 text-2xl mb-3" />

              <h3 className="text-lg sm:text-xl font-semibold">Email</h3>

              <p className="text-gray-400 break-all text-sm sm:text-base">
                saymonshifat569625@gmail.com
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 sm:p-6 rounded-2xl hover:border-violet-500 transition">
              <FaPhoneAlt className="text-violet-400 text-2xl mb-3" />

              <h3 className="text-lg sm:text-xl font-semibold">Phone</h3>

              <p className="text-gray-400 break-all text-sm sm:text-base">
                +880 1619050716
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 sm:p-6 rounded-2xl hover:border-violet-500 transition">
              <FaMapMarkerAlt className="text-violet-400 text-2xl mb-3" />

              <h3 className="text-lg sm:text-xl font-semibold">Location</h3>

              <p className="text-gray-400 text-sm sm:text-base">
                Rampura, Dhaka, Bangladesh
              </p>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full h-12 sm:h-14 px-4 bg-transparent border border-white/10 rounded-xl outline-none focus:border-violet-500 text-sm sm:text-base"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full h-12 sm:h-14 px-4 bg-transparent border border-white/10 rounded-xl outline-none focus:border-violet-500 text-sm sm:text-base"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-4 bg-transparent border border-white/10 rounded-xl outline-none focus:border-violet-500 resize-none text-sm sm:text-base"
            />

            <button
              type="submit"
              className="w-full h-12 sm:h-14 flex items-center justify-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-700 transition font-semibold text-sm sm:text-base"
            >
              Send Message
              <FaPaperPlane />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}