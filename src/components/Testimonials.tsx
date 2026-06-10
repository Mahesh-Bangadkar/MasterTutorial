/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Quote, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews: Testimonial[] = [
    {
      id: 'rev-1',
      quote: 'The teaching quality is excellent and faculty is very supportive. My child has improved a lot in studies.',
      author: 'Parent of 10th Student',
      role: 'SSC Board Parent',
      avatarColor: 'bg-blue-500'
    },
    {
      id: 'rev-2',
      quote: 'Master Tutorial helped me clear my doubts and score great marks in board exams.',
      author: 'HSC Science Student',
      role: 'Topper Batches 2024',
      avatarColor: 'bg-emerald-500'
    },
    {
      id: 'rev-3',
      quote: 'Best coaching in Akurli! The attention and guidance we get here is unmatched.',
      author: 'Parent of 12th Student',
      role: 'Science Stream Parent',
      avatarColor: 'bg-purple-500'
    }
  ];

  // Auto scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) * 1 % reviews.length === 0 ? 0 : prev + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title exactly as in reference banner */}
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 font-sans">
            TESTIMONIALS
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            What Students &amp; Parents Say
          </h2>
          <div className="mt-3.5 mx-auto h-1 w-16 bg-amber-400 rounded-full" />
        </div>

        {/* Desktop grid (horizontal) / Mobile Slider layout */}
        <div className="relative max-w-6xl mx-auto" id="feedback-slider-container">
          {/* Main review card deck */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev, rIdx) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: rIdx * 0.15, duration: 0.5 }}
                className={`relative flex flex-col justify-between rounded-2xl bg-slate-50 border border-slate-100 p-6 sm:p-8 hover:shadow-md transition duration-300 md:opacity-100 ${
                  currentIndex === rIdx ? 'border-amber-400 bg-white ring-1 ring-amber-400/50 scale-100 shadow-sm' : 'opacity-80 scale-95 hidden md:flex'
                }`}
                id={`testimonial-card-${rIdx}`}
              >
                {/* Quote symbol exact formatting */}
                <div className="text-slate-200 absolute right-6 top-6">
                  <Quote size={40} className="stroke-slate-100 fill-slate-100" />
                </div>

                <div className="relative z-10">
                  <p className="text-left text-sm sm:text-base text-slate-600 leading-relaxed italic">
                    "{rev.quote}"
                  </p>
                </div>

                {/* Profile bio block */}
                <div className="mt-8 flex items-center gap-3.5 border-t border-slate-100 pt-5">
                  <div className={`h-11 w-11 rounded-full ${rev.avatarColor} text-white flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0`}>
                    {rev.author.replace('Parent of ', '').replace(' Student', '').slice(0, 2).toUpperCase() || 'ST'}
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-extrabold text-slate-900 font-display">
                      — {rev.author}
                    </h4>
                    <p className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 mt-0.5">
                      {rev.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Controls for Mobile Screens */}
          <div className="flex md:hidden items-center justify-center gap-4 mt-8" id="slider-pagination-mobile">
            <button
              onClick={handlePrev}
              className="p-2 border border-slate-200 rounded-full hover:bg-slate-50 text-slate-600 focus:outline-none transition"
              id="slider-control-prev"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Bullets */}
            <div className="flex gap-1.5">
              {reviews.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === dotIdx ? 'w-5 bg-slate-950' : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Testimonial pagination bullet ${dotIdx + 1}`}
                  id={`testimonial-bullet-${dotIdx}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 border border-slate-200 rounded-full hover:bg-slate-50 text-slate-600 focus:outline-none transition"
              id="slider-control-next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
