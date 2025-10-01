'use client';

import { BlogPost } from '@/types/blog.types';
import { BookOpen, FileText, Eye, Calendar } from 'lucide-react';

interface BlogStatsProps {
  blogs: BlogPost[];
}

export const BlogStats = ({ blogs }: BlogStatsProps) => {
  const totalBlogs = blogs.length;
  const publishedBlogs = blogs.filter(blog => blog.status === 'published').length;
  const draftBlogs = blogs.filter(blog => blog.status === 'draft').length;
  const totalReadTime = blogs.reduce((acc, blog) => acc + blog.readTime, 0);

  const stats = [
    {
      title: 'Total Blogs',
      value: totalBlogs,
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      title: 'Published',
      value: publishedBlogs,
      icon: Eye,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      title: 'Drafts',
      value: draftBlogs,
      icon: FileText,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      title: 'Total Read Time',
      value: `${totalReadTime}m`,
      icon: Calendar,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.bgColor} rounded-xl p-4 border border-gray-200 dark:border-gray-700`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {stat.title}
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {stat.value}
              </p>
            </div>
            <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
