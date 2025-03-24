import { motion } from "framer-motion";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-gray-800"
      >
        Welcome to <span className="text-green-600"> NextGen </span> Solutions
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl"
      >
        Your partner in innovation—empowering businesses and individuals with cutting-edge, efficient, and scalable system solutions. Whether you're building a new digital experience or enhancing existing workflows, we help you stay ahead in the ever-evolving tech landscape.
      </motion.p>

      {/* Call-to-Action Button with Blinking Animation */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1,] }}
        transition={{  duration: 1.5 }}
        className="mt-6 px-6 py-3 bg-green-600 text-white text-lg rounded-lg shadow-md hover:bg-green-700 transition"
      >
        Get Started
      </motion.button>

      {/* Additional Supporting Statement */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="mt-20 text-gray-500"
      >
        Join us and experience the future of digital transformation today!
      </motion.p>
    </div>
  );
}

export default Home;

  