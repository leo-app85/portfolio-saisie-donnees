/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight, ShieldCheck, Database, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import fallbackPic from '../assets/images/profile_photo_1784193154834.jpg';

export default function Hero() {
  const email = "radoleoleonardo@gmail.com";
  const [profileSrc, setProfileSrc] = useState<string>(fallbackPic);

  useEffect(() => {
    const formats = ['/profile.jpg', '/profile.png', '/profile.jpeg', '/profile.webp'];
    let currentFormatIndex = 0;

    const tryLoadNext = () => {
      if (currentFormatIndex >= formats.length) {
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

  return (
    <section
      id="accueil"
      className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white"
    >
      {/* Subtle Dot Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1" fill="#1F4E5F" opacity="0.15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
        </svg>
      </div>

      {/* Elegant Radial Accents */}
      <div className="absolute top-1/4 right-0 -mr-32 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-32 w-96 h-96 bg-brand-light/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left: Strategic Copy & Core Profile Details */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Identity Badge + Name + Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-4 pb-2"
              id="hero-profile-header"
            >
              <div 
                className="w-14 h-14 rounded-full shrink-0 overflow-hidden shadow-xs border-2 border-slate-100"
              >
                <img 
                  src={profileSrc} 
                  alt="Ainga Leonardo RANDRIAMIARDO" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-0.5">
                <div className="font-sans font-bold text-lg text-slate-900 tracking-tight leading-tight">
                  Ainga Leonardo RANDRIAMIARDO
                </div>
                <div className="font-sans text-xs text-slate-500 font-medium flex flex-wrap items-center gap-x-2">
                  <span>Opérateur de saisie de données • Madagascar</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center space-x-2 bg-[#1F4E5F]/5 border border-[#1F4E5F]/15 px-3.5 py-1.5 rounded-full text-[#1F4E5F] text-xs font-semibold uppercase tracking-wider"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Disponible pour missions freelance</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-tight"
            >
              Saisie de données <br />
              <span className="text-[#1F4E5F]">rigoureuse et fiable</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl"
            >
              Rigoureux et méthodique, à l'aise avec les tableurs et l'organisation d'informations. 
              En développement continu des compétences liées à la saisie de données et aux outils de collecte en ligne.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 text-sm text-slate-500 pt-1"
            >
              <div className="flex items-center space-x-1.5">
                <MapPin size={16} className="text-[#1F4E5F]" />
                <span className="font-medium text-slate-700">Maintirano, Région Melaky, Madagascar</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <ShieldCheck size={16} className="text-emerald-600" />
                <span className="font-medium text-slate-700">Confidentialité & Précision</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href={`mailto:${email}?subject=Prise%20de%20contact%20-%20Saisie%20de%20donn%C3%A9es`}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-[#1F4E5F] hover:bg-[#163a47] text-white font-sans font-semibold text-base shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all duration-150 cursor-pointer"
                id="hero-email-cta"
              >
                <Mail size={18} />
                <span>Me contacter</span>
              </a>
              <button
                onClick={() => {
                  const el = document.getElementById('exemples');
                  if (el) {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elRect = el.getBoundingClientRect().top;
                    const offsetPosition = elRect - bodyRect - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-[#1F4E5F] border border-slate-200 font-sans font-semibold text-base shadow-xs hover:shadow-sm hover:translate-y-[-1px] transition-all duration-150 cursor-pointer"
                id="hero-scroll-cta"
              >
                <span>Voir les exemples</span>
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>

          {/* Hero Right: Highly Polished Simulated Sheet Data & Pipeline Processing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 relative w-full flex justify-center"
          >
            <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden font-mono text-[11px] text-slate-500">
              {/* Window Header */}
              <div className="bg-[#1F4E5F] text-white px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Database size={14} className="text-teal-200" />
                  <span className="font-semibold tracking-wide font-sans text-xs">Traitement_Données.xlsx</span>
                </div>
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300/40"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300/40"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-300"></span>
                </div>
              </div>

              {/* SpreadSheet Stats Header row */}
              <div className="p-4 bg-slate-50 border-b border-slate-100 space-y-3">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white p-2 rounded-lg border border-slate-200/60 shadow-2xs">
                    <span className="block text-[9px] text-slate-400 font-sans uppercase font-bold">Remplissage</span>
                    <span className="block text-xs font-bold text-slate-800 font-mono">100%</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200/60 shadow-2xs">
                    <span className="block text-[9px] text-slate-400 font-sans uppercase font-bold">Taux d'erreur</span>
                    <span className="block text-xs font-bold text-emerald-600 font-mono">0.0%</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200/60 shadow-2xs">
                    <span className="block text-[9px] text-slate-400 font-sans uppercase font-bold">Doublons</span>
                    <span className="block text-xs font-bold text-slate-800 font-mono">Zéro</span>
                  </div>
                </div>

                {/* Simulated Sheet Rows representing clean school demonstrations */}
                <div className="space-y-1.5">
                  <div className="bg-white p-2 rounded border border-slate-100 grid grid-cols-12 gap-1 items-center">
                    <div className="col-span-2 text-slate-400 font-bold">#A1</div>
                    <div className="col-span-5 text-slate-800 font-sans font-semibold">JEAN-PIERRE D.</div>
                    <div className="col-span-3 text-center text-slate-500">3e A</div>
                    <div className="col-span-2 text-right text-emerald-600 font-bold bg-emerald-50 px-1 py-0.5 rounded text-[9px]">PROPRE</div>
                  </div>
                  <div className="bg-white p-2 rounded border border-slate-100 grid grid-cols-12 gap-1 items-center">
                    <div className="col-span-2 text-slate-400 font-bold">#A2</div>
                    <div className="col-span-5 text-slate-800 font-sans font-semibold">MARIE R.</div>
                    <div className="col-span-3 text-center text-slate-500">3e B</div>
                    <div className="col-span-2 text-right text-emerald-600 font-bold bg-emerald-50 px-1 py-0.5 rounded text-[9px]">PROPRE</div>
                  </div>
                  <div className="bg-white p-2 rounded border border-slate-100 grid grid-cols-12 gap-1 items-center">
                    <div className="col-span-2 text-slate-400 font-bold">#A3</div>
                    <div className="col-span-5 text-indigo-600 font-sans font-semibold">=MOYENNE(B2:D2)</div>
                    <div className="col-span-3 text-center text-slate-500">Formule</div>
                    <div className="col-span-2 text-right text-indigo-600 font-bold bg-indigo-50 px-1 py-0.5 rounded text-[9px]">ACTIF</div>
                  </div>
                </div>
              </div>

              {/* Quality Process Logs console inside the graphic */}
              <div className="p-3 bg-slate-900 text-teal-400 text-[10px] space-y-1 h-24 border-t border-slate-800">
                <div className="flex items-center space-x-1.5 text-slate-400">
                  <span>&gt; Saisie de données certifiée</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Validation de la casse et suppression des caractères parasites</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Harmonisation des structures et calculs automatiques d'indicateurs</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
