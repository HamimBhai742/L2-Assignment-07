/* eslint-disable @typescript-eslint/no-require-imports */
import { StatCard } from '@/types/dashboard.types';

interface StatsCardProps {
  stat: StatCard;
}

export default function StatsCard({ stat }: StatsCardProps) {
  const IconComponent = require('lucide-react')[stat.icon];
  return (
    <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-1'>
      <div className='flex items-center justify-between mb-4'>
        <div className={`p-4 rounded-xl ${stat.color} shadow-lg`}>
          <IconComponent className='w-8 h-8 text-white' />
        </div>

      </div>

      <div>
        <p className='text-sm font-medium text-gray-500 dark:text-gray-400 mb-2'>
          {stat.title}
        </p>
        <p className='text-3xl font-bold text-gray-900 dark:text-white'>
          {stat?.value?.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
