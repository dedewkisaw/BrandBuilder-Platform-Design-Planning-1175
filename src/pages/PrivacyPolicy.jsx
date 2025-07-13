import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiLock, FiEye, FiUserCheck } = FiIcons;

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: FiUserCheck,
      content: [
        "Personal information you provide when creating an account (name, email, company details)",
        "Brand information and preferences you input during the brand creation process",
        "Usage data and analytics to improve our services",
        "Payment information processed securely through our payment partners"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: FiEye,
      content: [
        "To provide and improve our brand generation services",
        "To communicate with you about your account and our services",
        "To process payments and prevent fraud",
        "To analyze usage patterns and enhance user experience"
      ]
    },
    {
      title: "Information Sharing",
      icon: FiShield,
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "We may share information with trusted service providers who assist in our operations",
        "We may disclose information when required by law or to protect our rights",
        "Anonymous, aggregated data may be shared for research and improvement purposes"
      ]
    },
    {
      title: "Data Security",
      icon: FiLock,
      content: [
        "We implement industry-standard security measures to protect your data",
        "All data transmission is encrypted using SSL/TLS protocols",
        "Regular security audits and updates are performed",
        "Access to personal information is restricted to authorized personnel only"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-6 engraved-text font-['Playfair_Display']">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/80">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="text-white/60 mt-4">
            Last updated: January 2024
          </div>
        </motion.div>

        <motion.div
          className="neumorphic p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-white/80 leading-relaxed">
            BrandBuilder is committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use our 
            AI-powered brand generation platform. By using our services, you consent to the data practices described in this policy.
          </p>
        </motion.div>

        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            className="neumorphic p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 neumorphic-button rounded-full flex items-center justify-center">
                <SafeIcon icon={section.icon} className="text-xl text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">{section.title}</h2>
            </div>
            <ul className="space-y-3">
              {section.content.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start space-x-3 text-white/80">
                  <span className="text-purple-400 mt-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        <motion.div
          className="neumorphic p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
          <div className="text-white/80 space-y-4">
            <p>You have the right to:</p>
            <ul className="space-y-2 ml-4">
              <li>• Access the personal information we hold about you</li>
              <li>• Request correction of inaccurate or incomplete information</li>
              <li>• Request deletion of your personal information</li>
              <li>• Object to processing of your personal information</li>
              <li>• Request restriction of processing your personal information</li>
              <li>• Data portability (receive your data in a structured format)</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="neumorphic p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-white/80 mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="space-y-2 text-white/70">
            <p>Email: privacy@brandbuilder.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Innovation Drive, San Francisco, CA 94105</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;