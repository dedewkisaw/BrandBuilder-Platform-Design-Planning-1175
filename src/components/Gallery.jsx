import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiEye, FiHeart, FiDownload } = FiIcons;

const Gallery = () => {
  const showcaseItems = [
    {
      id: 1,
      company: 'TechFlow',
      industry: 'Technology',
      style: 'Modern',
      colors: ['#667eea', '#764ba2'],
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      company: 'GreenLeaf',
      industry: 'Organic',
      style: 'Natural',
      colors: ['#059669', '#047857'],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      company: 'LuxeCorp',
      industry: 'Luxury',
      style: 'Elegant',
      colors: ['#8B5CF6', '#7C3AED'],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      company: 'UrbanEats',
      industry: 'Food',
      style: 'Bold',
      colors: ['#F59E0B', '#D97706'],
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      company: 'MindSpace',
      industry: 'Wellness',
      style: 'Calm',
      colors: ['#0EA5E9', '#0284C7'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      company: 'CreativeStudio',
      industry: 'Design',
      style: 'Artistic',
      colors: ['#F43F5E', '#E11D48'],
      image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 engraved-text font-['Playfair_Display']">
            Brand Showcase
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover amazing brands created with BrandBuilder. 
            Each one uniquely crafted in minutes, not months.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="neumorphic overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.company}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Actions */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    className="neumorphic-button p-2 text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SafeIcon icon={FiEye} />
                  </motion.button>
                  <motion.button
                    className="neumorphic-button p-2 text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SafeIcon icon={FiHeart} />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{item.company}</h3>
                  <span className="text-sm text-white/60 neumorphic-inset px-3 py-1 rounded-full">
                    {item.industry}
                  </span>
                </div>

                <p className="text-white/70 mb-4">Style: {item.style}</p>

                {/* Color Palette */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {item.colors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className="w-6 h-6 rounded-full border-2 border-white/20"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  
                  <motion.button
                    className="neumorphic-button p-2 text-white/80 hover:text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SafeIcon icon={FiDownload} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="neumorphic-button px-8 py-4 text-white font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More Examples
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;