/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Examples from './components/Examples';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-[#1F4E5F]/10 selection:text-[#1F4E5F]">
      {/* Translucent Glass Header */}
      <Header />

      {/* Main Sections Stack */}
      <main className="w-full">
        {/* Hero Section */}
        <Hero />

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
