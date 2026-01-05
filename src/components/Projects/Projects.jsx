import React from "react";

const projects = [
  {
    name: "HomeNest — Real Estate Marketplace",
    description:
      "A modern real estate platform for browsing, renting, and purchasing premium properties in Dhaka with authentication, dark mode, and property management.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Firebase",
      "Node.js",
      "MongoDB",
      "DaisyUI",
    ],
    live: "https://home-nest-f7a26.web.app/",
    github: "#", // replace if GitHub link available
    image: "https://i.ibb.co.com/HTy8fKG4/Homenest.png", // optional screenshot
  },
  {
    name: "PrizeArena — Contest Management Platform",
    description:
      "A multi-vendor contest platform with role-based dashboards, leaderboard, secure payments, task submission system, and admin control.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Firebase",
      "Node.js",
      "MongoDB",
      "DaisyUI",
    ],
    live: "https://prize-arena-9d7de.web.app/",
    github: "#", // replace if GitHub link available
    image: "https://i.ibb.co.com/qFBF63C2/Screenshot-3.png", // optional screenshot
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative  text-white py-24 px-5 lg:px-0 ">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-black mb-20 text-center uppercase tracking-tight">
          My{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-fuchsia-500">
            Projects
          </span>
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl overflow-hidden group hover:border-cyan-400 transition-all duration-300"
            >
              {/* Project Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-52 object-cover scale-110 rounded-t-3xl group-hover:scale-115 transition-transform duration-500"
                />
              )}

              {/* Content */}
              <div className="p-6 flex flex-col justify-between">
                <h3 className="text-2xl font-bold mb-2 line-clamp-1">
                  {project.name}
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 flex-wrap">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-cyan-500/30 hover:bg-cyan-500/50 text-white text-sm font-semibold transition"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-fuchsia-500/30 hover:bg-fuchsia-500/50 text-white text-sm font-semibold transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
