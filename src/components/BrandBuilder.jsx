import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiType, FiPalette, FiZap, FiArrowRight, FiCheck, FiTarget, FiTrendingUp } = FiIcons;

const BrandBuilder = ({ onBrandGenerated }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    style: '',
    colors: [],
    description: '',
    targetAudience: '',
    keywords: []
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Education', 'Retail',
    'Food & Beverage', 'Real Estate', 'Consulting', 'Creative', 'Other'
  ];

  const styles = [
    { name: 'Modern', desc: 'Clean, minimalist, contemporary', icon: '🎯' },
    { name: 'Classic', desc: 'Timeless, elegant, traditional', icon: '👑' },
    { name: 'Bold', desc: 'Vibrant, energetic, attention-grabbing', icon: '⚡' },
    { name: 'Organic', desc: 'Natural, flowing, eco-friendly', icon: '🌿' },
    { name: 'Tech', desc: 'Futuristic, digital, innovative', icon: '🚀' },
    { name: 'Luxury', desc: 'Premium, sophisticated, exclusive', icon: '💎' }
  ];

  const colorPalettes = [
    { name: 'Ocean Breeze', colors: ['#0EA5E9', '#0284C7', '#0369A1'], mood: 'Trust & Reliability' },
    { name: 'Forest Deep', colors: ['#059669', '#047857', '#065F46'], mood: 'Growth & Nature' },
    { name: 'Sunset Glow', colors: ['#F59E0B', '#D97706', '#B45309'], mood: 'Energy & Warmth' },
    { name: 'Royal Purple', colors: ['#8B5CF6', '#7C3AED', '#6D28D9'], mood: 'Luxury & Creativity' },
    { name: 'Rose Garden', colors: ['#F43F5E', '#E11D48', '#BE123C'], mood: 'Passion & Love' },
    { name: 'Charcoal Elite', colors: ['#6B7280', '#4B5563', '#374151'], mood: 'Professional & Modern' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    // Simulate AI processing with realistic delays
    await new Promise(resolve => setTimeout(resolve, 4000));
    
    const generatedBrand = {
      ...formData,
      logo: generateAdvancedLogo(formData),
      typography: generateTypography(formData),
      colorPalette: formData.colors.length > 0 ? formData.colors : colorPalettes[0].colors,
      assets: generateAssets(formData),
      brandGuidelines: generateBrandGuidelines(formData),
      socialMediaKit: generateSocialMediaKit(formData)
    };
    
    onBrandGenerated(generatedBrand);
    setIsGenerating(false);
    navigate('/result');
  };

  const generateAdvancedLogo = (data) => {
    const baseUrl = 'https://ui-avatars.com/api/';
    const companyInitials = data.companyName.split(' ').map(word => word[0]).join('').toUpperCase();
    const primaryColor = data.colors.length > 0 ? data.colors[0].replace('#', '') : '8B5CF6';
    const secondaryColor = data.colors.length > 1 ? data.colors[1].replace('#', '') : '7C3AED';
    
    return {
      primary: `${baseUrl}?name=${encodeURIComponent(data.companyName)}&size=400&background=${primaryColor}&color=ffffff&font-size=0.4&bold=true&format=svg`,
      icon: `${baseUrl}?name=${companyInitials}&size=200&background=${secondaryColor}&color=ffffff&font-size=0.6&bold=true&format=svg`,
      horizontal: `${baseUrl}?name=${encodeURIComponent(data.companyName)}&size=600x200&background=${primaryColor}&color=ffffff&font-size=0.3&bold=true&format=svg`,
      variations: [
        `${baseUrl}?name=${companyInitials}&size=150&background=transparent&color=${primaryColor}&font-size=0.8&bold=true&format=svg`,
        `${baseUrl}?name=${encodeURIComponent(data.companyName)}&size=500x150&background=ffffff&color=${primaryColor}&font-size=0.35&bold=true&format=svg`,
        `${baseUrl}?name=${companyInitials}&size=100&background=${primaryColor}&color=ffffff&font-size=0.9&bold=true&rounded=true&format=svg`
      ]
    };
  };

  const generateTypography = (data) => {
    const fontPairs = {
      'Modern': { primary: 'Inter', secondary: 'Poppins', body: 'System UI' },
      'Classic': { primary: 'Playfair Display', secondary: 'Crimson Text', body: 'Georgia' },
      'Bold': { primary: 'Montserrat', secondary: 'Oswald', body: 'Open Sans' },
      'Organic': { primary: 'Comfortaa', secondary: 'Nunito', body: 'Lato' },
      'Tech': { primary: 'Orbitron', secondary: 'Exo 2', body: 'Roboto' },
      'Luxury': { primary: 'Cormorant Garamond', secondary: 'Lora', body: 'Source Sans Pro' }
    };
    
    return fontPairs[data.style] || fontPairs['Modern'];
  };

  const generateAssets = (data) => [
    'Logo Package (SVG, PNG, JPG)',
    'Business Card Templates',
    'Letterhead Design',
    'Social Media Kit',
    'Brand Guidelines PDF',
    'Email Signature',
    'Website Header Graphics',
    'Presentation Template'
  ];

  const generateBrandGuidelines = (data) => ({
    brandStory: `${data.companyName} represents ${data.description}. Our brand embodies ${data.style.toLowerCase()} values and connects with ${data.targetAudience}.`,
    brandValues: ['Innovation', 'Quality', 'Trust', 'Excellence'],
    logoUsage: 'Maintain clear space equal to the height of the logo. Never distort or alter colors.',
    voiceTone: data.style === 'Bold' ? 'Energetic and Confident' : data.style === 'Classic' ? 'Professional and Refined' : 'Modern and Approachable'
  });

  const generateSocialMediaKit = (data) => [
    'Facebook Cover Photo',
    'Instagram Story Templates',
    'LinkedIn Banner',
    'Twitter Header',
    'YouTube Thumbnail',
    'Instagram Post Templates'
  ];

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.companyName.trim() !== '' && formData.description.trim() !== '';
      case 2: return formData.industry !== '';
      case 3: return formData.style !== '';
      case 4: return true;
      default: return false;
    }
  };

  return (
    <section id="brand-builder" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 engraved-text font-['Playfair_Display']">
            Build Your Brand
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Follow our intelligent process to generate your complete professional branding kit
          </p>
        </motion.div>

        {/* Enhanced Progress Bar */}
        <motion.div
          className="neumorphic-inset p-6 mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-between items-center relative">
            <div className="absolute top-5 left-0 right-0 h-1 bg-white/10 rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${(currentStep - 1) * 33.33}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            {[1, 2, 3, 4].map((step) => (
              <motion.div
                key={step}
                className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg neumorphic-button ${
                  step <= currentStep ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'text-white/40'
                }`}
                whileHover={{ scale: 1.1 }}
                animate={{ scale: step === currentStep ? 1.1 : 1 }}
              >
                {step < currentStep ? (
                  <SafeIcon icon={FiCheck} />
                ) : (
                  step
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-between mt-4 text-sm text-white/70">
            <span>Company Info</span>
            <span>Industry</span>
            <span>Style</span>
            <span>Colors</span>
          </div>
        </motion.div>

        {/* Enhanced Form Steps */}
        <div className="neumorphic p-10">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center mb-10">
                  <motion.div
                    className="w-20 h-20 neumorphic-button rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <SafeIcon icon={FiType} className="text-3xl text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-3">Company Information</h3>
                  <p className="text-white/70 text-lg">Tell us about your company vision</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-white/80 font-semibold mb-3 text-lg">Company Name *</label>
                    <input
                      type="text"
                      className="w-full neumorphic-input px-6 py-4 text-white placeholder-white/50 bg-transparent border-none outline-none text-lg"
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 font-semibold mb-3 text-lg">Target Audience</label>
                    <input
                      type="text"
                      className="w-full neumorphic-input px-6 py-4 text-white placeholder-white/50 bg-transparent border-none outline-none text-lg"
                      placeholder="Who are your customers?"
                      value={formData.targetAudience}
                      onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 font-semibold mb-3 text-lg">Company Description *</label>
                  <textarea
                    className="w-full neumorphic-input px-6 py-4 text-white placeholder-white/50 bg-transparent border-none outline-none h-32 resize-none text-lg"
                    placeholder="Describe what your company does and its mission"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                  />
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center mb-10">
                  <motion.div
                    className="w-20 h-20 neumorphic-button rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <SafeIcon icon={FiTarget} className="text-3xl text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-3">Industry Selection</h3>
                  <p className="text-white/70 text-lg">Choose your industry category</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {industries.map((industry, index) => (
                    <motion.button
                      key={industry}
                      className={`neumorphic-button p-6 text-center transition-all duration-500 ${
                        formData.industry === industry 
                          ? 'neumorphic-button-primary text-white' 
                          : 'text-white/70 hover:text-white'
                      }`}
                      onClick={() => handleInputChange('industry', industry)}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="text-lg font-semibold">{industry}</div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center mb-10">
                  <motion.div
                    className="w-20 h-20 neumorphic-button rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <SafeIcon icon={FiTrendingUp} className="text-3xl text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-3">Brand Style</h3>
                  <p className="text-white/70 text-lg">Choose your preferred aesthetic and personality</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {styles.map((style, index) => (
                    <motion.button
                      key={style.name}
                      className={`neumorphic-button p-8 text-left transition-all duration-500 ${
                        formData.style === style.name 
                          ? 'neumorphic-button-primary text-white' 
                          : 'text-white/70 hover:text-white'
                      }`}
                      onClick={() => handleInputChange('style', style.name)}
                      whileHover={{ scale: 1.03, y: -5 }}
                      whileTap={{ scale: 0.97 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="text-3xl mb-3">{style.icon}</div>
                      <div className="font-bold text-xl mb-2">{style.name}</div>
                      <div className="text-sm opacity-80">{style.desc}</div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center mb-10">
                  <motion.div
                    className="w-20 h-20 neumorphic-button rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <SafeIcon icon={FiPalette} className="text-3xl text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-3">Color Palette</h3>
                  <p className="text-white/70 text-lg">Select colors that represent your brand personality</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {colorPalettes.map((palette, index) => (
                    <motion.button
                      key={palette.name}
                      className={`neumorphic-button p-6 transition-all duration-500 ${
                        JSON.stringify(formData.colors) === JSON.stringify(palette.colors)
                          ? 'neumorphic-button-primary' 
                          : 'hover:bg-white/10'
                      }`}
                      onClick={() => handleInputChange('colors', palette.colors)}
                      whileHover={{ scale: 1.03, y: -5 }}
                      whileTap={{ scale: 0.97 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-center space-x-2 mb-4">
                        {palette.colors.map((color, colorIndex) => (
                          <motion.div
                            key={colorIndex}
                            className="w-8 h-8 rounded-full border-2 border-white/30"
                            style={{ backgroundColor: color }}
                            whileHover={{ scale: 1.2 }}
                          />
                        ))}
                      </div>
                      <div className="text-white font-bold text-lg mb-1">{palette.name}</div>
                      <div className="text-white/70 text-sm">{palette.mood}</div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced Navigation Buttons */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/20">
            <motion.button
              className={`neumorphic-button px-8 py-4 text-white font-semibold flex items-center space-x-2 ${
                currentStep === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:text-white'
              }`}
              onClick={prevStep}
              disabled={currentStep === 1}
              whileHover={currentStep > 1 ? { scale: 1.05, x: -5 } : {}}
              whileTap={currentStep > 1 ? { scale: 0.95 } : {}}
            >
              <SafeIcon icon={FiArrowRight} className="rotate-180" />
              <span>Previous</span>
            </motion.button>

            {currentStep < 4 ? (
              <motion.button
                className={`neumorphic-button px-8 py-4 text-white font-semibold flex items-center space-x-2 ${
                  !isStepValid() ? 'opacity-50 cursor-not-allowed' : 'neumorphic-button-primary'
                }`}
                onClick={nextStep}
                disabled={!isStepValid()}
                whileHover={isStepValid() ? { scale: 1.05, x: 5 } : {}}
                whileTap={isStepValid() ? { scale: 0.95 } : {}}
              >
                <span>Next</span>
                <SafeIcon icon={FiArrowRight} />
              </motion.button>
            ) : (
              <motion.button
                className="neumorphic-button-primary px-10 py-4 text-white font-bold text-lg flex items-center space-x-3"
                onClick={handleGenerate}
                disabled={isGenerating}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{isGenerating ? 'Generating...' : 'Generate Brand'}</span>
                <SafeIcon icon={FiZap} />
              </motion.button>
            )}
          </div>
        </div>

        {/* Enhanced Loading Animation */}
        <AnimatePresence>
          {isGenerating && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-xl flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="neumorphic p-12 text-center max-w-lg mx-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <div className="loading-spinner mx-auto mb-8"></div>
                <motion.h3 
                  className="text-2xl font-bold text-white mb-4"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Creating Your Brand
                </motion.h3>
                <motion.p 
                  className="text-white/70 text-lg"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Our AI is crafting your complete professional branding kit with logos, colors, typography, and brand guidelines...
                </motion.p>
                
                <div className="mt-8 space-y-2">
                  {['Analyzing brand personality...', 'Generating logo variations...', 'Creating color harmonies...', 'Finalizing brand assets...'].map((text, index) => (
                    <motion.div
                      key={index}
                      className="text-white/60 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 1 }}
                    >
                      {text}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BrandBuilder;