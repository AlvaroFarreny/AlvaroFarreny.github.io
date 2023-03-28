import React from "react";
import Feature from "./Feature";
import "./Listing.css";
import { motion } from "framer-motion";

const Listing = ({ data, open }) => {
  const { imageUrl, title, stack, numBedroom, numWashrooms, livingSpace } =
    data;

  return (
    <motion.div className="listing" onClick={open} whileHover={{ scale: 1.1 }}>
      <div className="z-1 absolute left-0 top-0 w-full h-full overflow-hidden border-2 border-stone-900 dark:border-white rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-stone-300">
        <div className="w-full h-[65%] overflow-hidden">
          <img className="listing__image" alt="Projects" src={imageUrl} />
        </div>
        <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-stone-300 font-inter">
          <div className="listing__row">
            <span className="text-lg md:text-xl dark:text-white ml-4 mb-2 mt-1 md:mb-3 font-semibold">
              {title}
            </span>
          </div>
          <div className="listing__row">
            <span className="ml-4 flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
              {stack.map((item) => (
                <span className="inline-block px-2 py-1 font-semibold border-2 border-slate-900 dark:border-white rounded-md ">
                  {item}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Listing;
