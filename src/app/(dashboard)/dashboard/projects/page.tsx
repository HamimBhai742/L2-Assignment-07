'use client';
import { useState } from 'react';
import { Plus, Grid3X3, List, Search } from 'lucide-react';
// import { AddProjectForm } from '@/components/models/Projects';
import ProjectsList from '@/components/models/Projects/ProjectsList';

export default function ProjectsPage() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 p-4 lg:p-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='mb-8'>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
            <div>
              <h1 className='text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
                Projects
              </h1>
              <p className='text-gray-600 dark:text-gray-400 mt-1'>
                Manage and showcase your portfolio projects
              </p>
            </div>

            <button
              onClick={() => setShowAddForm(true)}
              className='flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-medium'
            >
              <Plus className='h-5 w-5' />
              <span>Add Project</span>
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className='flex flex-col sm:flex-row gap-4 mb-8'>
          {/* Search */}
          <div className='relative flex-1'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
            <input
              type='text'
              placeholder='Search projects...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
            />
          </div>

          {/* View Toggle */}
          <div className='flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-1'>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                viewMode === 'grid'
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              <Grid3X3 className='h-4 w-4' />
              <span className='hidden sm:inline'>Grid</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                viewMode === 'list'
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              <List className='h-4 w-4' />
              <span className='hidden sm:inline'>List</span>
            </button>
          </div>
        </div>

        {/* Projects List */}
        <ProjectsList
          viewMode={viewMode}
          searchTerm={searchTerm}
          setShowAddForm={setShowAddForm}
          showAddForm={showAddForm}
        />
      </div>
    </div>
  );
}
