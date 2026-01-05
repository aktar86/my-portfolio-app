import React from "react";

const skills = [
  { name: "React", percent: 90 },
  { name: "Next.js", percent: 80 },
  { name: "Node.js", percent: 75 },
  { name: "Express", percent: 70 },
  { name: "MongoDB", percent: 72 },
  { name: "Tailwind CSS", percent: 95 },
  { name: "Figma", percent: 85 },
  { name: "Photoshop", percent: 80 },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative text-white py-24 px-5 lg:px-0 overflow-hidden"
    >
      {/* Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-fuchsia-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-black mb-20 text-center uppercase tracking-tight">
          My{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-cyan-400">
            Skills
          </span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 hover:border-fuchsia-400/40 transition-all"
            >
              {/* Skill Header */}
              <div className="flex justify-between items-center mb-3 text-sm">
                <span className="text-slate-300 font-medium">{skill.name}</span>
                <span className="text-slate-500 font-semibold">
                  {skill.percent}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-fuchsia-500 to-cyan-400 rounded-full transition-all duration-700"
                  style={{ width: `${skill.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
