import { motion } from "framer-motion";
import Footer from "../ui/components/footer";
import Navbar from "../ui/components/navbar";
import AboutMe from "../ui/layouts/aboutMe";

// Variants for animation
const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

// Variants for dark and light mode transitions

function MainPage() {
  return (
    <>
      <Navbar />

      <motion.div
        className="flex justify-center items-center w-full h-full"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 1 }}
      >
        <AboutMe />
      </motion.div>

      <motion.div
        className="w-full"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.5 }}
      >
        <Footer />
      </motion.div>
    </>
  );
}

export default MainPage;
