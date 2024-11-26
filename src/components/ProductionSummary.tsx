import React from 'react';

interface ProductionSummaryProps {
  total: number;
  weeklyAverage: number;
  scrap: number;
  scrapAverage: number;
}

export function ProductionSummary({
  total,
  weeklyAverage,
  scrap,
  scrapAverage,
}: ProductionSummaryProps) {
  return (
    <div className="bg-card-light dark:bg-card-dark rounded-lg shadow-md p-6 transition-colors duration-200">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Production Summary</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">Total</span>
          <span className="font-semibold text-gray-900 dark:text-white">{total}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">Weekly Average</span>
          <span className="font-semibold text-gray-900 dark:text-white">{weeklyAverage}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">Scrap</span>
          <span className="font-semibold text-gray-900 dark:text-white">{scrap}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">Scrap Average</span>
          <span className="font-semibold text-gray-900 dark:text-white">{scrapAverage}</span>
        </div>
      </div>
    </div>
  );
}