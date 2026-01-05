import React from "react";

const experiences = [
  {
    role: "Teacher (ICT)",
    company: "Anwara Matin School and College, Sylhet",
    period: "Jan 2020 – 2021",
    type: "Full-time",
    description:
      "Prepared academic question papers, official notices, and managed Excel-based calculations. Also taught ICT subjects to students.",
    responsibilities: [
      "Prepared school and college-level question papers",
      "Designed and distributed official notices",
      "Managed student data and result calculations using Excel",
      "Delivered ICT classes with practical demonstrations",
    ],
    tools: ["MS Word", "Excel", "PowerPoint", "Photoshop", "Illustrator"],
  },
  //   {
  //     role: "Computer Operator",
  //     company: "Jiha Computer, Amberkhana Borobazar, Sylhet",
  //     period: "Jan 2018 – 2020",
  //     type: "Full-time",
  //     description:
  //       "Handled academic documentation, question preparation, and Excel-based data management for school and college clients.",
  //     responsibilities: [
  //       "Typed and formatted school & college question papers",
  //       "Prepared notices and academic documents",
  //       "Maintained Excel sheets for calculations and records",
  //       "Provided computer support to students and teachers",
  //     ],
  //     tools: ["MS Word", "Excel", "PowerPoint", "Photoshop", "Illustrator"],
  //   },
  {
    role: "Graphic Designer",
    company: "Ananda Tower, Sylhet",
    period: "Jan 2025 – Present",
    type: "Full-time",
    description:
      "Worked on digital design and student counselling for abroad studies while managing social media visual content.",
    responsibilities: [
      "Designed social media posts and promotional materials",
      "Provided student counselling for overseas education",
      "Maintained brand consistency across digital platforms",
      "Collaborated with marketing team for campaign visuals",
    ],
    tools: ["MS Word", "Photoshop", "Illustrator"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative  text-white  py-20">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-black mb-20 text-center uppercase">
          My{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-fuchsia-500">
            Experience
          </span>
        </h2>

        {/* Timeline */}
        <div className="relative   grid lg:grid-cols-2 gap-8 space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Dot */}
              <span className="absolute -left-[11px] -top-2 w-10 h-10 rounded-full bg-linear-to-r from-cyan-400 to-fuchsia-500" />

              {/* Card */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 hover:border-cyan-400/40 transition">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-slate-300">
                    {exp.type}
                  </span>
                </div>

                <p className="text-slate-400 text-sm">
                  {exp.company} • {exp.period}
                </p>

                <p className="text-slate-300 mt-4 text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <ul className="mt-4 space-y-2 text-sm text-slate-400 list-disc list-inside">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {/* Tools */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-500/20 blur-[140px]" />
    </section>
  );
};

export default Experience;
