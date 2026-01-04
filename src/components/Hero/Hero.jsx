import React from "react";
import HeroImage from "../../assets/hero.JPG";

const Hero = () => {
  return (
    <section className=" relative my-5 rounded-xl   h-[calc(100vh-30vh)] flex itmes-center">
      {/* Background Glow Circles */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
      <div className=" w-full h-full flex items-center justify-center overflow-hidden flex-1">
        {/* Main Content */}
        <div className="relative z-10  px-6">
          <span className="mt-4 text-white bg-linear-to-r from-[#f700ff] to-[#0011ff] rounded-2xl px-5 py-1 text-lg md:text-xl max-w-2xl mx-auto uppercase ">
            Full-Stack Developer
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mt-5">
            AKTAR{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
              AHMED
            </span>
          </h1>
          <p className="mt-5 text-lg">
            Crafting clean code and elegant designs. Specializing in Modern Web
            Technologies to build scalable solutions for the digital age.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 ">
            <button className="btn-primary">View Work</button>
            <button className="px-8 py-3 border border-gray-700 text-white font-semibold rounded-full hover:bg-gray-800 transition">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div className="rounded-full w-100 h-100 object-cover overflow-hidden custom-shadow border-5 border-purple-500">
          <img
            className="w-full h-full object-cover custom-shadow "
            src={HeroImage}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
