import React from "react";

const About = () => {
  const skills = [
    { name: "React", percent: 90 },
    { name: "Next.js", percent: 80 },
    { name: "Node.js", percent: 75 },
    { name: "Express", percent: 70 },
    { name: "MongoDB", percent: 72 },
    { name: "Tailwind", percent: 95 },
    { name: "Figma", percent: 85 },
    { name: "Photoshop", percent: 80 },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen  text-white py-20 px-6 "
    >
      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-linear-to-tr from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/30 rounded-full blur-[120px] animate-[pulse_8s_infinite] pointer-events-none" />

      <div className="max-w-6xl  mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter text-center  uppercase">
          {" "}
          About{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-fuchsia-500">
            ME
          </span>
        </h2>

        {/* Bento Grid */}
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 ">
          {/* Box 1: Bio */}
          <div className="md:col-span-2 md:row-span-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-end hover:border-cyan-500/50 transition-all">
            <p className="text-cyan-400 font-mono mb-2">01. My Background</p>
            <h3 className="text-3xl font-bold mb-4">Non-CSE to Full-Stack.</h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              I broke the mold by teaching myself to code from scratch. I don’t
              just write scripts; I engineer digital experiences by blending my
              design background with modern MERN stack logic.
            </p>
          </div>

          {/* Box 2: Journey + Tech Stack */}
          <div className="md:row-span-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:border-fuchsia-500/50 transition-all overflow-hidden relative flex flex-col justify-between">
            {/* Journey */}
            <div>
              <p className="text-fuchsia-400 font-mono mb-3">02. The Journey</p>
              <h4 className="text-2xl font-bold mb-2">Design → Development</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Started as a graphic designer. Over time, I transitioned into a
                full-stack developer by mastering logic, performance, and
                scalable application architecture.
              </p>
            </div>

            {/* Divider */}
            <div className="my-2 h-px bg-white/10"></div>

            {/* Tech Stack */}
            <div>
              <p className="text-fuchsia-400 font-mono mb-4">Tech Stack</p>

              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-slate-500">{skill.percent}%</span>
                    </div>

                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-fuchsia-500 to-cyan-400 rounded-full transition-all duration-700"
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-fuchsia-500/20 blur-3xl"></div>
          </div>

          {/* Box 3: Current Role */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 flex flex-col justify-center hover:border-blue-500/50 transition-all">
            <p className="text-blue-400 font-mono text-xs mb-1 uppercase tracking-widest">
              Now Working
            </p>
            <h4 className="text-xl font-bold">Graphic Designer</h4>
            <p className="text-slate-500 text-sm">Consultancy Firm</p>
          </div>

          {/* Box 4: Download CV */}
          <div className="bg-linear-to-br from-cyan-500 to-blue-600 rounded-3xl p-1 flex items-stretch">
            <a
              href="/cv.pdf"
              className="flex-1 bg-black/20 hover:bg-transparent transition-colors rounded-[22px] flex flex-col items-center justify-center group"
            >
              <span className="text-sm font-mono text-white/70 uppercase">
                Get Resume
              </span>
              <span className="text-2xl font-bold">Download</span>
              <svg
                className="w-6 h-6 mt-2 group-hover:translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
