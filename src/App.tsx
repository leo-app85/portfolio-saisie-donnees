/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Examples from './components/Examples';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [profilePic, setProfilePic] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio_profile_pic');
      if (saved) {
        setProfilePic(saved);
      }
    } catch (error) {
      console.error('Error reading profile picture from localStorage:', error);
    }
  }, []);

  const handleProfilePicChange = (newPic: string | null) => {
    setProfilePic(newPic);
    try {
      if (newPic) {
        localStorage.setItem('portfolio_profile_pic', newPic);
      } else {
        localStorage.removeItem('portfolio_profile_pic');
      }
    } catch (error) {
      console.error('Error writing profile picture to localStorage:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-[#1F4E5F]/10 selection:text-[#1F4E5F]">
      {/* Translucent Glass Header */}
      <Header profilePic={profilePic} />

      {/* Main Sections Stack */}
      <main className="w-full">
        {/* Hero Section */}
        <Hero profilePic={profilePic} onProfilePicChange={handleProfilePicChange} />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Interactive Case Studies / Examples Section */}
        <Examples />

        {/* Experience & Education Section */}
        <Experience />

        {/* Contact Form Section */}
        <Contact />
      </main>

      {/* Premium Footer */}
      <Footer />
    </div>
  );
}
