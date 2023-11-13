import React, { useState } from "react";
import Listing from "./Listing";
import Overlay from "./Overlay";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";

const Card = ({ data }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const openURL = (url) => {
    window.open(url, "_blank"); // Abre la URL en una nueva ventana/tab
  };

  return (
    <>
      <div className="">
        {/* Pasamos la función openURL como prop onClick a Listing */}
        <Listing data={data} open={openModal} />
      </div>
    </>
  );
};

export default Card;
