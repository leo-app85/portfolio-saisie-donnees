/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Database, AlertCircle, CheckCircle2, FileText, Users, Columns } from 'lucide-react';

export default function Examples() {
  // Local states to toggle Before/After separately for each card
  const [tabCard1, setTabCard1] = useState<'avant' | 'apres'>('avant');
  const [tabCard2, setTabCard2] = useState<'avant' | 'apres'>('avant');
  const [tabCard3, setTabCard3] = useState<'avant' | 'apres'>('avant');

  // --- DATA FOR CARD 1 ---
  const card1Raw = [
    { id: "01", name: "élève 01", t1: "14", t2: "12,5", error: "Casse minuscule, virgule décimale, calcul absent" },
    { id: "02", name: "Élève 01", t1: "14", t2: "12,5", error: "Enregistrement en doublon exact détecté" },
    { id: "03", name: "eleve 02", t1: "09", t2: "08,75", error: "Accents manquants, virgule décimale brute" },
    { id: "04", name: "Élève 03", t1: "11", t2: "", error: "Omission : Note du Trimestre 2 manquante" },
  ];

  const card1Clean = [
    { id: "01", name: "ÉLÈVE 01", t1: "14.00", t2: "12.50", moyenne: "13.25", rank: "1/3", validation: "Casse corrigée, décimale standardisée", formula: "=AVERAGE(C2:D2)" },
    { id: "02", name: "ÉLÈVE 02", t1: "09.00", t2: "08.75", moyenne: "08.88", rank: "3/3", validation: "Accent restauré, doublon nettoyé", formula: "=IF(E3>=10; \"Admis\"; \"Rattrapage\")" },
    { id: "03", name: "ÉLÈVE 03", t1: "11.00", t2: "10.00", moyenne: "10.50", rank: "2/3", validation: "Trimestre 2 complété via registre", formula: "=AVERAGE(C4:D4)" },
  ];

  // --- DATA FOR CARD 2 ---
  const card2Raw = [
    { id: "101", name: "client a", tel: "0347348699", email: "CLIENT.A@MAIL.COM", montant: "150 000 Ar", error: "Format téléphone brut, email en majuscules" },
    { id: "102", name: "Client A", tel: "34 73 486 99", email: "client.a@mail.com", montant: "150000", error: "Doublon de fiche client détecté" },
    { id: "103", name: "CLIENT B", tel: "+261347348600", email: "client.b_at_mail.com", montant: "90000Ar", error: "Séparateur email invalide (_at_)" },
    { id: "104", name: "client C", tel: "034 73 486 11", email: "client.c@mail.com", montant: "120000", error: "Espacement montant, casse de nom incohérente" },
  ];

  const card2Clean = [
    { id: "101", name: "Client A", tel: "+261 34 73 486 99", email: "client.a@mail.com", montant: "150 000 Ar", validation: "Format Tél unifié, Casse corrigée" },
    { id: "102", name: "Client B", tel: "+261 34 73 486 00", email: "client.b@mail.com", montant: "90 000 Ar", validation: "Email corrigé, Doublon supprimé" },
    { id: "103", name: "Client C", tel: "+261 34 73 486 11", email: "client.c@mail.com", montant: "120 000 Ar", validation: "Montant unifié, Casse standardisée" },
  ];

  // --- DATA FOR CARD 3 ---
  const card3Raw = [
    { id: "301", classe: "3eme a", name: "élève a", d1: "12", d2: "14,5", error: "Casse classe incorrecte, décimale virgule" },
    { id: "302", classe: "3ème B", name: "Élève B", d1: "08", d2: "10", error: "Inconsistance orthographe classe (3ème B)" },
    { id: "303", classe: "3e a", name: "ELEVE C", d1: "15", d2: "11,5", error: "Nom en majuscule brute, décimale virgule" },
  ];

  const card3Clean = [
    { id: "301", classe: "3e A", name: "Élève A", d1: "12.00", d2: "14.50", moy: "13.67", validation: "Classe unifiée, Décimale point", formula: "=ROUND((D2*1+E2*2)/3; 2)" },
    { id: "302", classe: "3e B", name: "Élève B", d1: "08.00", d2: "10.00", moy: "09.33", validation: "Format classe standardisé", formula: "=ROUND((D3*1+E3*2)/3; 2)" },
    { id: "303", classe: "3e A", name: "Élève C", d1: "15.00", d2: "11.50", moy: "12.67", validation: "Casse propre, Calcul automatique", formula: "=ROUND((D4*1+E4*2)/3; 2)" },
  ];

  return (
    <section id="exemples" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center space-x-1.5 text-[#1F4E5F]">
            <Database size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Démonstrations Techniques</span>
          </div>
          <h2 className="font-sans font-bold text-3xl text-slate-900 tracking-tight">
            Exemples de mon travail
          </h2>
          <p className="text-sm text-slate-500 font-sans leading-relaxed">
            Visualisation des protocoles méthodologiques et des étapes de structuration appliqués lors du traitement de fichiers.
          </p>
          <div className="w-12 h-1 bg-[#1F4E5F] mx-auto rounded mt-2" />
        </div>

        {/* 3-Card Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* CARTE 1 — Nettoyage de relevé de notes */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-xs text-left">
            <div className="space-y-4">
              
              {/* Mandatory Demonstrative Badge */}
              <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 px-2.5 py-1 rounded-md text-[10px] font-bold font-sans">
                <AlertCircle size={12} className="text-amber-600 shrink-0" />
                <span>Exemple démonstratif — données anonymisées</span>
              </div>

              {/* Card Meta & Titles */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#1F4E5F]">
                  <FileText size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Saisie Scolaire</span>
                </div>
                <h3 className="font-sans font-bold text-base text-slate-900 leading-snug">
                  Nettoyage et structuration d'un relevé de notes scolaires
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Traitement d'un relevé de notes réel (78 élèves), avec noms remplacés par des identifiants génériques ("Élève 01", "Élève 02"...). Harmonisation des données, calcul automatique des moyennes, du classement et des appréciations par formules Excel (RANK, INDEX/MATCH, IF imbriqués).
                </p>
              </div>

              {/* Info Note precision */}
              <div className="bg-[#1F4E5F]/5 border border-[#1F4E5F]/10 px-3 py-2 rounded-lg text-[11px] text-[#1F4E5F] font-semibold font-sans">
                Précision : Données de notes authentiques, prénoms des élèves anonymisés.
              </div>

              {/* Switcher Tab Buttons */}
              <div className="flex bg-slate-200/60 p-1 rounded-lg gap-1">
                <button
                  onClick={() => setTabCard1('avant')}
                  className={`flex-1 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-1 cursor-pointer ${
                    tabCard1 === 'avant'
                      ? 'bg-red-500 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  <AlertCircle size={12} className="shrink-0" />
                  <span>Avant (Anomalies)</span>
                </button>
                <button
                  onClick={() => setTabCard1('apres')}
                  className={`flex-1 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-1 cursor-pointer ${
                    tabCard1 === 'apres'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  <CheckCircle2 size={12} className="shrink-0" />
                  <span>Après (Validé)</span>
                </button>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto border border-slate-200 rounded-lg bg-white">
                {tabCard1 === 'avant' ? (
                  <table className="w-full text-left border-collapse font-mono text-[10px] leading-tight">
                    <thead>
                      <tr className="bg-red-50/50 text-red-900 font-bold border-b border-red-150">
                        <th className="p-2">ID</th>
                        <th className="p-2">NOM BRUT</th>
                        <th className="p-2 text-center">T1</th>
                        <th className="p-2 text-center">T2</th>
                        <th className="p-2 text-red-700">ANOMALIE (DÉTECTÉE)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-150 text-slate-600">
                      {card1Raw.map((row, i) => (
                        <tr key={i} className="hover:bg-red-50/10">
                          <td className="p-2 text-slate-400 font-bold">#{row.id}</td>
                          <td className="p-2 font-semibold text-slate-800 font-sans">{row.name}</td>
                          <td className="p-2 text-center text-red-600 bg-red-50/10">{row.t1}</td>
                          <td className="p-2 text-center text-red-600 bg-red-50/10">{row.t2 || '—'}</td>
                          <td className="p-2 text-[9px] text-red-600 font-sans font-semibold bg-red-50/30">
                            ⚠ {row.error}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <table className="w-full text-left border-collapse font-mono text-[10px] leading-tight">
                    <thead>
                      <tr className="bg-emerald-50/50 text-emerald-900 font-bold border-b border-emerald-150">
                        <th className="p-2">ID</th>
                        <th className="p-2">NOM PROPRE</th>
                        <th className="p-2 text-center">T1</th>
                        <th className="p-2 text-center">T2</th>
                        <th className="p-2 text-center text-[#1F4E5F]">MOY</th>
                        <th className="p-2 text-emerald-800">VALIDATION (RÉUSSIE)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-150 text-slate-600">
                      {card1Clean.map((row, i) => (
                        <tr key={i} className="hover:bg-emerald-50/10">
                          <td className="p-2 text-slate-400 font-bold">#{row.id}</td>
                          <td className="p-2 font-bold text-slate-800 font-sans">{row.name}</td>
                          <td className="p-2 text-center text-slate-700">{row.t1}</td>
                          <td className="p-2 text-center text-slate-700">{row.t2}</td>
                          <td className="p-2 text-center text-emerald-600 font-bold bg-emerald-50/30">{row.moyenne}</td>
                          <td className="p-2 text-[9px] text-emerald-700 font-sans font-semibold bg-emerald-50/30">
                            ✓ {row.validation}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>

            </div>

            {/* Bottom Formule Hint */}
            {tabCard1 === 'apres' && (
              <div className="mt-4 pt-3 border-t border-slate-150 text-[9px] text-slate-500 font-mono">
                <span className="block font-sans font-bold text-slate-400 uppercase tracking-wider mb-0.5">Formule appliquée :</span>
                <span className="bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-indigo-600 block truncate">
                  {card1Clean[0].formula}
                </span>
              </div>
            )}
          </div>

          {/* CARTE 2 — Nettoyage de fichier de contacts */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-xs text-left">
            <div className="space-y-4">
              
              {/* Mandatory Demonstrative Badge */}
              <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 px-2.5 py-1 rounded-md text-[10px] font-bold font-sans">
                <AlertCircle size={12} className="text-amber-600 shrink-0" />
                <span>Exemple démonstratif — données anonymisées</span>
              </div>

              {/* Card Meta & Titles */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#1F4E5F]">
                  <Users size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Saisie Administrative</span>
                </div>
                <h3 className="font-sans font-bold text-base text-slate-900 leading-snug">
                  Nettoyage et déduplication d'une liste de contacts
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Illustration du nettoyage d'un tableau de contacts (harmonisation de la casse, des formats de téléphone et de date, suppression des doublons, uniformisation des montants).
                </p>
              </div>

              {/* Info Note precision */}
              <div className="bg-[#1F4E5F]/5 border border-[#1F4E5F]/10 px-3 py-2 rounded-lg text-[11px] text-[#1F4E5F] font-semibold font-sans">
                Précision : Données anonymisées à des fins de démonstration de nettoyage.
              </div>

              {/* Switcher Tab Buttons */}
              <div className="flex bg-slate-200/60 p-1 rounded-lg gap-1">
                <button
                  onClick={() => setTabCard2('avant')}
                  className={`flex-1 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-1 cursor-pointer ${
                    tabCard2 === 'avant'
                      ? 'bg-red-500 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  <AlertCircle size={12} className="shrink-0" />
                  <span>Avant (Anomalies)</span>
                </button>
                <button
                  onClick={() => setTabCard2('apres')}
                  className={`flex-1 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-1 cursor-pointer ${
                    tabCard2 === 'apres'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  <CheckCircle2 size={12} className="shrink-0" />
                  <span>Après (Validé)</span>
                </button>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto border border-slate-200 rounded-lg bg-white">
                {tabCard2 === 'avant' ? (
                  <table className="w-full text-left border-collapse font-mono text-[10px] leading-tight">
                    <thead>
                      <tr className="bg-red-50/50 text-red-900 font-bold border-b border-red-150">
                        <th className="p-2">ID</th>
                        <th className="p-2">NOM BRUT</th>
                        <th className="p-2 text-center">TÉLÉPHONE</th>
                        <th className="p-2">MONTANT</th>
                        <th className="p-2 text-red-700">ANOMALIE (DÉTECTÉE)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-150 text-slate-600">
                      {card2Raw.map((row, i) => (
                        <tr key={i} className="hover:bg-red-50/10">
                          <td className="p-2 text-slate-400 font-bold">#{row.id}</td>
                          <td className="p-2 font-semibold text-slate-800 font-sans">{row.name}</td>
                          <td className="p-2 text-center text-red-600 bg-red-50/10">{row.tel}</td>
                          <td className="p-2 text-red-600 bg-red-50/10">{row.montant}</td>
                          <td className="p-2 text-[9px] text-red-600 font-sans font-semibold bg-red-50/30">
                            ⚠ {row.error}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <table className="w-full text-left border-collapse font-mono text-[10px] leading-tight">
                    <thead>
                      <tr className="bg-emerald-50/50 text-emerald-900 font-bold border-b border-emerald-150">
                        <th className="p-2">ID</th>
                        <th className="p-2">NOM CORRIGÉ</th>
                        <th className="p-2 text-center">TÉL (UNIFIÉ)</th>
                        <th className="p-2 text-center">MONTANT</th>
                        <th className="p-2 text-emerald-800">VALIDATION (RÉUSSIE)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-150 text-slate-600">
                      {card2Clean.map((row, i) => (
                        <tr key={i} className="hover:bg-emerald-50/10">
                          <td className="p-2 text-slate-400 font-bold">#{row.id}</td>
                          <td className="p-2 font-bold text-slate-800 font-sans">{row.name}</td>
                          <td className="p-2 text-center text-slate-700">{row.tel}</td>
                          <td className="p-2 text-center font-bold text-slate-800">{row.montant}</td>
                          <td className="p-2 text-[9px] text-emerald-700 font-sans font-semibold bg-emerald-50/30">
                            ✓ {row.validation}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>

            </div>

            {/* Bottom Info Footer */}
            {tabCard2 === 'apres' && (
              <div className="mt-4 pt-3 border-t border-slate-150 text-[9px] text-slate-500 font-sans">
                <span className="block font-bold text-slate-400 uppercase tracking-wider mb-0.5">Méthode de nettoyage :</span>
                <p className="leading-snug">
                  Expression régulière de formatage téléphonique, conversion de la casse en <code className="font-mono bg-slate-150 px-1 py-0.5 rounded text-indigo-600">PROPER</code>, et script de suppression des doublons sur index d'emails uniques.
                </p>
              </div>
            )}
          </div>

          {/* CARTE 3 — Structuration de notes multi-classes */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-xs text-left">
            <div className="space-y-4">
              
              {/* Mandatory Demonstrative Badge */}
              <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 px-2.5 py-1 rounded-md text-[10px] font-bold font-sans">
                <AlertCircle size={12} className="text-amber-600 shrink-0" />
                <span>Exemple démonstratif — données anonymisées</span>
              </div>

              {/* Card Meta & Titles */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#1F4E5F]">
                  <Columns size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Multi-Classes</span>
                </div>
                <h3 className="font-sans font-bold text-base text-slate-900 leading-snug">
                  Organisation d'un carnet de notes multi-classes
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Illustration de la saisie et de la structuration de notes pour plusieurs classes, avec uniformisation des formats de note et calcul de moyennes pondérées par formule.
                </p>
              </div>

              {/* Info Note precision */}
              <div className="bg-[#1F4E5F]/5 border border-[#1F4E5F]/10 px-3 py-2 rounded-lg text-[11px] text-[#1F4E5F] font-semibold font-sans">
                Précision : Données anonymisées à des fins de démonstration de structuration.
              </div>

              {/* Switcher Tab Buttons */}
              <div className="flex bg-slate-200/60 p-1 rounded-lg gap-1">
                <button
                  onClick={() => setTabCard3('avant')}
                  className={`flex-1 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-1 cursor-pointer ${
                    tabCard3 === 'avant'
                      ? 'bg-red-500 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  <AlertCircle size={12} className="shrink-0" />
                  <span>Avant (Anomalies)</span>
                </button>
                <button
                  onClick={() => setTabCard3('apres')}
                  className={`flex-1 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-1 cursor-pointer ${
                    tabCard3 === 'apres'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  <CheckCircle2 size={12} className="shrink-0" />
                  <span>Après (Validé)</span>
                </button>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto border border-slate-200 rounded-lg bg-white">
                {tabCard3 === 'avant' ? (
                  <table className="w-full text-left border-collapse font-mono text-[10px] leading-tight">
                    <thead>
                      <tr className="bg-red-50/50 text-red-900 font-bold border-b border-red-150">
                        <th className="p-2">CLASSE</th>
                        <th className="p-2">ELÈVE BRUT</th>
                        <th className="p-2 text-center">DEV 1</th>
                        <th className="p-2 text-center">DEV 2</th>
                        <th className="p-2 text-red-700">ANOMALIE (DÉTECTÉE)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-150 text-slate-600">
                      {card3Raw.map((row, i) => (
                        <tr key={i} className="hover:bg-red-50/10">
                          <td className="p-2 font-semibold text-red-600 bg-red-50/10">{row.classe}</td>
                          <td className="p-2 font-semibold text-slate-800 font-sans">{row.name}</td>
                          <td className="p-2 text-center text-red-600 bg-red-50/10">{row.d1}</td>
                          <td className="p-2 text-center text-red-600 bg-red-50/10">{row.d2}</td>
                          <td className="p-2 text-[9px] text-red-600 font-sans font-semibold bg-red-50/30">
                            ⚠ {row.error}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <table className="w-full text-left border-collapse font-mono text-[10px] leading-tight">
                    <thead>
                      <tr className="bg-emerald-50/50 text-emerald-900 font-bold border-b border-emerald-150">
                        <th className="p-2">CLASSE UNIFIÉE</th>
                        <th className="p-2">ELÈVE PROPRE</th>
                        <th className="p-2 text-center">DEV 1</th>
                        <th className="p-2 text-center">DEV 2</th>
                        <th className="p-2 text-center text-[#1F4E5F]">MOY. POND</th>
                        <th className="p-2 text-emerald-800">VALIDATION (RÉUSSIE)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-150 text-slate-600">
                      {card3Clean.map((row, i) => (
                        <tr key={i} className="hover:bg-emerald-50/10">
                          <td className="p-2 font-bold text-slate-700">{row.classe}</td>
                          <td className="p-2 font-bold text-slate-800 font-sans">{row.name}</td>
                          <td className="p-2 text-center text-slate-700">{row.d1}</td>
                          <td className="p-2 text-center text-slate-700">{row.d2}</td>
                          <td className="p-2 text-center text-emerald-600 font-bold bg-emerald-50/30">{row.moy}</td>
                          <td className="p-2 text-[9px] text-emerald-700 font-sans font-semibold bg-emerald-50/30">
                            ✓ {row.validation}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>

            </div>

            {/* Bottom Formule Hint */}
            {tabCard3 === 'apres' && (
              <div className="mt-4 pt-3 border-t border-slate-150 text-[9px] text-slate-500 font-mono">
                <span className="block font-sans font-bold text-slate-400 uppercase tracking-wider mb-0.5">Formule de calcul pondéré :</span>
                <span className="bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-indigo-600 block truncate">
                  {card3Clean[0].formula}
                </span>
              </div>
            )}
          </div>

        </div>

        {/* Global disclaimer block */}
        <div className="max-w-4xl mx-auto mt-12 bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-xs leading-relaxed flex items-start gap-3 text-left text-slate-500">
          <AlertCircle size={16} className="shrink-0 text-slate-400 mt-0.5" />
          <p className="font-sans font-medium">
            Toutes les démonstrations de nettoyage ci-dessus mettent en évidence la rigueur appliquée au reformatage des structures de données brutes, l'élimination des doublons et le calcul automatique par formule, tout en respectant un anonymat strict et l'intégrité des données professionnelles.
          </p>
        </div>

      </div>
    </section>
  );
}
