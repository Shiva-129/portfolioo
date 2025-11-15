'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardSwapProps {
  children: ReactNode[];
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
}

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return <>{children}</>;
}

export default function CardSwap({
  children,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
}: CardSwapProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cards = Array.isArray(children) ? children : [children];

  useEffect(() => {
    if (isPaused && pauseOnHover) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, delay);

    return () => clearInterval(interval);
  }, [cards.length, delay, isPaused, pauseOnHover]);

  const getCardStyle = (index: number) => {
    const totalCards = cards.length;
    let diff = index - currentIndex;
    
    // Normalize the difference to find shortest path
    if (diff > totalCards / 2) {
      diff = diff - totalCards;
    } else if (diff < -totalCards / 2) {
      diff = diff + totalCards;
    }

    const position = diff;
    const absPosition = Math.abs(position);

    return {
      zIndex: totalCards - absPosition,
      y: position * verticalDistance,
      x: position * cardDistance,
      scale: Math.max(0.85, 1 - absPosition * 0.05),
      opacity: absPosition > 2 ? 0 : Math.max(0.3, 1 - absPosition * 0.2),
    };
  };

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {cards.map((card, index) => {
        const style = getCardStyle(index);
        const isActive = index === currentIndex;
        
        return (
          <motion.div
            key={`card-${index}`}
            className="absolute cursor-pointer"
            onClick={() => handleCardClick(index)}
            initial={false}
            animate={{
              zIndex: style.zIndex,
              y: style.y,
              x: style.x,
              scale: style.scale,
              opacity: style.opacity,
            }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 25,
              mass: 0.8,
            }}
            style={{
              transformOrigin: 'center center',
              pointerEvents: style.opacity > 0 ? 'auto' : 'none',
            }}
            whileHover={{
              scale: isActive ? style.scale : style.scale * 1.02,
              transition: { duration: 0.2 },
            }}
          >
            {card}
          </motion.div>
        );
      })}
    </div>
  );
}
