import React from "react";
import Timeline from "./Timeline";

const About = () => {
  return (
    <div className="grid grid-cols-2 gap-16 mt-24 mb-10">
      <div className="col-span-1 flex flex-col items-center">
        <img
          alt="Alvaro Farreny Boixader"
          src=".\assets\alvarofarreny.png"
          className="h-36 md:h-[250px] mb-4 rounded-full ml-10 -mt-2"
        />
        <Timeline />
        <div className="underline underline-offset-4 decoration-1 ">
          <a
            href="https://drive.google.com/file/d/1k27aUOoRfeJc8aea1ihsvt3nSaVFnmcp/view?usp=sharing"
            className="text-black dark:text-white -mt-10 underline underline-offset-4 decoration-1 flex gap-1"
          >
            Download full resume here
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
              className="w-4 h-4 fill-current mt-1"
            >
              <path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="col-span-1">
        <div className="text-left">
          <h3 className="text-xl font-semibold my-2 dark:text-blue-200 text-blue-500 ">
            A little about me
          </h3>
          <h2 className="text-3xl font-bold my-2 text-stone-900 dark:text-white">
            Hey, I'm Álvaro!
          </h2>
          <p className="my-2 text-base font-normal text-slate-500 dark:text-slate-400">
            I'm a computer science student who is passionate about writing code,
            building software, and design. I’m currently learning React, Python,
            and Solidity.
            <br />
            I'm also the president of the criptoclub, the first club of my
            university about cryptocurrency and blockchain.
          </p>
        </div>
        <div className="mt-32">
          <div className="space-y-8">
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-slate-900 dark:text-white">
                🚀 Innovation drives me.
              </span>
              <p className="ml-1 my-2 text-base font-normal text-slate-500 dark:text-slate-400">
                I love coming up with new ideas and using technology to make
                things better. I like to think outside the box, find solutions
                to tough problems, and make a difference in the world by being
                creative. I want to inspire others to do the same and leave a
                positive mark on how we use technology.
              </p>
            </div>
            <div className="flex flex-col ">
              <span className="text-lg font-semibold text-slate-900 dark:text-white">
                📊 Data empowers decisions.
              </span>
              <p className="ml-1 my-2 text-base font-normal text-slate-500 dark:text-slate-400">
                I believe that information is powerful for making smart choices.
                In today's data-driven world, I'm interested in finding hidden
                patterns in data and using them to help with decision-making.
                I'm learning how to analyze data to make informed decisions and
                drive progress. By making sense of raw data, I contribute to
                making better choices that lead to positive outcomes.
              </p>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-slate-900 dark:text-white">
                🤝 Collaboration fuels success.
              </span>
              <p className="ml-1 my-2 text-base font-normal text-slate-500 dark:text-slate-400">
                Working together with others is key to achieving great things. I
                strongly believe that when people from different backgrounds
                come together, we can create something amazing. By getting
                involved in various projects and welcoming different ideas, I
                want to combine our strengths to achieve remarkable results. By
                communicating well and sharing what we know, I contribute to a
                friendly and productive work environment where we all
                collaborate effectively.
              </p>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-slate-900 dark:text-white">
                🌍 Technology with purpose.
              </span>
              <p className="ml-1 my-2 text-base font-normal text-slate-500 dark:text-slate-400">
                I really care about using technology to make the world a better
                place. I want to use what I learn and know to create solutions
                that help solve important problems, like taking care of our
                environment and making things accessible to everyone. By
                focusing on these important issues, I want to contribute to
                making the world fairer and more sustainable for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
