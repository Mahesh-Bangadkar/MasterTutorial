/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Tv, BookOpen, Users, Clock, Award, Shield } from 'lucide-react';
import { Facility } from '../types';

export default function Facilities() {
  const facilityItems: Facility[] = [
    {
      id: 'fac-1',
      title: 'Interactive Learning Environment',
      description: 'Charts, models, practical activities, and digital resources help students visualize and understand complex science and mathematics concepts.',
      iconName: 'room',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'fac-2',
      title: 'Doubt-Solving Sessions',
      description: 'Regular doubt-solving sessions are conducted by experienced teachers to help students understand concepts clearly, solve textbook exercises, and master critical problems with confidence.',
      iconName: 'BookOpen',
      image: 'https://plus.unsplash.com/premium_photo-1735775899874-fe427ab7f58c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'fac-3',
      title: 'Personal Mentorship',
      description: 'Regular individual reviews, counseling sessions, and customized guidance for higher goal targets under board exams.',
      iconName: 'Users',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Tv': return <Tv size={18} />;
      case 'BookOpen': return <BookOpen size={18} />;
      case 'Users': return <Users size={18} />;
      default: return <Award size={18} />;
    }
  };

  return (
    <section className="py-24 bg-slate-50 scroll-mt-12" id="facilities">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-left mb-16" id="facilities-title-block">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 font-sans">
            FACILITIES
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Premium Infrastructure for Focused Study
          </h2>
          <div className="mt-3.5 h-1 w-16 bg-amber-400 rounded-full" />
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="facilities-container">
          {facilityItems.map((fac, fIdx) => (
            <motion.div
              key={fac.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: fIdx * 0.1, duration: 0.5 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition duration-300 flex flex-col h-full"
              id={`facility-card-${fIdx}`}
            >
              {/* Facility image container with zoom hover */}
              <div className="relative h-48 overflow-hidden bg-slate-100 select-none">
                <img
                  src={fac.image}
                  alt={fac.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  id={`facility-img-${fIdx}`}
                />
                <div className="absolute top-4 left-4 rounded-xl bg-slate-900/90 text-amber-400 p-2.5 shadow-md flex items-center justify-center">
                  {getIcon(fac.iconName)}
                </div>
              </div>

              {/* Text Description */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className="text-lg font-bold text-slate-900 font-display transition duration-200 group-hover:text-amber-500">
                  {fac.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-500 leading-relaxed flex-grow">
                  {fac.description}
                </p>

                {/* <div className="mt-5 pt-4 border-t border-slate-50 flex items-center gap-2 text-xs text-slate-400 font-semibold uppercase tracking-wider"> */}
                  {/* <Shield size={13} className="text-amber-500" /> */}
                  {/* <span>Sanitized &amp; Monitored 24/7</span> */}
                {/* </div> */}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
