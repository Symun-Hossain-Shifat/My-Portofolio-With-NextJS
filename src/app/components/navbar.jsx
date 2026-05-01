"use client";

import { FaDownload } from "react-icons/fa";
import Heropage from "./hero";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import banner from '@/asset/banner2.png'
import manpic from '@/asset/shifat2.png'

export default function Navbarpage  () {
  return (
    <>
<Heropage></Heropage>


    <section className={`min-h-screen  bg-cover bg-center flex items-center bg-base-100 px-6 md:px-16 `}
    
    style={{ backgroundImage: `url(${banner.src})` }} >




      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

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
            <Link target="blank" href={'https://www.linkedin.com/in/symun-hossain-shifat-35612338b/'}>
             <button className="btn w-4/12 md:w-full mx-auto btn-primary">
             Contact Me
            </button>
            </Link>
           

            
             <Link target="blank" href={'file:///C:/Users/Computer%20Gallery/Downloads/Shifat%20CV.pdf'}>
           <button className="btn mx-auto  w-4/12 md:w-full btn-outline btn-primary flex items-center gap-2">
              <FaDownload />
              Download CV
            </button>
            </Link>

          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/10 absolute -z-10 blur-2xl"></div>

          <img
            src={'manpic'}
            alt="Profile"
            className="w-72 md:w-96 object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
    </>
    
  );
}