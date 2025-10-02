import BlogsClient from '@/components/models/BlogsClient/BlogsClient';

const BlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`, {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  return (
    <div>
      <BlogsClient blogs={data?.data} />
    </div>
  );
};

export default BlogsPage;
