/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Send, Users, Sparkles, BookOpen } from 'lucide-react';
import { Enquiry } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: string;
  onSuccess: (newEnquiry: Enquiry) => void;
}

export default function EnquiryModal({ isOpen, onClose, preselectedCourse, onSuccess }: EnquiryModalProps) {
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState(preselectedCourse || 'SSC (9th & 10th)');
  const [grade, setGrade] = useState('9th Grade');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sync preselectedCourse when it changes
  React.useEffect(() => {
    if (preselectedCourse) {
      setCourse(preselectedCourse);
    }
  }, [preselectedCourse]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !parentName || !phoneNumber) return;

    setIsSubmitting(true);

    const whatsappMessage = [
      'Hello',
      'I would like to enquire about admission at Master Tutorial.',
      `Student Name: ${studentName}`,
      `Parent Name: ${parentName}`,
      `Mobile Number: ${phoneNumber}`,
      `Email: ${email || 'Not provided'}`,
      `Course: ${course}`,
      `Current Grade/Class: ${grade}`,
      `Message: ${message || 'No additional message provided.'}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/918291088424?text=${encodeURIComponent(whatsappMessage)}`;

    // Simulate submission delay
    setTimeout(() => {
      const newEnquiry: Enquiry = {
        id: 'ENQ-' + Math.floor(Math.random() * 900000 + 100000),
        studentName,
        parentName,
        phoneNumber,
        email: email || undefined,
        course,
        grade,
        message: message || "Interested in learning more about courses at Akurli branch.",
        date: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        status: 'Pending'
      };

      // Save to localStorage
      const existing = localStorage.getItem('master_tutorial_enquiries');
      const list = existing ? JSON.parse(existing) : [];
      list.unshift(newEnquiry);
      localStorage.setItem('master_tutorial_enquiries', JSON.stringify(list));

      onSuccess(newEnquiry);

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset Form fields
      setTimeout(() => {
        setSubmitSuccess(false);
        setStudentName('');
        setParentName('');
        setPhoneNumber('');
        setEmail('');
        setMessage('');
        onClose();
      }, 2500);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
            id="enquiry-modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl z-10 border border-slate-100"
            id="enquiry-modal-container"
          >
            {/* Header Theme Border */}
            <div className="h-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
              id="close-enquiry-modal"
            >
              <X size={20} />
            </button>

            {/* Main Content Area */}
            <div className="p-6 sm:p-8">
              {!submitSuccess ? (
                <div>
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 font-display">
                      <Sparkles size={12} /> Admissions Open 2026
                    </span>
                    <h3 className="mt-2 text-2xl font-bold font-display text-slate-900">
                      Admission Enquiry Form
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-500">
                      Submit details model for free counselling and trial classes at our Akurli branch.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Names Grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                          Student Name <sup className="text-red-500">*</sup>
                        </label>
                        <input
                          type="text"
                          required
                          value={studentName}
                          onChange={(e) => setStudentName(e.target.value)}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-amber-400 focus:outline-none transition"
                          id="enquiry-student-name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                          Parent Name <sup className="text-red-500">*</sup>
                        </label>
                        <input
                          type="text"
                          required
                          value={parentName}
                          onChange={(e) => setParentName(e.target.value)}
                          placeholder="e.g. S. Sharma"
                          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-amber-400 focus:outline-none transition"
                          id="enquiry-parent-name"
                        />
                      </div>
                    </div>

                    {/* Contact Details Grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                          Mobile Number <sup className="text-red-500">*</sup>
                        </label>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                          placeholder="10-digit mobile"
                          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-amber-400 focus:outline-none transition"
                          id="enquiry-phone"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. rahul@gmail.com"
                          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-amber-400 focus:outline-none transition"
                          id="enquiry-email"
                        />
                      </div>
                    </div>

                    {/* Course Selection & Grade */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                          Select Course <sup className="text-red-500">*</sup>
                        </label>
                        <select
                          value={course}
                          onChange={(e) => setCourse(e.target.value)}
                          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-amber-400 focus:outline-none transition"
                          id="enquiry-course"
                        >
                          <option>SSC (9th & 10th)</option>
                          <option>HSC (11th & 12th)</option>
                          <option>Competitive Exams</option>
                          <option>Foundation Courses</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                          Current Grade/Class
                        </label>
                        <select
                          value={grade}
                          onChange={(e) => setGrade(e.target.value)}
                          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-amber-400 focus:outline-none transition"
                          id="enquiry-grade"
                        >
                          <option>6th to 8th Standard</option>
                          <option>9th Grade</option>
                          <option>10th Grade (SSC Board)</option>
                          <option>11th Grade (FYJC)</option>
                          <option>12th Grade (HSC Board)</option>
                          <option>Repeater / Drop-out</option>
                        </select>
                      </div>
                    </div>

                    {/* Additional Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Any specific requirement or message
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={3}
                        placeholder="Let us know doubts, target board percentage or exam focuses..."
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-amber-400 focus:outline-none transition resize-none"
                        id="enquiry-message"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 transition disabled:opacity-75"
                      id="enquiry-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Submitting Enquiry...
                        </>
                      ) : (
                        <>
                          <Send size={16} /> Submit Details
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                  id="enquiry-success-view"
                >
                  <div className="rounded-full bg-green-50 p-3 text-green-600 mb-4 animate-bounce">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-display">
                    Thank You, {studentName}!
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 max-w-sm">
                    Your enquiry has been successfully registered. The academic coordinator from Master Tutorial Akurli will contact you shortly on <strong className="text-slate-900">+91 {phoneNumber}</strong>.
                  </p>
                  <div className="mt-6 flex flex-col gap-2 rounded-xl bg-slate-50 p-4 text-xs text-slate-500 w-full text-left">
                    <div className="flex justify-between">
                      <span>Course:</span>
                      <strong className="text-slate-700">{course}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Standard:</span>
                      <strong className="text-slate-700">{grade}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Parent Name:</span>
                      <strong className="text-slate-700">{parentName}</strong>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
