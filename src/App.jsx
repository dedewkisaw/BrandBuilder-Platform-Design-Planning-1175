import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandBuilder from './components/BrandBuilder';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import BrandingResult from './components/BrandingResult';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import './App.css';

function App() {
  const [currentBrand, setCurrentBrand] = useState(null);

  return (
    <Router>
      <div className="app">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route 
              path="/" 
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Hero />
                  <BrandBuilder onBrandGenerated={setCurrentBrand} />
                  <Gallery />
                  <Pricing />
                  <Footer />
                </motion.div>
              } 
            />
            <Route 
              path="/result" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <BrandingResult brand={currentBrand} />
                  <Footer />
                </motion.div>
              } 
            />
            <Route 
              path="/privacy" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <PrivacyPolicy />
                  <Footer />
                </motion.div>
              } 
            />
            <Route 
              path="/terms" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <TermsOfService />
                  <Footer />
                </motion.div>
              } 
            />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;