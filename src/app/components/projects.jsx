import React from 'react';
import Image from 'next/image';
import image1 from '@/asset/Recipe.png'
import { LuArrowRight } from 'react-icons/lu';
import image3 from '@/asset/hireloop.png'
import image4 from '@/asset/travel.png'
import Link from 'next/link';

const ProjectsSection = () => {
  return (
    <section id='projects' className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24">

<p className="text-primary text-center mb-10 text-3xl font-semibold">My Top Projects</p>

      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Project 1 - Image on Left */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative group overflow-hidden rounded-[2.5rem]">
            <Image 
              src={image1} // Replace with your actual image path
              alt="PeakStudio Architectural Excellence"
              width={600}
              height={400}
              className="w-full h-auto rounded-[2.5rem] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Stat Box Overlay */}
           
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight">
              Recipe Sharing Platform
            </h2>
            <div>
               <h4 className="text-lg font-semibold text-[#111111]"> Project Overview </h4>
               <p className="text-[#545454] flex flex-col leading-relaxed">Payoo is a secure digital RecipeHub is a modern full-stack recipe sharing platform where users can discover, create, manage, and share delicious recipes with people around the world. It provides a clean and responsive interface, secure authentication, recipe categorization, and an interactive user experience.

</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-[#111111]"> Project Featured </h4>
              <p className="text-[#545454] flex flex-col leading-relaxed">
               ● User & Admin Dashboards: Developed separate dashboards for users and admins with recipe management, user
management, payment tracking, and full system administration. <br />
● Recipe Management & Search: Implemented full CRUD functionality, category-based filtering, server-side
pagination, and dynamic recipe loading for a seamless browsing experience. <br />
● Authentication & Premium Features: Integrated secure authentication (Email/Password & Google Sign-In),
protected routes, persistent sessions, and a premium upgrade system with recipe posting limits.
              
              </p>
            </div>
            
            <div className="space-y-3 pt-2">
              <h4 className="text-lg font-semibold text-[#111111]">used Technology</h4>
              <div className='flex flex-wrap font-semibold gap-3'>
                <button className='btn btn-outline btn-neutral'>Next Js</button>
                <button className='btn btn-outline btn-neutral'>MongoDB</button>
                <button className='btn btn-outline btn-neutral'>Express Js</button>
                <button className='btn btn-outline btn-neutral'> JWT </button>
                <button className='btn btn-outline btn-neutral'>Vercel</button>
              </div>
              <div className='flex gap-5'>
              <Link href={'https://recipehub-client-pi.vercel.app'}>
              <button className='btn btn-primary btn-outline items-center'> <span>View Project</span>  <span><LuArrowRight size={15} /></span> </button>
              </Link>
              <Link href={'https://github.com/Symun-Hossain-Shifat/Recipe-Sharing-Platform-Client'}>
              <button className='btn btn-primary btn-outline items-center'> <span>View Code</span>  <span><LuArrowRight size={15} /></span> </button>
              </Link>
              </div>
              
              
            </div>
          </div>
        </div>








        {/* Project 2 - Image on Left */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
      
          {/* Text Side */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight">
              Job Application App
            </h2>
             <div>
               <h4 className="text-lg font-semibold text-[#111111]"> Project Overview </h4>
               <p className="text-[#545454] flex flex-col leading-relaxed">A modern news portal HireLoop is a job portal with separate dashboards for job seekers, recruiters, and admin. It allows job
seekers to apply for jobs, recruiters to manage job listings, and admins to monitor and manage platform operations.</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-[#111111]"> Project Featured </h4>
              <p className="text-[#545454] flex flex-col leading-relaxed">
              ● User, Recruiter & Admin Dashboards: Built separate dashboards where seekers can find and apply for jobs,
recruiters can register companies and post jobs, and admins can manage the whole system. <br />
● Company Approval & User Control: Developed an admin panel to approve or reject recruiter companies before
they can post jobs, with features to block problematic users to keep the platform safe. <br />
● Job Application Limit & Premium Upgrade: Implemented a system where seekers can apply for 3 jobs for free,
after which they need to make a payment to upgrade and unlock more applications.
              
              </p>
            </div>
            
            <div className="space-y-3 pt-2">
              <h4 className="text-lg font-semibold text-[#111111]">used Technology</h4>
              <div className='flex flex-wrap font-semibold gap-3'>
               <button className='btn btn-outline btn-neutral'>Next Js</button>
                <button className='btn btn-outline btn-neutral'>MongoDB</button>
                <button className='btn btn-outline btn-neutral'>Express Js</button>
                <button className='btn btn-outline btn-neutral'> JWT </button>
                <button className='btn btn-outline btn-neutral'>Vercel</button>
              </div>

              <div className='flex gap-5'>
              <Link href={'https://jobs-seeker-platform-client-folder.vercel.app'}>
              <button className='btn btn-primary btn-outline items-center'> <span>View Project</span>  <span><LuArrowRight size={15} /></span> </button>
              </Link>
              <Link href={'https://github.com/Symun-Hossain-Shifat/Jobs-seeker-platform-client-side'}>
              <button className='btn btn-primary btn-outline items-center'> <span>View Code</span>  <span><LuArrowRight size={15} /></span> </button>
              </Link>
              </div>
            </div>
          </div>

              {/* Image Side */}
          <div className="relative group overflow-hidden rounded-[2.5rem]">
            <Image 
              src={image3} // Replace with your actual image path
              alt="PeakStudio Architectural Excellence"
              width={600}
              height={400}
              className="w-full h-auto rounded-[2.5rem] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Stat Box Overlay */}
           
          </div>



        </div>







        {/* Project 3 - Image on Left */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative group overflow-hidden rounded-[2.5rem]">
            <Image 
              src={image4} // Replace with your actual image path
              alt="PeakStudio Architectural Excellence"
              width={600}
              height={400}
              className="w-full h-auto rounded-[2.5rem] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Stat Box Overlay */}
           
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight">
             Travel Booking App
            </h2>
            <div>
               <h4 className="text-lg font-semibold text-[#111111]"> Project Overview </h4>
               <p className="text-[#545454] flex flex-col leading-relaxed">Project Overview-Developed a full-stack travel booking platform that allows users to explore destinations, view travel
packages, and make bookings through a responsive and user-friendly interface with secure authentication.</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-[#111111]"> Project Featured </h4>
              <p className="text-[#545454] flex flex-col leading-relaxed">
               <span>Users can browse available travel destinations and book their preferred trips through an easy-to-use booking
system. Each booking is securely associated with the logged-in user's account. </span>
               <span>Users can manage their travel plans by editing destination details or deleting previously added travel
destinations, providing full control over their travel information.</span>
               <span>Authenticated users can view all of their booked destinations in a dedicated dashboard, allowing them to
track, manage, and organize their travel history in one place.</span>
              
              
              </p>
            </div>
            
            <div className="space-y-3 pt-2">
              <h4 className="text-lg font-semibold text-[#111111]">used Technology</h4>
              <div className='flex flex-wrap font-semibold gap-3'>
                <button className='btn btn-outline btn-neutral'>Next js</button>
                <button className='btn btn-outline btn-neutral'>MongoDB</button>
                <button className='btn btn-outline btn-neutral'>Express js</button>
                <button className='btn btn-outline btn-neutral'>Node js</button>
              </div>

            <div className='flex gap-5'>
              <Link href={'https://travel-booking-platform-gamma.vercel.app/'}>
              <button className='btn btn-primary btn-outline items-center'> <span>View Project</span>  <span><LuArrowRight size={15} /></span> </button>
              </Link>
              <Link href={'https://github.com/Symun-Hossain-Shifat/Travel-Booking-Platform'}>
              <button className='btn btn-primary btn-outline items-center'> <span>View Code</span>  <span><LuArrowRight size={15} /></span> </button>
              </Link>
              </div>
              
            </div>
          </div>
        </div>







<div className="mx-auto text-center">
  <Link
    target="_blank"
    href="https://github.com/Symun-Hossain-Shifat"
    className="inline-block"
  >
    <button className="btn btn-error btn-outline flex items-center gap-2 mx-auto">
      <span>View All Project</span>
      <LuArrowRight size={15} />
    </button>
  </Link>
</div>


      </div>
    </section>
  );
};

export default ProjectsSection;