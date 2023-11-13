import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Add this line
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import Projects from "./components/Projects";
import HomePage from "./components/HomePage";
import Error404 from "./components/error404";
import About from "./components/about";
import RingLoader from "react-spinners/RingLoader";
import Lifepp from "./components/Projects/Lifepp";
import Balu from "./components/Projects/Balu";
import Fitfoods from "./components/Projects/Fitfoods";
import NombresCamaro from "./components/Projects/NombresCamaro";
import Criptoclub from "./components/Projects/Criptoclub";
import Portfoliov1 from "./components/Projects/Portfoliov1";

function App() {
  const [theme, setTheme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setIsLoaded(true);
    }, 2500);

    return () => {
      setIsLoaded(false);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div>
        {loading ? (
          <div className="flex justify-center items-center h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-stone-300">
            <RingLoader color="#36d7b7" size={150} loading={!isLoaded} />
          </div>
        ) : (
          <div>
            {/* <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.7 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              type="button"
              onClick={handleThemeSwitch}
              className="fixed z-10 right-10 sm:right-20 top-4 bg-violet-300 dark:bg-orange-300 dark:text-slate-900 text-lg p-1 rounded-md"
            >
              {theme === "dark" ? sun : moon}
            </motion.button> */}
            <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-stone-300 min-h-screen font-inter">
              <div className="max-w-5xl w-11/12 mx-auto z-[9]">
                <Navbar theme={theme} />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projects/lifepp" element={<Lifepp />} />
                  <Route path="/projects/balu" element={<Balu />} />
                  <Route path="/projects/fitfoods" element={<Fitfoods />} />
                  <Route
                    path="/projects/nombrescamaro"
                    element={<NombresCamaro />}
                  />
                  <Route path="/projects/criptoclub" element={<Criptoclub />} />
                  <Route
                    path="/projects/portfoliov1"
                    element={<Portfoliov1 />}
                  />
                  <Route path="/about" element={<About />} />
                  <Route path="/404" element={<Error404 />} />
                  <Route path="*" element={<Navigate to="/404" />} />
                </Routes>
                <Footer />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
