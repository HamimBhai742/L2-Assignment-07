import BlogsClient from '@/components/models/BlogsClient/BlogsClient';

const BlogsPage = () => {
  const mockBlogs= [
    {
      id: '1',
      title: 'Getting Started with Next.js 15',
      description:
        'Learn how to build modern web applications with the latest features of Next.js 15.',
      content: 'Full content here...',
      category: 'Web_Development',
      tags: ['nextjs', 'react', 'typescript'],
      thumbnail:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
      slug: 'getting-started-nextjs-15',
      createdAt: '2024-01-15T10:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z',
      status: 'published',
      views: 8,
    },
    {
      id: '2',
      title: 'Building Responsive UIs with Tailwind CSS',
      description:
        'Master the art of creating beautiful, responsive user interfaces using Tailwind CSS.',
      content: 'Full content here...',
      category: 'Technology',
      tags: ['tailwind', 'css', 'responsive'],
      thumbnail:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      slug: 'responsive-uis-tailwind',
      createdAt: '2024-01-10T14:30:00Z',
      updatedAt: '2024-01-10T14:30:00Z',
      status: 'draft',
      vies: 12,
    },
    {
      id: '3',
      title: 'TypeScript Best Practices for React',
      description:
        'Discover essential TypeScript patterns and practices for React development.',
      content: 'Full content here...',
      category: 'Programming',
      tags: ['typescript', 'react', 'best-practices'],
      thumbnail:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
      slug: 'typescript-react-best-practices',
      createdAt: '2024-01-05T09:15:00Z',
      updatedAt: '2024-01-05T09:15:00Z',
      status: 'published',
      views: 15,
    },
  ];
  return (
    <div>
      <BlogsClient blogs={mockBlogs}/>
    </div>
  );
};

export default BlogsPage;
