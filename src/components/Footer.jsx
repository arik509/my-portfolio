import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaHeart } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/arik509', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { icon: FaFacebook, href: 'https://facebook.com/yourprofile', label: 'Facebook' },
  ];

  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text mb-4 cursor-pointer inline-block"
            >
              Arik.dev
            </motion.h3>
            <p className="text-gray-400 mb-4">
              A passionate web developer building modern and responsive web applications
              with clean code and great user experiences.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 hover:text-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-gray-400 hover:text-primary cursor-pointer transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="text-primary">Email:</span>{' '}
                sabirhossainarik@gmail.com
              </li>
              <li>
                <span className="text-primary">Phone:</span>{' '}
                +880 1XXXXXXXXX
              </li>
              <li>
                <span className="text-primary">Location:</span>{' '}
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-400">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Sabir Hossain Arik. Made with{' '}
            <FaHeart className="text-red-500 animate-pulse" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
