import { BlogPost } from '@/types/blog.types';
import { SingleBlogClient } from '@/components/models/BlogsClient/SingleBlogClient';
import { notFound } from 'next/navigation';

// Mock function to get blog by slug - replace with actual API call
const getBlogBySlug = async (slug: string): Promise<BlogPost | null> => {
  const mockBlogs: BlogPost[] = [
    {
      id: '1',
      title: 'Getting Started with Next.js 15',
      description: 'Learn how to build modern web applications with the latest features of Next.js 15.',
      content: `# Getting Started with Next.js 15

Next.js 15 brings exciting new features and improvements that make building web applications even more powerful and efficient.

## Key Features

Next.js 15 introduces several groundbreaking features:

### 1. **Improved Performance**
- Enhanced rendering and optimization
- Better caching mechanisms
- Faster build times with Turbopack

### 2. **Better Developer Experience**
- New tools and debugging capabilities
- Improved error messages
- Enhanced TypeScript support

### 3. **Enhanced Security**
- Built-in security improvements
- Better CSRF protection
- Enhanced data validation

## Getting Started

To create a new Next.js 15 project, follow these steps:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

This will set up a new project with all the latest features enabled.

## Project Structure

Your new Next.js 15 project will have the following structure:

\`\`\`
my-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
├── next.config.js
└── package.json
\`\`\`

## Key Concepts

### App Router
The App Router is the recommended way to create applications in Next.js 15. It provides:

- **Layouts**: Shared UI between routes
- **Pages**: Unique UI for each route
- **Loading**: Loading UI for async components
- **Error**: Error handling UI

### Server Components
Server Components allow you to render components on the server, providing:

- Better performance
- Reduced bundle size
- Direct database access
- Enhanced security

## Conclusion

Next.js 15 represents a significant step forward in web development, offering developers powerful tools to build fast, secure, and scalable applications. Whether you're building a simple blog or a complex enterprise application, Next.js 15 has the features you need to succeed.

Start exploring these features today and see how they can improve your development workflow!`,
      category: 'Web_Development',
      tags: ['nextjs', 'react', 'typescript', 'web-development', 'tutorial'],
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
      content: `# Building Responsive UIs with Tailwind CSS

Tailwind CSS has revolutionized how we approach styling in modern web development. This comprehensive guide will teach you how to create stunning, responsive user interfaces.

## Why Tailwind CSS?

Tailwind CSS offers several advantages:

- **Utility-first approach**: Build designs directly in your markup
- **Responsive design**: Built-in responsive utilities
- **Customization**: Highly customizable design system
- **Performance**: Purge unused CSS for optimal bundle size

## Getting Started

Install Tailwind CSS in your project:

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

## Responsive Design Principles

### Mobile-First Approach
Tailwind uses a mobile-first breakpoint system:

\`\`\`html
<div class="text-sm md:text-base lg:text-lg xl:text-xl">
  Responsive text
</div>
\`\`\`

### Breakpoints
- **sm**: 640px and up
- **md**: 768px and up  
- **lg**: 1024px and up
- **xl**: 1280px and up
- **2xl**: 1536px and up

## Layout Techniques

### Flexbox
\`\`\`html
<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1">Content 1</div>
  <div class="flex-1">Content 2</div>
</div>
\`\`\`

### Grid
\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
\`\`\`

## Best Practices

1. **Use consistent spacing**: Stick to Tailwind's spacing scale
2. **Leverage components**: Extract reusable patterns
3. **Optimize for performance**: Use PurgeCSS in production
4. **Maintain readability**: Group related classes together

## Conclusion

Tailwind CSS empowers developers to build responsive, beautiful UIs quickly and efficiently. By following these principles and techniques, you'll be able to create professional-grade interfaces that work seamlessly across all devices.`,
      category: 'Technology',
      tags: ['tailwind', 'css', 'responsive', 'ui-design', 'frontend'],
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      slug: 'responsive-uis-tailwind',
      createdAt: '2024-01-10T14:30:00Z',
      updatedAt: '2024-01-10T14:30:00Z',
      status: 'published',
      readTime: 12
    },
    {
      id: '3',
      title: 'TypeScript Best Practices for React',
      description: 'Discover essential TypeScript patterns and practices for React development.',
      content: `# TypeScript Best Practices for React

TypeScript has become an essential tool for React development, providing type safety and better developer experience. This guide covers the most important best practices.

## Why TypeScript with React?

TypeScript offers numerous benefits for React development:

- **Type Safety**: Catch errors at compile time
- **Better IntelliSense**: Enhanced autocomplete and refactoring
- **Self-documenting Code**: Types serve as documentation
- **Easier Refactoring**: Confident code changes

## Component Typing

### Functional Components
\`\`\`typescript
interface Props {
  title: string;
  count?: number;
  onUpdate: (value: number) => void;
}

const Counter: React.FC<Props> = ({ title, count = 0, onUpdate }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={() => onUpdate(count + 1)}>
        Increment
      </button>
    </div>
  );
};
\`\`\`

### Props with Children
\`\`\`typescript
interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
\`\`\`

## Hooks Typing

### useState
\`\`\`typescript
const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState<boolean>(false);
\`\`\`

### useEffect
\`\`\`typescript
useEffect(() => {
  const fetchUser = async (): Promise<void> => {
    try {
      const userData = await api.getUser();
      setUser(userData);
    } catch (error) {
      console.error('Failed to fetch user:', error);
    }
  };

  fetchUser();
}, []);
\`\`\`

### Custom Hooks
\`\`\`typescript
interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useApi<T>(url: string): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Implementation...

  return { data, loading, error };
}
\`\`\`

## Event Handling

\`\`\`typescript
const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
  event.preventDefault();
  // Handle form submission
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  setValue(event.target.value);
};

const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
  // Handle button click
};
\`\`\`

## Advanced Patterns

### Generic Components
\`\`\`typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>): JSX.Element {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
\`\`\`

### Discriminated Unions
\`\`\`typescript
type ButtonVariant = 
  | { variant: 'primary'; color: string }
  | { variant: 'secondary' }
  | { variant: 'danger'; confirmText: string };

const Button: React.FC<ButtonVariant & { children: React.ReactNode }> = (props) => {
  // Implementation based on variant
};
\`\`\`

## Best Practices

1. **Use strict TypeScript config**: Enable strict mode
2. **Prefer interfaces over types**: For object shapes
3. **Use utility types**: Leverage Pick, Omit, Partial, etc.
4. **Type your API responses**: Create interfaces for data structures
5. **Avoid any**: Use unknown or proper types instead

## Conclusion

TypeScript significantly improves the React development experience by providing type safety, better tooling, and self-documenting code. By following these best practices, you'll write more maintainable and robust React applications.`,
      category: 'Programming',
      tags: ['typescript', 'react', 'best-practices', 'javascript', 'frontend'],
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
      slug: 'typescript-react-best-practices',
      createdAt: '2024-01-05T09:15:00Z',
      updatedAt: '2024-01-05T09:15:00Z',
      status: 'published',
      readTime: 15
    }
  ];

  return mockBlogs.find(blog => blog.slug === slug && blog.status === 'published') || null;
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SingleBlogPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return <SingleBlogClient blog={blog} />;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [blog.thumbnail],
    },
  };
}
