/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const email = "radoleoleonardo@gmail.com";
  const phone = "+261 34 73 486 99";

  const [name, setName] = useState('');
  const [msgEmail, setMsgEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    // Standard client side mailto redirect with beautiful structured body
    const subject = encodeURIComponent(`Demande de Saisie de Données - ${name}`);
    const body = encodeURIComponent(`Bonjour Ainga Leonardo,\n\nJe vous contacte dans le cadre de votre portfolio d'opérateur de saisie.\n\nDescription de la mission :\n${message}\n\nCordialement,\n${name}\nEmail : ${msgEmail || 'Non spécifié'}`);
    
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setName('');
      setMsgEmail('');
      setMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center space-x-1.5 text-[#1F4E5F]">
            <Mail size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Me Contacter</span>
          </div>
          <h2 className="font-sans font-bold text-3xl text-slate-900 tracking-tight">
            Discutons de vos besoins de saisie
          </h2>
          <div className="w-12 h-1 bg-[#1F4E5F] mx-auto rounded mt-2" />
        </div>

        {/* Form and Contact Cards side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch text-left">
          
          {/* Left Block: Direct Quick Contacts (5 columns) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-sans font-bold text-lg text-slate-900">
                Coordonnées Directes
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                N'hésitez pas à me contacter directement par mail, par téléphone, ou à utiliser le formulaire ci-contre pour préremplir votre demande.
              </p>
            </div>

            {/* List of contact cards */}
            <div className="space-y-4 pt-4">
              
              {/* Email Card */}
              <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-xl group transition-all hover:border-[#1F4E5F]/30 hover:bg-slate-50/80">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#1F4E5F]/5 border border-[#1F4E5F]/15 flex items-center justify-center text-[#1F4E5F] shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email</span>
                    <a href={`mailto:${email}`} className="block text-xs font-bold text-slate-800 hover:text-[#1F4E5F] truncate font-mono">
                      {email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(email, 'email')}
                  className="p-1.5 bg-white border border-slate-200 hover:border-slate-300 rounded-lg text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  title="Copier l'email"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-xl group transition-all hover:border-[#1F4E5F]/30 hover:bg-slate-50/80">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <Phone size={16} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Téléphone</span>
                    <a href={`tel:${phone.replace(/\s+/g, '')}`} className="block text-xs font-bold text-slate-800 hover:text-[#1F4E5F] truncate font-mono">
                      {phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(phone, 'phone')}
                  className="p-1.5 bg-white border border-slate-200 hover:border-slate-300 rounded-lg text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  title="Copier le téléphone"
                >
                  {copiedPhone ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200/80 rounded-xl">
                <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Localisation</span>
                  <span className="block text-xs font-bold text-slate-800 font-sans">
                    Maintirano, Région Melaky, Madagascar
                  </span>
                </div>
              </div>

            </div>

            {/* Micro warning note */}
            <p className="text-[10px] text-slate-400 leading-relaxed font-sans pt-4 border-t border-slate-100">
              * Mes délais de réponse par email sont généralement inférieurs à 24 heures pour toute demande d'informations ou devis.
            </p>
          </div>

          {/* Right Block: Interactive Form (7 columns) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-2xs">
            {isSent ? (
              <div className="h-full flex flex-col justify-center items-center text-center p-6 space-y-3 bg-white border border-emerald-100 rounded-xl">
                <CheckCircle2 size={44} className="text-emerald-500" />
                <h4 className="font-sans font-bold text-lg text-slate-900 uppercase tracking-wider">Demande de saisie initiée !</h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
                  Votre client de messagerie a été ouvert avec vos informations pré-remplies. Si ce n'est pas le cas, merci d'utiliser l'adresse email directe à gauche.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-sans font-bold text-base text-slate-900 mb-2">
                  Formulaire d'Intérêt
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Nom complet <span className="text-[#1F4E5F] font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Jean Dupont"
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#1F4E5F] focus:border-[#1F4E5F]"
                      id="input-name"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Votre Email (optionnel)
                    </label>
                    <input
                      type="email"
                      value={msgEmail}
                      onChange={(e) => setMsgEmail(e.target.value)}
                      placeholder="Ex: jean.dupont@example.com"
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#1F4E5F] focus:border-[#1F4E5F]"
                      id="input-email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Détails ou Volume de la Saisie <span className="text-[#1F4E5F] font-bold">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ex: Bonjour Ainga Leonardo, j'ai une série de 200 fiches d'élèves manuscrites à retranscrire proprement sous Excel..."
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#1F4E5F] focus:border-[#1F4E5F] resize-none"
                    id="input-message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-[#1F4E5F] hover:bg-[#163a47] text-white font-sans font-bold text-xs uppercase tracking-wider shadow-sm transition-all duration-150 cursor-pointer"
                  id="btn-submit-message"
                >
                  <Send size={14} />
                  <span>Envoyer la demande</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
