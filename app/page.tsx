'use client';

import { useState } from 'react';
import { NavBar } from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import { Home as HomeIcon, User, Briefcase, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [headerVisible, setHeaderVisible] = useState(false);

  const navItems = [
    { name: 'Home', url: '#home', icon: HomeIcon },
    { name: 'About', url: '#about', icon: User },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Skills', url: '#skills', icon: FileText },
  ];

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {headerVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed inset-0 z-50 pointer-events-none"
          >
            <NavBar items={navItems} className="pointer-events-auto" />
          </motion.div>
        )}
      </AnimatePresence>

      <Hero onAnimationComplete={() => setHeaderVisible(true)} />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
