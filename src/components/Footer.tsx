/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Database, Mail, Phone, MapPin, ChevronUp } from 'lucide-react';

export default function Footer() {
  const email = "radoleoleonardo@gmail.com";
  const phone = "+261 34 73 486 99";

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elRect = el.getBoundingClientRect().top;
      const offsetPosition = elRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F4E5F] text-white pt-16 pb-12 border-t border-[#163a47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-start text-left">
          
          {/* Brand/Identity block */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-white/10 rounded-lg text-teal-200">
                <Database size={16} />
              </div>
              <div>
                <span className="font-sans font-bold text-base block tracking-tight text-white leading-tight">
                  Ainga Leonardo RANDRIAMIARDO
                </span>
                <span className="font-sans text-xs text-teal-200 font-medium block mt-0.5">
                  Opérateur de saisie de données freelance
                </span>
              </div>
            </div>
            <p className="font-sans text-xs text-teal-100/70 leading-relaxed max-w-sm">
              Saisie de données rigoureuse et fiable à Maintirano, Madagascar. 
              Garantie d'organisation, de structuration et de conformité pour vos tableurs, formulaires et bases de données.
            </p>
          </div>

          {/* Quick links block */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-teal-200">
              Raccourcis de navigation
            </h4>
            <div className="flex flex-col space-y-2 font-sans text-xs">
              <button onClick={() => scrollToSection('accueil')} className="text-teal-100/80 hover:text-white text-left transition-colors cursor-pointer">
                Accueil
              </button>
              <button onClick={() => scrollToSection('apropos')} className="text-teal-100/80 hover:text-white text-left transition-colors cursor-pointer">
                À propos
              </button>
              <button onClick={() => scrollToSection('competences')} className="text-teal-100/80 hover:text-white text-left transition-colors cursor-pointer">
                Compétences
              </button>
              <button onClick={() => scrollToSection('exemples')} className="text-teal-100/80 hover:text-white text-left transition-colors cursor-pointer">
                Exemples de travail
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-teal-100/80 hover:text-white text-left transition-colors cursor-pointer">
                Expérience & Formation
              </button>
            </div>
          </div>

          {/* Contact details block */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-teal-200">
              Coordonnées & Informations
            </h4>
            <div className="space-y-2.5 font-sans text-xs text-teal-100/80">
              <div className="flex items-center space-x-2">
                <MapPin size={14} className="text-teal-200 shrink-0" />
                <span>Maintirano, Région Melaky, Madagascar</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} className="text-teal-200 shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors font-mono">{email}</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={14} className="text-teal-200 shrink-0" />
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors font-mono">{phone}</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom footer text and back to top button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
          <div className="text-left space-y-0.5">
            <p className="font-sans text-[11px] text-teal-100/60">
              &copy; {currentYear} Ainga Leonardo RANDRIAMIARDO. Tous droits réservés.
            </p>
            <p className="font-sans text-[9px] text-teal-150/40 text-teal-100/40">
              Portfolio professionnel - Opérateur de Saisie de données & Traitement de texte - Maintirano, Madagascar.
            </p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="inline-flex items-center justify-center p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer shadow-soft focus:outline-none"
            title="Retour en haut de page"
            id="btn-scroll-top"
          >
            <ChevronUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
