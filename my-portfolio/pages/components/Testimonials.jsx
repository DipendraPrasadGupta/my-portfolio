import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Client 1",
    feedback: "Dipendra delivered our project on time with outstanding quality. The UI/UX was exceptional!",
  },
  {
    name: "Client 2",
    feedback: "A true professional who understands the client’s needs and delivers beyond expectations.",
  },
  {
    name: "Client 3",
    feedback: "Very innovative solutions with modern designs. Highly recommended!",
  },
  {
    name: "Client 4",
    feedback: "Excellent communication and technical expertise. Will work again!",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="min-h-screen flex flex-col items-center px-6 md:px-20 py-16 ml-16 mr-16 text-white  overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-500/10 via-transparent to-pink-500/10"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "200% 200%" }}
      />

        <h2 className="text-4xl md:text-6xl font-bold mb-6 relative">
          Some {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse">
            Testimonials
          </span>
        </h2>

        

      {/* Sliding Testimonials */}
      <motion.div
        className="flex gap-8 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -((testimonials.length - 1) * 350), right: 0 }}
        initial={{ x: 0 }}
        animate={{ x: [0, -350, -700, 0] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="relative min-w-[320px] bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-lg hover:shadow-yellow-400/40 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 221, 87, 0.5)" }}
          >
            <FaQuoteLeft className="absolute top-4 left-4 text-yellow-400 text-3xl opacity-70" />
            <p className="italic text-gray-200 mt-8 mb-6 leading-relaxed">"{t.feedback}"</p>
            <FaQuoteRight className="absolute bottom-4 right-4 text-yellow-400 text-3xl opacity-70" />
            <p className="font-semibold text-yellow-400 text-lg text-right">- {t.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
