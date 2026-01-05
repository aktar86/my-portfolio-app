// import React from "react";
// import { Award, GraduationCap, Palette } from "lucide-react";

// const Education = () => {
//   const educationData = [
//     {
//       title: "Complete Web Development Bootcamp",
//       institution: "Programming Hero",
//       year: "2023 - 2024",
//       description:
//         "Successfully completed the MERN stack bootcamp with an exceptional 97.88% assignment average.",
//       icon: <Award className="w-5 h-5" />,
//       side: "left",
//     },
//     {
//       title: "Bachelor of Social Science",
//       institution: "MC College, Sylhet (NU)",
//       year: "Political Science",
//       description:
//         "Gained analytical skills and a disciplined mindset through my academic studies in Political Science.",
//       icon: <GraduationCap className="w-5 h-5" />,
//       side: "right",
//     },
//     {
//       title: "Graphic Design",
//       institution: "GFX Mentor (YouTube)",
//       year: "Self-Taught",
//       description:
//         "Mastered design principles and visual hierarchy to enhance UI/UX development skills.",
//       icon: <Palette className="w-5 h-5" />,
//       side: "left",
//     },
//   ];

//   return (
//     <section id="education" className="py-20  text-white overflow-hidden">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           Education & <span className="text-secondary">Journey</span>
//         </h2>

//         <div className="relative">
//           {/* Middle Line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gray-700 hidden md:block"></div>

//           <div className="space-y-12">
//             {educationData.map((item, index) => (
//               <div
//                 key={index}
//                 className={`flex flex-col md:flex-row items-center w-full  9 ${
//                   item.side === "left" ? "md:flex-row-reverse" : ""
//                 }`}
//               >
//                 {/* Content Box */}
//                 <div className="w-full md:w-1/2 flex justify-center md:justify-start px-8">
//                   <div
//                     className={`p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-cyan-400 transition-all duration-300 shadow-xl w-full max-w-md ${
//                       item.side === "left" ? "md:text-right" : "md:text-left"
//                     }`}
//                   >
//                     <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest">
//                       {item.year}
//                     </span>
//                     <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
//                     <p className="text-gray-400 font-semibold mb-3">
//                       {item.institution}
//                     </p>
//                     <p className="text-gray-300 text-sm leading-relaxed">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Center Icon */}
//                 <div className="absolute  left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500 border-4 border-primary z-10 hidden md:flex">
//                   {item.icon}
//                 </div>

//                 {/* Empty Space for alignment */}
//                 <div className="w-full md:w-1/2  hidden md:block"></div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Self-Taught Quote */}
//         <div className="mt-20 max-w-2xl mx-auto text-center p-8 border-t border-gray-800">
//           <p className="text-lg italic text-gray-400 font-light leading-relaxed">
//             "Self-taught developer with a focus on Frontend technologies,
//             learning through documentation and hands-on projects."
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;

import React from "react";
import { Award, GraduationCap, MoveUpRight, Palette } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      title: "Complete Web Development Bootcamp",
      institution: "Programming Hero",
      mainYear: "JUL-DEC",
      range: "2025 – 2025",
      description:
        "Successfully completed the MERN stack bootcamp with an exceptional 97.88% assignment average.",
      icon: <Award className="w-5 h-5 text-white" />,
      side: "left",
      link: <MoveUpRight />,
    },
    {
      title: "Bachelor of Social Science",
      institution: "MC College, Sylhet (NU)",
      mainYear: "Political Science",
      range: "2019 – 2025",
      description:
        "Developed analytical thinking and academic discipline through Political Science studies.",
      icon: <GraduationCap className="w-5 h-5 text-white" />,
      side: "right",
      link: <MoveUpRight />,
    },
    {
      title: "Graphic Design",
      institution: "GFX Mentor (YouTube)",
      mainYear: "Self-Taught",
      range: "2017 – 2018",
      description:
        "Learned design principles, color theory, and visual hierarchy to enhance UI/UX skills.",
      icon: <Palette className="w-5 h-5 text-white" />,
      side: "left",
      link: <MoveUpRight />,
    },
  ];

  return (
    <section
      id="education"
      className="py-20 border text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-black text-center mb-20 uppercase">
          Education &{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-fuchsia-500">
            Journey
          </span>
        </h2>

        {/* Timeline Wrapper */}
        <div className="relative">
          {/* Middle Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-px bg-white/10" />

          <div className="space-y-16">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  item.side === "left" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Card */}
                <div className="w-full md:w-1/2 px-4 md:px-8">
                  <div
                    className={`bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 hover:border-cyan-400/50 transition-all duration-300 ${
                      item.side === "left" ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    {/* Top Meta */}
                    <div className="flex flex-wrap gap-3 items-center mb-2">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-slate-300">
                        {item.mainYear}
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
                        {item.range}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                    <p className="text-slate-400 font-medium mb-3">
                      {item.institution}
                    </p>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon (Desktop only) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-12 h-12 rounded-full bg-linear-to-r from-cyan-500 to-fuchsia-500 items-center justify-center border-4 border-black z-10">
                  {item.icon}
                </div>

                {/* Empty Spacer */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-24 max-w-2xl mx-auto text-center border-t border-white/10 pt-8">
          <p className="text-lg italic text-slate-400 leading-relaxed">
            “Self-taught developer focused on frontend technologies, learning
            through documentation and real-world projects.”
          </p>
        </div>
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 blur-[150px]" />
    </section>
  );
};

export default Education;
