import React from "react";

const Lifepp = () => {
  return (
    <div className="">
      <div className="absolute top-0 left-0 z-0">
        <div className="mb-24">
          <img
            src="../assets/lifeppexpanded.png"
            className="w-full h-full lazyload"
            alt="Life++ Background"
          />
        </div>
      </div>
      <div className="z-[9] relative p-4 -ml-32 md:mt-44 mt-20">
        <h1 className="text-black text-3xl font-bold">Life++</h1>
        <div className="my-3">
          <h2 className="text-black text-xl font-semibold mt-10">Role</h2>
          <p className="text-black">Designer & Developer</p>
        </div>
        <hr className="border-1 border-black dark:border-black w-40 my-2" />
        <div className="my-3">
          <h2 className="text-black text-xl font-semibold">Duration</h2>
          <p className="text-black">7 months</p>
        </div>
        <hr className="border-1 border-black dark:border-black w-40 my-2" />
        <div className="my-3">
          <h2 className="text-black text-xl font-semibold">Team</h2>
          <ul>
            <li className="text-black">Pablo González</li>
            <li className="text-black">Alejandro Sauco</li>
            <li className="text-black">Crishina Ruiz</li>
          </ul>
        </div>
      </div>
      <div className="z-[9] relative mt-44 mb-[180px] flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 512 512"
          fill="black"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </div>

      <div className="grid grid-cols-2 mb-28">
        <div className="">
          <h2 className="text-3xl font-bold my-2 text-stone-900 dark:text-white">
            Final project <br />
            Software Engineering
          </h2>
          <h3 className="mb-4">November 2021 - June 2022</h3>
          <h3 className="font-semibold text-md">Technologies</h3>
          <div className="grid mt-2 grid-cols-4 sm:grid-cols-7 md:grid-cols-7  lg:grid-cols-7 gap-4 mb-4">
            <img title="Eclipse" src="https://skillicons.dev/icons?i=eclipse" />
            <img title="Java" src="https://skillicons.dev/icons?i=java" />
            <img title="CSS" src="https://skillicons.dev/icons?i=css" />
          </div>
          <a
            href="https://github.com/AlvaroFarreny/Life-plus-plus"
            className="font-mono flex flex-row items-center text-stone-900 dark:text-white hover:underline hover:underline-offset-2"
          >
            Source Code
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 640 512"
              fill="currentColor"
              className="ml-2"
            >
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
            </svg>
          </a>
        </div>
        <div className="-ml-10 mr-10">
          <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-3">
            Stay Connected, Stay Healthy - <br />
            Redefining Healthcare Monitoring through IoT.
          </h3>
          <p>
            Life++ is a cutting-edge desktop application that redefines
            healthcare management. Developed in collaboration with Pablo
            González, Alejandro Sauco, and Crishina Mendes, this innovative tool
            combines advanced technology with medical expertise to deliver
            seamless patient care.
          </p>
          <br></br>
          <p>
            Through a robust database system, LifePlus Plus efficiently manages
            diverse user profiles, ensuring personalized healthcare
            administration. Its integration with wearable technology, including
            a pulse oximeter and GPS-enabled bracelet, enables real-time health
            data collection. This data empowers medical professionals to monitor
            patients remotely, make informed decisions, and optimize treatment
            plans.
          </p>
          <br></br>
          <p>
            Experience the future of healthcare with LifePlus Plus – where
            technology and compassion unite to shape a healthier world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lifepp;
