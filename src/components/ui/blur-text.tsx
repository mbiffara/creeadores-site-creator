"use client"

import { motion, Transition, Easing } from 'motion/react';
import { useEffect, useRef, useState, useMemo } from 'react';

type BlurTextProps = {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  easing?: Easing | Easing[];
  onAnimationComplete?: () => void;
  stepDuration?: number;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3';
  elementStyle?: React.CSSProperties;
};

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  easing = (t: number) => t,
  onAnimationComplete,
  stepDuration = 0.35,
  as: Tag = 'span',
  elementStyle
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === 'top' ? { filter: 'blur(10px)', opacity: 0, y: -30 } : { filter: 'blur(10px)', opacity: 0, y: 30 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      { filter: 'blur(5px)', opacity: 0.5, y: direction === 'top' ? 3 : -3 },
      { filter: 'blur(0px)', opacity: 1, y: 0 }
    ],
    [direction]
  );

  const stepCount = defaultTo.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));

  const buildKeyframes = (from: Record<string, string | number>, steps: Record<string, string | number>[]) => {
    const keys = new Set<string>([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);
    const keyframes: Record<string, (string | number)[]> = {};
    keys.forEach(k => { keyframes[k] = [from[k], ...steps.map(s => s[k])]; });
    return keyframes;
  };

  return (
    <Tag ref={ref as React.RefObject<HTMLElement> as any} className={`${className} inline`}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(defaultFrom, defaultTo);

        const spanTransition: Transition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing
        };

        return (
          <motion.span
            key={index}
            initial={defaultFrom}
            animate={inView ? animateKeyframes : defaultFrom}
            transition={spanTransition}
            onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
            style={{ display: 'inline-block', willChange: 'transform, filter, opacity', ...elementStyle }}
          >
            {segment === ' ' ? '\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </motion.span>
        );
      })}
    </Tag>
  );
};

export default BlurText;
