/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, GraduationCap, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onEnquireClick: () => void;
  activeSection: string;
}

export default function Header({ onEnquireClick, activeSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', id: '#home' },
    { label: 'About Us', id: '#about' },
    { label: 'Courses', id: '#courses' },
    { label: 'Facilities', id: '#facilities' },
    { label: 'Gallery', id: '#gallery' },
    { label: 'Contact Us', id: '#contact' },
  ];

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // Header height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4 border-b border-slate-100'
      }`}
      id="main-app-header"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          
          {/* Brand Logo exactly as in reference */}
          <div 
            onClick={() => handleScrollTo('#home')} 
            className="flex items-center gap-2 cursor-pointer select-none group"
            id="brand-logo"
          >
            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-900 text-amber-400 font-bold text-2xl shadow-md border border-slate-800 transition transform group-hover:scale-105">
              M
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 font-display leading-none">
                MASTER
              </span>
              <span className="text-xs font-semibold tracking-widest text-amber-500 font-sans leading-none mt-1">
                TUTORIAL
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id.replace('#', '');
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`relative text-sm font-medium transition duration-200 py-1 ${
                    isActive ? 'text-slate-900 font-semibold' : 'text-slate-500 hover:text-slate-900'
                  }`}
                  id={`nav-link-${item.label.toLowerCase().replace(' ', '-')}`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Call/CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+918291088424"
              className="inline-flex items-center gap-2 rounded-full bg-[#1e293b] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition duration-200 transform active:scale-95"
              id="header-call-btn"
            >
              <Phone size={15} className="text-amber-400 fill-amber-400 animate-pulse" />
              <span>+91 8291088424</span>
            </a>
          </div>

          {/* Mobile Actions Container */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onEnquireClick}
              className="rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-semibold text-xs px-3.5 py-2 transition"
              id="mobile-quick-enquiry"
            >
              Enquire
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle navigation menu"
              id="mobile-menu-trigger"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Slidedown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-100 bg-white shadow-inner overflow-hidden"
            id="mobile-nav-panel"
          >
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className="w-full text-left font-display font-medium text-slate-800 hover:text-slate-950 hover:bg-slate-50 px-3 py-2.5 rounded-lg text-sm flex items-center justify-between"
                  id={`mobile-nav-link-${item.label.toLowerCase().replace(' ', '-')}`}
                >
                  <span>{item.label}</span>
                  <ChevronRight size={16} className="text-slate-400" />
                </button>
              ))}

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white py-3 font-semibold text-sm"
                  id="mobile-nav-phone"
                >
                  <Phone size={16} className="text-amber-400 fill-amber-400" />
                  <span>Call Master Tutorial: +91 98765 43210</span>
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onEnquireClick();
                  }}
                  className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-3 rounded-xl text-sm"
                  id="mobile-nav-enquiry"
                >
                  Request Callback
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
