"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const MotionLink = motion(ScrollLink);

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen relative flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 py-20 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black -z-10">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff 1px,transparent 1px)] [background-size:32px_32px]"></div>
      </div>

      {/* Left Section */}
      <motion.div
        className="flex-1 relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6 relative">
          Know{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse">
            About Me
          </span>
        </h2>

        <h3 className="text-xl md:text-2xl font-semibold text-yellow-300 mb-6">
          I am Dynamic Creative Developer and Designer
        </h3>

        <p className="text-gray-300 leading-relaxed mb-4">
          I’m <span className="text-yellow-400">Dipendra Prasad Gupta</span>, a
          passionate Full Stack Developer with expertise in the MERN stack and
          Next.js. I love building modern, dynamic, and user-friendly web
          applications with beautiful UI/UX and smooth animations.
        </p>

        <p className="text-gray-300 leading-relaxed">
          My goal is to create high-performance products that provide seamless
          experiences to users. I am constantly learning new technologies and
          applying them to my projects to deliver outstanding results.
        </p>

       
        {/* Buttons */}
        <motion.div className="flex flex-wrap gap-6 justify-center mt-12">
          {/* My Skills */}
          <MotionLink
            to="skills"
            smooth={true}
            duration={500}
            offset={-70}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex cursor-pointer items-center justify-center px-8 py-3 font-bold text-black bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg hover:shadow-yellow-400/40 overflow-hidden transition-all"
          >
            <span className="relative z-10">My Skills</span>
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
            <motion.span
              className="absolute right-5 text-xl"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </MotionLink>

          {/* View Projects */}
          <MotionLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex cursor-pointer items-center justify-center px-8 py-3 font-bold text-white border-2 border-yellow-400/50 rounded-full hover:border-yellow-400 shadow-lg hover:shadow-yellow-400/20 overflow-hidden transition-all"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 bg-yellow-400/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
          </MotionLink>
        </motion.div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        className="flex-1 flex justify-center relative"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <div className="relative">
          {/* Animated background blur */}
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-tl-[150px] rounded-br-[150px] blur-2xl"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="relative bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-tl-[150px] rounded-br-[150px] p-4 backdrop-blur-sm border border-yellow-400/20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/dipen.jpg"
              alt="Profile"
              width={400}
              height={500}
              className="rounded-tl-[140px] rounded-br-[140px] object-cover"
              priority
            />

            {/* Animated decorative elements */}
            <motion.div 
              className="absolute -top-4 right-10 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg shadow-yellow-400/50"
              animate={{ 
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 20px rgba(250, 204, 21, 0.3)",
                  "0 0 40px rgba(250, 204, 21, 0.5)",
                  "0 0 20px rgba(250, 204, 21, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-6 -right-4 w-3 h-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-lg shadow-orange-400/50"
              animate={{ 
                scale: [1, 1.3, 1],
                boxShadow: [
                  "0 0 20px rgba(249, 115, 22, 0.3)",
                  "0 0 40px rgba(249, 115, 22, 0.5)",
                  "0 0 20px rgba(249, 115, 22, 0.3)"
                ]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-8 -left-3 w-5 h-5 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full shadow-lg shadow-yellow-300/50"
              animate={{ 
                scale: [1, 1.4, 1],
                boxShadow: [
                  "0 0 20px rgba(253, 224, 71, 0.3)",
                  "0 0 40px rgba(253, 224, 71, 0.5)",
                  "0 0 20px rgba(253, 224, 71, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
