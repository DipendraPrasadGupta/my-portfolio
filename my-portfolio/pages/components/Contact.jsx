import { motion } from "framer-motion";
import { useState } from 'react';
import emailjs from 'emailjs-com';

const formControls = {
  initial: { opacity: 0, y: 20 },
  animate: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5 }
  })
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Replace these with your actual EmailJS credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Dipendra', // Your name
        reply_to: formData.email,
      };

      await emailjs.send(
        'service_wzb32lh', // Your EmailJS service ID
        'template_izadmlr', // Your template ID
        templateParams,
        '5hp0hO-xTYLMrb1i4' // Your public key
      );

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="relative min-h-screen flex flex-col items-center px-6 md:px-20 py-16 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0  ">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff 1px,transparent 1px)] [background-size:32px_32px]"></div>
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: "url('/world-map.png')",
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Heading */}
      <div className="text-center relative z-10 mb-16">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Touch</span>
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.p
          className="text-gray-400 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Feel free to reach out for collaborations or just a friendly hello
        </motion.p>
      </div>

      {/* Contact Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl w-full">
        {/* Left - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-300"
        >
          <motion.h3 
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Let's Talk
            </span>
          </motion.h3>

          <div className="space-y-6">
            {/* Contact Items */}
            <motion.div
              className="flex items-start space-x-4 group"
              variants={formControls}
              initial="initial"
              whileInView="animate"
              custom={1}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex-1 group-hover:translate-x-2 transition-transform duration-300">
                <h4 className="text-yellow-400 font-semibold mb-1">Phone</h4>
                <p className="text-gray-300">+91-7460825445</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4 group"
              variants={formControls}
              initial="initial"
              whileInView="animate"
              custom={2}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1 group-hover:translate-x-2 transition-transform duration-300">
                <h4 className="text-yellow-400 font-semibold mb-1">Location</h4>
                <p className="text-gray-300">Andhra Pradesh, India</p>
                <p className="text-gray-400 text-sm">1st Block, Aditya University</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4 group"
              variants={formControls}
              initial="initial"
              whileInView="animate"
              custom={3}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 group-hover:translate-x-2 transition-transform duration-300">
                <h4 className="text-yellow-400 font-semibold mb-1">Email</h4>
                <p className="text-gray-300">dipendraofficial45@gmail.com</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-300"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 rounded-lg ${
                status.type === 'success' 
                  ? 'bg-green-500/20 border border-green-500/50 text-green-300'
                  : 'bg-red-500/20 border border-red-500/50 text-red-300'
              }`}
            >
              {status.message}
            </motion.div>
          )}

          <motion.div
            variants={formControls}
            initial="initial"
            whileInView="animate"
            custom={1}
          >
            <div className="relative mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-gray-800/50 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 placeholder-gray-500"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/10 to-orange-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div
            variants={formControls}
            initial="initial"
            whileInView="animate"
            custom={2}
          >
            <div className="relative mb-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-gray-800/50 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 placeholder-gray-500"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/10 to-orange-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div
            variants={formControls}
            initial="initial"
            whileInView="animate"
            custom={3}
          >
            <div className="relative mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="5"
                className="w-full px-4 py-3 bg-gray-800/50 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 placeholder-gray-500 resize-none"
              ></textarea>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/10 to-orange-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-lg relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            <span className="relative z-10">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}
