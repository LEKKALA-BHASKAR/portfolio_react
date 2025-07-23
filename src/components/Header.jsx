import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import profilePhoto from "/img/profile.jpeg";

function Header() {
  const particleVariants = {
    animate: {
      y: [0, -50, 0],
      opacity: [0, 0.7, 0],
      scale: [0.4, 1.3, 0.4],
      transition: {
        duration: 5 + Math.random() * 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 6,
      },
    },
  };

  const floatingCircles = [
    { size: 100, color: "rgba(96, 239, 255, 0.15)", x: "15%", y: "15%" },
    { size: 180, color: "rgba(0, 255, 135, 0.1)", x: "75%", y: "25%" },
    { size: 140, color: "rgba(106, 17, 203, 0.12)", x: "25%", y: "65%" },
    { size: 160, color: "rgba(37, 117, 252, 0.12)", x: "65%", y: "75%" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      href: "https://github.com/LEKKALA-BHASKAR",
      bg: "bg-[#24292E]",
      hover: "hover:bg-[#2F363D]",
      border: "border-[#24292E] hover:border-[#2F363D]",
      shadow: "shadow-md hover:shadow-lg",
      ariaLabel: "Visit my GitHub profile",
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/LEKKALA-BHASKAR",
      bg: "bg-[#0A66C2]",
      hover: "hover:bg-[#004182]",
      border: "border-[#0A66C2] hover:border-[#004182]",
      shadow: "shadow-md hover:shadow-lg",
      ariaLabel: "Visit my LinkedIn profile",
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      href: "https://www.instagram.com/bhas_kar_18/",
      bg: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045]",
      hover: "hover:opacity-85",
      border: "border-transparent hover:border-white/20",
      shadow: "shadow-md hover:shadow-lg",
      ariaLabel: "Visit my Instagram profile",
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      href: "mailto:bassnaidu1242@gmail.com",
      bg: "bg-[#EA4335]",
      hover: "hover:bg-[#D14836]",
      border: "border-[#EA4335] hover:border-[#D14836]",
      shadow: "shadow-md hover:shadow-lg",
      ariaLabel: "Send me an email",
    },
    {
      icon: <FaXTwitter className="w-6 h-6" />,
      href: "https://x.com/bhas_kar_18", // Updated to a more likely Twitter/X handle
      bg: "bg-black",
      hover: "hover:bg-gray-800",
      border: "border-black hover:border-gray-800",
      shadow: "shadow-md hover:shadow-lg",
      ariaLabel: "Visit my Twitter profile",
    },
  ];

  return (
    <header className="relative py-12 px-4 sm:px-6 min-h-screen bg-gradient-to-br from-[#5a0fb4] via-[#2a1ab8] to-[#1a5fd9] overflow-hidden">
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
            filter: "blur(50px)",
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            transition: {
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            },
          }}
        />
      ))}

      {[...Array(10)].map((_, i) => ( // Reduced particles for performance
        <motion.div
          key={i}
          variants={particleVariants}
          animate="animate"
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 3 + Math.random() * 3,
            height: 3 + Math.random() * 3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `rgba(255, 255, 255, ${0.15 + Math.random() * 0.25})`,
            boxShadow: "0 0 8px 1px rgba(255, 255, 255, 0.4)",
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen pt-24 pb-16 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center w-full"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.3 }}
            className="mb-10 relative"
          >
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full bg-gradient-to-r from-[#00ff87] via-[#60efff] to-[#00ff87] p-[4px] animate-gradient-xy">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/30">
                <img
                  src={profilePhoto}
                  alt="Lekkala Bhaskar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 -z-10 w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full bg-[#00ff87] opacity-15 blur-3xl animate-pulse"></div>
          </motion.div>

          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] via-[#60efff] to-[#00ff87] animate-gradient-x"
          >
            LEKKALA BHASKAR
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto font-medium"
          >
            B.Tech Computer Science Student & Full Stack Developer
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.9 }}
            className="text-base sm:text-lg text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Building innovative digital solutions with clean code and cutting-edge technologies
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.9 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-16"
          >
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className={`p-3 sm:p-4 rounded-full transition-all duration-300 text-white border-2 flex items-center justify-center ${link.bg} ${link.hover} ${link.border} ${link.shadow} focus:outline-none focus:ring-2 focus:ring-white/50`}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.9 }}
            className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-white/80 mb-2"
              >
                <FaArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
              <span className="text-sm sm:text-base text-white/60">Scroll Down</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
