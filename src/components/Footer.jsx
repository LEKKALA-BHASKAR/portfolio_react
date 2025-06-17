import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="py-12 px-6 mt-20 bg-gradient-to-r from-[#6a11cb] to-[#2575fc]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-lg font-semibold mb-4 sm:mb-0"
        >
          © 2025 LEKKALA BHASKAR
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex space-x-6"
        >
          <a
            href="https://github.com/LEKKALA-BHASKAR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <FaGithub className="w-10 h-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/LEKKALA-BHASKAR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <FaLinkedin className="w-10 h-10" />
          </a>
          <a
            href="https://www.instagram.com/bhas_kar_18/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <FaInstagram className="w-10 h-10" />
          </a>
          <a
            href="mailto:bassnaidu1242@gmail.com"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <FaEnvelope className="w-10 h-10" />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
