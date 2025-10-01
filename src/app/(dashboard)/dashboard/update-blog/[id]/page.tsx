'use client';

import { UpdateBlogForm } from '@/components/models/MyBlog/UpdateBlogForm';
import { useParams } from 'next/navigation';

export default function UpdateBlogPage() {
  const params = useParams();
  const blogId = params.id as string;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <UpdateBlogForm blogId={blogId} />
    </div>
  );
}
