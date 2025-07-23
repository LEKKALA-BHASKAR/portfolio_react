import { FaUser, FaCode, FaBookOpen, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

function About() {
  const skills = [
    'React.js', 'MongoDB', 'Node.js', 'Express.js', 'Python', 
    'JavaScript', 'HTML/CSS', 'Git', 'SQL', 'Java', 'Tailwind CSS',
    'REST APIs', 'Redux', 'DSA'
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const skillItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            My journey in web development and passion for creating impactful solutions
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* About Me Card */}
          <motion.div 
            variants={cardItem}
            className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all duration-500"
            whileHover={{ 
              y: -10,
              transition: { type: 'spring', stiffness: 300 }
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50/30 to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-rose-200/20 blur-xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-indigo-200/20 blur-xl" />
            
            <div className="flex items-center mb-6 relative">
              <div className="p-4 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 shadow-lg">
                <FaUser className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold ml-4 text-gray-800">Profile</h2>
            </div>
            <p className="text-gray-700 leading-relaxed font-medium relative">
              Full-stack developer specializing in the MERN stack with expertise in building 
              scalable web applications. Strong problem-solving skills with a focus on 
              clean, efficient code. Experience in REST APIs, authentication systems, 
              and responsive UI design. Passionate about continuous learning and 
              implementing modern development practices.
            </p>
            
            <div className="mt-6 pt-6 border-t border-gray-100/50 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500"></div>
              </div>
              <span className="ml-3 text-sm text-gray-500">Tech enthusiast</span>
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div 
            variants={cardItem}
            className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all duration-500"
            whileHover={{ 
              y: -10,
              transition: { type: 'spring', stiffness: 300 }
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 to-cyan-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-teal-200/20 blur-xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-cyan-200/20 blur-xl" />
            
            <div className="flex items-center mb-6 relative">
              <div className="p-4 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 shadow-lg">
                <FaCode className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold ml-4 text-gray-800">Skills</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 relative">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={skillItem}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }}
                  className="px-4 py-2 rounded-lg text-center text-sm font-medium bg-gradient-to-br from-teal-100 to-cyan-100 text-gray-800 border border-gray-200/50 hover:border-teal-300/50 transition-all cursor-default flex items-center justify-center"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100/50">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                <span className="text-sm text-gray-500">Currently learning advanced backend concepts</span>
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div 
            variants={cardItem}
            className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all duration-500"
            whileHover={{ 
              y: -10,
              transition: { type: 'spring', stiffness: 300 }
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-indigo-200/20 blur-xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-blue-200/20 blur-xl" />
            
            <div className="flex items-center mb-6 relative">
              <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 shadow-lg">
                <FaGraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold ml-4 text-gray-800">Education</h2>
            </div>
            
            <div className="relative">
              <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-indigo-200 to-blue-200"></div>
              
              <div className="relative pl-10 pb-6">
                <div className="absolute left-5 top-1 w-3 h-3 rounded-full bg-indigo-500 border-4 border-indigo-100"></div>
                <h3 className="text-lg font-semibold text-gray-800">B.Tech Computer Science</h3>
                <p className="text-blue-600 font-medium">Annamacharya Institute Of Technology</p>
                <p className="text-gray-500 text-sm mt-1">2022 - 2026</p>
                <p className="text-gray-600 mt-2">Currently pursuing degree with focus on software engineering principles and web technologies.</p>
              </div>
              
              <div className="relative pl-10">
                <div className="absolute left-5 top-1 w-3 h-3 rounded-full bg-blue-500 border-4 border-blue-100"></div>
                <h3 className="text-lg font-semibold text-gray-800">Freelance Web Agency</h3>
                <p className="text-blue-600 font-medium">Co-Founder & Developer</p>
                <p className="text-gray-500 text-sm mt-1">2024 - Present</p>
                <p className="text-gray-600 mt-2">Built and delivered custom web solutions for clients while managing projects and teams.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
