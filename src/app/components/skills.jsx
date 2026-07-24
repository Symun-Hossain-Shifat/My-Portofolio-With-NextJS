"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiFirebase,
  SiExpress,
} from "react-icons/si";

export default function Skillspage() {
  const frontendSkills = [
    {
      name: "React",
      icon: <FaReact />,
      level: "90%",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      level: "95%",
    },

    {
      name: "JavaScript",
      icon: <SiJavascript />,
      level: "90%",
    },

    {
      name: "HTML5",
      icon: <FaHtml5 />,
      level: "99%",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      level: "99%",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      level: "98%",
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      level: "85%",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      level: "90%",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      level: "92%",
    }
  ];

  const tools = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      level: "93%",
    },
    {
      name: "Figma",
      icon: <FaFigma />,
      level: "99%",
    },

    {
      name: "Vercel",
      icon: <RiVercelLine />,
      level: "98%",
    }
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-6 md:px-16 py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[5px] font-semibold mb-4">
            My Skills
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-8">
            Here are the technologies, tools, and frameworks I use to build
            modern, responsive, and scalable web applications.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* FRONTEND */}
          <SkillCard title="Frontend Development" skills={frontendSkills} />

          {/* BACKEND */}
          <SkillCard title="Backend Development" skills={backendSkills} />

          {/* TOOLS */}
          <SkillCard title="Tools & Platforms" skills={tools} />
        </div>
      </div>
    </section>
  );
}

/* SKILL CARD */
function SkillCard({ title, skills }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:border-cyan-400 transition duration-300"
    >
      <h3 className="text-2xl font-bold mb-10 text-cyan-400">
        {title}
      </h3>

      <div className="space-y-8">
        {skills.map((skill, index) => (
          <div key={index}>

            {/* TOP */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">

                <span className="text-3xl text-cyan-400">
                  {skill.icon}
                </span>

                <h4 className="text-lg font-semibold">
                  {skill.name}
                </h4>
              </div>

              <span className="text-sm text-gray-400">
                {skill.level}
              </span>
            </div>

            {/* PROGRESS BAR */}
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="h-full bg-cyan-400 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}