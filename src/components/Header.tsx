/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import fallbackPic from '../assets/images/profile_photo_1784193154834.jpg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [profileSrc, setProfileSrc] = useState<string>(fallbackPic);

  useEffect(() => {
    // Try to load user's real uploaded photo first
    const formats = ['/profile.jpg', '/profile.png', '/profile.jpeg', '/profile.webp'];
    let currentFormatIndex = 0;

    const tryLoadNext = () => {
      if (currentFormatIndex >= formats.length) {
        // Fallback to our compiled placeholder image
        setProfileSrc(fallbackPic);
        return;
      }

      const testSrc = formats[currentFormatIndex];
      const img = new Image();
      img.src = testSrc;
      img.onload = () => {
        setProfileSrc(testSrc);
      };
      img.onerror = () => {
        currentFormatIndex++;
        tryLoadNext();
      };
    };

    tryLoadNext();
  }, []);

  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'apropos', label: 'À propos' },
    { id: 'competences', label: 'Compétences' },
    { id: 'exemples', label: 'Exemples' },
    { id: 'experience', label: 'Expérience & Formation' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 bg-white/95 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-4 sm:px-8 transition-all duration-250`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center h-full">
        {/* Logo / Brand Name */}
        <button
          onClick={() => scrollToSection('accueil')}
          className="flex items-center focus:outline-none group"
          id="nav-logo"
        >
          <img
            src={profileSrc}
            alt="AR"
            referrerPolicy="no-referrer"
            className="w-10 h-10 rounded-full object-cover shadow-xs transition-transform duration-200 group-hover:scale-105"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-xs font-bold uppercase tracking-wider transition-colors duration-150 focus:outline-none cursor-pointer ${
                activeSection === item.id
                  ? 'text-[#1F4E5F]'
                  : 'text-slate-500 hover:text-[#1F4E5F]'
              }`}
              id={`nav-item-${item.id}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2.5 rounded-full bg-[#1F4E5F] hover:bg-[#163a47] text-white font-sans text-xs font-bold uppercase tracking-wider transition-colors duration-150 shadow-xs focus:outline-none cursor-pointer"
            id="nav-btn-contact"
          >
            Me contacter
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full text-slate-600 hover:text-[#1F4E5F] hover:bg-slate-50 focus:outline-none"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-100 shadow-sm overflow-hidden z-40"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 font-sans text-sm font-bold uppercase tracking-wider transition-colors ${
                    activeSection === item.id
                      ? 'text-[#1F4E5F]'
                      : 'text-slate-500 hover:text-[#1F4E5F]'
                  }`}
                  id={`mobile-nav-item-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-center py-3 rounded-full bg-[#1F4E5F] hover:bg-[#163a47] text-white font-sans text-sm font-bold uppercase tracking-wider shadow-xs transition-colors"
                  id="mobile-nav-btn-contact"
                >
                  Me contacter
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
