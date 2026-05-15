import React from 'react';
import Image from 'next/image';
import image1 from '@/asset/payoo.png'
import { LuArrowRight } from 'react-icons/lu';
import image3 from '@/asset/news.png'
import image4 from '@/asset/digi.png'
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
            
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-[#111111]"> Project Featured </h4>
              <p className="text-[#545454] flex flex-col leading-relaxed">
               <span>User must Login for Visit The page </span>
               <span>User Can send money if he had sufficient balance</span>
               <span>User Can add money if he had sufficient balance</span>
               <span>User Can pay bill if he had sufficient balance</span>
              
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

              <button className='btn btn-primary btn-outline items-center'> <span>View Project</span>  <span><LuArrowRight size={15} /></span> </button>
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
            
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-[#111111]"> Project Featured </h4>
              <p className="text-[#545454] flex flex-col leading-relaxed">
               <span>User can see Breaking news </span>
               <span>User Can filter news based on category</span>
               <span>User must Login for see news details</span>
               
              
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

              <button className='btn btn-primary btn-outline items-center'> <span>View Project</span>  <span><LuArrowRight size={15} /></span> </button>
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
             Ecommerce App
            </h2>
            
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-[#111111]"> Project Featured </h4>
              <p className="text-[#545454] flex flex-col leading-relaxed">
               <span>User must Login for Visit The page </span>
               <span>User Can send money if he had sufficient balance</span>
               <span>User Can add money if he had sufficient balance</span>
               <span>User Can pay bill if he had sufficient balance</span>
              
              </p>
            </div>
            
            <div className="space-y-3 pt-2">
              <h4 className="text-lg font-semibold text-[#111111]">used Technology</h4>
              <div className='flex flex-wrap font-semibold gap-3'>
                <button className='btn btn-outline btn-neutral'>React</button>
                <button className='btn btn-outline btn-neutral'>TailwindCSS</button>
                <button className='btn btn-outline btn-neutral'>javascript</button>
                <button className='btn btn-outline btn-neutral'>DaisyUI</button>
              </div>


              <Link target='blank' href={'https://assignment-six-project-using-react.netlify.app/'}> 
              <button className='btn btn-primary btn-outline items-center'> <span>View Project</span>  <span><LuArrowRight size={15} /></span> </button>
              

              </Link>
              
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