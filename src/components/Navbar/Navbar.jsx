import React from "react";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <div className="bg-primary p-4 px-5 mt-2 rounded-full text-white flex justify-between items-center border-2 border-gray-800">
      <div>
        <Logo />
      </div>
      <div className="flex items-center gap-5">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#section1"> Hero</a>
            </li>
            <li>
              <a href="#about"> About</a>
            </li>
            <li>
              <a href="#education"> Education</a>
            </li>
            <li>
              <a href="#experience"> Experience</a>
            </li>
            <li>
              <a href="#skills"> Skills</a>
            </li>
            <li>
              <a href="#contact"> Contacts</a>
            </li>
          </ul>
        </nav>

        <button className="btn-primary">
          <a
            href="https://github.com/aktar86"
            target="_blank"
            class="inline-block"
          >
            Github
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
