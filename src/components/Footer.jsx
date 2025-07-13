import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPalette, FiMail, FiPhone, FiMapPin, FiTwitter, FiLinkedin, FiInstagram, FiFacebook, FiExternalLink } = FiIcons;

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API Documentation', href: '/api-docs' }
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press Kit', href: '/press' }
    ],
    Support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Contact Support', href: '/contact' },
      { name: 'System Status', href: '/status' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Licenses', href: '/licenses' }
    ]
  };

  const socialLinks = [
    { icon: FiTwitter, href: 'https://twitter.com/brandbuilder', name: 'Twitter' },
    { icon: FiLinkedin, href: 'https://linkedin.com/company/brandbuilder', name: 'LinkedIn' },
    { icon: FiInstagram, href: 'https://instagram.com/brandbuilder', name: 'Instagram' },
    { icon: FiFacebook, href: 'https://facebook.com/brandbuilder', name: 'Facebook' }
  ];

  const handleLinkClick = (href) => {
    if (href.startsWith('/')) {
      // For internal routes, create placeholder pages
      alert(`Navigating to ${href} - This would be implemented in a full application`);
    } else if (href.startsWith('#')) {
      // For anchor links, scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For external links, open in new tab
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="py-24 px-6 border-t border-white/20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 neumorphic-button flex items-center justify-center">
                <SafeIcon icon={FiPalette} className="text-2xl text-white" />
              </div>
              <span className="text-3xl font-bold engraved-text font-['Playfair_Display']">
                BrandBuilder
              </span>
            </motion.div>
            
            <motion.p
              className="text-white/70 mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Empowering businesses worldwide to create professional brand identities 
              with cutting-edge AI technology. Transform your vision into a complete 
              brand identity in minutes, not months.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center space-x-4 text-white/70 hover:text-white transition-colors cursor-pointer neumorphic-inset p-3 rounded-lg"
                whileHover={{ scale: 1.02 }}
                onClick={() => window.location.href = 'mailto:hello@brandbuilder.com'}
              >
                <SafeIcon icon={FiMail} className="text-lg" />
                <span className="font-medium">hello@brandbuilder.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4 text-white/70 hover:text-white transition-colors cursor-pointer neumorphic-inset p-3 rounded-lg"
                whileHover={{ scale: 1.02 }}
                onClick={() => window.location.href = 'tel:+15551234567'}
              >
                <SafeIcon icon={FiPhone} className="text-lg" />
                <span className="font-medium">+1 (555) 123-4567</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4 text-white/70 neumorphic-inset p-3 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <SafeIcon icon={FiMapPin} className="text-lg" />
                <span className="font-medium">San Francisco, CA 94105</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 + categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold text-xl mb-6">{category}</h4>
              <ul className="space-y-4">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <motion.button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-white/70 hover:text-white transition-all duration-300 flex items-center space-x-2 group text-left"
                      whileHover={{ x: 5 }}
                    >
                      <span>{link.name}</span>
                      {link.href.startsWith('http') && (
                        <SafeIcon 
                          icon={FiExternalLink} 
                          className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" 
                        />
                      )}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Newsletter Signup */}
        <motion.div
          className="neumorphic p-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h3 
              className="text-3xl font-bold text-white mb-4"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.5 }}
            >
              Stay Ahead of Design Trends
            </motion.h3>
            <p className="text-white/70 mb-8 text-lg">
              Get exclusive design insights, brand inspiration, and early access to new features. 
              Join 50,000+ creative professionals who trust our updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your professional email"
                className="flex-1 neumorphic-input px-6 py-4 text-white placeholder-white/50 bg-transparent border-none outline-none text-lg"
              />
              <motion.button
                className="neumorphic-button-primary px-8 py-4 text-white font-bold text-lg whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert('Newsletter subscription would be implemented here')}
              >
                Subscribe Now
              </motion.button>
            </div>
            
            <p className="text-white/50 text-sm mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </motion.div>

        {/* Enhanced Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-white/20">
          <motion.div
            className="text-center lg:text-left mb-8 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-white/60 text-lg mb-2">
              © 2024 BrandBuilder. All rights reserved.
            </p>
            <p className="text-white/50 text-sm">
              Made with ❤️ in San Francisco • Trusted by 10,000+ businesses worldwide
            </p>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.button
                key={social.name}
                onClick={() => handleLinkClick(social.href)}
                className="w-14 h-14 neumorphic-button flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 group"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <SafeIcon 
                  icon={social.icon} 
                  className="text-xl group-hover:scale-110 transition-transform" 
                />
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/40 text-sm">
            <span>🔒 SSL Secured</span>
            <span>🛡️ GDPR Compliant</span>
            <span>⭐ 4.9/5 Rating</span>
            <span>🚀 99.9% Uptime</span>
            <span>💳 Secure Payments</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;