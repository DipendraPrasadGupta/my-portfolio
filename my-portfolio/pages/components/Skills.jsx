import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaNodeJs, FaDatabase, FaGitAlt 
} from "react-icons/fa";
import SkillCard from "./SkillCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-6xl" />, level: "95%", color: "from-orange-500 to-yellow-400" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-6xl" />, level: "90%", color: "from-blue-500 to-cyan-400" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-6xl" />, level: "92%", color: "from-yellow-400 to-orange-300" },
  { name: "React", icon: <FaReact className="text-cyan-400 text-6xl" />, level: "90%", color: "from-cyan-400 to-blue-400" },
  { name: "Next.js", icon: <FaReact className="text-white text-6xl" />, level: "88%", color: "from-gray-200 to-gray-500" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-6xl" />, level: "85%", color: "from-green-500 to-green-300" },
  { name: "MongoDB", icon: <FaDatabase className="text-green-400 text-6xl" />, level: "80%", color: "from-green-400 to-emerald-300" },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-6xl" />, level: "85%", color: "from-red-500 to-orange-500" },
];

export default function Skills() {
  return (
    <motion.section 
      id="skills" 
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-6xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 hover:shadow-yellow-400/50 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ rotate: 3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className="p-4 rounded-full bg-gradient-to-r shadow-lg"
              style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
            >
              {skill.icon}
            </motion.div>
            <p className="mt-4 text-lg font-semibold">{skill.name}</p>
            <div className="w-full bg-gray-700 rounded-full mt-2 h-2">
              <motion.div
                className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
