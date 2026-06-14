/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, MessageSquare, ArrowRight, Award, GraduationCap, Users } from 'lucide-react';

interface HeroProps {
  onEnquireClick: () => void;
}

export default function Hero({ onEnquireClick }: HeroProps) {
  const studentImage = new URL('../Public/student image.png', import.meta.url).href;

  const handleViewCourses = () => {
    const coursesSection = document.querySelector('#courses');
    if (coursesSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = coursesSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      className="relative min-h-[90vh] bg-slate-900 overflow-hidden pt-28 pb-32 flex items-center chalkboard-bg"
      id="home"
    >
      {/* Chalkboard educational doodles simulated via floating subtle SVGs */}
      <div className="absolute inset-0 select-none pointer-events-none opacity-10" id="sketch-decorations">
        {/* Math formula */}
        <div className="absolute top-12 left-10 text-white font-mono text-sm hidden lg:block">
          f(x) = ax² + bx + c
        </div>
        
        {/* Molecule */}
        <svg className="absolute top-1/4 left-1/4 h-16 w-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="5" r="3" />
          <circle cx="5" cy="12" r="3" />
          <circle cx="19" cy="12" r="3" />
          <circle cx="12" cy="19" r="3" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>

        {/* Atom */}
        <svg className="absolute bottom-20 left-12 h-20 w-20 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>

        {/* Lightbulb */}
        <svg className="absolute top-20 right-1/4 h-14 w-14 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>

        {/* Graduation cap */}
        <svg className="absolute bottom-32 right-1/3 h-16 w-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 10v6M2 10l10-5 10 5-10 5L2 10Z" />
          <path d="M6 12v5c0 2 2.5 3 6 3s6-1 6-3v-5" />
        </svg>
      </div>

      {/* Decorative Warm golden halo backdrop in the right area */}
      <div className="absolute right-0 top-10 bottom-0 w-[42%] bg-gradient-radial from-amber-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none hidden lg:block" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center" id="hero-layout-grid">
          
          {/* Hero Left Content Text and Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10" id="hero-text-content">
            
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-cursive text-2xl lg:text-3xl text-amber-400 mb-2 select-none"
            >
              Welcome to
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.1]"
            >
              MASTER <br />
              <span className="text-amber-400">TUTORIAL</span>
            </motion.h1>

            {/* Map Pin exact Akurli specification */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-4 flex items-center gap-2 text-white/90 text-sm sm:text-base font-semibold"
              id="hero-location"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/15 text-amber-400 shadow-inner">
                <MapPin size={16}   />
              </div>
              <span className="tracking-wide">Akurli,New Panvel,Maharashtra</span>
            </motion.div>

            {/* Subtext description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              Empowering students with quality education, personalized attention and perfect guidance for a brighter future. We combine rigorous academic programs with conceptual learning to build strong educational foundations.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
              id="hero-actions"
            >
              {/* Yellow CTA button */}
              <button
                onClick={handleViewCourses}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/10 hover:bg-amber-500 hover:shadow-amber-500/20 transition duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                id="hero-cta-courses"
              >
                <span>Our Courses</span>
                <ArrowRight size={16} />
              </button>

              {/* White Outline button */}
              <button
                onClick={onEnquireClick}
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/50 transition duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                id="hero-cta-enquire"
              >
                <MessageSquare size={16} className="text-amber-400" />
                <span>Enquire Now</span>
              </button>

              <a
                href="https://www.google.com/maps?q=19.0021005,73.1421825&z=17&hl=en"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-amber-400/40 bg-amber-400/10 px-6 py-3.5 text-sm font-semibold text-amber-300 hover:bg-amber-400 hover:text-slate-950 transition duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                id="hero-cta-directions"
              >
                <MapPin size={16} />
                <span>Get Directions</span>
              </a>
            </motion.div>

          </div>

          {/* Hero Right Student Graphic with Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0" id="hero-graphic-section">
            {/* Student Frame */}
            <div className="relative w-[min(34rem,92vw)] aspect-square flex items-end justify-center overflow-visible select-none">
              <img
                src={studentImage}
                alt="Representative student from Master Tutorial Akurli Maharashtra"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain object-bottom drop-shadow-2xl translate-y-2 sm:translate-y-4"
                id="student-hero-img"
              />
            </div>

            {/* Floating Badge 1: Expert Faculty (Top Right) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -right-3 top-4 sm:-right-8 sm:top-12 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-slate-50 max-w-52.5 sm:max-w-57.5"
              id="hero-badge-faculty"
            >
              <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                <GraduationCap size={22} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-display leading-[1.2]">
                  Expert Faculty
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium">
                  Experienced &amp; Qualified Teachers
                </p>
              </div>
            </motion.div>

            {/* Floating Badge 2: Proven Results (Lower Left) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -left-4 bottom-16 sm:-left-12 sm:bottom-24 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-slate-50 max-w-52.5 sm:max-w-57.5"
              id="hero-badge-results"
            >
              <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Award size={22} className="fill-amber-50" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-display leading-[1.2]">
                  Proven Results
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium">
                  Excellent Academic Track Record
                </p>
              </div>
            </motion.div>

            {/* Floating Badge 3: Personalized Attention (Lower Right) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -right-4 bottom-1 sm:-right-8 sm:bottom-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-slate-50 max-w-52.5 sm:max-w-57.5"
              id="hero-badge-attention"
            >
              <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Users size={22} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-display leading-[1.2]">
                  Personalized Attention
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium">
                  Small Batch Sizes
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
