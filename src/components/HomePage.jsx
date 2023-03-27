import Intro from "./Intro";
import Portfolio from "./Portfolio";
import Timeline from "./Timeline";
import { motion, AnimatePresence } from "framer-motion";
import Portfoliov2 from "./Portfoliov2";

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
          <Portfoliov2 />

          <Timeline />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default HomePage;
