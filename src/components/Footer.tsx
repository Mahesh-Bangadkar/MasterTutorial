/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, ChevronRight, Lock, Trash2, Search, CheckCircle, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Enquiry } from '../types';

interface FooterProps {
  onEnquireClick: () => void;
  enquiriesCount?: number;
}

export default function Footer({ onEnquireClick, enquiriesCount = 0 }: FooterProps) {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [adminError, setAdminError] = useState('');

  // Load enquiries whenever Admin modal is toggled
  useEffect(() => {
    if (isAdminOpen) {
      const stored = localStorage.getItem('master_tutorial_enquiries');
      if (stored) {
        setEnquiries(JSON.parse(stored));
      } else {
        setEnquiries([]);
      }
    }
  }, [isAdminOpen, enquiriesCount]);

  const handleUpdateStatus = (id: string, newStatus: Enquiry['status']) => {
    const updated = enquiries.map(item => {
      if (item.id === id) {
        return { ...item, status: newStatus };
      }
      return item;
    });
    setEnquiries(updated);
    localStorage.setItem('master_tutorial_enquiries', JSON.stringify(updated));
  };

  const handleDeleteEnquiry = (id: string) => {
    const filtered = enquiries.filter(item => item.id !== id);
    setEnquiries(filtered);
    localStorage.setItem('master_tutorial_enquiries', JSON.stringify(filtered));
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all enquiries?')) {
      localStorage.removeItem('master_tutorial_enquiries');
      setEnquiries([]);
    }
  };

  const handleAdminLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === 'admin' || adminPassword === '123' || adminPassword === '') {
      setIsAuthenticated(true);
      setAdminError('');
    } else {
      setAdminError('Invalid access password');
    }
  };

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
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

  const filteredEnquiries = enquiries.filter(item => {
    const searchVal = searchTerm.toLowerCase();
    return (
      item.studentName.toLowerCase().includes(searchVal) ||
      item.parentName.toLowerCase().includes(searchVal) ||
      item.phoneNumber.includes(searchVal) ||
      item.course.toLowerCase().includes(searchVal)
    );
  });

  return (
    <footer className="bg-slate-900 text-slate-400 font-sans border-t border-slate-800" id="contact">
      
      {/* 1. Visited Directions ribbon bar exactly as seen on mockup */}
      <div className="bg-slate-950 py-6 border-b border-slate-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6" id="directions-ribbon">
            <div className="flex items-center gap-4 text-left">
              <div className="h-12 w-12 rounded-full bg-amber-400 flex items-center justify-center text-slate-950 shadow-inner shrink-0 animate-pulse">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg font-display">
                  Visit Us Today!
                </h4>
                <p className="text-slate-400 text-sm font-medium">
                  Master Tutorial, Akurli, Maharashtra
                </p>
              </div>
            </div>

            {/* Direct Google Maps link open in new tab */}
            <a
              href="https://maps.google.com/?q=Akurli+Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 hover:bg-amber-500 font-bold px-6 py-3.5 text-xs text-slate-950 transition duration-200 shadow-md shadow-amber-400/10 active:scale-95"
              id="get-directions-btn"
            >
              <span>Get Directions</span>
              <ChevronRight size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main footer four columns link grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Bio and brand */}
          <div className="lg:col-span-5 text-left space-y-6" id="footer-bio-col">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleScrollTo('#home')}>
              <div className="flex items-center justify-center h-9 w-9 rounded bg-white text-slate-900 font-display font-extrabold text-lg shadow">
                M
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-lg leading-none font-display">
                  MASTER
                </span>
                <span className="text-[10px] font-bold text-amber-500 tracking-wider leading-none mt-0.5">
                  TUTORIAL
                </span>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Master Tutorial is dedicated to shaping the future of students with quality education, personalized curriculum mentorship, and right academic guidance.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 text-left" id="footer-quick-links-col">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-5 font-display">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', target: '#home' },
                { label: 'About Us', target: '#about' },
                { label: 'Courses', target: '#courses' },
                { label: 'Facilities', target: '#facilities' },
                { label: 'Gallery', target: '#gallery' },
                { label: 'Contact Us', target: '#contact' }
              ].map((link, lIdx) => (
                <li key={lIdx}>
                  <button
                    onClick={() => handleScrollTo(link.target)}
                    className="hover:text-amber-400 transition inline-flex items-center gap-1 group/footer-l text-slate-400 hover:translate-x-1 duration-200"
                    id={`footer-quick-link-${link.label.toLowerCase().replace(' ', '-')}`}
                  >
                    <ChevronRight size={12} className="opacity-0 group-hover/footer-l:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Courses */}
          <div className="lg:col-span-2 text-left" id="footer-courses-col">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-5 font-display">
              Courses
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                'SSC (9th & 10th)',
                'HSC (11th & 12th)',
                'Competitive Exams',
                'Foundation Courses'
              ].map((cName, cIdx) => (
                <li key={cIdx}>
                  <button
                    onClick={() => handleScrollTo('#courses')}
                    className="hover:text-amber-400 transition text-slate-400 text-left"
                    id={`footer-course-${cIdx}`}
                  >
                    {cName}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacts detail block matching address in image */}
          <div className="lg:col-span-3 text-left space-y-4" id="footer-contact-details-col">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-5 font-display">
              Contact Us
            </h4>
            
            <div className="flex items-start gap-3 text-sm text-slate-450">
              <MapPin size={18} className="text-amber-400 shrink-0 mt-1" />
              <span className="leading-snug">
                Master Tutorial, Near Akurli Station, Akurli, Maharashtra – 40110
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-450 mt-5!">
              <Phone size={16} className="text-amber-400 shrink-0" />
              <a href="tel:+918291088424" className="hover:text-white transition">
                +91 82910 88424
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-450">
              <Mail size={16} className="text-amber-400 shrink-0" />
              <a href="mailto:mastertutorialakurli@gmail.com" className="hover:text-white transition">
                mastertutorialakurli@gmail.com
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Basement copyrights bar and dynamic Admin entry button */}
      <div className="border-t border-slate-850 py-5 bg-slate-950/50 text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span>
              &copy; 2024 Master Tutorial. All Rights Reserved.
            </span>
            <div className="flex items-center gap-4">
              <span>
                Designed with <span className="text-red-500 select-none">❤️</span> for Students
              </span>
              <span className="text-slate-700">|</span>
              <button
                onClick={() => {
                  setIsAdminOpen(true);
                  setIsAuthenticated(false);
                  setAdminPassword('');
                }}
                className="inline-flex items-center gap-1 hover:text-slate-300 hover:underline cursor-pointer"
                id="admin-panel-footer-trigger"
              >
                <Lock size={12} />
                <span>Admin Desk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Admin Panel Drawer popup */}
      <AnimatePresence>
        {isAdminOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 text-slate-900">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAdminOpen(false)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs"
              id="admin-modal-backdrop"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-100 z-10 flex flex-col overflow-hidden max-h-[85vh]"
              id="admin-dashboard-container"
            >
              {/* Top Admin banner */}
              <div className="bg-slate-900 px-6 py-4 text-white flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Lock size={18} className="text-amber-400" />
                  <h3 className="font-bold font-display text-base">
                    Master Tutorial - Academic Admin Panel
                  </h3>
                </div>
                <button
                  onClick={() => setIsAdminOpen(false)}
                  className="rounded-full hover:bg-white/10 p-1.5 text-slate-400 hover:text-white transition"
                  id="close-admin-panel"
                >
                  <X size={18} />
                </button>
              </div>

              {!isAuthenticated ? (
                /* Login screen inside Admin */
                <div className="p-8 max-w-sm mx-auto text-center space-y-4">
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-full inline-block">
                    <Lock size={32} />
                  </div>
                  <h4 className="text-lg font-bold">Requires Authorization</h4>
                  <p className="text-xs text-slate-500">
                    Authentication needed to access lead lists. Enter access password below (Default is empty/just press enter).
                  </p>
                  <form onSubmit={handleAdminLoginSubmit} className="space-y-3">
                    <input
                      type="password"
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      placeholder="Access Password"
                      className="w-full text-center rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-amber-400 focus:outline-none"
                      id="admin-pass-field"
                      autoFocus
                    />
                    {adminError && <p className="text-xs text-red-500 font-semibold">{adminError}</p>}
                    <button
                      type="submit"
                      className="w-full bg-slate-900 text-white font-bold py-2 rounded-lg text-xs hover:bg-slate-850"
                      id="admin-login-submit"
                    >
                      Authenticate Desk
                    </button>
                  </form>
                </div>
              ) : (
                /* Authenticated Enquiries Console listing leads */
                <div className="p-6 overflow-hidden flex flex-col grow select-none">
                  
                  {/* Search and Action Bar */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-between pb-5 border-b border-slate-100 mb-5">
                    <div className="flex items-center gap-3 w-full sm:max-w-sm relative">
                      <Search size={16} className="text-slate-400 absolute left-3 pointer-events-none" />
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search student, parent, phone, board..."
                        className="w-full rounded-lg border border-slate-200 pl-9 pr-3 py-2 text-xs focus:border-amber-400 focus:outline-none"
                        id="admin-leads-search"
                      />
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                        Total Enquiries: {enquiries.length}
                      </span>
                      {enquiries.length > 0 && (
                        <button
                          onClick={handleClearAll}
                          className="inline-flex items-center gap-1 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-semibold text-xs px-3 py-1.5 transition"
                          id="admin-clear-all-leads"
                        >
                          <Trash2 size={13} />
                          <span>Clear list</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Leads spreadsheet view */}
                  <div className="overflow-y-auto grow max-h-[50vh]">
                    {filteredEnquiries.length === 0 ? (
                      <div className="py-12 text-center text-slate-400 space-y-2">
                        <Clock size={28} className="mx-auto text-slate-300" />
                        <h5 className="font-bold text-slate-700 text-sm">No Enquiries Registered</h5>
                        <p className="text-xs text-slate-500 max-w-xs mx-auto">
                          New inquiries submitted via the "Enquire Now" forms will list here in real time.
                        </p>
                      </div>
                    ) : (
                      <table className="w-full text-xs text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                            <th className="p-3">Ref ID</th>
                            <th className="p-3">Student / Parent</th>
                            <th className="p-3">Phone</th>
                            <th className="p-3">Course / Grade</th>
                            <th className="p-3">Date</th>
                            <th className="p-3 text-center">Status</th>
                            <th className="p-3 text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {filteredEnquiries.map((enq) => (
                            <tr key={enq.id} className="hover:bg-slate-50/50">
                              <td className="p-3 font-mono font-bold text-slate-700">{enq.id}</td>
                              <td className="p-3 text-left">
                                <p className="font-bold text-slate-900">{enq.studentName}</p>
                                <p className="text-slate-400 text-[10px]">P: {enq.parentName}</p>
                              </td>
                              <td className="p-3">
                                <a href={`tel:${enq.phoneNumber}`} className="font-semibold text-blue-600 hover:underline">
                                  {enq.phoneNumber}
                                </a>
                                {enq.email && <p className="text-slate-400 text-[10px]">{enq.email}</p>}
                              </td>
                              <td className="p-3">
                                <p className="font-semibold text-slate-800">{enq.course}</p>
                                <p className="text-slate-400 text-[10px]">{enq.grade}</p>
                              </td>
                              <td className="p-3 text-slate-500">{enq.date}</td>
                              <td className="p-3 text-center">
                                <select
                                  value={enq.status}
                                  onChange={(e) => handleUpdateStatus(enq.id, e.target.value as Enquiry['status'])}
                                  className="rounded-lg border border-slate-200 bg-white px-2 py-1 font-semibold text-[10px]"
                                >
                                  <option>Pending</option>
                                  <option>Contacted</option>
                                  <option>Enrolled</option>
                                  <option>Closed</option>
                                </select>
                              </td>
                              <td className="p-3 text-center">
                                <button
                                  onClick={() => handleDeleteEnquiry(enq.id)}
                                  className="text-red-500 hover:bg-red-50 p-1.5 rounded transition"
                                  title="Delete Enquiry"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>

                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </footer>
  );
}

interface XProps {
  size?: number;
}
const X = ({ size = 20 }: XProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
