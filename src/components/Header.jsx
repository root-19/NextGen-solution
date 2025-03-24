import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NextGen from "../assets/nextgen-logo-green.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Animation */}
        <Link to="/" className="flex items-center space-x-2">
          <motion.img
            src={NextGen}
            alt="Logo"
            className="w-12 h-12 object-cover rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <span className="text-xl font-semibold">NextGen</span>
        </Link>

        {/* Animated Hamburger Menu */}
        <button
          className="md:hidden block text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-6 font-bold">
          <li><Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link></li>
          <li><Link to="/projects" className="hover:text-gray-300 transition duration-300">Projects</Link></li>
          <li><Link to="/services" className="hover:text-gray-300 transition duration-300">Services</Link></li>
          <li><Link to="/messages" className="hover:text-gray-300 transition duration-300">Messages</Link></li>
          <li><Link to="/about" className="hover:text-gray-300 transition duration-300">About</Link></li>
        </ul>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden flex flex-col space-y-4 bg-green-600 p-4 rounded-lg mt-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <li><Link to="/" className="block text-white py-2 px-4 hover:bg-gray-700 rounded">Home</Link></li>
            <li><Link to="/projects" className="block text-white py-2 px-4 hover:bg-gray-700 rounded">Projects</Link></li>
            <li><Link to="/services" className="block text-white py-2 px-4 hover:bg-gray-700 rounded">Services</Link></li>
            <li><Link to="/messages" className="block text-white py-2 px-4 hover:bg-gray-700 rounded">Messages</Link></li>
            <li><Link to="/about" className="block text-white py-2 px-4 hover:bg-gray-700 rounded">About</Link></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Header;
