import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const themeVariants = {
  light: { backgroundColor: "#ffffff", color: "#000000" },
  dark: { backgroundColor: "#000000", color: "#d1d5db" }, // Gray-400
};

const pageVariants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: { opacity: 1, x: "0%" },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen ">
          <div className="diff min-h-screen relative overflow-hidden">
            <motion.div
              className="diff-item-1 absolute inset-0 flex justify-center items-center"
              initial="hidden"
              animate="visible"
              variants={pageVariants}
              transition={{ duration: 1 }}
            >
              <div className="bg-primary text-primary-content grid place-content-center md:text-2xl xl:text-9xl  font-black">
                SYAHDAN
              </div>
            </motion.div>
            <motion.div
              className="diff-item-2 absolute inset-0 flex justify-center items-center"
              initial="hidden"
              animate="visible"
              variants={pageVariants}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="bg-base-200 grid place-content-center md:text-2xl xl:text-9xl font-black">
                SYAHDAN
              </div>
            </motion.div>
            <div className="diff-resizer"></div>
          </div>
        </div>
      ) : (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
          <motion.div
            className="container_main flex flex-col font-lexend w-full"
            variants={themeVariants}
            animate={isDarkMode ? "dark" : "light"}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </ThemeContext.Provider>
      )}
    </>
  );
};

export default ThemeProvider;

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
