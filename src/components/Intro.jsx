import React from "react";
import { motion } from "framer-motion";

export const MyComponent = () => (
  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
);

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-[24px] pb-6 mb-4">
      <div className="mb-5">
        <img
          alt="Alvaro Farreny Boixader"
          src=".\assets\alvarofarreny.png"
          className="h-36 md:h-[250px] mb-0  rounded-full"
        />
      </div>
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Álvaro Farreny Boixader
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Computer Science Student
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I'm a computer science student who is passionate about writing code,
        building software, and design. I’m currently learning React, Python, and
        Solidity. <br />
        I'm also the president of the criptoclub, the first club of my
        university about cryptocurrency and blockchain.
      </p>
    </div>
  );
}

export default Intro;
