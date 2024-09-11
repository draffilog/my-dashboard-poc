import React from 'react';
import LandingLayout from '../components/LandingLayout';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import '../src/app/landing.css'; // Import the landing-specific CSS
import { NextPage } from 'next';

const LandingPage: NextPage = () => {
  return (
    <LandingLayout>
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center py-6 px-10 border-b border-gray-200">
        <div className="text-2xl font-bold">tokenize.io</div>
        <div className="flex space-x-8">
          <a href="/stablecoins" className="text-gray-700 hover:text-gray-900">Dashboard</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Research Blog</a>
        </div>
        <a href="/stablecoins" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900">Launch Dashboard</a>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between container mx-auto py-24 px-10">
        <motion.div 
          className="text-left lg:w-1/2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-bold leading-tight">
            All-in-One Platform for RWA Retail & Issuers
          </h1>
          <p className="text-xl text-gray-600 mt-6">
            Simplifying access to tokenized real-world assets for investors and issuers alike.
          </p>
          <div className="mt-8">
            <a href="/stablecoins" className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg text-lg hover:bg-gray-900">
              Launch Dashboard <ArrowRightIcon className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img src="https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/nasscom%20asset.png?itok=9P9DaBlh" alt="Tokenized assets" className="rounded-lg shadow-lg w-full" />
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-gray-100 py-24">
        <div className="container mx-auto text-center px-10">
          <h2 className="text-3xl font-bold">Why RWA One Stop?</h2>
          <p className="text-lg text-gray-600 mt-4">
            We provide a comprehensive and transparent platform for managing and investing in tokenized real-world assets.
          </p>
        </div>
      </section>
    </LandingLayout>
  );
};

LandingPage.useLayout = "landing"; // Ensure this line is included

export default LandingPage;

