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

function MainPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <motion.div
        className="flex flex-col justify-center items-center w-full xl:h-[85vh]"
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
    </div>
  );
}

export default MainPage;
