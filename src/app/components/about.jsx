
"use client";

import Image from "next/image";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import image from '@/asset/shifat2.png'
import Link from "next/link";


export default function Aboutpage() {
  return (
    <section className="min-h-screen flex items-center bg-base-100 px-6 md:px-16 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/10 blur-2xl absolute -z-10"></div>

            <Image
              src={image}
              
              alt="Profile"
              className="w-72 md:w-96 bg-none rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 space-y-5">

          <p className="text-primary font-semibold">ABOUT ME</p>

          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            More Than <span className="text-primary">1+ Years</span> Programming Experience
          </h2>

          <p className="font-semibold text-gray-700">
            I am a passionate web developer currently studying in Honours 1st year. I enjoy building modern, responsive web applications and continuously improving my skills in frontend and backend development. My goal is to grow as a software engineer and work in a top tech company.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <p><span className="font-semibold">Name:</span> Symun Hossain Shifat</p>
            <p><span className="font-semibold">Location:</span> Dhaka, Bangladesh</p>
            <p><span className="font-semibold">Email:</span> saymonshifat569625@gmail.com</p>
            <p><span className="font-semibold">Contact:</span> 01619050715 / 01756795022 </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-3">

            <button className="btn btn-primary">
              Download CV
            </button>

            {/* Social Icons */}
            <div className="flex gap-4 text-xl text-base-content/70">
            <Link target="blank" href={'https://www.facebook.com/saymon.hossain.shifat'}>
            <FaFacebook className="hover:text-primary cursor-pointer" />
            </Link>
              
            <Link target="blank" href={'https://github.com/Symun-Hossain-Shifat'}>
              <FaGithub className="hover:text-primary cursor-pointer" />
            </Link>
              
            <Link target="blank" href={'https://www.linkedin.com/in/symun-hossain-shifat-35612338b/'}>
             <FaLinkedin className="hover:text-primary cursor-pointer" />
            </Link>
              
            
             
             
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}