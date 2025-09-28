'use client';

import { useState } from 'react';
import { Plus, FolderOpen, BookOpen, User, Settings } from 'lucide-react';
import { AddProjectForm } from '@/components/models/Projects';

export default function DashboardPage() {
  const [showProjectForm, setShowProjectForm] = useState(false);

  const quickActions = [
    {
      title: 'Create Project',
      description: 'Add a new project to your portfolio',
      icon: FolderOpen,
      action: () => setShowProjectForm(true),
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Write Blog',
      description: 'Share your thoughts and experiences',
      icon: BookOpen,
      action: () => console.log('Blog'),
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Update Profile',
      description: 'Keep your information current',
      icon: User,
      action: () => console.log('Profile'),
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Settings',
      description: 'Customize your dashboard',
      icon: Settings,
      action: () => console.log('Settings'),
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Welcome back! Manage your portfolio and content.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                onClick={action.action}
                className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-left"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {action.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {action.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Total Projects</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">12</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <FolderOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Blog Posts</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">8</p>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Profile Views</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">1.2k</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <User className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <Plus className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900 dark:text-white font-medium">Project created</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">E-commerce Platform was added to your portfolio</p>
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-sm">2 hours ago</span>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900 dark:text-white font-medium">Blog post published</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Getting Started with Next.js 15</p>
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-sm">1 day ago</span>
            </div>
          </div>
        </div>

        {/* Project Creation Modal */}
        {showProjectForm && (
          <AddProjectForm onClose={() => setShowProjectForm(false)} />
        )}
      </div>
    </div>
  );
}
