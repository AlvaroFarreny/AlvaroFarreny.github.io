import React from "react";
import Feature from "./Feature";
import "./Listing.css";
import { motion } from "framer-motion";

const Listing = ({ data, open }) => {
  const { imageUrl, title, stack, numBedroom, numWashrooms, livingSpace } =
    data;

  return (
    <motion.div className="listing" onClick={open} whileHover={{ scale: 1.1 }}>
      <div className="listing__content">
        <div className="listing__image-container">
          <img
            className="listing__image"
            alt="real estate mansion"
            src={imageUrl}
          />
        </div>
        <div className="listing__details">
          <div className="listing__type">For Sale</div>
          <div className="listing__row">
            <span className="listing__title">{title}</span>
          </div>
          <div className="listing__row">
            <span className="listing__stack">
              {stack.map((item) => (
                <span className="inline-block px-2 py-1 font-semibold border-2 border-slate-900 dark:border-white rounded-md ">
                  {item}
                </span>
              ))}
            </span>
          </div>
          <div className="listing__row">
            <Feature iconName={"FaBed"} iconLabel={numBedroom} />
            <Feature iconName={"FaShower"} iconLabel={numWashrooms} />
            <Feature iconName={"FaRuler"} iconLabel={livingSpace} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Listing;
