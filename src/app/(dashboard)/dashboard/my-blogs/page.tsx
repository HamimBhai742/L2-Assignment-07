'use client';

import { useState, useMemo } from 'react';
import { Plus, Grid, List } from 'lucide-react';
import { BlogPost, BlogFilters as BlogFiltersType } from '@/types/blog.types';
import { BlogCard } from '@/components/models/Blog/BlogCard';
import { BlogFilters } from '@/components/models/Blog/BlogFilters';
import { BlogStats } from '@/components/models/Blog/BlogStats';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

// Mock data - replace with actual API calls
const mockBlogs: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 15',
    description: 'Learn how to build modern web applications with the latest features of Next.js 15.',
    content: 'Full content here...',
    category: 'Web_Development',
    tags: ['nextjs', 'react', 'typescript'],
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    slug: 'getting-started-nextjs-15',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    status: 'published',
    readTime: 8
  },
  {
    id: '2',
    title: 'Building Responsive UIs with Tailwind CSS',
    description: 'Master the art of creating beautiful, responsive user interfaces using Tailwind CSS.',
    content: 'Full content here...',
    category: 'Technology',
    tags: ['tailwind', 'css', 'responsive'],
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    slug: 'responsive-uis-tailwind',
    createdAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z',
    status: 'draft',
    readTime: 12
  },
  {
    id: '3',
    title: 'TypeScript Best Practices for React',
    description: 'Discover essential TypeScript patterns and practices for React development.',
    content: 'Full content here...',
    category: 'Programming',
    tags: ['typescript', 'react', 'best-practices'],
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    slug: 'typescript-react-best-practices',
    createdAt: '2024-01-05T09:15:00Z',
    updatedAt: '2024-01-05T09:15:00Z',
    status: 'published',
    readTime: 15
  }
];

const MyBlogsPage = () => {
  const router = useRouter();
  const [blogs] = useState<BlogPost[]>(mockBlogs);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState<BlogFiltersType>({
    category: '',
    status: 'all',
    search: ''
  });

  // Filter blogs based on current filters
  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => {
      const matchesSearch = !filters.search || 
        blog.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        blog.description.toLowerCase().includes(filters.search.toLowerCase());
      
      const matchesCategory = !filters.category || blog.category === filters.category;
      
      const matchesStatus = filters.status === 'all' || blog.status === filters.status;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [blogs, filters]);

  const handleEdit = (blog: BlogPost) => {
    router.push(`/dashboard/create-blog?edit=${blog.id}`);
  };

  const handleDelete = (id: string) => {
    // Implement delete functionality
    toast.success('Blog deleted successfully');
  };

  const handleView = (blog: BlogPost) => {
    // Implement view functionality
    router.push(`/blog/${blog.slug}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            My Blogs
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage and organize your blog posts
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          {/* View Mode Toggle */}
          <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list'
                  ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          {/* Create Blog Button */}
          <button
            onClick={() => router.push('/dashboard/create-blog')}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">New Blog</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <BlogStats blogs={blogs} />

      {/* Filters */}
      <BlogFilters filters={filters} onFiltersChange={setFilters} />

      {/* Blog Grid/List */}
      {filteredBlogs.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
            <Plus className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No blogs found
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            {filters.search || filters.category || filters.status !== 'all'
              ? 'Try adjusting your filters'
              : 'Get started by creating your first blog post'}
          </p>
          <button
            onClick={() => router.push('/dashboard/create-blog')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            Create Your First Blog
          </button>
        </div>
      ) : (
        <div className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-4'
        }>
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onView={handleView}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBlogsPage;
