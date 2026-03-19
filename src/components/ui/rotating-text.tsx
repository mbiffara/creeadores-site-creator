"use client"

import React, { useCallback, useEffect, useState, useRef } from 'react';
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
  const [width, setWidth] = useState<number | undefined>(undefined);
  const measureRef = useRef<HTMLSpanElement>(null);

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

  useEffect(() => {
    if (measureRef.current) {
      setWidth(measureRef.current.offsetWidth);
    }
  }, [currentIndex, texts]);

  return (
    <span
      className={`inline-block relative align-baseline ${className}`}
      style={{ width: width !== undefined ? `${width}px` : 'auto', transition: 'width 0.3s ease' }}
    >
      {/* Hidden measurer for current text */}
      <span ref={measureRef} className="invisible whitespace-nowrap" aria-hidden="true">
        {texts[currentIndex]}{children}
      </span>
      {/* Animated text */}
      <span className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={transition}
            className="block whitespace-nowrap"
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
