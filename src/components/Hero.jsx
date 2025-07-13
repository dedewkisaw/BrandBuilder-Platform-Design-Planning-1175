import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiPalette, FiTrendingUp, FiStar, FiArrowRight } = FiIcons;

const Hero = () => {
  const features = [
    { icon: FiZap, text: "Instant Generation" },
    { icon: FiPalette, text: "Professional Design" },
    { icon: FiTrendingUp, text: "Brand Analytics" },
    { icon: FiStar, text: "Premium Quality" }
  ];

  const scrollToBrandBuilder = () => {
    const element = document.getElementById('brand-builder');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 engraved-text font-['Playfair_Display']">
              Brand<span className="gradient-text">Builder</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Automatically generate complete branding kits with logos, typography, 
              color palettes, and theme suggestions in minutes, not months.
            </p>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="neumorphic-inset px-6 py-3 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <SafeIcon icon={feature.icon} className="text-white/80" />
                <span className="text-white/80 font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="neumorphic-button px-8 py-4 text-white font-semibold text-lg flex items-center space-x-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToBrandBuilder}
            >
              <span>Start Building Now</span>
              <SafeIcon 
                icon={FiArrowRight} 
                className="group-hover:translate-x-1 transition-transform duration-300" 
              />
            </motion.button>
            
            <motion.button
              className="neumorphic-inset px-8 py-4 text-white/80 font-medium text-lg hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Examples
            </motion.button>
          </motion.div>

          {/* Floating Elements */}
          <div className="relative">
            <motion.div
              className="absolute -top-20 -left-20 w-40 h-40 neumorphic rounded-full floating-element opacity-20"
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -top-10 -right-10 w-24 h-24 neumorphic rounded-full floating-element opacity-30"
              animate={{
                y: [20, -20, 20],
                rotate: [360, 180, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;