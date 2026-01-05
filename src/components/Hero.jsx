import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from 'react-icons/fa';
import { HiArrowDown, HiSparkles } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  // Cursor tracking for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setCursorPos({ x: clientX, y: clientY });
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const springConfig = { damping: 25, stiffness: 150 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/arik509', label: 'GitHub', color: '#6366f1' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sabirhossainarik/', label: 'LinkedIn', color: '#8b5cf6' },
    { icon: FaFacebook, href: 'https://www.facebook.com/sabirhossain.arik', label: 'Facebook', color: '#ec4899' },
  ];

  // Text reveal animation
  const textVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    }),
  };

  // Floating particles
  const particles = Array.from({ length: 15 });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
    >
      {/* Animated gradient mesh background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ opacity, scale }}
      >
        {/* Mesh gradient orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-5">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/40 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Cursor glow effect */}
      <motion.div
        className="pointer-events-none fixed w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-5"
        style={{
          x: xSpring,
          y: ySpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <HiSparkles className="text-indigo-400" />
              </motion.div>
              <span className="text-indigo-400 text-sm font-medium">Available for work</span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-white">Sabir Hossain</span>
              <br />
              <motion.span 
                className="gradient-text inline-block"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  background: 'linear-gradient(to right, #6366f1, #8b5cf6, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% 200%',
                }}
              >
                Arik
              </motion.span>
            </motion.h1>

            <motion.div 
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-2xl sm:text-3xl lg:text-4xl text-slate-300 mb-6 h-14 font-semibold"
            >
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
                className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent"
              />
            </motion.div>

            <motion.p
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-slate-400 max-w-xl mb-10 text-lg leading-relaxed"
            >
              Crafting pixel-perfect, responsive web experiences with modern technologies. 
              Turning complex problems into elegant solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.a
                href="/resume.pdf"
                download
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl font-semibold overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-500 to-pink-500"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center gap-2 text-white">
                  <FaDownload className="group-hover:animate-bounce" />
                  Download Resume
                </span>
              </motion.a>
              
              <Link to="contact" smooth={true} duration={500}>
                <motion.div
                  className="relative px-8 py-4 rounded-2xl font-semibold cursor-pointer overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-indigo-500/20 backdrop-blur-sm border border-indigo-500/30" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-violet-500/30"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative text-indigo-400 group-hover:text-white transition-colors">
                    Contact Me
                  </span>
                </motion.div>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              custom={5}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 group overflow-hidden"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: social.color + '20' }}
                    transition={{ duration: 0.3 }}
                  />
                  <social.icon 
                    size={24} 
                    className="relative text-slate-400 group-hover:text-white transition-colors" 
                    style={{ filter: `drop-shadow(0 0 8px ${social.color}40)` }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 0.2,
            }}
            className="flex-1 flex justify-center perspective-1000"
          >
            <div className="relative group">
              {/* Glowing rings */}
              <motion.div
                className="absolute -inset-8 opacity-70"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 rounded-full blur-2xl opacity-30" />
              </motion.div>

              <motion.div
                className="absolute -inset-6 opacity-50"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-pink-500 to-indigo-500 rounded-full blur-xl opacity-40" />
              </motion.div>
              
              {/* Image container */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                  <motion.img
                    src="/profile.jpg"
                    alt="Sabir Hossain Arik"
                    className="relative w-full h-full object-cover rounded-3xl border-2 border-indigo-500/30 shadow-2xl"
                    whileHover={{ 
                      rotate: [0, 2, -2, 0],
                      transition: { duration: 0.5 }
                    }}
                  />
                  
                  {/* Animated border */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 rounded-3xl -z-10"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="flex flex-col items-center cursor-pointer text-slate-500 group"
          >
            <motion.span 
              className="text-sm mb-2 group-hover:text-indigo-400 transition-colors"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll Down
            </motion.span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="p-2 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm group-hover:border-indigo-500/50 transition-colors"
            >
              <HiArrowDown size={20} className="group-hover:text-indigo-400 transition-colors" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;