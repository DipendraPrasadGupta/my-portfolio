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
    },
  }),
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
    <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-md z-50 border-b border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Left - Logo */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <motion.div
            className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-lg"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            D
          </motion.div>
          <span className="text-2xl font-bold text-white">Portfolio</span>
        </motion.div>

        {/* Center - Menu */}
        <motion.ul
          className="hidden md:flex space-x-8 text-white font-medium"
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
                className={`relative cursor-pointer ${
                  activeSection === item.to
                    ? "text-yellow-400"
                    : "hover:text-yellow-400"
                }`}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Right - Contact Info */}
        <motion.div
          className="hidden md:flex items-center gap-2 text-gray-300"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <FiMessageSquare className="text-yellow-400 text-xl" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm">Have any Questions?</span>
            <span className="text-lg font-semibold text-yellow-400">
              dipendraofficial45@gmail.com
            </span>
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-yellow-400"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden bg-black/90 backdrop-blur-md p-6 space-y-4 text-white border-t border-yellow-400/20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-yellow-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <div className="flex items-center gap-2 pt-4 border-t border-yellow-400/20">
              <FiMessageSquare className="text-yellow-400 text-xl" />
              <div className="flex flex-col leading-tight">
                <span className="text-sm">Have any Questions?</span>
                <span className="text-lg font-semibold text-yellow-400">
                  info@portfolio.com
                </span>
              </div>
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
