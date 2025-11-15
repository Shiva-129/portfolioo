'use client';

import Link from 'next/link';
import { useState } from 'react';
import RotatingText from './RotatingText';

export default function Header() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-zinc-900/10 backdrop-blur-md border-b border-white/20 dark:border-zinc-700/20">
      <nav className="container mx-auto px-6 py-4 flex justify-start items-center">
        <div className="flex items-center gap-12 ml-20">
          <Link 
            href="#home" 
            className="relative text-lg font-medium"
            onMouseEnter={() => setHoveredLink('home')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {hoveredLink === 'home' ? (
              <RotatingText
                texts={['Home', 'Home', 'Home', 'Home']}
                mainClassName="text-black dark:text-white overflow-hidden"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            ) : (
              <span className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Home</span>
            )}
          </Link>
          
          <Link 
            href="#about" 
            className="relative text-lg font-medium"
            onMouseEnter={() => setHoveredLink('about')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {hoveredLink === 'about' ? (
              <RotatingText
                texts={['About me', 'About me', 'About me', 'About me']}
                mainClassName="text-black dark:text-white overflow-hidden"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            ) : (
              <span className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">About me</span>
            )}
          </Link>
          
          <Link 
            href="#projects" 
            className="relative text-lg font-medium"
            onMouseEnter={() => setHoveredLink('projects')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {hoveredLink === 'projects' ? (
              <RotatingText
                texts={['Projects', 'Projects', 'Projects', 'Projects']}
                mainClassName="text-black dark:text-white overflow-hidden"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            ) : (
              <span className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Projects</span>
            )}
          </Link>
          
          <Link 
            href="#skills" 
            className="relative text-lg font-medium"
            onMouseEnter={() => setHoveredLink('skills')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {hoveredLink === 'skills' ? (
              <RotatingText
                texts={['Skills', 'Skills', 'Skills', 'Skills']}
                mainClassName="text-black dark:text-white overflow-hidden"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            ) : (
              <span className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Skills</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
