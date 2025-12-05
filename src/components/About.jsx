import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaLaptopCode, FaGamepad, FaMusic } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    { icon: FaCode, label: 'Clean Code', desc: 'Writing maintainable code' },
    { icon: FaLaptopCode, label: 'Web Apps', desc: 'Full-stack development' },
    { icon: FaGamepad, label: 'Gaming', desc: 'Love playing video games' },
    { icon: FaMusic, label: 'Music', desc: 'Listening to music while coding' },
  ];

  return (
    <section id="about" className="py-20 relative">
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-30" />
              <img
                src="/about-image.jpg"
                alt="About Me"
                className="relative w-full max-w-md mx-auto rounded-2xl border border-white/10"
              />
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary to-secondary p-4 rounded-2xl shadow-xl"
              >
                <p className="text-3xl font-bold">2+</p>
                <p className="text-sm">Years Learning</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              A passionate <span className="gradient-text">Web Developer</span> based in Bangladesh
            </h3>
            
            <div className="space-y-4 text-gray-300 mb-8">
              <p>
                I'm Sabir Hossain Arik, a second-year Computer Science and Engineering student 
                with a deep passion for web development. My journey started with curiosity 
                about how websites work, and now I'm building full-stack applications using 
                the MERN stack.
              </p>
              <p>
                I love turning complex problems into simple, beautiful, and intuitive solutions. 
                Whether it's crafting responsive user interfaces with React or building robust 
                backend APIs with Node.js and Express, I enjoy every aspect of web development.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, playing video 
                games, or listening to music. I believe in continuous learning and always 
                strive to improve my skills.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-card p-4 hover:bg-white/10 transition-all duration-300"
                >
                  <item.icon className="text-primary text-2xl mb-2" />
                  <h4 className="font-semibold">{item.label}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
