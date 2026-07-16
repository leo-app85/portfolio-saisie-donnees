/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Settings, CheckSquare, RefreshCw, Cpu, Star, Layers, Check } from 'lucide-react';
import { motion } from 'motion/react';

export default function Skills() {
  const skillsList = [
    {
      title: "Saisie de données rapide et fiable",
      desc: "Maîtrise complète de la saisie d'informations complexes, de tableaux, d'états d'inventaire ou de relevés administratifs sur Excel et Google Sheets.",
      status: "Actif",
      details: ["Formules fondamentales", "Mise en forme conditionnelle", "Tri & Filtres personnalisés"]
    },
    {
      title: "Vérification et nettoyage de données",
      desc: "Contrôle qualité rigoureux pour corriger les formats incohérents, repérer les fautes de frappe et éliminer les doublons perturbateurs.",
      status: "Actif",
      details: ["Détection de doublons", "Validation des numéros et adresses", "Unification de casse (UPPER/lower)"]
    },
    {
      title: "Organisation de fichiers et classement",
      desc: "Méthodologie stricte de catalogage numérique, de renommage de fichiers et de structuration d'archives documentaires.",
      status: "Actif",
      details: ["Classement standardisé", "Indexation thématique", "Archivage cloud sécurisé"]
    },
    {
      title: "Notions de bases de données (SQL)",
      desc: "En cours de perfectionnement actif sur la manipulation de tables relationnelles et l'écriture de requêtes de sélection fondamentales.",
      status: "En cours",
      details: ["Requêtes SELECT simples", "Filtres WHERE & ORDER BY", "Jointures de base"]
    },
    {
      title: "Collecte web & Formulaires en ligne",
      desc: "Déploiement et configuration de formulaires de collecte de données (Google Forms) pour rationaliser les entrées d'informations.",
      status: "En cours",
      details: ["Google Forms", "Vérification des saisies", "Intégration sheets automatique"]
    },
    {
      title: "Soft Skills Clés",
      desc: "Autonomie de travail, sens inné des responsabilités, et respect absolu et inconditionnel des délais convenus.",
      status: "Actif",
      details: ["Rigueur extrême", "Grande autonomie", "Respect strict des délais"]
    }
  ];

  const tools = [
    { name: "MICROSOFT EXCEL", role: "Tableurs avancés (formules, graphiques, tri)", level: "90%" },
    { name: "GOOGLE SHEETS", role: "Collecte collaborative de données", level: "90%" },
    { name: "GOOGLE DOCS", role: "Traitement de texte, rapports, formulaires", level: "85%" },
    { name: "CANVA", role: "Mise en forme esthétique de documents", level: "70%" },
    { name: "CHATGPT / ASSISTANCE IA", role: "Optimisation de process, correction, rédaction", level: "80%" }
  ];

  return (
    <section id="competences" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center space-x-1.5 text-[#1F4E5F]">
            <Settings size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Mon Expertise</span>
          </div>
          <h2 className="font-sans font-bold text-3xl text-slate-900 tracking-tight">
            Compétences Saisie & Écosystème d'Outils
          </h2>
          <div className="w-12 h-1 bg-[#1F4E5F] mx-auto rounded mt-2" />
        </div>

        {/* 2-Column Grid: Left Skills Cards, Right Tools Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Grid: Core Competencies (6 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillsList.map((skill, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl border border-slate-200/80 p-5 flex flex-col justify-between shadow-2xs hover:border-[#1F4E5F]/30 hover:shadow-sm transition-all duration-150"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    {skill.status === "Actif" ? (
                      <div className="w-6 h-6 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <CheckSquare size={13} />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                        <RefreshCw size={13} className="animate-spin-slow" />
                      </div>
                    )}
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                      skill.status === "Actif" 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                        : 'bg-amber-50 text-amber-700 border-amber-100'
                    }`}>
                      {skill.status === "Actif" ? "Actif" : "En cours"}
                    </span>
                  </div>

                  <h4 className="font-sans font-bold text-sm text-slate-900 leading-tight pt-1">
                    {skill.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-normal font-sans">
                    {skill.desc}
                  </p>
                </div>

                {/* Sub-bullets detail */}
                <div className="pt-3 mt-3 border-t border-slate-100/80 space-y-1">
                  {skill.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5 text-[10px] text-slate-600">
                      <span className="w-1 h-1 bg-[#1F4E5F] rounded-full" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Stack & Tools Progress (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-2xs">
              <div className="flex items-center space-x-2 mb-6">
                <Cpu size={18} className="text-[#1F4E5F]" />
                <h3 className="font-sans font-bold text-sm text-slate-900 uppercase tracking-wider">
                  Outils & Stack logicielle
                </h3>
              </div>

              {/* Tools row progress sliders */}
              <div className="space-y-6">
                {tools.map((tool, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="font-sans font-bold text-xs text-slate-800 tracking-tight block">
                          {tool.name}
                        </span>
                        <span className="text-[10px] text-slate-400 block font-sans">
                          {tool.role}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-[#1F4E5F] font-mono">
                        {tool.level}
                      </span>
                    </div>
                    {/* Progress indicator */}
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-[#1F4E5F] h-1.5 rounded-full transition-all duration-300"
                        style={{ width: tool.level }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Extra stack disclaimer */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center space-x-2 text-slate-400 text-[10px]">
                <Star size={12} className="text-yellow-500 fill-yellow-500 shrink-0" />
                <span>Mise à jour régulière de la maîtrise des outils d'Intelligence Artificielle de productivité.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
