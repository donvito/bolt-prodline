import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { motion } from 'framer-motion';
import 'react-circular-progressbar/dist/styles.css';
import { AnimatedNumber } from './AnimatedNumber';
import { StatusBadge } from './StatusBadge';
import { EfficiencyIndicator } from './EfficiencyIndicator';

interface ProductionLineProps {
  lineNumber: number;
  total: number;
  weeklyAverage: number;
  scrap: number;
  scrapAverage: number;
  percentage: number;
  color: 'primary' | 'warning' | 'success';
  icon: React.ReactNode;
  status: 'operational' | 'warning' | 'error';
  efficiency: number;
}

const colorMap = {
  primary: {
    border: 'border-primary-DEFAULT',
    path: '#2563EB',
    pathDark: '#60A5FA',
    gradient: 'from-primary-light/20 to-primary-DEFAULT/20',
    iconBg: 'bg-primary-light/20'
  },
  warning: {
    border: 'border-warning-DEFAULT',
    path: '#D97706',
    pathDark: '#FBBF24',
    gradient: 'from-warning-light/20 to-warning-DEFAULT/20',
    iconBg: 'bg-warning-light/20'
  },
  success: {
    border: 'border-success-DEFAULT',
    path: '#059669',
    pathDark: '#34D399',
    gradient: 'from-success-light/20 to-success-DEFAULT/20',
    iconBg: 'bg-success-light/20'
  }
};

export function ProductionLine({
  lineNumber,
  total,
  weeklyAverage,
  scrap,
  scrapAverage,
  percentage,
  color,
  icon,
  status,
  efficiency
}: ProductionLineProps) {
  const isDark = document.documentElement.classList.contains('dark');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: lineNumber * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`bg-white dark:bg-card-dark bg-gradient-to-br ${colorMap[color].gradient} backdrop-blur-sm rounded-lg shadow-card dark:shadow-none p-6 relative overflow-hidden transition-all duration-200`}
    >
      <div className="relative space-y-4">
        <div className="flex justify-between items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: lineNumber * 0.2 }}
            className="flex items-center gap-3"
          >
            <div className={`p-2 rounded-lg ${colorMap[color].iconBg}`}>
              {icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Production Line {lineNumber}
              </h3>
              <StatusBadge status={status} />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: lineNumber * 0.3 
            }}
            className="w-24 h-24"
          >
            <CircularProgressbar
              value={percentage}
              text={`${percentage.toFixed(1)}%`}
              styles={buildStyles({
                pathColor: isDark ? colorMap[color].pathDark : colorMap[color].path,
                textColor: isDark ? '#FFFFFF' : '#1F2937',
                trailColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                pathTransition: 'stroke-dashoffset 0.5s ease 0s',
              })}
            />
          </motion.div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">Efficiency</span>
            <span className="font-medium text-gray-900 dark:text-gray-300">{efficiency.toFixed(1)}%</span>
          </div>
          <EfficiencyIndicator value={efficiency} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: lineNumber * 0.3 }}
            className="p-3 rounded-lg bg-gray-50 dark:bg-white/5"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">Total</p>
            <AnimatedNumber 
              value={total}
              className="text-xl font-bold text-gray-900 dark:text-white"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: lineNumber * 0.4 }}
            className="p-3 rounded-lg bg-gray-50 dark:bg-white/5"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">Weekly Average</p>
            <AnimatedNumber 
              value={weeklyAverage}
              className="text-xl font-bold text-gray-900 dark:text-white"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: lineNumber * 0.5 }}
            className="p-3 rounded-lg bg-gray-50 dark:bg-white/5"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">Scrap</p>
            <AnimatedNumber 
              value={scrap}
              className="text-xl font-bold text-gray-900 dark:text-white"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: lineNumber * 0.6 }}
            className="p-3 rounded-lg bg-gray-50 dark:bg-white/5"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">Scrap Average</p>
            <AnimatedNumber 
              value={scrapAverage}
              className="text-xl font-bold text-gray-900 dark:text-white"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}