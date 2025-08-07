import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  PhoneIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  FolderOpenIcon,
  XMarkIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

const buttons = [
  { id: "contact", icon: <PhoneIcon className="w-5 h-5" /> },
  { id: "whatsapp",   icon: <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" /> },
  { id: "services",   icon: <WrenchScrewdriverIcon className="w-5 h-5" /> },
  { id: "skills",   icon: <SparklesIcon className="w-5 h-5" /> },
  { id: "projects",   icon: <FolderOpenIcon className="w-5 h-5" /> },
];

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export default function Hero() {
  const [activeModal, setActiveModal] = useState(null);

  const renderModalContent = (id) => {
    switch (id) {
      case "contact":
        return <div>Contact Form</div>;
      case "whatsapp":
        return (
          <div>
            <a href="https://wa.me/919999999999" target="_blank">Chat on WhatsApp</a>
          </div>
        );
      case "services":
        return <div>Web Development, UI/UX Design, Deployment</div>;
      case "skills":
        return <div>React, Next.js, Node.js, MongoDB, Tailwind CSS</div>;
      case "projects":
        return <div>Project 1, Project 2, Project 3...</div>;
      default:
        return null;
    }
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
      <div className="fixed top-1/3 right-4  z-50 space-y-4">
        {buttons.map((btn) => (
          <motion.button
            key={btn.id}
            onClick={() => setActiveModal(btn.id)}
            className="bg-yellow-400 hover:bg-orange-500 text-black px-4 py-3 rounded-s-full shadow-xl flex items-center gap-2 transition-transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {btn.icon}
            <span className="hidden md:inline font-semibold">{btn.label}</span>
          </motion.button>
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
            <motion.div className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative">
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              <h3 className="text-xl font-bold mb-4 capitalize">{activeModal}</h3>
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
