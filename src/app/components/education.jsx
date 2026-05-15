import React from 'react';

const EducationExperience = () => {
  const educationData = [
    {
      institution: 'National University (Accounting Department)',
      duration: 'Running',
      description: 'Currently maintaining a perfect GPA of 4.00 out of 4.00 while pursuing higher education.',
      degree: 'BBA in Accounting',
    },
    {
      institution: 'Lakshmipur National Ideal School & College',
      duration: '2022 - 2024',
      description: 'GPA 5.00 (Out of 5.00 from Business studies)',
      degree: 'HSC',
    },
    {
      institution: 'Bangakhan High School',
      duration: '2019 - 2022',
      description: 'GPA 5.00 (Out of 5.00 from Business studies)',
      degree: 'SSC',
    },
  ];

  const experienceData = [
    {
      company: 'Programming Hero Team ',
      duration: '2026 - Present',
      description: 'I am a Level 1 Web Developer learning at Programming Hero, building my skills in HTML, CSS, JavaScript, and React through hands-on projects. Collaborating with a dedicated team group on real-world web projects and troubleshooting complex logic.',
      role: 'Fullstack Developer',
    },
    {
      company: 'Torlet Project',
      duration: '2026 - Present',
      description: 'Worked on editing the website based on wordpress platform',
      role: 'Fullstack Develpper',
    },
    {
      company: 'Self-Directed Projects',
      duration: '2026',
      description: 'Built responsive web applications using HTML, CSS, and DaisyUI component libraries.',
      role: 'Junior Developer',
    },
  ];

  return (
    <section id='education' className="bg-white container mx-auto py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Education Column */}
        <div>
          <div className="flex flex-col mb-10">
            <span className="text-[#00a3ff] font-semibold uppercase tracking-wider text-sm mb-2">Qualification</span>
            <h2 className="text-4xl font-bold text-[#1a202c]">My Education</h2>
          </div>

          <div className="relative border-l-2 border-blue-50 ml-2">
            {educationData.map((item, index) => (
              <div key={index} className="mb-12 ml-8 relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-1 w-4 h-4 bg-white border-2 border-[#00a3ff] rounded-full shadow-[0_0_10px_rgba(0,163,255,0.5)]"></div>
                
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-[#2d3748]">{item.institution}</h3>
                  <span className="text-gray-400 text-sm">({item.duration})</span>
                </div>
                <p className="text-gray-500 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <span className="inline-block bg-[#ebf8ff] text-[#00a3ff] px-4 py-1 rounded-full text-sm font-medium shadow-sm">
                  {item.degree}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div>
          <div className="flex flex-col mb-10">
            <span className="text-[#00a3ff] font-semibold uppercase tracking-wider text-sm mb-2">Programming Journey</span>
            <h2 className="text-4xl font-bold text-[#1a202c]">My Awesome Journey</h2>
          </div>

          <div className="relative border-l-2 border-blue-50 ml-2">
            {experienceData.map((item, index) => (
              <div key={index} className="mb-12 ml-8 relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-1 w-4 h-4 bg-white border-2 border-[#00a3ff] rounded-full shadow-[0_0_10px_rgba(0,163,255,0.5)]"></div>
                
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-[#2d3748]">{item.company}</h3>
                  <span className="text-gray-400 text-sm">({item.duration})</span>
                </div>
                <p className="text-gray-500 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <span className="inline-block bg-[#ebf8ff] text-[#00a3ff] px-4 py-1 rounded-full text-sm font-medium shadow-sm">
                  {item.role}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationExperience;