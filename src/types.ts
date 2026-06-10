/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Enquiry {
  id: string;
  studentName: string;
  parentName: string;
  phoneNumber: string;
  email?: string;
  course: string;
  grade: string;
  message: string;
  date: string;
  status: 'Pending' | 'Contacted' | 'Enrolled' | 'Closed';
}

export interface Course {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  board: string;
  subjects: string[];
  duration: string;
  badgeColor: string; // Tailwind class
  iconName: 'BookOpen' | 'GraduationCap' | 'Lightbulb' | 'PencilRuler';
  features: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarColor: string; // Tailwind bg for avatar
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: 'Laptop' | 'BookOpen' | 'Users' | 'CalendarDays' | 'Tv' | 'Award';
  image: string;
}

export interface GalleryItem {
  id: string;
  category: 'Classroom' | 'Events' | 'Toppers' | 'Activities';
  title: string;
  image: string;
  description: string;
}

export interface Achievement {
  id: string;
  value: string;
  label: string;
  subLabel: string;
  iconName: 'Users' | 'Trophy' | 'Sparkles' | 'MapPin';
}
