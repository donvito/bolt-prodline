import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Line 1', value: 34 },
  { name: 'Line 2', value: 33 },
  { name: 'Line 3', value: 33 },
];

const COLORS = ['#3B82F6', '#F59E0B', '#10B981'];
const COLORS_DARK = ['#60A5FA', '#FBBF24', '#34D399'];

export function Distribution() {
  const isDark = document.documentElement.classList.contains('dark');
  const colors = isDark ? COLORS_DARK : COLORS;

  return (
    <div className="bg-card-light dark:bg-card-dark rounded-lg shadow-md p-6 transition-colors duration-200">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Distribution</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '0.5rem',
                color: '#FFFFFF'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        {data.map((entry, index) => (
          <div key={entry.name} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[index] }} />
            <span className="text-sm text-gray-600 dark:text-gray-300">{entry.name}: {entry.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}