"use client";

import Image from "next/image";
import saymon from '@/asset/saymon.png'
import { motion } from "framer-motion";

import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";


export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#f6f6f6] overflow-hidden flex items-center relative">
      
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-300 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-300 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 w-full">
        
        {/* Main Flex */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
           

      <div className="container  mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="text-center lg:text-left max-w-xl">
          <p className="text-xl mb-2">Hello 👋</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            I’m <span className="text-primary">Symun Hossain</span>
            <br />
            a <span className="text-primary">
               <Typewriter
          words={["Web Developer", "Problem Solver" , 'Fast Learner']}
          loop={0} // infinite
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
                
                
                </span>
          </h1>

          <p className="py-6 text-base-content/70">
            I’m a passionate frontend developer who builds modern, responsive,
            and user-friendly web applications using Next.js, React, and Tailwind CSS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link  href='#contact'>
             <button  className="btn w-4/12 md:w-full mx-auto btn-primary">
             Contact Me
            </button>
            </Link>
           

            
             <Link target="blank" href={'https://drive.google.com/file/d/1603bEdK-O07fze9DwKamuj1GBqsL-tmj/view'}>
           <button className="btn mx-auto  w-4/12 md:w-full btn-outline btn-primary flex items-center gap-2">
              
              View Resume
            </button>
            </Link>

          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <div className=" rounded-full bg-primary/10 absolute -z-10 blur-2xl"></div>

         
        </div>
      </div>
            
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center relative"
          >
            
            {/* Glow */}
            <div className="absolute w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-r from-purple-400 to-blue-400 blur-3xl opacity-30"></div>

            {/* Circle */}
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px] rounded-full border-[12px] border-white shadow-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
              
              <Image
                src={saymon}
                alt="profile"
                fill
                className="object-cover hover:scale-105 duration-500"
                priority
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-0 lg:bottom-10 bg-white shadow-2xl border border-gray-200 rounded-3xl px-8 py-5 flex gap-10">
              
              <div className="text-center">
                <h2 className="text-3xl font-bold text-purple-600">
                  1+
                </h2>
                <p className="text-gray-500 text-sm">
                  Experience
                </p>
              </div>

              <div className="w-[1px] bg-gray-300"></div>

              <div className="text-center">
                <h2 className="text-3xl font-bold text-blue-600">
                  15+
                </h2>
                <p className="text-gray-500 text-sm">
                  Projects
                </p>
              </div>

              <div className="w-[1px] bg-gray-300"></div>

              <div className="text-center">
                <h2 className="text-3xl font-bold text-pink-600">
                  100%
                </h2>
                <p className="text-gray-500 text-sm">
                  Success
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
