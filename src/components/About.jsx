import { FaUser, FaCode, FaBookOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';

function About() {
  const skills = [
    'React', 'Python', 'JavaScript', 'HTML/CSS',
    'Node.js', 'Git', 'SQL', 'Java'
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-32 px-6">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div variants={item} className="glass-effect rounded-2xl p-8 card-hover">
            <div className="flex items-center mb-6">
              <div className="p-4 rounded-full bg-[#00ff87]/20">
                <FaUser className="w-8 h-8 text-[#00ff87]" />
              </div>
              <h2 className="text-2xl font-bold ml-4 text-gradient">About Me</h2>
            </div>
            <p className="text-gray-100 leading-relaxed">
              A passionate B.Tech Computer Science student with a keen interest in web development
              and software engineering. Always eager to learn new technologies and solve complex problems.
            </p>
          </motion.div>

          <motion.div variants={item} className="glass-effect rounded-2xl p-8 card-hover">
            <div className="flex items-center mb-6">
              <div className="p-4 rounded-full bg-[#60efff]/20">
                <FaCode className="w-8 h-8 text-[#60efff]" />
              </div>
              <h2 className="text-2xl font-bold ml-4 text-gradient">Skills</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-badge px-4 py-2 rounded-full text-center text-sm text-white font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="glass-effect rounded-2xl p-8 card-hover">
            <div className="flex items-center mb-6">
              <div className="p-4 rounded-full bg-[#0061ff]/20">
                <FaBookOpen className="w-8 h-8 text-[#0061ff]" />
              </div>
              <h2 className="text-2xl font-bold ml-4 text-gradient">Education</h2>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">B.Tech Computer Science</h3>
              <p className="text-[#00ff87] font-medium">Currently Pursuing</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;