import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Together Now',
      image: '/projects/together-now.jpg',
      shortDesc: 'A social & environmental action platform for community events.',
      fullDesc: 'Together Now is a powerful platform enabling users to create, discover, and participate in impactful community events. Whether you want to host a volunteer initiative or join an environmental cleanup, this app connects like-minded individuals for positive change.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      liveLink: 'https://together-now-4c3e3.web.app/',
      githubLink: 'https://github.com/arik509/together-now-client',
      challenges: [
        'Implementing real-time event updates and notifications',
        'Managing complex user authentication with Firebase',
        'Designing an intuitive UI for event discovery and participation'
      ],
      futureImprovements: [
        'Add real-time chat feature for event participants',
        'Implement push notifications for event reminders',
        'Add map integration for location-based event discovery'
      ],
    },
    {
      id: 2,
      title: 'Hero.io',
      image: '/projects/hero-io.jpg',
      shortDesc: 'A responsive React web app to explore, search, and manage apps.',
      fullDesc: 'Hero.io is a modern web application that allows users to explore and manage applications. Built with React and styled with Tailwind CSS, it provides a seamless experience for discovering and organizing apps with an intuitive interface.',
      techStack: ['React', 'Tailwind CSS', 'React Router', 'React Toastify', 'LocalStorage'],
      liveLink: 'https://hero-io.vercel.app/',
      githubLink: 'https://github.com/arik509/Hero.io',
      challenges: [
        'Creating an efficient search and filter system',
        'Managing application state across multiple components',
        'Implementing persistent data storage with LocalStorage'
      ],
      futureImprovements: [
        'Add user authentication for personalized experience',
        'Integrate backend API for dynamic data',
        'Add dark/light theme toggle'
      ],
    },
    {
      id: 3,
      title: 'World On The Go',
      image: '/projects/world-on-the-go.jpg',
      shortDesc: 'A travel and tourism website with country exploration features.',
      fullDesc: 'World On The Go is a travel-focused web application that helps users explore different countries, discover tourist attractions, and plan their trips. The app provides detailed information about various destinations with a beautiful, responsive interface.',
      techStack: ['React', 'Vite', 'Tailwind CSS', 'REST API', 'React Router'],
      liveLink: 'https://world-on-the-go.vercel.app/',
      githubLink: 'https://github.com/arik509/react-world-on-the-go',
      challenges: [
        'Fetching and displaying data from external APIs',
        'Creating responsive card layouts for country information',
        'Implementing smooth navigation between pages'
      ],
      futureImprovements: [
        'Add favorite destinations feature',
        'Implement trip planning functionality',
        'Add weather information for each country'
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-primary hover:scale-110 transition-transform"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-primary hover:scale-110 transition-transform"
                    aria-label="GitHub Repo"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.shortDesc}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-secondary/10 text-secondary rounded-full">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2 border border-primary/50 rounded-lg text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="relative h-64">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/50 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <FaTimes size={20} />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                  <div className="flex gap-3">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary rounded-lg font-medium hover:bg-primary/80 transition-colors"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </a>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg font-medium hover:bg-white/20 transition-colors"
                    >
                      <FaGithub size={14} />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 gradient-text">Description</h4>
                  <p className="text-gray-300">{selectedProject.fullDesc}</p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 gradient-text">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 gradient-text">Challenges Faced</h4>
                  <ul className="space-y-2">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <span className="text-primary mt-1">▹</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Future Improvements */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 gradient-text">Future Improvements</h4>
                  <ul className="space-y-2">
                    {selectedProject.futureImprovements.map((improvement, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <span className="text-secondary mt-1">▹</span>
                        {improvement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
