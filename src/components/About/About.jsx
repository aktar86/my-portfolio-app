import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative border text-white py-24 px-5 lg:px-0 "
    >
      {/* Subtle Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-125 h-125 bg-cyan-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-black mb-20 text-center uppercase tracking-tight">
          About{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-fuchsia-500">
            Me
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bio */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-10 hover:border-cyan-400/40 transition-all duration-300">
            <p className="text-cyan-400 font-mono mb-3 tracking-wider">
              01. My Background
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-5">
              Non-CSE to Full-Stack
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              I started my career as a graphic designer and gradually
              transitioned into modern web development. Today, I combine design
              aesthetics with scalable frontend and backend logic to build
              meaningful digital products.
            </p>
          </div>

          {/* Current Role */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 flex flex-col justify-center hover:border-blue-400/40 transition-all duration-300">
            <p className="text-blue-400 font-mono text-xs mb-2 uppercase tracking-widest">
              Currently
            </p>
            <h4 className="text-xl md:text-2xl font-bold mb-1">
              Graphic Designer
            </h4>
            <p className="text-slate-500 text-sm md:text-base">
              Consultancy Firm
            </p>

            {/* Accent Line */}
            <div className="mt-6 h-[2px] w-12 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
