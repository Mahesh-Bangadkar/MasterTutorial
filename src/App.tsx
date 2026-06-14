/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import FacultySection from './components/FacultySection';
import Courses from './components/Courses';
import AboutAchievements from './components/AboutAchievements';
import Testimonials from './components/Testimonials';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import { Enquiry } from './types';
import Popup from "./components/Popup";

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [preselectedCourse, setPreselectedCourse] = useState('SSC (9th & 10th)');
  const [activeSection, setActiveSection] = useState('home');
  const [enquiryTracker, setEnquiryTracker] = useState(0);

  // Scroll spy implementation for highlighting active navbar section
  useEffect(() => {
    const sections = ['home', 'about', 'faculty', 'courses', 'facilities', 'gallery', 'contact'];
    
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 160; // offset

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    // Initial call
    handleScrollSpy();

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const openEnquiryWithCourse = (courseName: string) => {
    setPreselectedCourse(courseName);
    setIsEnquiryOpen(true);
  };

  const handleEnquiryCreated = (newEnq: Enquiry) => {
    // Notify Footer (increases state tracker to trigger local storage reload)
    setEnquiryTracker(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-800" id="application-root">
      
      {/* 1. Header Navigation Control (Handles calls and primary triggers) */}
      <Header
        onEnquireClick={() => openEnquiryWithCourse('SSC (9th & 10th)')}
        activeSection={activeSection}
      />

      {/* 2. Main Scrolling Sections Container */}
      <main className="grow">
         <Popup />
        
        {/* A. Hero Banner with student mockup and orbiting badges */}
        <Hero onEnquireClick={() => openEnquiryWithCourse('SSC (9th & 10th)')} />

        {/* B. Ribbon Highlights of tutoring pillars container */}
        <StatsBar />

        {/* C. Faculty profile and founder spotlight */}
        <FacultySection />

        {/* D. Secondary Section: Courses Catalogue of Cards */}
        <Courses onEnquireClick={openEnquiryWithCourse} />

        {/* E. Double Sided block: About text details + Achievements box */}
        <AboutAchievements />

        {/* F. Facilities Slider / grid */}
        <Facilities />

        {/* G. Testimonials parent / child quotes slider wrapper */}
        <Testimonials />

        {/* H. Lightbox Category photo directory */}
        <Gallery />

      </main>

      {/* 3. Footer Area / Map Directives / Lead Sheet Dashboard */}
      <Footer 
        onEnquireClick={() => openEnquiryWithCourse('SSC (9th & 10th)')}
        enquiriesCount={enquiryTracker}
      />

      {/* 4. Overlay Enquiry Modal Panel */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        preselectedCourse={preselectedCourse}
        onSuccess={handleEnquiryCreated}
      />

    </div>
  );
}

