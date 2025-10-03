import { DashboardStats } from '@/types/dashboard.types';

interface ActivityChartProps {
  stats: DashboardStats;
}

export default function ActivityChart({ stats }: ActivityChartProps) {
  const chartData = [
    { 
      label: 'Blogs', 
      total: stats.totalBlogs, 
      recent: stats.lastWeekBlogs, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    { 
      label: 'Projects', 
      total: stats.totalProjects, 
      recent: stats.lastWeekProjects, 
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20'
    },
    { 
      label: 'Views', 
      total: Math.floor(stats.totalViews / 100), 
      recent: Math.floor(stats.lastWeekViews / 10), 
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    }
  ];

  const maxValue = Math.max(...chartData.map(item => item.total));

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100/50 dark:border-gray-700/50">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Activity Overview</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <span>Last 7 days</span>
        </div>
      </div>
      
      <div className="space-y-8">
        {chartData.map((item, index) => (
          <div key={index} className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 bg-gradient-to-r ${item.color} rounded-full`}></div>
                <span className="text-lg font-semibold text-gray-900 dark:text-white">{item.label}</span>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <p className="text-sm text-gray-500 dark:text-gray-400">This week</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{item.recent}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{item.total}</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out rounded-full relative`}
                  style={{ width: `${(item.total / maxValue) * 100}%` }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>
              
              {/* Recent activity indicator */}
              <div className="absolute top-0 h-3 flex items-center" style={{ left: `${(item.recent / maxValue) * 100}%` }}>
                <div className="w-1 h-6 bg-white dark:bg-gray-900 rounded-full shadow-lg -translate-x-0.5"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <span>Total Activity</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-1 h-4 bg-white dark:bg-gray-900 rounded-full"></div>
            <span>Weekly Progress</span>
          </div>
        </div>
      </div>
    </div>
  );
}
