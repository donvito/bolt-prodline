import React from 'react';
import { AlertCircle, CheckCircle2, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatusBadgeProps {
  status: 'operational' | 'warning' | 'error';
}

const statusConfig = {
  operational: {
    icon: CheckCircle2,
    color: 'text-success-DEFAULT',
    bg: 'bg-success-DEFAULT/10',
    text: 'Operational'
  },
  warning: {
    icon: AlertTriangle,
    color: 'text-warning-DEFAULT',
    bg: 'bg-warning-DEFAULT/10',
    text: 'Warning'
  },
  error: {
    icon: AlertCircle,
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    text: 'Error'
  }
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`flex items-center gap-2 px-3 py-1 rounded-full ${config.bg}`}
    >
      <Icon className={`h-4 w-4 ${config.color}`} />
      <span className={`text-sm font-medium ${config.color}`}>{config.text}</span>
    </motion.div>
  );
}