import React from 'react';
import Image from 'next/image';
import image1 from '@/asset/payoo.png'
import { LuArrowRight } from 'react-icons/lu';
import image3 from '@/asset/news.png'
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
              Payoo Mobile App
            </h2>
            <div>
               <h4 className="text-lg font-semibold text-[#111111]"> Project Overview </h4>
               <p className="text-[#545454] flex flex-col leading-relaxed">Payoo is a secure digital payment platform that enables users to perform Cash In, Cash Out, Bank Transfers, and Bill Payments with ease.

The application features secure authentication, seamless transaction management, and a personalized dashboard for tracking financial activities and account history.</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-[#111111]"> Project Featured </h4>
              <p className="text-[#545454] flex flex-col leading-relaxed">
               <span>Users can perform secure financial transactions, including Cash In, Cash Out, Send Money, Bank Transfers, and Bill Payments through a single platform.</span>
               <span>Users can register and log in securely to access their accounts, ensuring protected access to personal and financial information.</span>
               <span>Users can manage their account activities, track transaction history, monitor balances, and view payment records from a personalized dashboard.</span>
              
              </p>
            </div>
            
            <div className="space-y-3 pt-2">
              <h4 className="text-lg font-semibold text-[#111111]">used Technology</h4>
              <div className='flex flex-wrap font-semibold gap-3'>
                <button className='btn btn-outline btn-neutral'>HTML</button>
                <button className='btn btn-outline btn-neutral'>TailwindCSS</button>
                <button className='btn btn-outline btn-neutral'>javascript</button>
                <button className='btn btn-outline btn-neutral'>CSS</button>
              </div>
              <div className='flex gap-5'>
              <Link href={'https://payoo-app-project.netlify.app'}>
              <button className='btn btn-primary btn-outline items-center'> <span>View Project</span>  <span><LuArrowRight size={15} /></span> </button>
              </Link>
              <Link href={'https://github.com/Symun-Hossain-Shifat/Mobile-Banking-App'}>
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
              Dragon News App
            </h2>
             <div>
               <h4 className="text-lg font-semibold text-[#111111]"> Project Overview </h4>
               <p className="text-[#545454] flex flex-col leading-relaxed">A modern news portal application that allows users to browse the latest news, filter articles by category, and read detailed news content through a secure authentication system.

Users can create accounts, log in securely, and manage their profiles while enjoying a personalized and seamless news-reading experience.</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-[#111111]"> Project Featured </h4>
              <p className="text-[#545454] flex flex-col leading-relaxed">
               <span>Users can explore all available news articles and quickly find relevant content by filtering news based on categories such as Technology, Sports, Business, Entertainment, and more.</span>
               <span>Authenticated users can access detailed news articles, including full content, publication information, and related news, ensuring a personalized reading experience.</span>
               <span>Registered users can manage and update their profile information, allowing them to keep their account details accurate and personalized.</span>
               
              
              </p>
            </div>
            
            <div className="space-y-3 pt-2">
              <h4 className="text-lg font-semibold text-[#111111]">used Technology</h4>
              <div className='flex flex-wrap font-semibold gap-3'>
                <button className='btn btn-outline btn-neutral'>React</button>
                <button className='btn btn-outline btn-neutral'>Next Js</button>
                <button className='btn btn-outline btn-neutral'>MongoDB</button>
                <button className='btn btn-outline btn-neutral'>TailwindCSS</button>
              </div>

              <div className='flex gap-5'>
              <Link href={'https://news-app-rust-delta.vercel.app/'}>
              <button className='btn btn-primary btn-outline items-center'> <span>View Project</span>  <span><LuArrowRight size={15} /></span> </button>
              </Link>
              <Link href={'https://github.com/Symun-Hossain-Shifat/Daily-Star-News-App'}>
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