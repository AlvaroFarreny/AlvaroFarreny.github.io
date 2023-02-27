import Intro from "./Intro";
import Portfolio from "./Portfolio";
import Timeline from "./Timeline";
import { motion, AnimatePresence } from "framer-motion";

const HomePage = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1,
            },
            exitState: {},
          }}
          className=""
        >
          <Intro />
          <Portfolio />
          <Timeline />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default HomePage;
