import { Link } from "react-scroll";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";

const menuItemVariants = {
  closed: { opacity: 0, y: -10 },
  open: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.3,
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  }),
};

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      when: "afterChildren",
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const mobileItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const menuItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Achievements", to: "achievements" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-black/60 backdrop-blur-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
        <div className="flex justify-between items-center border-b border-yellow-400/20 pb-2 sm:pb-3 md:pb-4">
          {/* Left - Logo */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <motion.div
              className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-yellow-400/20"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              D
            </motion.div>
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.span>
          </motion.div>

          {/* Center - Menu */}
          <motion.ul
            className="hidden md:flex items-center space-x-8 text-white font-medium"
            initial="closed"
            animate="open"
            variants={{
              open: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                variants={menuItemVariants}
                custom={index}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  onSetActive={() => setActiveSection(item.to)}
                  className="relative py-2 px-1 cursor-pointer group"
                >
                  <span className={`relative z-10 ${
                    activeSection === item.to
                      ? "text-yellow-400"
                      : "text-white group-hover:text-yellow-400"
                  }`}>
                    {item.name}
                  </span>
                  {activeSection === item.to && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-yellow-400 to-orange-500"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Right - Contact Info */}
          <motion.div
            className="hidden md:flex items-center gap-3 text-gray-300"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <motion.div 
              className="p-2 rounded-xl bg-yellow-400/10 border border-yellow-400/20"
              whileHover={{ scale: 1.05 }}
            >
              <FiMessageSquare className="text-yellow-400 text-xl" />
            </motion.div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm text-gray-400">Have any Questions?</span>
              <motion.span 
                className="text-lg font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
              >
                dipendraofficial45@gmail.com
              </motion.span>
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? "✕" : "☰"}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-yellow-400/20"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.ul className="py-4 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.li 
                    key={index}
                    variants={mobileItemVariants}
                    custom={index}
                  >
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 px-4 rounded-lg transition-colors ${
                        activeSection === item.to
                          ? "bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-400"
                          : "hover:bg-yellow-400/10 text-white hover:text-yellow-400"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div 
                className="flex items-center gap-3 p-4 mt-4 border-t border-yellow-400/20"
                variants={mobileItemVariants}
              >
                <div className="p-2 rounded-xl bg-yellow-400/10 border border-yellow-400/20">
                  <FiMessageSquare className="text-yellow-400 text-xl" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm text-gray-400">Have any Questions?</span>
                  <span className="text-lg font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    dipendraofficial45@gmail.com
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
