import { useState, useEffect } from 'react';

interface ProductionData {
  lines: {
    [key: number]: {
      total: number;
      weeklyAverage: number;
      scrap: number;
      scrapAverage: number;
      percentage: number;
      status: 'operational' | 'warning' | 'error';
      efficiency: number;
    };
  };
  dailyProduction: { day: string; value: number }[];
  trend: { day: string; value: number }[];
  distribution: { name: string; value: number }[];
  events: {
    startTime: string;
    responseTime: string;
    duration: string;
    text: string;
    priority: number;
  }[];
}

const initialData: ProductionData = {
  lines: {
    1: { total: 48.38, weeklyAverage: 442.65, scrap: 2.41, scrapAverage: 5.35, percentage: 20, status: 'operational', efficiency: 95 },
    2: { total: 51.37, weeklyAverage: 442.65, scrap: 2.41, scrapAverage: 5.35, percentage: 72, status: 'warning', efficiency: 88 },
    3: { total: 45.38, weeklyAverage: 442.65, scrap: 2.41, scrapAverage: 5.35, percentage: 69, status: 'operational', efficiency: 92 }
  },
  dailyProduction: [
    { day: 'Mon', value: 350 },
    { day: 'Tue', value: 400 },
    { day: 'Wed', value: 380 },
    { day: 'Thu', value: 390 },
    { day: 'Fri', value: 410 },
    { day: 'Sat', value: 320 },
    { day: 'Sun', value: 300 }
  ],
  trend: Array.from({ length: 8 }, (_, i) => ({
    day: (i + 1).toString(),
    value: 2700 + Math.random() * 40
  })),
  distribution: [
    { name: 'Line 1', value: 34 },
    { name: 'Line 2', value: 33 },
    { name: 'Line 3', value: 33 }
  ],
  events: [
    { startTime: '25/12/2023 - 09:00', responseTime: '00:00:00', duration: '01:00:00', text: 'Test Item', priority: 9 },
    { startTime: '26/12/2023 - 09:00', responseTime: '00:00:00', duration: '01:00:00', text: 'Test Item', priority: 6 },
    { startTime: '27/12/2023 - 09:00', responseTime: '00:00:00', duration: '01:00:00', text: 'Test Item', priority: 7 }
  ]
};

function simulateDataChange(currentData: ProductionData): ProductionData {
  return {
    lines: Object.entries(currentData.lines).reduce((acc, [key, line]) => ({
      ...acc,
      [key]: {
        ...line,
        total: +(line.total + (Math.random() - 0.5) * 2).toFixed(2),
        percentage: Math.min(100, Math.max(0, line.percentage + (Math.random() - 0.5) * 5)),
        efficiency: Math.min(100, Math.max(0, line.efficiency + (Math.random() - 0.5) * 2))
      }
    }), {}),
    dailyProduction: currentData.dailyProduction.map(item => ({
      ...item,
      value: Math.max(0, item.value + (Math.random() - 0.5) * 20)
    })),
    trend: [...currentData.trend.slice(1), {
      day: (+currentData.trend[currentData.trend.length - 1].day + 1).toString(),
      value: 2700 + Math.random() * 40
    }],
    distribution: currentData.distribution.map(item => ({
      ...item,
      value: Math.max(0, Math.min(100, item.value + (Math.random() - 0.5) * 2))
    })),
    events: currentData.events
  };
}

export function useRealTimeData() {
  const [data, setData] = useState<ProductionData>(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(current => simulateDataChange(current));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return data;
}