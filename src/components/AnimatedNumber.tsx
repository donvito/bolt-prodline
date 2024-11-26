import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface AnimatedNumberProps {
  value: number;
  precision?: number;
  className?: string;
}

export function AnimatedNumber({ value, precision = 2, className = '' }: AnimatedNumberProps) {
  const springConfig = { damping: 15, stiffness: 100 };
  const spring = useSpring(0, springConfig);
  const display = useTransform(spring, (current) => current.toFixed(precision));

  React.useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return <motion.span className={className}>{display}</motion.span>;
}