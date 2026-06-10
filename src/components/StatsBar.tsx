/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Users, HelpCircle, TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function StatsBar() {
  const pillars = [
    {
      icon: BookOpen,
      title: 'Quality Education',
      desc: 'Concept based learning for strong foundation',
      bg: 'bg-indigo-50',
      text: 'text-indigo-600',
    },
    {
      icon: Users,
      title: 'Experienced Faculty',
      desc: 'Well qualified & dedicated teachers',
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
    },
    {
      icon: HelpCircle,
      title: 'Regular Tests',
      desc: 'Weekly tests & doubt clearing sessions',
      bg: 'bg-purple-50',
      text: 'text-purple-600',
    },
    {
      icon: TrendingUp,
      title: 'Better Results',
      desc: 'Focused approach for academic excellence',
      bg: 'bg-amber-50',
      text: 'text-amber-600',
    },
  ];

  return (
    <div className="relative z-20 -mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="features-highlights">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="rounded-2xl bg-white shadow-xl border border-slate-100 p-6 sm:p-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
          {pillars.map((p, index) => {
            const Icon = p.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-4 lg:px-6 transition duration-300 hover:bg-slate-50/50 rounded-xl ${
                  index > 0 ? 'pt-6 sm:pt-4 lg:pt-4' : ''
                }`}
                id={`feature-pillar-${index}`}
              >
                {/* Icon wrapper */}
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${p.bg} ${p.text} shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={24} />
                </div>

                <h3 className="text-base font-bold text-slate-800 font-display">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-500 max-w-[200px] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
