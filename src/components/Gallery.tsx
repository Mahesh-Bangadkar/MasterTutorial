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

  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-1',
      category: 'Classroom',
      title: 'Digital Smart Classroom',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600',
      description: 'Active math derivation lecture using whiteboard projection charts.'
    },
    {
      id: 'gal-2',
      category: 'Events',
      title: 'Annual Felicitation',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600',
      description: 'Celebrating high board scorers and merit holders from Akurli.'
    },
    {
      id: 'gal-3',
      category: 'Toppers',
      title: 'Board Exam Toppers',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600',
      description: 'SSC board toppers sharing preparation strategies in groups.'
    },
    {
      id: 'gal-4',
      category: 'Activities',
      title: 'Science Experiments Day',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600',
      description: 'Students testing chemical reaction models inside the laboratory.'
    },
    {
      id: 'gal-5',
      category: 'Classroom',
      title: 'Doubt Solving Hour',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600',
      description: 'Individual parent and kids counselling under professional metrics.'
    },
    {
      id: 'gal-6',
      category: 'Activities',
      title: 'Cooperative Group Studies',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600',
      description: 'Peer group studying under mentorship to master physics numericals.'
    }
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
