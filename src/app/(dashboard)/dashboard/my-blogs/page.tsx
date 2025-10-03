'use client';

import { useState, useMemo, useEffect } from 'react';
import { Plus, Grid, List } from 'lucide-react';
import { BlogPost, BlogFilters as BlogFiltersType } from '@/types/blog.types';
import { BlogCard } from '@/components/models/MyBlog/BlogCard';
import { BlogFilters } from '@/components/models/MyBlog/BlogFilters';
import { BlogStats } from '@/components/models/MyBlog/BlogStats';
import { BlogPreviewModal } from '@/components/models/MyBlog/BlogPreviewModal';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

// export const metadata = {
//   title: 'My Blogs',
//   description: 'Manage and publish your blog posts.',
// };

const MyBlogsPage = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [previewBlog, setPreviewBlog] = useState<BlogPost | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [filters, setFilters] = useState<BlogFiltersType>({
    category: '',
    status: 'all',
    search: '',
  });

  useEffect(() => {
    const myBlogs = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/my-blogs?${
          filters.category ? `category=${filters.category}` : ''
        }&${
          filters.status !== 'all' ? `status=${filters.status}` : ''
        }&search=${filters.search}`,
        {
          method: 'GET',
          credentials: 'include',
        }
      );
      const data = await res.json();
      setBlogs(data?.data);
      console.log(data);
    };
    myBlogs();
  }, [filters]);

  const handleEdit = (blog: BlogPost) => {
    router.push(`/dashboard/update-blog/${blog.id}`);
  };

  const handleDelete = (id: string) => {
    // Implement delete functionality
    toast.success('Blog deleted successfully');
  };

  const handleView = (blog: BlogPost) => {
    setPreviewBlog(blog);
    setIsPreviewOpen(true);
  };

  console.log(filters);

  return (
    <div className='space-y-6'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
        <div>
          <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>
            My Blogs
          </h1>
          <p className='text-gray-600 dark:text-gray-400 mt-1'>
            Manage and organize your blog posts
          </p>
        </div>

        <div className='flex justify-between items-center gap-3'>
          {/* View Mode Toggle */}
          <div className='flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-1'>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <Grid className='w-4 h-4' />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list'
                  ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <List className='w-4 h-4' />
            </button>
          </div>

          {/* Create Blog Button */}
          <button
            onClick={() => router.push('/dashboard/create-blog')}
            className='flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors'
          >
            <Plus className='w-4 h-4' />
            <span className='hidden sm:inline'>New Blog</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <BlogStats blogs={blogs} />

      {/* Filters */}
      <BlogFilters filters={filters} onFiltersChange={setFilters} />

      {/* Blog Grid/List */}
      {blogs.length === 0 ? (
        <div className='text-center py-12'>
          <div className='w-24 h-24 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center'>
            <Plus className='w-8 h-8 text-gray-400' />
          </div>
          <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-2'>
            No blogs found
          </h3>
          <p className='text-gray-500 dark:text-gray-400 mb-4'>
            {filters.search || filters.category || filters.status !== 'all'
              ? 'Try adjusting your filters'
              : 'Get started by creating your first blog post'}
          </p>
          <button
            onClick={() => router.push('/dashboard/create-blog')}
            className='inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors'
          >
            <Plus className='w-4 h-4' />
            Create Your First Blog
          </button>
        </div>
      ) : (
        <div
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
          }
        >
          {blogs.map((blog) => (
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

      {/* Preview Modal */}
      <BlogPreviewModal
        blog={previewBlog}
        isOpen={isPreviewOpen}
        onClose={() => {
          setIsPreviewOpen(false);
          setPreviewBlog(null);
        }}
      />
    </div>
  );
};

export default MyBlogsPage;
