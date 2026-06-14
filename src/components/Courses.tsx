/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Lightbulb, PencilRuler, GraduationCap, CheckCircle, ArrowRight, X, Clock, HelpCircle } from 'lucide-react';
import { Course } from '../types';

interface CoursesProps {
  onEnquireClick: (courseTitle: string) => void;
}

export default function Courses({ onEnquireClick }: CoursesProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const coursesList: Course[] = [
    {
      id: 'crs-1',
      title: 'SSC & CBSE (9th & 10th)',
      subTitle: 'Maharashtra Board and CBSE , All Subjects',
      description: 'Comprehensive regular classrooms tailored to empower 9th and 10th standard pupils focusing on board standards.',
      board: 'State Board (SSC)',
      subjects: ['Mathematics (Algebra & Geometry)', 'Science & Technology (Part I & II)', 'History & Civics', 'Geography', 'Languages (English, Marathi, Hindi)'],
      duration: '1 Year Program',
      badgeColor: 'bg-blue-50 text-blue-600 border-blue-100',
      iconName: 'GraduationCap',
      features: [
        'Detailed conceptual explanation of all chapters',
        'Chapter-wise periodic mock tests',
        'Special focus on board paper-solving skills',
        'Previous 10 Years papers discussions',
        'Special weak-spot remedy classes'
      ]
    },
    {
      id: 'crs-2',
      title: 'HSC & CBSE (11th & 12th)',
      subTitle: 'Science, All Subjects',
      description: 'Rigorous coaching designed to build clear fundamentals for college standards alongside board exam preparative drills.',
      board: 'State Board (HSC) and Central Board (CBSE)',
      subjects: ['Physics, Chemistry, Maths & Biology (Science)', 'English', 'Information Technology'],
      duration: '2 Years Integrated / Single Year',
      badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      iconName: 'BookOpen',
      features: [
        'Separate dedicated batched units for Science',
        'Focus on numerical problem solving in physics/maths',
        'Step-by-step accountancy worksheet solving',
        'Syllabus completion 3 months prior to board exams',
        'Doubt clearing hours every weekend'
      ]
    },
    {
      id: 'crs-3',
      title: 'Competitive Exams',
      subTitle: 'MHT-CET / JEE / NEET',
      description: 'Focused academic prep targeted towards securing excellent percentiles in top Maharashtra state & national entrances.',
      board: 'State & National Level Entrances',
      subjects: ['Physics (Entrance Standard)', 'Chemistry (MCQ Speed drills)', 'Mathematics (JEE Concept Mapping)', 'Biology (NEET Blueprint)'],
      duration: '2 Years Integrated Program',
      badgeColor: 'bg-purple-50 text-purple-600 border-purple-100',
      iconName: 'Lightbulb',
      features: [
        'Shortcut formulas & timed-solving techniques',
        'Weekly computer-tested mock entrances',
        'Over 10,000+ custom MCQ bank coverage',
        'National rankings feedback reports',
        'Exclusive premium study booklets'
      ]
    },
    {
      id: 'crs-4',
      title: 'Foundation Courses',
      subTitle: 'For 7th, 8th, All Subjects',
      description: 'Nurturing logical thinking, communication, and basic maths/science principles early for seamless high school transition.',
      board: 'CBSE / ICSE / State Board',
      subjects: ['Mathematics', 'General Science', 'Social Studies', 'English Comprehension & Grammar', 'Mental Ability & Reasoning'],
      duration: '1 Year Preparatory Program',
      badgeColor: 'bg-amber-50 text-amber-600 border-amber-100',
      iconName: 'PencilRuler',
      features: [
        'Fun, interactive concept experiments',
        'Mental maths and rapid solving tactics',
        'English speaking and reading exercises',
        'No exam-fear mindset coaching',
        'Interactive scientific model development'
      ]
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap': return <GraduationCap size={24} />;
      case 'BookOpen': return <BookOpen size={24} />;
      case 'Lightbulb': return <Lightbulb size={24} />;
      case 'PencilRuler': return <PencilRuler size={24} />;
      default: return <GraduationCap size={24} />;
    }
  };

  return (
    <section className="py-24 bg-white scroll-mt-12" id="courses">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header exactly as in photo */}
        <div className="text-left mb-16" id="courses-title-block">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 font-sans">
            OUR COURSES
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight flex items-center gap-1">
            Courses We Offer
          </h2>
          <div className="mt-3.5 h-1 w-16 bg-amber-400 rounded-full" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="courses-grid">
          {coursesList.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex flex-col h-full bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition duration-300"
              id={`course-card-${course.id}`}
            >
              {/* Animated Icon Container */}
              <div className={`h-12 w-12 rounded-xl flex items-center justify-center border ${course.badgeColor} mb-6 shadow-sm`}>
                {getIcon(course.iconName)}
              </div>

              {/* Title & Board details */}
              <h3 className="text-lg font-bold font-display text-slate-900">
                {course.title}
              </h3>
              <p className="mt-1 text-xs font-semibold text-slate-500 font-sans uppercase tracking-wider">
                {course.subTitle}
              </p>

              <p className="mt-3.5 text-sm text-slate-500 leading-relaxed flex-grow">
                {course.description.slice(0, 95)}...
              </p>

              {/* Learn More link button CTA */}
              <button
                onClick={() => setSelectedCourse(course)}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-amber-500 transition duration-200 group/link select-none border-t border-slate-50 pt-4"
                id={`learn-more-${course.id}`}
              >
                <span>Learn More</span>
                <ArrowRight size={13} className="transform transition-transform duration-200 group-hover/link:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Course Detailed Modal Box */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
              id="course-modal-backdrop"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl z-10 border border-slate-100"
              id="course-detail-modal"
            >
              {/* Header block with badges */}
              <div className="relative bg-slate-900 px-6 py-8 text-white">
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition"
                  id="close-course-modal"
                >
                  <X size={18} />
                </button>

                <span className="inline-block text-[10px] uppercase font-bold tracking-widest bg-amber-400 text-slate-950 px-2.5 py-1 rounded-full mb-2">
                  {selectedCourse.board}
                </span>

                <h3 className="text-2xl font-bold font-display text-white">
                  {selectedCourse.title} Curriculum
                </h3>
                <p className="mt-1 text-slate-300 text-sm">
                  {selectedCourse.subTitle}
                </p>
              </div>

              {/* Scrollable details */}
              <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Program Description
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed md:text-base">
                    {selectedCourse.description}
                  </p>
                </div>

                {/* Key covered Subjects */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Subjects Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCourse.subjects.map((subj, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-slate-50 text-slate-700 text-xs px-3 py-1.5 rounded-lg font-medium border border-slate-100"
                        id={`subject-tag-${sIdx}`}
                      >
                        {subj}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Training Features */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    What we focus on:
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedCourse.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" id={`feature-check-${fIdx}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sizing timeline */}
                <div className="flex items-center gap-4 py-3 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase">
                    <Clock size={15} className="text-amber-500" />
                    <span>Duration: {selectedCourse.duration}</span>
                  </div>
                </div>
              </div>

              {/* Action row footer */}
              <div className="bg-slate-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                <p className="text-xs text-slate-500 max-w-sm text-center sm:text-left">
                  Ready to attend a demo lecture? No commitments required, call standard registrations.
                </p>
                <button
                  onClick={() => {
                    const tempTitle = selectedCourse.title;
                    setSelectedCourse(null);
                    onEnquireClick(tempTitle);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition shadow"
                  id="modal-direct-enquiry-btn"
                >
                  Enquire About Course <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
