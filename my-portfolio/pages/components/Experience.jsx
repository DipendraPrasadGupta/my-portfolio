import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Zoiverse Technologies Pvt. Ltd.",
    period: "May 2024 – Aug 2024",
    details: "Worked on dynamic and responsive web applications, handling both frontend and backend using MERN stack.",
  },
  {
    role: "Freelance Web Developer",
    company: "IIFC Pvt. Ltd.",
    period: "2024",
    details: "Developed a responsive, user-friendly pharma forecasting company website with custom features.",
  },
];

const timelineVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="min-h-screen flex flex-col items-center px-6 md:px-20 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-6">
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Experience</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
      <p className="text-xl text-gray-400 max-w-2xl mb-16 mx-auto">
        Here are some of my experience
      </p>

      <motion.div
        className="relative border-l-4 border-yellow-400 pl-6 space-y-10"
        variants={timelineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <span className="absolute -left-8 top-0 w-4 h-4 bg-yellow-400 rounded-full"></span>
            <h3 className="text-2xl font-semibold">{exp.role}</h3>
            <p className="text-gray-400">{exp.company} • {exp.period}</p>
            <p className="mt-2">{exp.details}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
