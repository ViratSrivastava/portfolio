// src/components/sections/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-primary-600 to-primary-800 text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          src="/assets/images/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white"
        />
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl font-bold mb-4"
        >
          Alex Chen
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl mb-8"
        >
          AI/ML Engineer | GPU Computing Specialist | FinTech Enthusiast
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center space-x-4"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors cursor-pointer"
          >
            Contact Me
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDownIcon className="w-8 h-8 animate-bounce" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;