/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Users, Trophy, Award, MapPin, X, ShieldCheck, Heart, Star } from 'lucide-react';
import { Achievement } from '../types';

export default function AboutAchievements() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const achievementsList: Achievement[] = [
    {
      id: 'ach-1',
      value: '500+',
      label: 'Happy Students',
      subLabel: 'Mentored to success',
      iconName: 'Users'
    },
    {
      id: 'ach-2',
      value: '95%+',
      label: 'Success Rate',
      subLabel: 'In Board & Entrances',
      iconName: 'Trophy'
    },
    {
      id: 'ach-3',
      value: '10+',
      label: 'Years of Experience',
      subLabel: 'Excellent pedagogy',
      iconName: 'Sparkles'
    },
    {
      id: 'ach-4',
      value: '1',
      label: 'Center in Akurli',
      subLabel: 'Convenient location',
      iconName: 'MapPin'
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users className="h-6 w-6 text-amber-400" />;
      case 'Trophy': return <Trophy className="h-6 w-6 text-amber-400" />;
      case 'Sparkles': return <Award className="h-6 w-6 text-amber-400" />;
      case 'MapPin': return <MapPin className="h-6 w-6 text-amber-400" />;
      default: return <Users className="h-6 w-6 text-amber-400" />;
    }
  };

  return (
    <section className="py-24 bg-slate-50 scroll-mt-12" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: About content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left" id="about-info-block">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500 font-sans">
              ABOUT US
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
              Building Futures Since Day One
            </h2>
            <div className="mt-3.5 h-1 w-16 bg-amber-400 rounded-full" />

            <p className="mt-6 text-base text-slate-600 leading-relaxed">
              Master Tutorial is committed to provide quality education with personal attention to each student. Our goal is to build strong concepts, boost confidence and help students achieve their academic dreams.
            </p>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              We focus on customized learning paths. By keeping our batch sizes optimized, we ensure our highly qualified faculty can monitor, rectify, and elevate the learning speed of each individual student.
            </p>

            <button
              onClick={() => setIsAboutOpen(true)}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 transition duration-200 transform active:scale-95 shadow-md shadow-slate-900/10 hover:shadow-slate-900/20"
              id="know-more-about-btn"
            >
              <span>Know More About Us</span>
              <ArrowRight size={16} className="text-amber-400" />
            </button>
          </div>

          {/* Right Column: Achievements custom boxed container exactly as photo */}
          <div className="lg:col-span-6" id="achievements-box-wrapper">
            <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-10 shadow-2xl relative overflow-hidden chalkboard-bg border-2 border-slate-800">
              {/* Star subtle indicator badge */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-amber-400 font-display tracking-wide uppercase">
                  Our Achievements
                </h3>
              </div>

              {/* Stat grid split with lines like reference layout */}
              <div className="grid grid-cols-2 gap-y-10 gap-x-6 relative">
                {achievementsList.map((ach, aIdx) => (
                  <div
                    key={ach.id}
                    className="flex flex-col items-start gap-3 p-2 relative"
                    id={`ach-metric-${aIdx}`}
                  >
                    {/* Vertical line between metrics */}
                    {aIdx % 2 === 0 && (
                      <div className="absolute right-0 top-2 bottom-2 w-px bg-slate-800 hidden sm:block" />
                    )}

                    {/* Badge Icon */}
                    <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-slate-800 border border-slate-700 shadow shadow-amber-500/10">
                      {getIcon(ach.iconName)}
                    </div>

                    <div>
                      {/* Big metric values */}
                      <span className="text-3xl md:text-4xl font-extrabold text-white font-display leading-none">
                        {ach.value}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-300 font-sans mt-1">
                        {ach.label}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5">
                        {ach.subLabel}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* About Us Expanded Reader Modal */}
      <AnimatePresence>
        {isAboutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAboutOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
              id="about-modal-backdrop"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl z-10 border border-slate-100"
              id="about-interactive-modal"
            >
              <div className="h-2 bg-amber-400" />
              <button
                onClick={() => setIsAboutOpen(false)}
                className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
                id="close-about-modal"
              >
                <X size={18} />
              </button>

              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-display text-slate-900 flex items-center gap-2">
                    <Star size={20} className="text-amber-500 fill-amber-505" />
                    Master Tutorial Legacy
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    Founded with the vision to bridge conceptual gaps in secondary education, Master Tutorial has stood as a hallmark of trust in Akurli, Maharashtra. Our learning roadmap is carefully compiled with child-centered approaches.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex gap-2">
                    <ShieldCheck size={20} className="text-amber-500 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 font-display">Our Mission</h4>
                      <p className="text-xs text-slate-500 mt-1">To spark curious questioning and build structured learning habits among students.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex gap-2">
                    <Heart size={20} className="text-amber-500 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 font-display">Our Philosophy</h4>
                      <p className="text-xs text-slate-500 mt-1">No child is left behind. Quality coaching must remain accessible and student-centric.</p>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-400 bg-slate-50/50 p-4 rounded-xl text-center">
                  📍 Located at Mateswari desire complex shop no.2, Akurli Bus stop, matheran road, Panvel-410206. Parents are always welcome to check facilities.
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
