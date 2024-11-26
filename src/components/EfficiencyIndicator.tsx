import React from 'react';
import { motion } from 'framer-motion';

interface EfficiencyIndicatorProps {
  value: number;
}

export function EfficiencyIndicator({ value }: EfficiencyIndicatorProps) {
  const getColor = (efficiency: number) => {
    if (efficiency >= 90) return 'bg-success-DEFAULT';
    if (efficiency >= 75) return 'bg-warning-DEFAULT';
    return 'bg-red-500';
  };

  return (
    <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.5 }}
        className={`absolute h-full ${getColor(value)} rounded-full`}
      />
    </div>
  );
}