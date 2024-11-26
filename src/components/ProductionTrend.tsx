import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: '1', value: 2720 },
  { day: '2', value: 2740 },
  { day: '3', value: 2700 },
  { day: '4', value: 2730 },
  { day: '5', value: 2710 },
  { day: '6', value: 2735 },
  { day: '7', value: 2715 },
  { day: '8', value: 2705 },
];

export function ProductionTrend() {
  const isDark = document.documentElement.classList.contains('dark');

  return (
    <div className="bg-white dark:bg-card-dark rounded-lg shadow-card dark:shadow-none p-6 transition-colors duration-200">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Production Trend</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#E5E7EB"} />
            <XAxis dataKey="day" stroke={isDark ? "#9CA3AF" : "#6B7280"} />
            <YAxis domain={[2600, 2800]} stroke={isDark ? "#9CA3AF" : "#6B7280"} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
                border: '1px solid',
                borderColor: isDark ? '#374151' : '#E5E7EB',
                borderRadius: '0.5rem',
                color: isDark ? '#FFFFFF' : '#1F2937'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#2563EB"
              strokeWidth={2}
              dot={{ fill: '#2563EB' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}