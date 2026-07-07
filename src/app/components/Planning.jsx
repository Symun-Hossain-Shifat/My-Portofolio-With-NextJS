"use client";

import {
  FaClipboardList,
  FaPaintBrush,
  FaCode,
  FaBug,
  FaRocket,
} from "react-icons/fa";

const process = [
  {
    id: 1,
    title: "Planning",
    icon: FaClipboardList,
    description:
      "Understanding project requirements, defining goals, planning features, and creating a clear development roadmap.",
  },
  {
    id: 2,
    title: "UI Design",
    icon: FaPaintBrush,
    description:
      "Designing clean, responsive, and user-friendly interfaces with a strong focus on user experience.",
  },
  {
    id: 3,
    title: "Development",
    icon: FaCode,
    description:
      "Building scalable web applications using React.js, Next.js, Node.js, Express.js, MongoDB, and REST APIs.",
  },
  {
    id: 4,
    title: "Testing",
    icon: FaBug,
    description:
      "Testing functionality, fixing bugs, optimizing performance, and ensuring cross-browser compatibility.",
  },
  {
    id: 5,
    title: "Deployment",
    icon: FaRocket,
    description:
      "Deploying applications with Vercel, configuring environment variables, and maintaining production-ready websites.",
  },
];

export default function MyProcess() {
  return (
    <section id="process" className="py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-primary uppercase tracking-[4px] font-semibold">
            Workflow
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            My Process
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-base-content/70">
            I follow a structured workflow to ensure every project is delivered
            with clean code, excellent performance, and a seamless user
            experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Line */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-1 bg-base-300 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {process.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.id} className="relative text-center group">
                  {/* Icon */}
                  <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-3xl shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Icon />
                  </div>

                  {/* Number */}
                  <div className="absolute top-0 left-1/2 translate-x-8 -translate-y-2 w-8 h-8 rounded-full bg-white border-2 border-primary text-primary font-bold flex items-center justify-center shadow-md z-20">
                    {item.id}
                  </div>

                  {/* Card */}
                  <div className="mt-8 p-6 rounded-2xl border border-base-300 bg-base-200 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <h3 className="text-xl font-bold mb-3">
                      {item.title}
                    </h3>

                    <p className="text-base-content/70 text-sm leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}