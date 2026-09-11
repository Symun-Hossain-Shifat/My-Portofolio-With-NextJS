import React from 'react';
import Image from 'next/image';
import image1 from '@/asset/Recipe.png'
import { LuArrowRight } from 'react-icons/lu';
import image3 from '@/asset/hireloop.png'
import image4 from '@/asset/travel.png'
import image5 from '@/asset/Torlet.png'
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
              <p className="text-[#545454] flex flex-col leading-relaxed">RecipeHub is a full-stack recipe sharing platform where users can discover, create, and share recipes with a clean, responsive interface and secure authentication.

              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-[#111111]"> Project Featured </h4>
              <p className="text-[#545454] flex flex-col leading-relaxed">
                • Implemented recipe CRUD and a like system with duplicate prevention, displaying live counts on responsive cards. <br />
                • Implemented category filtering across 5 recipe types with server-side pagination for fast, dynamic catalog loading. <br />
                • Enabled Google/email sign-in via Better Auth, with a personal dashboard to manage recipes and profile.

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
                • Implemented one-click resume/CV upload and cover letter submission with real-time application status tracking. <br />
                • Designed role-based dashboards for seekers, employers, and admins to manage applications and analytics. <br />
                • Implemented Google/email sign-in via Better Auth with JWT, HTTP-only cookies, and role-based access control. <br />

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
                •  Users can browse available destinations and book their preferred trips through a simple, secure system tied to their account. <br />
                • Users have full control to edit or delete their added travel destinations anytime. <br />
                • Authenticated users can view, track, and organize all their booked destinations in one dedicated dashboard. <br />

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





        {/* Project 4 - Image on Left */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text Side */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight">
              Torlet E-commerce Platform
            </h2>
            <div>
              <h4 className="text-lg font-semibold text-[#111111]"> Project Overview </h4>
              <p className="text-[#545454] flex flex-col leading-relaxed">Developed a full-stack e-commerce platform that allows users to browse products, manage listings, and complete purchases through a responsive and user-friendly interface with secure authentication.</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-[#111111]"> Project Featured </h4>
              <p className="text-[#545454] flex flex-col leading-relaxed">
                • Enabled users to browse products, view detailed product pages, and manage a wishlist and cart before checkout. <br />
                • Built a responsive admin table enabling sellers/admins to manage products and users, reply to messages, and track activity. <br />
                • Implemented sign-in access to a personal profile dashboard with persistent wishlist and cart state across sessions. <br />

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
                <Link href={'https://torlet-project-client-side.vercel.app/'}>
                  <button className='btn btn-primary btn-outline items-center'> <span>View Project</span>  <span><LuArrowRight size={15} /></span> </button>
                </Link>
                <Link href={'https://github.com/Symun-Hossain-Shifat/Torlet_project_Client-REPO'}>
                  <button className='btn btn-primary btn-outline items-center'> <span>View Code</span>  <span><LuArrowRight size={15} /></span> </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative group overflow-hidden rounded-[2.5rem]">
            <Image
              src={image5} // Replace with your actual image path
              alt="PeakStudio Architectural Excellence"
              width={600}
              height={600}
              className="w-full h-auto rounded-[2.5rem] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Stat Box Overlay */}

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