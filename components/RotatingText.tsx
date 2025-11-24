'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingTextProps {
  texts: string[];
  mainClassName?: string;
  staggerFrom?: 'first' | 'last' | 'center';
  initial?: { y: string };
  animate?: { y: number };
  exit?: { y: string };
  staggerDuration?: number;
  splitLevelClassName?: string;
  transition?: {
    type?: "spring" | "tween";
    damping?: number;
    stiffness?: number;
    // allow additional framer-motion transition properties
    [key: string]: any;
  };
  rotationInterval?: number;
}

export default function RotatingText({
  texts,
  mainClassName = '',
  staggerFrom = 'last',
  initial = { y: '100%' },
  animate = { y: 0 },
  exit = { y: '-120%' },
  staggerDuration = 0.025,
  splitLevelClassName = '',
  transition = { type: 'spring', damping: 30, stiffness: 400 },
  rotationInterval = 2000,
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  const getStaggerDelay = (index: number, length: number) => {
    if (staggerFrom === 'first') {
      return index * staggerDuration;
    } else if (staggerFrom === 'last') {
      return (length - 1 - index) * staggerDuration;
    } else {
      const middle = Math.floor(length / 2);
      return Math.abs(middle - index) * staggerDuration;
    }
  };

  return (
    <div className={mainClassName}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="flex"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {texts[currentIndex].split('').map((char, index) => (
            <div key={index} className={splitLevelClassName}>
              <motion.span
                className="inline-block"
                initial={initial}
                animate={animate}
                exit={exit}
                transition={{
                  ...transition,
                  delay: getStaggerDelay(index, texts[currentIndex].length),
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
