import React from 'react';
import { FaFacebookF, FaGlobe, FaGithub, FaTwitter } from 'react-icons/fa';

const Footerpage = () => {
  return (
    <footer className="relative bg-[#1f2937] text-white pt-32 pb-10 px-6">
      {/* Slanted Top Effect */}
      <div 
        className="absolute top-0 left-0 w-full h-20 bg-white" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}
      ></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Contact Section */}
        <div className="text-center mb-16">
          <span className="text-gray-400 uppercase tracking-widest text-sm font-medium">
            Contact Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
            Got a Project? Lets Talk!
          </h2>
          <button className="bg-[#0084ff] hover:bg-blue-600 transition-colors px-8 py-3 rounded-md flex items-center gap-2 mx-auto font-semibold">
            Get A Quote 
            <span>&gt;</span>
          </button>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Social Icons */}
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaGlobe size={18} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaGithub size={18} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaTwitter size={18} />
            </a>
          </div>

          {/* Copyright Text */}
          <div className="text-gray-400 text-sm">
            © 2021 Zakirsoft. Powered by Bestkit
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerpage;