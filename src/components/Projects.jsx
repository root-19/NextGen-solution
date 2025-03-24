import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div 
      className="container mx-auto p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading */}
      <motion.h1 
        className="text-3xl font-bold text-gray-800 text-center mb-6"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Our Projects & Achievements
      </motion.h1>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-10">
        {[
          { number: "40+", label: "Total Clients", color: "bg-blue-600" },
          { number: "40+", label: "Completed Projects", color: "bg-green-600" },
          { number: "10+", label: "Ongoing Projects", color: "bg-purple-600" },
          { number: "4+", label: "Industries Served", color: "bg-yellow-600" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className={`${stat.color} text-white p-6 rounded-lg shadow-lg`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <h2 className="text-3xl font-bold">{stat.number}</h2>
            <p className="text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Content Boxes */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {[
          {
            title: "Innovative Web Solutions",
            text: "We specialize in developing custom web applications tailored to business needs, providing seamless user experiences and scalable solutions.",
          },
          {
            title: "Mobile App Development",
            text: "Our team builds high-performance mobile apps for both Android, ensuring smooth functionality and intuitive design for users.",
          },
        ].map((box, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              {box.title}
            </h2>
            <p className="text-gray-600">{box.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
