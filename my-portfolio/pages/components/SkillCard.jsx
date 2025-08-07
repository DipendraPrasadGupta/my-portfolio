import { motion } from "framer-motion";

export default function SkillCard({ skill }) {
  if (!skill || typeof skill !== 'object') {
    return null; // Or return a fallback UI
  }

  const { icon, name, level, color } = skill;

  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
      }}
    >
      <motion.div 
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mt-4 mb-2">{name}</h3>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: level }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
      <p className="mt-2 text-yellow-400">{level}</p>
    </motion.div>
  );
}
