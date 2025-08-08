import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Web Development",
    description: "Building responsive and dynamic web applications using modern technologies like React, Next.js, and Node.js",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      "Custom Web Applications",
      "Responsive Design",
      "Frontend Development",
      "Backend Integration",
      "API Development"
    ]
  },
  {
    title: "Android Development",
    description: "Building cross-platform mobile applications using React Native with native performance and modern user experience",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2zm5-16v.01M12 12v.01M12 16v.01M12 8v.01" />
      </svg>
    ),
    features: [
      "React Native Apps",
      "Native Performance",
      "Cross-Platform Development",
      "App Store Deployment",
      "Mobile UI/UX"
    ]
  },
  {
    title: "Graphic Design",
    description: "Creating stunning visual content and branding materials that capture attention and communicate effectively",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      "Logo Design",
      "Brand Identity",
      "Marketing Materials",
      "Social Media Graphics",
      "Print Design"
    ]
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user interfaces with modern design principles and smooth animations",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    features: [
      "User Interface Design",
      "Interactive Prototypes",
      "Design Systems",
      "Motion Design",
      "User Experience"
    ]
  },
  {
    title: "Full Stack Development",
    description: "End-to-end development solutions with expertise in both frontend and backend technologies",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      "MERN Stack Development",
      "Database Design",
      "Server Configuration",
      "Cloud Deployment",
      "Performance Optimization"
    ]
  },
  {
    title: "Hosting & Deployment",
    description: "Professional web hosting solutions and seamless deployment services for your applications",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: [
      "Cloud Hosting",
      "Domain Management",
      "SSL Certificates",
      "Continuous Deployment",
      "Server Maintenance"
    ]
  },
  {
    title: "AI/ML & IoT Development",
    description: "Creating intelligent solutions combining artificial intelligence, machine learning, and Internet of Things technologies",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z M12 6v4m0 2v4m-6-3h12" />
      </svg>
    ),
    features: [
      "Machine Learning Models",
      "IoT Device Integration",
      "Smart Automation",
      "Data Analytics",
      "Predictive Systems"
    ]
  },
  {
    title: "Performance Optimization",
    description: "Enhancing your website's speed, efficiency, and overall performance for better user experience",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: [
      "Speed Optimization",
      "Code Optimization",
      "Caching Implementation",
      "Image Optimization",
      "Performance Monitoring"
    ]
  }
];

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 p-8 rounded-2xl border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-500">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400/20 to-orange-500/20 flex items-center justify-center mr-4 transform group-hover:scale-110 transition-transform duration-500">
            <div className="text-yellow-400">
              {service.icon}
            </div>
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            {service.title}
          </h3>
        </div>

        <p className="text-gray-400 mb-6 line-clamp-2">
          {service.description}
        </p>

        <motion.ul 
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          variants={{
            visible: { height: "auto", opacity: 1 },
            hidden: { height: 0, opacity: 0 }
          }}
          transition={{ duration: 0.3 }}
          className="space-y-2 overflow-hidden"
        >
          {service.features.map((feature, idx) => (
            <motion.li
              key={idx}
              variants={{
                visible: { x: 0, opacity: 1 },
                hidden: { x: -20, opacity: 0 }
              }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center text-gray-300"
            >
              <svg className="w-4 h-4 mr-2 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {feature}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section className="min-h-screen relative overflow-hidden py-20 px-6">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]"></div>
        <motion.div
          className="absolute w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-3xl"
          initial={{ x: -100, y: -100 }}
          animate={{ 
            x: [-100, 100, -100],
            y: [-100, 100, -100]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl"
          initial={{ x: 100, y: 100 }}
          animate={{ 
            x: [100, -100, 100],
            y: [100, -100, 100]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Services</span>
          </motion.h2>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Delivering cutting-edge solutions with a focus on user experience and performance
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
