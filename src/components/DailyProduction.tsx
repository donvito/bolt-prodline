import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', value: 350 },
  { day: 'Tue', value: 400 },
  { day: 'Wed', value: 380 },
  { day: 'Thu', value: 390 },
  { day: 'Fri', value: 410 },
  { day: 'Sat', value: 320 },
  { day: 'Sun', value: 300 },
];

export function DailyProduction() {
  return (
    <div className="bg-card-light dark:bg-card-dark rounded-lg shadow-md p-6 transition-colors duration-200">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Daily Production</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="day" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '0.5rem',
                color: '#FFFFFF'
              }}
            />
            <Bar dataKey="value" fill="#F59E0B" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}