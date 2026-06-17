/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, X, Camera, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Classroom' | 'Events' | 'Toppers' | 'Activities'>('All');
  const [activeLightboxImg, setActiveLightboxImg] = useState<GalleryItem | null>(null);

  const categories: ('All' | 'Classroom' | 'Events' | 'Toppers' | 'Activities')[] = [
    'All', 'Classroom', 'Events', 'Toppers', 'Activities'
  ];

   const InteractiveEnvironment = new URL('../Public/Mentorship.jpeg', import.meta.url).href;
   const Interactive = new URL('../Public/interaction.jpeg', import.meta.url).href;
   const Aniversery = new URL('../Public/Fun.jpeg', import.meta.url).href;
   const FunActivity = new URL('../Public/fun2.jpeg', import.meta.url).href;
   const Trip1 = new URL('../Public/Trip1.jpeg', import.meta.url).href;
   const Trip2 = new URL('../Public/Trip2.jpeg', import.meta.url).href;
   const Trip3 = new URL('../Public/Trip3.jpeg', import.meta.url).href;
   const Toppers = new URL('../Public/SSC 2026 result.png', import.meta.url).href;
   const Classroom = new URL('../Public/Classroom1.jpeg', import.meta.url).href;
   const galleryItems: GalleryItem[] = [
     {
      id: 'gal-1',
      category: 'Classroom',
      title: 'Every Great Result Starts with a Clear Concept ',
      image: InteractiveEnvironment,
      description: 'Strong concepts create strong results our interactive teaching approach helps students understand, apply, and excel with confidence.'

    },
     {
      id: 'gal-7',
      category: 'Classroom',
      title: 'Interaction Builds Confidence',
      image: Interactive,
      description: 'Students gain confidence by actively participating, asking questions, and engaging in every lesson.'

    },
     {
      id: 'gal-8',
      category: 'Classroom',
      title: 'Interaction Builds Confidence',
      image: Classroom,
      description: 'Students gain confidence by actively participating, asking questions, and engaging in every lesson.'

    },
    {
      id: 'gal-2',
      category: 'Events',
      title: '🎓 Second Anniversary Celebration',
      image: Aniversery,
      description: 'Marking two wonderful years of knowledge, dedication, and excellence in education.'
    },
    {
      id: 'gal-3',
      category: 'Events',
      title: 'Learning Beyond the Classroom',
      image: FunActivity,
      description: 'We combine education with interactive games and activities to develop creativity, confidence, and teamwork.'
    },
    {
      id: 'gal-4',
      category: 'Events',
      title: 'Creating Memories, Building Confidence',
      image: Trip1,
      description: 'Through trips, outings, and shared adventures, students develop confidence, friendships, and lifelong memories'
    },
    {
      id: 'gal-5',
      category: 'Events',
      title: 'Creating Memories, Building Confidence',
      image: Trip2,
      description: 'Through trips, outings, and shared adventures, students develop confidence, friendships, and lifelong memories'
    },
    {
      id: 'gal-6',
      category: 'Events',
      title: 'Creating Memories, Building Confidence',
      image: Trip3,
      description: 'Through trips, outings, and shared adventures, students develop confidence, friendships, and lifelong memories'
    },
    {
      id: 'gal-7',
      category: 'Toppers',
      title: '🏆 Our Star Achievers',
      image: Toppers,
      description: 'Celebrating the hard work, dedication, and outstanding academic success of our students.'
    },
   
  ];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-24 bg-white scroll-mt-12" id="gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Titles */}
        <div className="text-left mb-12" id="gallery-header-container">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 font-sans">
            OUR GALLERY
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight flex items-center gap-1.5">
            Glimpses of Master Tutorial
          </h2>
          <div className="mt-3.5 h-1 w-16 bg-amber-400 rounded-full" />
        </div>

        {/* Filter Navigation list */}
        <div className="flex flex-wrap gap-2.5 mb-10" id="gallery-categories-tab">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-4.5 py-2.5 text-xs font-bold transition duration-200 select-none ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-amber-400 font-extrabold shadow shadow-slate-950/20'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
              id={`gallery-category-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid with animation */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-images-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idX) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setActiveLightboxImg(item)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-100 border border-slate-100 aspect-16/10 shadow-sm"
                id={`gallery-item-card-${item.id}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  id={`gallery-photo-${item.id}`}
                />

                {/* Overlapped Info Panel */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                  <span className="inline-block text-[9px] font-bold text-amber-400 uppercase tracking-widest mb-1.5">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-white font-display">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-1 line-clamp-1">
                    {item.description}
                  </p>
                  <div className="mt-3.5 flex items-center gap-1 text-xs text-amber-400 font-semibold uppercase tracking-wider">
                    <ZoomIn size={14} />
                    <span>View Photo</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Popout Modal */}
      <AnimatePresence>
        {activeLightboxImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLightboxImg(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xs"
              id="lightbox-backdrop"
            />

            {/* Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl z-20 flex flex-col"
              id="gallery-lightbox"
            >
              <button
                onClick={() => setActiveLightboxImg(null)}
                className="absolute right-4 top-4 rounded-full bg-slate-950/60 p-2 text-slate-300 hover:text-white hover:bg-slate-950 transition"
                id="close-lightbox"
              >
                <X size={18} />
              </button>

              <div className="w-full max-h-[65vh] overflow-hidden select-none bg-black flex items-center justify-center">
                <img
                  src={activeLightboxImg.image}
                  alt={activeLightboxImg.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[65vh] object-contain"
                />
              </div>

              {/* Lightbox Information Frame */}
              <div className="p-6 text-left border-t border-slate-850 bg-slate-900/95">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                  {activeLightboxImg.category} Gallery
                </span>
                <h3 className="text-lg font-bold font-display text-white mt-1">
                  {activeLightboxImg.title}
                </h3>
                <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">
                  {activeLightboxImg.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
