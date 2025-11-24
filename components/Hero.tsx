'use client'

import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { SpiralAnimation } from './SpiralAnimation';
import { Button } from './Button';

interface HeroProps {
  onAnimationComplete?: () => void;
}

export default function Hero({ onAnimationComplete }: HeroProps) {
  const [textVisible, setTextVisible] = useState(false);

  const handleSpiralComplete = () => {
    setTextVisible(true);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black pt-20 relative overflow-hidden">

      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <SpiralAnimation onComplete={handleSpiralComplete} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl ml-20">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={textVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-7xl font-bold mb-1 text-white"
          >
            Shiva Sathwik
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={textVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-3xl mb-2 text-gray-300"
          >
            I'm Web Developer, Desginer
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={textVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            onAnimationComplete={() => {
              if (textVisible && onAnimationComplete) {
                onAnimationComplete();
              }
            }}
            className="flex gap-2"
          >
            <Button
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="icon"
              neon={true}
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-white" />
            </Button>
            <Button
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="icon"
              neon={true}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </Button>
            <Button
              href="mailto:your.email@example.com"
              variant="ghost"
              size="icon"
              neon={true}
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-white" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
