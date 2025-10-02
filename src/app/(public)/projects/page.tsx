import ProjectsClient from '@/components/models/ProjectsClient/ProjectsClient';
import { Project } from '@/types/project';

const ProjectsPage = () => {
  const data: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      features: "User authentication, Product catalog, Shopping cart, Payment gateway, Order management, Admin dashboard",
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      liveUrl: 'https://ecommerce-demo.vercel.app',
      githubUrl: 'https://github.com/username/ecommerce-platform',
      category: 'Web Development',
      startDate: '2023-01-01',
      endDate: '2023-03-01',
      status: 'completed',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      features: "Real-time collaboration, Task assignment, Progress tracking, Team management, File attachments, Notifications",
      thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      technologies: ['React', 'Next.js', 'Socket.io', 'PostgreSQL', 'Prisma'],
      liveUrl: 'https://taskmanager-demo.vercel.app',
      githubUrl: 'https://github.com/username/task-manager',
      category: 'Web Development',
      startDate: '2023-04-01',
      endDate: '2023-06-01',
      status: 'in-progress',
    },
    {
      id: 3,
      title: 'Weather Mobile App',
      description: 'A React Native mobile application providing detailed weather forecasts and location-based alerts.',
      features: "Location-based weather, 7-day forecast, Weather alerts, Interactive maps, Offline support",
      thumbnail: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop',
      technologies: ['React Native', 'TypeScript', 'Redux', 'Weather API'],
      liveUrl: 'https://play.google.com/store/apps/weather-app',
      githubUrl: 'https://github.com/username/weather-app',
      category: 'Mobile App',
      startDate: '2023-07-01',
      endDate: '2023-09-01',
      status: 'completed',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with dark mode support.',
      features: "Responsive design, Dark mode, Project showcase, Contact form, Blog integration, SEO optimized",
      thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://portfolio-demo.vercel.app',
      githubUrl: 'https://github.com/username/portfolio',
      category: 'Web Development',
      startDate: '2023-10-01',
      endDate: '2023-11-01',
      status: 'planned',
    }
  ];

  return (
    <div>
      <ProjectsClient projects={data} />
    </div>
  );
};

export default ProjectsPage;