import { motion } from "framer-motion";

const projects = [
  {
    title: "Dpthirve",
    image: "/dpthrive.png",
    description: "Find Your Dream Job in Data Science and Analytics",
    tech: ["React", "Node.js", "MongoDB"],
    link: "http://dpthrive.com/",
  },
  {
    title: "IIFC Pvt. Ltd.",
    image: "/iifcpro.png",
    description: "Pharma forecasting company website with advanced features.",
    tech: ["WordPress", "MySQL"],
    link: "https://iifcpro.com",
  },
  {
    title: "Text-Hub",
    image: "/project3.png",
    description: "A text utility tool for formatting and analysis.",
    tech: ["React", "TailwindCSS", "Node.js"],
    link: "#",
  },
];

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom * 0.2
    }
  })
};

const cardVariants = {
  rest: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(255, 215, 0, 0)",
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.3)",
  }
};

export default function Projects() {
  return (
    <motion.section 
      id="projects" 
      className="min-h-screen relative py-20 px-6 md:px-20 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff 1px,transparent 1px)] [background-size:32px_32px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are some of my featured projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <motion.div 
                  className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full transform hover:scale-105 transition-transform"
                  >
                    View Project
                  </a>
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 text-sm bg-yellow-400/10 text-yellow-400 rounded-full border border-yellow-400/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
 
  );
}