import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header className="min-h-screen relative overflow-hidden gradient-bg">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      <div className="relative z-10 max-w-7xl mx-auto pt-32 px-6 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl sm:text-8xl font-bold mb-8 text-gradient"
          >
            LEKKALA BHASKAR
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            B.Tech Computer Science Student & Full Stack Developer
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center space-x-8"
          >
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/LEKKALA-BHASKAR"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect p-4 rounded-full hover:bg-[#00ff87]/20 hover:border-[#00ff87]/50 transition-all duration-300"
            >
              <FaGithub className="w-8 h-8" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/LEKKALA-BHASKAR"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect p-4 rounded-full hover:bg-[#60efff]/20 hover:border-[#60efff]/50 transition-all duration-300"
            >
              <FaLinkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:bassnaidu1242@gmail.com"
              className="glass-effect p-4 rounded-full hover:bg-[#0061ff]/20 hover:border-[#0061ff]/50 transition-all duration-300"
            >
              <FaEnvelope className="w-8 h-8" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;