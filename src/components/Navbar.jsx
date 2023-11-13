import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ theme }) => {
  const logoUrl =
    theme === "dark" ? "/assets/logo.svg" : "/assets/logo-dark.svg";
  return (
    <div className="z-[9] text-slate-900 dark:text-stone-300 font-inter backdrop-blur-lg sticky top-0">
      <nav class="">
        <div class="container flex flex-wrap place-content-center mx-auto">
          <Link to="/" class="flex items-center">
            <img
              src={logoUrl}
              class="h-10 mr-10 mt-2 sm:h-14"
              alt="Alvaro Farreny Boixader Logo"
            ></img>
          </Link>
          <div>
            <ul class="flex flex-wrap place-content-center mt-4 ml-[-15px] space-x-7 sm:mt-6 dark:text-white text-slate-900 ">
              <li>
                <Link to="projects" class="hover:underline">
                  My Creations
                </Link>
              </li>
              <li>
                <Link to="about" class="hover:underline">
                  About Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
