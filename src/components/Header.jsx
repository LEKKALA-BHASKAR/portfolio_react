import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import profilePhoto from "/img/profile.jpeg";

function Header() {
  // Particle animation variants
  const particleVariants = {
    animate: {
      y: [0, -40, 0],
      opacity: [0, 0.8, 0],
      scale: [0.5, 1.2, 0.5],
      transition: {
        duration: 4 + Math.random() * 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 5
      }
    }
  };

  // Floating circles in background
  const floatingCircles = [
    { size: 120, color: 'rgba(96, 239, 255, 0.1)', x: '10%', y: '20%' },
    { size: 200, color: 'rgba(0, 255, 135, 0.08)', x: '80%', y: '30%' },
    { size: 150, color: 'rgba(106, 17, 203, 0.1)', x: '30%', y: '70%' },
    { size: 180, color: 'rgba(37, 117, 252, 0.1)', x: '70%', y: '80%' }
  ];

  return (
    <header className="relative py-12 px-6 min-h-screen bg-gradient-to-br from-[#6a11cb] via-[#3a1ccd] to-[#2575fc] overflow-hidden">
      {/* Floating background circles */}
      {floatingCircles.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: circle.size,
            height: circle.size,
            left: circle.x,
            top: circle.y,
            background: circle.color,
            filter: 'blur(40px)'
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            transition: {
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }
          }}
        />
      ))}

      {/* Particle Effects */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          variants={particleVariants}
          animate="animate"
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 2 + Math.random() * 4,
            height: 2 + Math.random() * 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `rgba(255, 255, 255, ${0.2 + Math.random() * 0.3})`,
            boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.5)'
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center h-full pt-32 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full"
        >
          {/* Profile Avatar with Glow Effect */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: 'spring',
              stiffness: 100,
              damping: 10,
              delay: 0.2
            }}
            className="mb-8 relative"
          >
            <div className="relative w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-[#00ff87] via-[#60efff] to-[#00ff87] p-[3px] animate-gradient-xy">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/20">
                <img
                  src={profilePhoto}
                  alt="Lekkala Bhaskar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 -z-10 w-48 h-48 mx-auto rounded-full bg-[#00ff87] opacity-20 blur-2xl animate-pulse"></div>
          </motion.div>

          {/* Name with Gradient Text */}
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut",
              delay: 0.3
            }}
            className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] via-[#60efff] to-[#00ff87] animate-gradient-x"
          >
            LEKKALA BHASKAR
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.5, 
              duration: 0.8 
            }}
            className="text-xl sm:text-2xl text-white/90 mb-6 max-w-2xl mx-auto font-medium"
          >
            B.Tech Computer Science Student & Full Stack Developer
          </motion.p>

          {/* Sub-tagline */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.7, 
              duration: 0.8 
            }}
            className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting innovative digital experiences with clean code and modern technologies
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.9, 
              duration: 0.8 
            }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16"
          >
            <motion.a
              whileHover={{ 
                scale: 1.1,
                y: -5,
                boxShadow: '0 10px 20px rgba(36, 41, 46, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/LEKKALA-BHASKAR"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#24292E] p-4 rounded-full hover:bg-[#2F363D] transition-all duration-300 text-white border-2 border-[#24292E] hover:border-[#2F363D] flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              whileHover={{ 
                scale: 1.1,
                y: -5,
                boxShadow: '0 10px 20px rgba(10, 102, 194, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/LEKKALA-BHASKAR"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A66C2] p-4 rounded-full hover:bg-[#004182] transition-all duration-300 text-white border-2 border-[#0A66C2] hover:border-[#004182] flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              whileHover={{ 
                scale: 1.1,
                y: -5,
                boxShadow: '0 10px 20px rgba(131, 58, 180, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/bhas_kar_18/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] p-4 rounded-full hover:opacity-90 transition-all duration-300 text-white border-2 border-transparent hover:border-white flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              <FaInstagram className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              whileHover={{ 
                scale: 1.1,
                y: -5,
                boxShadow: '0 10px 20px rgba(234, 67, 53, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              href="mailto:bassnaidu1242@gmail.com"
              className="bg-[#EA4335] p-4 rounded-full hover:bg-[#D14836] transition-all duration-300 text-white border-2 border-[#EA4335] hover:border-[#D14836] flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              <FaEnvelope className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              whileHover={{ 
                scale: 1.1,
                y: -5,
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-4 rounded-full hover:bg-gray-800 transition-all duration-300 text-white border-2 border-black hover:border-gray-800 flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              <FaXTwitter className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.2,
              duration: 0.8
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center">
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-white/80 mb-2"
              >
                <FaArrowDown className="w-6 h-6" />
              </motion.div>
              <span className="text-sm text-white/60">Scroll Down</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
