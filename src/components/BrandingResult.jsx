import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiDownload, FiShare2, FiEdit3, FiPalette, FiType, FiImage, FiArrowLeft, FiStar, FiHeart, FiEye, FiCopy, FiCheck } = FiIcons;

const BrandingResult = ({ brand }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLiked, setIsLiked] = useState(false);
  const [copiedColor, setCopiedColor] = useState(null);
  const navigate = useNavigate();

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">No Brand Data Found</h2>
          <motion.button
            className="neumorphic-button px-8 py-4 text-white font-semibold flex items-center space-x-2 mx-auto"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
          >
            <SafeIcon icon={FiArrowLeft} />
            <span>Back to Builder</span>
          </motion.button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', name: 'Overview', icon: FiStar },
    { id: 'logos', name: 'Logos', icon: FiImage },
    { id: 'colors', name: 'Colors', icon: FiPalette },
    { id: 'typography', name: 'Typography', icon: FiType }
  ];

  const mockAssets = [
    { name: 'Business Card', preview: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=300&h=200&fit=crop&auto=format' },
    { name: 'Letterhead', preview: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop&auto=format' },
    { name: 'Social Media Kit', preview: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop&auto=format' },
    { name: 'Brand Guidelines', preview: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop&auto=format' },
    { name: 'Website Mockup', preview: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&h=200&fit=crop&auto=format' },
    { name: 'Mobile App Design', preview: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop&auto=format' }
  ];

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(type);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const downloadAsset = (assetType) => {
    // Simulate download functionality
    console.log(`Downloading ${assetType}`);
    // In real implementation, this would trigger actual downloads
  };

  const shareResults = () => {
    if (navigator.share) {
      navigator.share({
        title: `${brand.companyName} Brand Kit`,
        text: 'Check out my new brand identity created with BrandBuilder!',
        url: window.location.href
      });
    } else {
      copyToClipboard(window.location.href, 'url');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 neumorphic p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 lg:mb-0">
            <div className="flex items-center space-x-6 mb-4">
              <motion.button
                className="neumorphic-button p-4 text-white"
                onClick={() => navigate('/')}
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiArrowLeft} className="text-xl" />
              </motion.button>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold engraved-text font-['Playfair_Display']">
                  {brand.companyName}
                </h1>
                <p className="text-white/70 text-xl mt-2">
                  {brand.industry} • {brand.style} Style
                </p>
              </div>
            </div>
            {brand.description && (
              <p className="text-white/60 max-w-2xl">{brand.description}</p>
            )}
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.button
              className={`neumorphic-button p-4 transition-all duration-300 ${
                isLiked ? 'text-red-400 neumorphic-button-primary' : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setIsLiked(!isLiked)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SafeIcon icon={FiHeart} className="text-xl" />
            </motion.button>
            
            <motion.button
              className="neumorphic-button p-4 text-white/70 hover:text-white"
              onClick={shareResults}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SafeIcon icon={FiShare2} className="text-xl" />
            </motion.button>
            
            <motion.button
              className="neumorphic-button-primary px-8 py-4 text-white font-bold flex items-center space-x-3"
              onClick={() => downloadAsset('complete-kit')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={FiDownload} />
              <span>Download All Assets</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Enhanced Tabs */}
        <motion.div
          className="neumorphic p-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex space-x-2 overflow-x-auto">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'neumorphic-button-primary text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SafeIcon icon={tab.icon} />
                <span>{tab.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Primary Logo Showcase */}
              <div className="neumorphic p-10">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Primary Logo</h3>
                <div className="logo-container max-w-2xl mx-auto text-center p-12">
                  <img
                    src={brand.logo.primary}
                    alt="Primary Logo"
                    className="max-w-full h-auto mx-auto"
                    style={{ maxHeight: '200px' }}
                  />
                </div>
                <div className="flex justify-center mt-6 space-x-4">
                  <motion.button
                    className="neumorphic-button px-6 py-3 text-white flex items-center space-x-2"
                    onClick={() => downloadAsset('primary-logo')}
                    whileHover={{ scale: 1.05 }}
                  >
                    <SafeIcon icon={FiDownload} />
                    <span>Download</span>
                  </motion.button>
                  <motion.button
                    className="neumorphic-button px-6 py-3 text-white flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <SafeIcon icon={FiEye} />
                    <span>Preview</span>
                  </motion.button>
                </div>
              </div>

              {/* Brand Essentials Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Color Palette */}
                <div className="neumorphic p-8">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                    <SafeIcon icon={FiPalette} />
                    <span>Color Palette</span>
                  </h4>
                  <div className="space-y-4">
                    {brand.colorPalette.map((color, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-4 neumorphic-inset p-4 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div
                          className="w-12 h-12 rounded-lg border-2 border-white/20"
                          style={{ backgroundColor: color }}
                        />
                        <div className="flex-1">
                          <span className="text-white font-mono text-lg">{color}</span>
                        </div>
                        <motion.button
                          className="neumorphic-button p-2 text-white/70 hover:text-white"
                          onClick={() => copyToClipboard(color, `color-${index}`)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <SafeIcon icon={copiedColor === `color-${index}` ? FiCheck : FiCopy} />
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Typography */}
                <div className="neumorphic p-8">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                    <SafeIcon icon={FiType} />
                    <span>Typography</span>
                  </h4>
                  <div className="space-y-6">
                    <div className="neumorphic-inset p-4 rounded-lg">
                      <span className="text-sm text-white/70 block mb-2">Primary Font</span>
                      <p className="text-white font-bold text-xl" style={{ fontFamily: brand.typography.primary }}>
                        {brand.typography.primary}
                      </p>
                    </div>
                    <div className="neumorphic-inset p-4 rounded-lg">
                      <span className="text-sm text-white/70 block mb-2">Secondary Font</span>
                      <p className="text-white font-semibold text-lg" style={{ fontFamily: brand.typography.secondary }}>
                        {brand.typography.secondary}
                      </p>
                    </div>
                    <div className="neumorphic-inset p-4 rounded-lg">
                      <span className="text-sm text-white/70 block mb-2">Body Font</span>
                      <p className="text-white" style={{ fontFamily: brand.typography.body }}>
                        {brand.typography.body}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Brand Assets */}
                <div className="neumorphic p-8">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                    <SafeIcon icon={FiStar} />
                    <span>Included Assets</span>
                  </h4>
                  <div className="space-y-3">
                    {brand.assets.map((asset, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-between neumorphic-inset p-3 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center space-x-3">
                          <SafeIcon icon={FiCheck} className="text-green-400" />
                          <span className="text-white/90">{asset}</span>
                        </div>
                        <motion.button
                          className="neumorphic-button p-2 text-white/70 hover:text-white"
                          onClick={() => downloadAsset(asset)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <SafeIcon icon={FiDownload} />
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Assets Preview Grid */}
              <div className="neumorphic p-10">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Brand Assets Preview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {mockAssets.map((asset, index) => (
                    <motion.div
                      key={index}
                      className="neumorphic-inset overflow-hidden group cursor-pointer"
                      whileHover={{ scale: 1.03, y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={asset.preview}
                          alt={asset.name}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <motion.button
                            className="neumorphic-button px-4 py-2 text-white font-semibold flex items-center space-x-2"
                            onClick={() => downloadAsset(asset.name)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <SafeIcon icon={FiDownload} />
                            <span>Download</span>
                          </motion.button>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-white font-semibold text-lg">{asset.name}</h4>
                        <p className="text-white/60 text-sm mt-1">High-resolution template</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'logos' && (
            <motion.div
              key="logos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="neumorphic p-10"
            >
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Logo Variations</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Primary Logo */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="text-xl font-bold text-white">Primary Logo</h4>
                  <div className="logo-container text-center p-8">
                    <img src={brand.logo.primary} alt="Primary Logo" className="max-w-full h-auto mx-auto" style={{ maxHeight: '150px' }} />
                  </div>
                  <div className="flex space-x-4">
                    <motion.button
                      className="flex-1 neumorphic-button py-3 text-white font-semibold"
                      onClick={() => downloadAsset('primary-logo-svg')}
                      whileHover={{ scale: 1.02 }}
                    >
                      <SafeIcon icon={FiDownload} className="mr-2" />
                      SVG
                    </motion.button>
                    <motion.button
                      className="flex-1 neumorphic-button py-3 text-white font-semibold"
                      onClick={() => downloadAsset('primary-logo-png')}
                      whileHover={{ scale: 1.02 }}
                    >
                      <SafeIcon icon={FiDownload} className="mr-2" />
                      PNG
                    </motion.button>
                  </div>
                </motion.div>

                {/* Icon Version */}
                {brand.logo.icon && (
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h4 className="text-xl font-bold text-white">Icon Version</h4>
                    <div className="logo-container text-center p-8">
                      <img src={brand.logo.icon} alt="Icon Logo" className="max-w-full h-auto mx-auto" style={{ maxHeight: '120px' }} />
                    </div>
                    <div className="flex space-x-4">
                      <motion.button
                        className="flex-1 neumorphic-button py-3 text-white font-semibold"
                        onClick={() => downloadAsset('icon-logo-svg')}
                        whileHover={{ scale: 1.02 }}
                      >
                        <SafeIcon icon={FiDownload} className="mr-2" />
                        SVG
                      </motion.button>
                      <motion.button
                        className="flex-1 neumorphic-button py-3 text-white font-semibold"
                        onClick={() => downloadAsset('icon-logo-png')}
                        whileHover={{ scale: 1.02 }}
                      >
                        <SafeIcon icon={FiDownload} className="mr-2" />
                        PNG
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* Additional Variations */}
                {brand.logo.variations && brand.logo.variations.map((variation, index) => (
                  <motion.div
                    key={index}
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <h4 className="text-xl font-bold text-white">Variation {index + 1}</h4>
                    <div className="logo-container text-center p-8">
                      <img src={variation} alt={`Logo Variation ${index + 1}`} className="max-w-full h-auto mx-auto" style={{ maxHeight: '120px' }} />
                    </div>
                    <div className="flex space-x-4">
                      <motion.button
                        className="flex-1 neumorphic-button py-3 text-white font-semibold"
                        onClick={() => downloadAsset(`variation-${index + 1}-svg`)}
                        whileHover={{ scale: 1.02 }}
                      >
                        <SafeIcon icon={FiDownload} className="mr-2" />
                        SVG
                      </motion.button>
                      <motion.button
                        className="flex-1 neumorphic-button py-3 text-white font-semibold"
                        onClick={() => downloadAsset(`variation-${index + 1}-png`)}
                        whileHover={{ scale: 1.02 }}
                      >
                        <SafeIcon icon={FiDownload} className="mr-2" />
                        PNG
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'colors' && (
            <motion.div
              key="colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="neumorphic p-10"
            >
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Color Palette</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {brand.colorPalette.map((color, index) => (
                  <motion.div
                    key={index}
                    className="neumorphic-inset p-8 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <motion.div
                      className="w-32 h-32 rounded-xl mx-auto mb-6 border-4 border-white/20 shadow-lg"
                      style={{ backgroundColor: color }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    />
                    <h4 className="text-white font-bold text-xl mb-2">Color {index + 1}</h4>
                    <p className="text-white/80 text-2xl font-mono mb-4">{color}</p>
                    <div className="flex space-x-2">
                      <motion.button
                        className="flex-1 neumorphic-button py-2 text-white text-sm font-semibold"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => copyToClipboard(color, `detailed-${index}`)}
                      >
                        <SafeIcon icon={copiedColor === `detailed-${index}` ? FiCheck : FiCopy} className="mr-1" />
                        {copiedColor === `detailed-${index}` ? 'Copied!' : 'Copy'}
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Color Usage Guidelines */}
              <div className="mt-12 neumorphic-inset p-8">
                <h4 className="text-2xl font-bold text-white mb-6">Usage Guidelines</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3">Primary Color</h5>
                    <p className="text-white/70">Use for main brand elements, logos, and primary calls-to-action. This should be the most prominent color in your brand.</p>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3">Secondary Colors</h5>
                    <p className="text-white/70">Use for accents, highlights, and supporting elements. These colors complement your primary color and add visual interest.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'typography' && (
            <motion.div
              key="typography"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="neumorphic p-10"
            >
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Typography System</h3>
              <div className="space-y-10">
                {/* Primary Font */}
                <div className="neumorphic-inset p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-2xl font-bold text-white">Primary Font: {brand.typography.primary}</h4>
                    <motion.button
                      className="neumorphic-button px-4 py-2 text-white text-sm"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => copyToClipboard(brand.typography.primary, 'primary-font')}
                    >
                      <SafeIcon icon={copiedColor === 'primary-font' ? FiCheck : FiCopy} className="mr-1" />
                      {copiedColor === 'primary-font' ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>
                  <div className="space-y-6">
                    <p className="text-5xl text-white font-bold" style={{ fontFamily: brand.typography.primary }}>
                      {brand.companyName}
                    </p>
                    <p className="text-3xl text-white/90" style={{ fontFamily: brand.typography.primary }}>
                      Heading Example
                    </p>
                    <p className="text-xl text-white/80" style={{ fontFamily: brand.typography.primary }}>
                      Subheading and Important Text
                    </p>
                    <p className="text-lg text-white/70" style={{ fontFamily: brand.typography.primary }}>
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    </p>
                  </div>
                </div>

                {/* Secondary Font */}
                <div className="neumorphic-inset p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-2xl font-bold text-white">Secondary Font: {brand.typography.secondary}</h4>
                    <motion.button
                      className="neumorphic-button px-4 py-2 text-white text-sm"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => copyToClipboard(brand.typography.secondary, 'secondary-font')}
                    >
                      <SafeIcon icon={copiedColor === 'secondary-font' ? FiCheck : FiCopy} className="mr-1" />
                      {copiedColor === 'secondary-font' ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>
                  <div className="space-y-6">
                    <p className="text-4xl text-white font-semibold" style={{ fontFamily: brand.typography.secondary }}>
                      Elegant & Professional
                    </p>
                    <p className="text-2xl text-white/90" style={{ fontFamily: brand.typography.secondary }}>
                      Secondary Headings
                    </p>
                    <p className="text-lg text-white/80" style={{ fontFamily: brand.typography.secondary }}>
                      The quick brown fox jumps over the lazy dog
                    </p>
                    <p className="text-base text-white/70" style={{ fontFamily: brand.typography.secondary }}>
                      abcdefghijklmnopqrstuvwxyz 0123456789
                    </p>
                  </div>
                </div>

                {/* Body Font */}
                <div className="neumorphic-inset p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-2xl font-bold text-white">Body Font: {brand.typography.body}</h4>
                    <motion.button
                      className="neumorphic-button px-4 py-2 text-white text-sm"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => copyToClipboard(brand.typography.body, 'body-font')}
                    >
                      <SafeIcon icon={copiedColor === 'body-font' ? FiCheck : FiCopy} className="mr-1" />
                      {copiedColor === 'body-font' ? 'Copied!' : 'Copy'}
                    </motion.button>
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg text-white/90" style={{ fontFamily: brand.typography.body }}>
                      Perfect for body text and paragraphs
                    </p>
                    <p className="text-base text-white/80" style={{ fontFamily: brand.typography.body }}>
                      This font ensures excellent readability across all platforms and devices. Use it for long-form content, descriptions, and any text that users will read for extended periods.
                    </p>
                    <p className="text-sm text-white/70" style={{ fontFamily: brand.typography.body }}>
                      Small text and captions look great in this typeface
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="neumorphic-button px-10 py-5 text-white font-bold text-lg flex items-center justify-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
          >
            <SafeIcon icon={FiEdit3} />
            <span>Customize Further</span>
          </motion.button>
          
          <motion.button
            className="neumorphic-button-primary px-10 py-5 text-white font-bold text-lg flex items-center justify-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => downloadAsset('complete-brand-kit')}
          >
            <SafeIcon icon={FiDownload} />
            <span>Download Complete Kit</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BrandingResult;