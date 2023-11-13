import Intro from "./Intro";
import NewPortfolio from "./NewPortfolio";
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
          className="z-[9]"
        >
          <Intro />
          <div className="">
            {/* <Portfolio /> */}
            <NewPortfolio></NewPortfolio>
          </div>
        </motion.div>
        <img
          src="./assets/Gradient.gif"
          className="absolute right-0 left-0 top-0 z-0 lazyload"
        />
      </AnimatePresence>
    </>
  );
};

export default HomePage;
