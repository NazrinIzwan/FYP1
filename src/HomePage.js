import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-page"
    >
      <h1>Welcome to Our Cybersecurity Platform</h1>
      <p>Explore our tools and learn more about protecting your digital life.</p>
    </motion.div>
  );
};

export default HomePage;