import { BlogPost } from '@/types/blog.types';
import { BookOpen, Calendar, Tag, Clock } from 'lucide-react';

interface BlogStatsProps {
  blogs: BlogPost[];
}

export const BlogStats = ({ blogs }: BlogStatsProps) => {
  const publishedBlogs = blogs.filter(blog => blog.status === 'published');
  const totalReadTime = publishedBlogs.reduce((acc, blog) => acc + (blog.readTime || 0), 0);
  const categories = [...new Set(publishedBlogs.map(blog => blog.category))];
  const totalTags = [...new Set(publishedBlogs.flatMap(blog => blog.tags))];

  const stats = [
    {
      title: 'Published Articles',
      value: publishedBlogs.length,
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Categories',
      value: categories.length,
      icon: Tag,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-600 dark:text-green-400'
    },
    {
      title: 'Total Tags',
      value: totalTags.length,
      icon: Calendar,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      textColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      title: 'Reading Time',
      value: `${totalReadTime}m`,
      icon: Clock,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      textColor: 'text-orange-600 dark:text-orange-400'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bgColor} rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/20 dark:border-gray-700/50 backdrop-blur-sm shadow-lg`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                  {stat.title}
                </p>
                <p className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
              <div className={`p-2 lg:p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                <stat.icon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
