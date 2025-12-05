import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/arik509', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { icon: FaFacebook, href: 'https://facebook.com/yourprofile', label: 'Facebook' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-indigo-400 font-medium mb-4"
            >
              👋 Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            >
              Sabir Hossain{' '}
              <span className="gradient-text">Arik</span>
            </motion.h1>

            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6 h-12">
              <TypeAnimation
                sequence={[
                  'Junior Web Developer',
                  2000,
                  'MERN Stack Developer',
                  2000,
                  'Frontend Developer',
                  2000,
                  'React.js Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 max-w-xl mb-8 text-lg"
            >
              Passionate about building modern, responsive web applications
              with clean code and great user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <FaDownload />
                Download Resume
              </a>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="px-6 py-3 border border-indigo-500/50 rounded-full font-semibold hover:bg-indigo-500/10 transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                Contact Me
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full hover:bg-indigo-500/20 hover:text-indigo-400 transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse" />
              <img
                src="/profile.jpg"
                alt="Sabir Hossain Arik"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white/20"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, y: { repeat: Infinity, duration: 1.5 } }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="flex flex-col items-center cursor-pointer text-gray-400 hover:text-white transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <HiArrowDown size={24} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
