import { motion } from "framer-motion";

function About() {
  return (
    <motion.div 
      className="container mx-auto p-6 text-gray-800"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">About NextGen Solution</h1>

      {/* Introduction */}
      <p className="text-lg text-center mb-4">
        Welcome to <span className="font-bold text-green-600">NextGen Solution</span>—your trusted partner in technology-driven innovation.  
        We specialize in developing web applications, mobile applications, and custom IT solutions tailored to meet the needs of businesses, students, and entrepreneurs.
      </p>

      {/* Our Mission */}
      <motion.div 
        className="bg-gray-100 p-6 rounded-lg shadow-md mt-6"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Our Mission</h2>
        <p className="text-gray-600">
          At <span className="font-bold text-green-600">NextGen Solution</span>, our mission is to empower businesses and individuals by providing
          reliable, scalable, and innovative technology solutions. Whether you're launching a capstone project, expanding your business operations, 
          or seeking custom system development, we ensure top-tier service with a focus on efficiency and performance.
        </p>
      </motion.div>

      {/* What We Offer */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What We Offer</h2>
        <ul className="space-y-3 text-gray-600">
          <li>✅ Custom Web Application Development – Build responsive and dynamic web platforms.</li>
          <li>✅ Mobile App Development – Create Android and iOS applications tailored to your needs.</li>
          <li>✅ Capstone Project Assistance – Provide IT students with professional guidance and project implementation.</li>
          <li>✅ Business System Solutions – Develop POS, Inventory, and Management Systems for businesses.</li>
          <li>✅ Bug Fixing & System Maintenance – Ensure security, stability, and optimization of existing systems.</li>
          <li>✅ E-commerce Solutions – Design and build online stores with secure payment integration.</li>
        </ul>
      </div>

      {/* Founder Section */}
      <motion.div 
        className="bg-green-100 p-6 rounded-lg shadow-md mt-8 text-center"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Meet Our Founder</h2>
        <p className="text-gray-600">
          <span className="font-bold text-green-600">Rens Acuña</span>, a self-taught developer, is the visionary behind NextGen Solution.
          With a passion for technology and problem-solving, Rens has dedicated himself to helping businesses and students
          navigate the digital landscape through innovative software solutions.
        </p>
      </motion.div>

      {/* Closing Statement */}
      <div className="mt-10 text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Let's Build the Future Together!</h2>
        <p className="text-gray-600">
          Whether you need a custom system, a capstone project, or a business solution, we’re here to help.  
          Let's turn your ideas into reality with cutting-edge technology.
        </p>
      </div>
    </motion.div>
  );
}

export default About;

  