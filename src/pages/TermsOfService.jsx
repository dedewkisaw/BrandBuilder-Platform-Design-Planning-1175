import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFileText, FiUsers, FiDollarSign, FiAlertTriangle } = FiIcons;

const TermsOfService = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: FiFileText,
      content: [
        "By accessing and using BrandBuilder, you accept and agree to be bound by these Terms of Service",
        "If you do not agree to these terms, you may not use our services",
        "We reserve the right to modify these terms at any time with notice",
        "Your continued use of the service constitutes acceptance of any changes"
      ]
    },
    {
      title: "User Responsibilities",
      icon: FiUsers,
      content: [
        "You must provide accurate and complete information when creating an account",
        "You are responsible for maintaining the confidentiality of your account credentials",
        "You agree not to use the service for any unlawful or prohibited activities",
        "You must respect intellectual property rights of others when using our platform"
      ]
    },
    {
      title: "Payment Terms",
      icon: FiDollarSign,
      content: [
        "Subscription fees are billed in advance on a monthly or annual basis",
        "All payments are non-refundable except as required by law",
        "You may cancel your subscription at any time through your account settings",
        "Price changes will be communicated 30 days in advance"
      ]
    },
    {
      title: "Limitations of Liability",
      icon: FiAlertTriangle,
      content: [
        "Our service is provided 'as is' without warranties of any kind",
        "We are not liable for any indirect, incidental, or consequential damages",
        "Our total liability is limited to the amount paid for the service in the past 12 months",
        "We do not guarantee uninterrupted or error-free service"
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
            Terms of Service
          </h1>
          <p className="text-xl text-white/80">
            Please read these terms carefully before using our services.
          </p>
          <div className="text-white/60 mt-4">
            Last updated: January 2024
          </div>
        </motion.div>

        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            className="neumorphic p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
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
          className="neumorphic p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
          <p className="text-white/80 mb-4">
            For questions about these Terms of Service, please contact us:
          </p>
          <div className="space-y-2 text-white/70">
            <p>Email: legal@brandbuilder.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Innovation Drive, San Francisco, CA 94105</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;