import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: "Android Development",
      description: "Mobile app development project",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800",
      github: "https://github.com/LEKKALA-BHASKAR",
      live: null
    },
    {
      title: "Seminar Hall Booking System",
      description: "Web-based booking system",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800",
      github: null,
      live: "https://seminar-hall-booking-system-qall.vercel.app"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcase",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800",
      github: null,
      live: "https://profile-overview.vercel.app/"
    },
    {
      title: "Intern Management",
      description: "Internship tracking system",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800",
      github: null,
      live: "https://scaleindia.org.in"
    },
    {
      title: "Quiz App",
      description: "Interactive quiz application",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800",
      github: null,
      live: "https://quiz-app-green-gamma.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading text-center text-black mb-16"
        >
          Projects
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden card-hover"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-white hover:text-gray-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="w-6 h-6" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className="text-white hover:text-gray-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6 card-content">
                <h3 className="text-xl font-bold mb-2 text-black">{project.title}</h3>
                <p className="text-black">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;