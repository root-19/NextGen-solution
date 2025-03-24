import { motion } from "framer-motion";
import Sticker from "../assets/coding.png";

function Services() {
  return (
    <motion.div
      className="container mx-auto p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.p 
        className="text-gray-600 text-center mb-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        At <span className="font-semibold text-green-600">NextGen Solution</span>, we specialize in developing, maintaining, and optimizing high-quality digital solutions.
        Whether you need a robust web application, a seamless mobile app, or expert system maintenance and bug fixing, we are here to help.
      </motion.p>

      {/* Services Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section (Left Side) */}
        <motion.div 
          className="md:w-1/3 flex justify-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={Sticker}
            alt="Coding Sticker"
            className="w-60 h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text Content (Right Side) */}
        <div className="md:w-2/3 space-y-6">
          {[
            {
              title: "Web Application Development",
              text: "We build modern, scalable, and secure web applications tailored to your business needs. Our goal is to create fast and responsive platforms that provide a seamless user experience.",
            },
            {
              title: "Mobile Application Development",
              text: "Our team develops high-performance mobile apps for Android and iOS, ensuring intuitive interfaces and smooth user interactions.",
            },
            {
              title: "System Maintenance & Bug Fixing",
              text: "We provide ongoing system maintenance, bug fixes, and performance optimizations to ensure your applications run smoothly and securely.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-2xl font-semibold text-green-600 mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Services;
