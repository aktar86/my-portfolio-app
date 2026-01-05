import React from "react";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="relative border overflow-hidden text-white">
      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 blur-[120px]" />
        <div className="absolute -bottom-20 right-1/3 w-96 h-96 bg-fuchsia-500/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10 pb-10">
          {/* Brand */}
          <div>
            <Logo />
            <p className="text-slate-400 text-sm mt-3 max-w-xs">
              Blending design aesthetics with full-stack development to build
              modern, scalable digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-300 mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/aktar86"
                target="_blank"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:text-cyan-400 transition"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/aktarbd/"
                target="_blank"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:text-blue-400 transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://facebook.com/aktar5436"
                target="_blank"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:text-blue-500 transition"
              >
                <Facebook size={20} />
              </a>

              <a
                href="amdaktar86@gmail.com"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:text-fuchsia-400 transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p className="text-center w-full">
            © {new Date().getFullYear()} Aktar. All rights reserved.
          </p>
          {/* <p className="mt-2 md:mt-0">Designed & Built with ❤️ using React</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
