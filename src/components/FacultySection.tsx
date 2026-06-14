/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, GraduationCap, Target, Users } from 'lucide-react';

export default function FacultySection() {
  const facultyImage = new URL('../Public/deven sir .png', import.meta.url).href;

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Qualification',
      text: 'M.Tech (Mechanical)',
    },
    {
      icon: Award,
      title: 'Experience',
      text: '15+ Years',
    },
    {
      icon: Users,
      title: 'Specialization',
      text: 'SSC | HSC | Foundation',
    },
    {
      icon: Target,
      title: 'Competitive Exam Expertise',
      text: 'MPSC | UPSC | RRB | GATE | Other Exams',
    },
  ];

  return (
    <section className="py-24 bg-white scroll-mt-12" id="faculty">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-left" id="faculty-title-block">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 font-sans">
            FACULTY
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Meet Our Founder & Senior Faculty
          </h2>
          <div className="mt-3.5 h-1 w-16 rounded-full bg-amber-400" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6"
          >
            <div className="rounded-4xl overflow-hidden bg-slate-50 border border-slate-200 shadow-2xl">
              <img
                src={facultyImage}
                alt="Devendra Sir, founder and senior faculty at Master Tutorial"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
                id="faculty-profile-image"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1, duration: 0.55 }}
            className="lg:col-span-6"
          >
            <div className="rounded-4xl bg-slate-900 text-white p-8 sm:p-10 shadow-2xl border border-slate-800 chalkboard-bg">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-400">
                <BookOpen size={16} />
                Founder Profile
              </div>

              <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold tracking-tight font-display">
                Devendra Sir
              </h3>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Devendra Sir leads Master Tutorial with a strong focus on concept clarity,
                disciplined preparation, and student confidence. His teaching approach is
                built to support board exam success and competitive exam readiness.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-800 bg-white/5 p-4 flex items-start gap-4"
                    >
                      <div className="h-11 w-11 shrink-0 flex items-center justify-center rounded-xl bg-amber-400 text-slate-950">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{item.title}</h4>
                        <p className="mt-1 text-sm text-slate-300 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-5 text-sm text-slate-200 leading-relaxed">
                Teaching philosophy: concept clarity, practice, discipline, consistency, and success.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}