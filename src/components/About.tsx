/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { User, BookOpen, GraduationCap, ShieldAlert, BadgeCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="apropos" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center space-x-1.5 text-[#1F4E5F]">
            <User size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">À Propos de Moi</span>
          </div>
          <h2 className="font-sans font-bold text-3xl text-slate-900 tracking-tight">
            Rigueur de gestion & Rigueur pédagogique
          </h2>
          <div className="w-12 h-1 bg-[#1F4E5F] mx-auto rounded mt-2" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Block: Narrative presentation */}
          <div className="space-y-6 flex flex-col justify-center text-left">
            <h3 className="font-sans font-bold text-xl text-slate-900 leading-snug">
              Qui suis-je ? Un professionnel méthodique et autonome
            </h3>
            
            <p className="text-slate-600 leading-relaxed text-sm">
              Fort d'un parcours universitaire axé sur la <strong>comptabilité et la finance</strong> (Licence en Gestion), j'ai développé une grande aisance avec les chiffres, l'analyse de données financières et la manipulation de structures tabulaires complexes.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm">
              En parallèle, mon expérience d'<strong>enseignant scientifique</strong> à Maintirano m'a appris à organiser des données académiques avec méthode, à concevoir des supports de cours structurés et à assurer un suivi sans faille des dossiers administratifs. Cette double expertise me permet d'aborder la saisie de données sous l'angle de la précision absolue et de la propreté absolue de chaque enregistrement.
            </p>

            {/* Core Values badges */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="block font-bold text-[#1F4E5F] text-xs uppercase tracking-wider mb-1">
                  1. Rigueur
                </span>
                <span className="text-[11px] text-slate-500 leading-normal">
                  Chaque chiffre, virgule ou symbole est saisi avec une attention chirurgicale aux détails.
                </span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="block font-bold text-[#1F4E5F] text-xs uppercase tracking-wider mb-1">
                  2. Confidentialité
                </span>
                <span className="text-[11px] text-slate-500 leading-normal">
                  Respect strict de la confidentialité et de la sécurité de toutes vos informations de classe ou professionnelles.
                </span>
              </div>
            </div>
          </div>

          {/* Right Block: Double Timeline/Credentials Block */}
          <div className="flex flex-col gap-6 justify-between bg-slate-50/50 rounded-2xl border border-slate-200/60 p-6 md:p-8 text-left">
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono mb-4">
                PARCOURS ACADÉMIQUE
              </h4>
              
              <div className="space-y-6">
                {/* Degree 1 */}
                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#1F4E5F]/5 border border-[#1F4E5F]/15 flex items-center justify-center text-[#1F4E5F] shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-xs text-slate-900">
                      Licence en Gestion des Entreprises
                    </h5>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Spécialité : Comptabilité-Finance (Université de Madagascar)
                    </p>
                    <p className="text-[10px] text-[#1F4E5F] font-semibold mt-0.5">
                      Rigueur mathématique, budgets, analyses d'états financiers.
                    </p>
                  </div>
                </div>

                {/* Training 2 */}
                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-xs text-slate-900">
                      Certificat en Saisie & Assistance Virtuelle
                    </h5>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Freels.io — Promotion 2026
                    </p>
                    <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                      Maîtrise des process de collecte, nettoyage de fichiers, conformité.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Commitment Panel */}
            <div className="border-t border-slate-200 pt-6 mt-6 bg-[#1F4E5F] text-white p-4 rounded-xl flex items-start space-x-3">
              <BadgeCheck size={20} className="text-teal-200 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-sans font-bold text-xs uppercase tracking-wide text-teal-200">
                  Engagement Qualité Zéro Doublon
                </h5>
                <p className="text-[11px] text-teal-100/90 leading-relaxed mt-1">
                  Je n'importe jamais de données brutes sans d'abord exécuter des filtres de détection d'erreurs, de casse incohérente, ou de lignes dupliquées pour assurer l'intégrité de vos rapports.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
