import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <li>
        <Link
          to="hero"
          smooth={true}
          duration={300}
          className="hover:text-cyan-400 transition cursor-pointer"
        >
          Hero
        </Link>
      </li>

      <li>
        <Link
          to="about"
          smooth={true}
          duration={300}
          className="hover:text-cyan-400 transition cursor-pointer"
        >
          About
        </Link>
      </li>

      <li>
        <Link
          to="education"
          smooth={true}
          duration={300}
          className="hover:text-cyan-400 transition cursor-pointer"
        >
          Education
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={300}
          className="hover:text-cyan-400 transition cursor-pointer"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="experience"
          smooth={true}
          duration={300}
          className="hover:text-cyan-400 transition cursor-pointer"
        >
          Experience
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={300}
          className="hover:text-cyan-400 transition cursor-pointer"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={300}
          className="hover:text-cyan-400 transition cursor-pointer"
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <header className="sticky  top-4 z-50">
      <div className="bg-primary/90  backdrop-blur-3xl sticky p-4 px-5 rounded-full text-white flex justify-between items-center border border-gray-800 shadow-md max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <Logo />
        </div>

        {/* Menu */}
        <div className="flex items-center gap-5">
          <nav>
            <ul className="hidden lg:flex space-x-6 text-sm font-medium">
              {links}
            </ul>
          </nav>

          {/* GitHub Button */}
          <a
            href="https://github.com/aktar86"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden md:flex"
          >
            GitHub
          </a>

          <div className="relative md:hidden flex items-center gap-2">
            <div
              className={`absolute bg-primary p-5  px-10 ${
                open ? "top-10 right-0 text-right" : "-top-200"
              }`}
            >
              <ul className="md:hidden space-y-5 mb-5">{links}</ul>
              {/* GitHub Button */}
              <a
                href="https://github.com/aktar86"
                target="_blank"
                rel="noopener noreferrer"
                className=" md:hidden hover:text-cyan-400 transform-transition ease-in-out "
              >
                GitHub
              </a>
            </div>
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
