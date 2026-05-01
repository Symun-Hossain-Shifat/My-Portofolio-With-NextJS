import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const Skillspage = () => {
 const skills = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'DaisyUI', icon: 'https://raw.githubusercontent.com/saadeghi/daisyui-images/master/images/daisyui-logo/favicon-192.png' },
  
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
];

  return (
    <section className=" py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
       
    <p className="text-primary text-center mb-10 text-3xl font-semibold">My Skills</p>

        {/* Skills Grid */}
        <div className="flex">
         <Marquee speed={50} pauseOnHover={true} gradient={false}>
  {skills.map((skill, index) => (
    <div
      key={index}
      className="bg-[#2a1454] mx-4 transition-all duration-300 rounded-2xl p-6 flex flex-col items-center justify-center border border-transparent hover:border-[#8750f7] group"
    >
      <div className="relative w-12 h-12 mb-4">
        <img
          src={skill.icon}
          alt={skill.name}
          className="object-contain w-full h-full"
        />
      </div>

      <span className="text-gray-400 group-hover:text-white text-sm font-medium transition-colors">
        {skill.name}
      </span>
    </div>
  ))}
</Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skillspage;