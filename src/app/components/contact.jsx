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
    <section id="contact" className="bg-[#0f0715] text-white py-10 mb-40  px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 uppercase tracking-widest font-semibold">
            Contact Me
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mt-3">
            Let’s Build Something <br /> Amazing Together
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project idea? Let’s discuss and bring it to life with modern design and clean code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-violet-500 transition">
              <FaEnvelope className="text-violet-400 text-2xl mb-3" />
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-400">saymonshifat569625@gmail.com</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-violet-500 transition">
              <FaPhoneAlt className="text-violet-400 text-2xl mb-3" />
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-400">+880 1619050716</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-violet-500 transition">
              <FaMapMarkerAlt className="text-violet-400 text-2xl mb-3" />
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-gray-400">Rampura , Dhaka , Bangladesh</p>
            </div>

          </motion.div>

          {/* Right Form */}
          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl space-y-5"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-transparent border border-white/10 rounded-xl focus:border-violet-500 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-transparent border border-white/10 rounded-xl focus:border-violet-500 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 bg-transparent border border-white/10 rounded-xl focus:border-violet-500 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 transition py-4 rounded-xl font-semibold"
            >
              Send Message <FaPaperPlane />
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  );
}