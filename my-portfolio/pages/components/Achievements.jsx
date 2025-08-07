import { motion } from "framer-motion";

const achievements = [
  "🏆 First Place (Winner) – VEDA-2k24 Paper Presentation (2024)",
  "🏆 First Place (Winner) – VEDA-2k24 Project Presentation (2024)",
  "🏆 First Place (Winner) – INNOVEX Hackathon (2024)",
  "🎯 Fifth Place – Hack2Impact Hackathon (2024)",
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen flex flex-col items-center px-6 md:px-20 py-20  text-white"
    >
      {/* Title Animation */}
      <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mb-6 mx-auto">
            Here are some of my achievements
          </p>

      {/* List with Stagger Animation */}
      <motion.ul
        className="space-y-8 w-full max-w-3xl"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        viewport={{ once: true }}
      >
        {achievements.map((item, index) => (
          <motion.li
            key={index}
            className="p-6 rounded-2xl shadow-xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/30"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{
              rotate: [0, 1, -1, 0],
              transition: { duration: 0.4 },
            }}
          >
            <span className="text-lg md:text-xl font-medium">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
