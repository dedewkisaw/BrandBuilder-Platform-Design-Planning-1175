import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck, FiStar, FiZap, FiCrown } = FiIcons;

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: '',
      icon: FiZap,
      description: 'Perfect for testing the waters',
      features: [
        '1 Brand Kit Generation',
        'Basic Logo Variations',
        'Standard Color Palettes',
        'PNG Downloads',
        'Email Support'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      icon: FiStar,
      description: 'For growing businesses',
      features: [
        '10 Brand Kit Generations',
        'Premium Logo Variations',
        'Custom Color Palettes',
        'Vector & PNG Downloads',
        'Brand Guidelines PDF',
        'Priority Support',
        'Commercial License'
      ],
      buttonText: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      icon: FiCrown,
      description: 'For large organizations',
      features: [
        'Unlimited Brand Kits',
        'Advanced AI Customization',
        'White-label Solutions',
        'API Access',
        'Team Collaboration',
        'Dedicated Account Manager',
        'Custom Integrations',
        '24/7 Premium Support'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 engraved-text font-['Playfair_Display']">
            Choose Your Plan
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Start free, scale as you grow. Every plan includes our core AI-powered 
            branding tools to help you create professional brand identities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative neumorphic p-8 ${
                plan.popular ? 'border-2 border-white/30' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <div className="neumorphic-button px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500">
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 neumorphic-button rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={plan.icon} className="text-2xl text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/70 mb-4">{plan.description}</p>
                
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/70 ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + featureIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 neumorphic-button rounded-full flex items-center justify-center flex-shrink-0">
                      <SafeIcon icon={FiCheck} className="text-sm text-white" />
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                className={`w-full neumorphic-button py-4 text-white font-semibold text-lg ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                    : ''
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-white/70 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <span>✓ Cancel anytime</span>
            <span>✓ No setup fees</span>
            <span>✓ 30-day money-back guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;