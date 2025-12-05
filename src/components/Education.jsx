import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Science in Computer Science & Engineering',
      institution: 'Daffodil International University',
      location: 'Dhaka, Bangladesh',
      duration: '2024 - Present (2nd Year)',
      description: 'Currently pursuing BSc in CSE with focus on software development, web technologies, and computer science fundamentals.',
      status: 'ongoing',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Shahid A.H.M. Kamaruzzaman Govt. Degree College',
      location: 'Rajshahi, Bangladesh',
      duration: '2020 - 2022',
      description: 'Completed HSC in Science group with focus on Mathematics, Physics, and Chemistry.',
      status: 'completed',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Chakmoiram Govt. Model High School',
      location: 'Dhamoirhat, Naogaon, Bangladesh',
      duration: '2015 - 2020',
      description: 'Completed SSC in Science group with excellent academic performance.',
      status: 'completed',
    },
  ];

  return (
    <section id="education" className="py-20">
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
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-pink-500" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    {/* Status Badge */}
                    {edu.status === 'ongoing' && (
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full mb-3">
                        Currently Studying
                      </span>
                    )}
                    
                    <h3 className="text-xl font-bold mb-2 gradient-text">
                      {edu.degree}
                    </h3>
                    
                    <div className={`flex flex-wrap gap-4 mb-3 text-gray-400 text-sm ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}>
                      <span className="flex items-center gap-1">
                        <FaGraduationCap className="text-primary" />
                        {edu.institution}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-secondary" />
                        {edu.location}
                      </span>
                    </div>
                    
                    <div className={`flex items-center gap-2 text-gray-500 text-sm mb-3 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}>
                      <FaCalendarAlt className="text-pink-500" />
                      {edu.duration}
                    </div>
                    
                    <p className="text-gray-300">{edu.description}</p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/50"
                  />
                </div>

                {/* Empty Space for Alternating Layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
