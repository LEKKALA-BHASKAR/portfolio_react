import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import profilePhoto from "/img/profile.jpeg";

function Header() {
  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2
      }
    }
  };

  return (
    <header className="relative py-12 px-6 mt-20 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>

      {/* Particle Effects */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          variants={particleVariants}
          animate="animate"
          className="absolute w-2 h-2 bg-white rounded-full opacity-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto pt-32 px-6 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Profile Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-[#00ff87] to-[#60efff] p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Lekkala Bhaskar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl sm:text-8xl font-bold mb-4 text-white bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#60efff]"
          >
            LEKKALA BHASKAR
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl text-white/80 mb-6 max-w-2xl mx-auto"
          >
            B.Tech Computer Science Student & Full Stack Developer
          </motion.p>

          {/* Sub-tagline */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg text-white/60 mb-12"
          >
            Crafting innovative solutions with code and creativity
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center space-x-8"
          >
            <motion.a
              whileHover={{ scale: 1.1, rotate: -0 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/LEKKALA-BHASKAR"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#24292E] p-4 rounded-full hover:bg-[#2F363D] transition-all duration-300 text-white border border-[#24292E] hover:border-[#2F363D]"
            >
              <FaGithub className="w-10 h-10" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -0 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/LEKKALA-BHASKAR"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A66C2] p-4 rounded-full hover:bg-[#004182] transition-all duration-300 text-white border border-[#0A66C2] hover:border-[#004182]"
            >
              <FaLinkedin className="w-10 h-10" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -0 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.instagram.com/bhas_kar_18/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] p-4 rounded-full hover:bg-gradient-to-r hover:from-[#833AB4]/90 hover:via-[#FD1D1D]/90 hover:to-[#FCB045]/90 transition-all duration-300 text-white border border-transparent hover:border-white"
            >
              <FaInstagram className="w-10 h-10" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -0 }}
              whileTap={{ scale: 0.10 }}
              href="mailto:bassnaidu1242@gmail.com"
              className="bg-[#EA4335] p-4 rounded-full hover:bg-[#D14836] transition-all duration-300 text-white border border-[#EA4335] hover:border-[#D14836] flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              <FaEnvelope className="w-10 h-10" />
            </motion.a>
          </motion.div>

          {/* Decorative Lines */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent max-w-md mx-auto"
          />
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
