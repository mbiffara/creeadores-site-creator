"use client"

import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence, Transition } from 'motion/react';

interface RotatingTextProps {
  texts: string[];
  transition?: Transition;
  rotationInterval?: number;
  loop?: boolean;
  auto?: boolean;
  className?: string;
  children?: React.ReactNode;
  textStyle?: React.CSSProperties;
}

const RotatingText: React.FC<RotatingTextProps> = ({
  texts,
  transition = { type: 'spring', damping: 25, stiffness: 300 },
  rotationInterval = 2000,
  loop = true,
  auto = true,
  className = '',
  children,
  textStyle,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const longestText = useMemo(
    () => texts.reduce((a, b) => (a.length >= b.length ? a : b), ''),
    [texts]
  );

  const next = useCallback(() => {
    setCurrentIndex(prev => {
      const nextIdx = prev === texts.length - 1 ? (loop ? 0 : prev) : prev + 1;
      return nextIdx;
    });
  }, [texts.length, loop]);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(next, rotationInterval);
    return () => clearInterval(id);
  }, [next, rotationInterval, auto]);

  return (
    <span className={`inline-block relative align-baseline ${className}`}>
      {/* Invisible text to hold width and establish baseline */}
      <span className="invisible" aria-hidden="true">{longestText}{children}</span>
      {/* Overflow-hidden on inner wrapper so outer inline-block keeps correct baseline */}
      <span className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={transition}
            className="block"
            style={textStyle}
            aria-label={texts[currentIndex]}
          >
            {texts[currentIndex]}{children}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
};

export default RotatingText;
