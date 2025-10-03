/* eslint-disable react/no-unescaped-entities */
import { DashboardStats } from '@/types/dashboard.types';
import StatsCard from './StatsCard';
import ActivityChart from './ActivityChart';
import {  Eye, FileText, FolderOpen } from 'lucide-react';

interface DashboardOverviewProps {
  stats: DashboardStats;
}

export default function DashboardOverview({ stats }: DashboardOverviewProps) {
console.log(stats?.lastMonthBlogs)
  const blogStats = [
    {
      title: 'Total Blogs',
      value: stats?.totalBlogs,
      icon: 'FileText',
      color: 'bg-blue-500'
    },
    {
      title: 'Published Blogs',
      value: stats.totalPublishedBlogs,
      icon: 'CheckCircle',
      color: 'bg-green-500'
    },
    {
      title: 'Draft Blogs',
      value: stats.totalDraftBlogs,
      icon: 'Edit3',
      color: 'bg-yellow-500'
    },
    {
      title: 'This Week Blogs',
      value: stats.lastWeekBlogs,
      icon: 'Calendar',
      color: 'bg-purple-500'
    }
  ];

  const viewStats = [
    {
      title: 'Total Views',
      value: stats.totalViews,
      change: stats.lastMonthViews > 0 ? ((stats.lastWeekViews / stats.lastMonthViews) * 100) - 100 : 0,
      changeType: stats.lastWeekViews >= stats.lastMonthViews ? 'increase' : 'decrease',
      icon: 'Eye',
      color: 'bg-indigo-500'
    },
    {
      title: 'Max Views',
      value: stats.maxViews,
      icon: 'TrendingUp',
      color: 'bg-cyan-500'
    },
    {
      title: 'Min Views',
      value: stats.minViews,
      icon: 'TrendingDown',
      color: 'bg-pink-500'
    },
    {
      title: 'This Week Views',
      value: stats.lastWeekViews,
      icon: 'BarChart3',
      color: 'bg-emerald-500'
    },
    {
      title: 'This Month Views',
      value: stats.lastMonthViews,
      icon: 'Calendar',
      color: 'bg-purple-500'
    }
  ];

  const projectStats = [
    {
      title: 'Total Projects',
      value: stats.totalProjects,
      change: stats.lastMonthProjects > 0 ? ((stats.lastWeekProjects / stats.lastMonthProjects) * 100) - 100 : 0,
      changeType: stats.lastWeekProjects >= stats.lastMonthProjects ? 'increase' : 'decrease',
      icon: 'FolderOpen',
      color: 'bg-orange-500'
    },
    {
      title: 'This Week Projects',
      value: stats.lastWeekProjects,
      icon: 'Plus',
      color: 'bg-teal-500'
    },
    {
      title: 'This Month Projects',
      value: stats.lastMonthProjects,
      icon: 'Folder',
      color: 'bg-red-500'
    }
  ];

  console.log(stats)
  return (
    <div className="space-y-8">
      {/* Simple Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-gray-200 dark:border-gray-700 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Welcome back! Here's your content performance overview.
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Statistics */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Blog Analytics</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogStats.map((stat, index) => (
            <StatsCard key={index} stat={stat} />
          ))}
        </div>
      </div>

      {/* Views Statistics */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
            <Eye className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Views Analytics</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {viewStats.map((stat, index) => (
            <StatsCard key={index} stat={stat} />
          ))}
        </div>
      </div>

      {/* Project Statistics */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
            <FolderOpen className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Project Analytics</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectStats.map((stat, index) => (
            <StatsCard key={index} stat={stat} />
          ))}
        </div>
      </div>

      {/* Activity Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityChart stats={stats} />
        </div>
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100/50 dark:border-gray-700/50">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            Recent Activity
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{stats.lastWeekBlogs}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">New blogs this week</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{stats.lastWeekProjects}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">New projects this week</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{stats?.lastWeekViews?.toLocaleString()}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Views this week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
