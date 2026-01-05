import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from '@formspree/react';
import { 
  FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, 
  FaPaperPlane, FaGithub, FaLinkedin, FaFacebook 
} from 'react-icons/fa';

const Contact = () => {
  const [state, handleSubmit] = useForm("mnjnwryb"); // Your Formspree form ID

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'sabirhossainarik34@gmail.com',
      href: 'mailto:sabirhossainarik34@gmail.com',
      color: 'text-red-400',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+880 1307453275',
      href: 'tel:+8801307453275',
      color: 'text-green-400',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+880 1307453275',
      href: 'https://wa.me/8801307453275',
      color: 'text-emerald-400',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: '#',
      color: 'text-blue-400',
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/arik509', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sabirhossainarik/', label: 'LinkedIn' },
    { icon: FaFacebook, href: 'https://www.facebook.com/sabirhossain.arik', label: 'Facebook' },
  ];

  return (
    <section id="contact" className="py-20">
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's talk about everything!</h3>
              <p className="text-gray-400">
                Don't hesitate to contact me if you have any questions or just want to say hi.
                I'm always open to discussing new projects, creative ideas, or opportunities to
                be part of your vision.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card p-4 text-[14px] flex items-center gap-4 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`p-3 rounded-full bg-white/5 ${info.color}`}>
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="p-4 glass-card hover:bg-primary/20 hover:text-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={state.submitting}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={state.submitting}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  disabled={state.submitting}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  disabled={state.submitting}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50"
                  placeholder="Your message here..."
                />
              </div>

              {/* Success Message */}
              {state.succeeded && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-green-500/20 text-green-400 border border-green-500/30"
                >
                  ✅ Thanks for reaching out! I'll get back to you soon.
                </motion.div>
              )}

              {/* Error Message */}
              {state.errors && state.errors.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30"
                >
                  ❌ Oops! There was a problem submitting your form.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={state.submitting}
                whileHover={{ scale: state.submitting ? 1 : 1.02 }}
                whileTap={{ scale: state.submitting ? 1 : 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {state.submitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
