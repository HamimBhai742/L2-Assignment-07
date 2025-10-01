'use client';
import { useState, useMemo } from 'react';
import { BlogPost, BlogFilters as BlogFiltersType } from '@/types/blog.types';
import { BlogGrid } from './BlogGrid';
import { BlogFilters } from './BlogFilters';


interface BlogsClientProps {
  blogs: BlogPost[];
}

export type SortOption = 'newest' | 'oldest' | 'popular' | 'title';

const BlogsClient = ({ blogs }: BlogsClientProps) => {
  const [filters, setFilters] = useState<BlogFiltersType>({
    category: '',
    status: 'all',
    search: '',
  });
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter and sort blogs
  const filteredAndSortedBlogs = useMemo(() => {
    let filtered = blogs.filter((blog) => {
      // Only show published blogs in public view
      if (blog.status !== 'published') return false;

      const matchesSearch =
        !filters.search ||
        blog.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        blog.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        blog.tags.some((tag) =>
          tag.toLowerCase().includes(filters.search.toLowerCase())
        );

      const matchesCategory =
        !filters.category || blog.category === filters.category;

      return matchesSearch && matchesCategory;
    });

    // Sort blogs
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        case 'oldest':
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        case 'popular':
          return (b.readTime || 0) - (a.readTime || 0);
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [blogs, filters, sortBy]);

  return (
    <div className=' bg-gray-50 dark:bg-gray-900'>
      {/* Filters Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-16'>
        <BlogFilters
          filters={filters}
          onFiltersChange={setFilters}
          sortBy={sortBy}
          onSortChange={setSortBy}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          totalBlogs={filteredAndSortedBlogs.length}
        />

        {/* Blog Grid */}
        <BlogGrid blogs={filteredAndSortedBlogs} viewMode={viewMode} />
      </div>
    </div>
  );
};

export default BlogsClient;
