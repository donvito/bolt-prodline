import React from 'react';
import { Activity, Moon, Sun, Factory, Boxes, TrendingUp, BarChart3, PieChart, Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProductionLine } from './components/ProductionLine';
import { ProductionTrend } from './components/ProductionTrend';
import { DailyProduction } from './components/DailyProduction';
import { Distribution } from './components/Distribution';
import { Events } from './components/Events';
import { ProductionSummary } from './components/ProductionSummary';
import { useRealTimeData } from './hooks/useRealTimeData';

export function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  const data = useRealTimeData();

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-white transition-colors duration-200 bg-gradient-dots bg-dots-sm dark:bg-gradient-dark">
      <div 
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />
      
      <nav className="bg-white/80 dark:bg-card-dark/30 backdrop-blur-xl border-b border-gray-200/20 dark:border-white/5 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <Factory className="h-8 w-8 text-accent-purple" />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">
                  Operations Dashboard
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">Real-time production monitoring</p>
              </div>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors duration-200"
            >
              {darkMode ? (
                <Sun className="h-6 w-6 text-warning-light" />
              ) : (
                <Moon className="h-6 w-6 text-gray-600" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {Object.entries(data.lines).map(([key, line], index) => (
            <ProductionLine
              key={key}
              lineNumber={+key}
              {...line}
              color={index === 0 ? 'primary' : index === 1 ? 'warning' : 'success'}
              icon={index === 0 ? <Boxes className="h-5 w-5" /> : 
                    index === 1 ? <TrendingUp className="h-5 w-5" /> : 
                    <BarChart3 className="h-5 w-5" />}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <ProductionTrend data={data.trend} />
          <DailyProduction data={data.dailyProduction} />
          <ProductionSummary
            total={Object.values(data.lines).reduce((acc, line) => acc + line.total, 0)}
            weeklyAverage={Object.values(data.lines).reduce((acc, line) => acc + line.weeklyAverage, 0)}
            scrap={Object.values(data.lines).reduce((acc, line) => acc + line.scrap, 0)}
            scrapAverage={Object.values(data.lines).reduce((acc, line) => acc + line.scrapAverage, 0)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Distribution data={data.distribution} />
          <Events events={data.events} />
        </div>
      </main>
    </div>
  );
}