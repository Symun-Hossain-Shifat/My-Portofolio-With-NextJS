import React from 'react';
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footerpage = () => {
  return (
    <footer className="bg-[#1a2b44] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* বাম দিকের সেকশন */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Let's Talk</h2>
          <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
            Every project starts with a chat. Joven leads our client conversations
            and will be happy to discuss your project. He will also pull in the right
            people from the team when needed.
          </p>
          <button className="bg-[#1db954] hover:bg-[#19a34a] text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300">
            Tell us about your project
          </button>
        </div>

        {/* ডান দিকের সেকশন */}
        <div className="flex flex-col md:items-end justify-between">
          <div className="space-y-4 text-sm md:text-base">
            <div className="flex gap-8">
              <span className="font-bold w-16">Email</span>
              <a href="mailto:hello@brand.com" className="text-cyan-400 hover:underline">
               saymonshifat569625@gmail.com
              </a>
            </div>
            <div className="flex gap-8">
              <span className="font-bold w-16">Phone</span>
              <a href="tel:+6598736584" className="text-cyan-400 hover:underline">
                01619050716 / 01756795022
              </a>
            </div>
            <div className="flex gap-8">
              <span className="font-bold w-16">Address</span>
              <p className="text-cyan-400">
               Banasree , block - c<br />
              Rampura , Dhaka
              </p>
            </div>
          </div>

          {/* সোশ্যাল আইকন */}
          <div className="flex gap-6 mt-12 md:mt-0">
            <a href="https://github.com/Symun-Hossain-Shifat" className="text-gray-400 hover:text-white text-2xl transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/saymon.hossain.shifat" className="text-gray-400 hover:text-white text-2xl transition-colors">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/symonhossainshifat/" className="text-gray-400 hover:text-white text-2xl transition-colors">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/symun-hossain-shifat-35612338b/" className="text-gray-400 hover:text-white text-2xl transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerpage;