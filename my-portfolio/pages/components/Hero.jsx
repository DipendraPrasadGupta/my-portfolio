import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  FolderOpenIcon,
  XMarkIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import { FaWhatsapp } from "react-icons/fa";

const buttons = [
  { 
    id: "contact", 
    icon: <PhoneIcon className="w-5 h-5" />,
    href: "#contact",
    label: "Contact"
  },
  { 
    id: "whatsapp",   
    icon: <FaWhatsapp className="w-5 h-5" />,
    href: "https://wa.me/+9779807544395",
    label: "WhatsApp",
    external: true
  },
  { 
    id: "services",   
    icon: <WrenchScrewdriverIcon className="w-5 h-5" />,
    href: "#services",
    label: "Services"
  },
  { 
    id: "skills",   
    icon: <SparklesIcon className="w-5 h-5" />,
    href: "#skills",
    label: "Skills"
  },
  { 
    id: "projects",   
    icon: <FolderOpenIcon className="w-5 h-5" />,
    href: "#projects",
    label: "Projects"
  },
];

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export default function Hero() {
  const [activeModal, setActiveModal] = useState(null);

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const renderModalContent = (id) => {
    if (id === "services") {
      return (
        <div className="grid gap-4">
          <div className="p-4 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-lg">
            <h4 className="font-bold text-lg mb-2 text-yellow-400">Web Development</h4>
            <p className="text-gray-300">Full-stack development with MERN & Next.js</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-lg">
            <h4 className="font-bold text-lg mb-2 text-yellow-400">Android Development</h4>
            <p className="text-gray-300">Cross-platform mobile apps with React Native</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-lg">
            <h4 className="font-bold text-lg mb-2 text-yellow-400">AI/ML & IoT</h4>
            <p className="text-gray-300">Smart solutions and intelligent systems</p>
          </div>
          <motion.button
            onClick={() => {
              setActiveModal(null);
              const element = document.querySelector("#services");
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-2 px-4 rounded-lg mt-4 hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Services
          </motion.button>
        </div>
      );
    }
    return null;
  };

  const slideVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <motion.section
      className="min-h-[120vh] relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Floating Action Buttons */}
      <div className="fixed top-1/3 right-4 z-50 space-y-4">
        {buttons.map((btn) => (
          <motion.a
            key={btn.id}
            href={btn.href}
            target={btn.external ? "_blank" : "_self"}
            rel={btn.external ? "noopener noreferrer" : ""}
            className={`bg-yellow-400 text-black p-3 rounded-s-full shadow-xl flex items-center justify-center w-[48px] cursor-pointer hover:shadow-yellow-400/50 transition-all duration-300 ${
              btn.id === 'whatsapp' ? 'hover:bg-[#25D366]' : 'hover:bg-orange-500'
            }`}
            whileHover={{ 
              x: -5,
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            onClick={(e) => {
              e.preventDefault();
              if (btn.id === "services") {
                setActiveModal("services");
              } else if (btn.external) {
                window.open(btn.href, "_blank");
              } else {
                const element = document.querySelector(btn.href);
                element?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {btn.icon}
          </motion.a>
        ))}
      </div>

      <AnimatePresence>
        {activeModal && (
          <motion.div
            key="modal"
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <motion.div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative border border-yellow-400/20">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent capitalize">
                My Services
              </h3>
              {renderModalContent(activeModal)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center justify-between relative z-10">
        <motion.div
          className="md:w-1/2 space-y-8 text-left"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div variants={slideVariants}>
            <h2 className="text-yellow-400 text-xl md:text-2xl font-medium mb-2">
              👋 Welcome to my portfolio
            </h2>
          </motion.div>

          <motion.h1
            variants={slideVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            Hi, I'm
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-500">
                Dipendra
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-500 blur-xl opacity-30"></span>
            </span>
          </motion.h1>

          <motion.div variants={slideVariants} className="max-w-xl">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Full Stack Developer specializing in <span className="text-yellow-400">MERN</span> & <span className="text-yellow-400">Next.js</span>. Crafting modern,
              responsive, and user-friendly applications.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center mt-12 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl opacity-50"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src="/dipu.png"
              alt="Profile"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-yellow-400 relative z-10 shadow-2xl shadow-yellow-400/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div className="space-y-8 relative z-10 px-4 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <motion.div className="flex flex-col sm:flex-row gap-6 justify-center mt-12" variants={slideVariants}>
          <motion.a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-black bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg hover:shadow-yellow-400/40 overflow-hidden transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Let's Work Together</span>
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
            <motion.span
              className="absolute right-5 text-xl"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>

          <motion.a
            href="DIPENDRA_PRASAD_GUPTA_RESUME_2_.pdf"
            download
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white border-2 border-yellow-400/50 rounded-full hover:border-yellow-400 shadow-lg hover:shadow-yellow-400/20 overflow-hidden transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowDownTrayIcon className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
            <span className="relative z-10">Download Resume</span>
            <span className="absolute inset-0 bg-yellow-400/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
    </motion.section>
  );
}
