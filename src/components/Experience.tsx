/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Briefcase, Calendar, GraduationCap, MapPin, Globe2, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export default function Experience() {
  const languages = [
    { name: "Malgache", level: "Langue maternelle / native", pct: "100%" },
    { name: "Français", level: "Maîtrise professionnelle complète", pct: "85%" },
    { name: "Anglais", level: "Compétences professionnelles opérationnelles", pct: "75%" }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center space-x-1.5 text-[#1F4E5F]">
            <Briefcase size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Expérience & Formation</span>
          </div>
          <h2 className="font-sans font-bold text-3xl text-slate-900 tracking-tight">
            Parcours Professionnel & Académique
          </h2>
          <div className="w-12 h-1 bg-[#1F4E5F] mx-auto rounded mt-2" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch text-left">
          
          {/* Left Column: Experience (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-sans font-bold text-lg text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
              <Briefcase size={18} className="text-[#1F4E5F]" />
              <span>Expérience Professionnelle</span>
            </h3>

            {/* Timeline Item */}
            <div className="relative pl-6 border-l-2 border-[#1F4E5F] space-y-3 py-1">
              {/* Dot indicator */}
              <div className="absolute -left-[6.5px] top-2 w-3.5 h-3.5 bg-white border-2 border-[#1F4E5F] rounded-full" />

              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-sans font-bold text-base text-slate-900 leading-tight">
                  Enseignant Scientifique
                </h4>
                <div className="flex items-center space-x-1.5 text-xs font-mono font-bold bg-[#1F4E5F]/5 border border-[#1F4E5F]/15 text-[#1F4E5F] px-2.5 py-1 rounded-md">
                  <Calendar size={12} />
                  <span>2022 – Présent</span>
                </div>
              </div>

              <div className="text-slate-700 text-xs font-medium">
                Collège de Référence Maintirano — DREN Melaky / CISCO Maintirano, Madagascar
              </div>

              <p className="text-slate-600 text-xs leading-relaxed">
                Au-delà de la transmission pédagogique des sciences physiques et mathématiques, j'assure la gestion administrative rigoureuse des données de l'établissement :
              </p>

              {/* Bullet points */}
              <ul className="space-y-2 text-xs text-slate-600 pl-1 font-sans">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F4E5F] shrink-0 mt-1.5" />
                  <span>
                    <strong>Suivi administratif de haute précision :</strong> Saisie, traitement et organisation des notes, des fiches d'évaluation et des rapports de classe dans les tableurs officiels.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F4E5F] shrink-0 mt-1.5" />
                  <span>
                    <strong>Élaboration de supports pédagogiques :</strong> Saisie, structuration graphique et mise en page d'examens, d'exercices et de documents administratifs propres.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F4E5F] shrink-0 mt-1.5" />
                  <span>
                    <strong>Traitement de gros volumes :</strong> Gestion d'importantes bases de données d'élèves avec un taux d'erreur de zéro doublon.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Formation & Langues (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Academic block */}
            <div className="space-y-4">
              <h3 className="font-sans font-bold text-lg text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <GraduationCap size={18} className="text-[#1F4E5F]" />
                <span>Formation Académique</span>
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-sans font-bold text-xs text-slate-900">
                      Licence en Gestion des Entreprises
                    </h4>
                    <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-mono font-semibold">
                      Comptabilité
                    </span>
                  </div>
                  <p className="text-[11px] text-[#1F4E5F] font-bold font-mono">
                    UNIVERSITÉ DE MADAGASCAR
                  </p>
                  <p className="text-[11px] text-slate-500 leading-normal font-sans">
                    Spécialité Comptabilité-Finance. Apport d'une méthodologie analytique pour la structuration rigoureuse de feuilles de calcul budgétaires et financières.
                  </p>
                </div>
              </div>
            </div>

            {/* Languages block */}
            <div className="space-y-4">
              <h3 className="font-sans font-bold text-lg text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <Globe2 size={18} className="text-[#1F4E5F]" />
                <span>Langues parlées</span>
              </h3>

              <div className="space-y-3">
                {languages.map((l, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-end text-xs">
                      <span className="font-bold text-slate-800">{l.name}</span>
                      <span className="text-slate-500 text-[11px] font-medium">{l.level}</span>
                    </div>
                    {/* Visual bar */}
                    <div className="w-full bg-slate-200 rounded-full h-1">
                      <div 
                        className="bg-[#1F4E5F] h-1 rounded-full" 
                        style={{ width: l.pct }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
