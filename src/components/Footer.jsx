import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="py-12 px-6 glass-effect mt-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gradient text-lg font-semibold mb-4 sm:mb-0"
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
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/LEKKALA-BHASKAR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:bassnaidu1242@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;