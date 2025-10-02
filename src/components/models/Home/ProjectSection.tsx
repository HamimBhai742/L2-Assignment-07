/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectSection() {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            Featured Projects
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300'>
            Some of my recent work that I'm proud of
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {[
            {
              title: 'E-Commerce Platform',
              tech: ['Next.js', 'Stripe', 'Prisma'],
              desc: 'Full-stack e-commerce solution with payment integration',
            },
            {
              title: 'Task Management App',
              tech: ['React', 'Node.js', 'MongoDB'],
              desc: 'Collaborative project management tool with real-time updates',
            },
            {
              title: 'Portfolio Website',
              tech: ['Next.js', 'Tailwind', 'Framer'],
              desc: 'Modern portfolio with smooth animations and responsive design',
            },
          ].map((project, index) => (
            <div
              key={index}
              className='bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'
            >
              <div className='relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center'>
                <span className='text-white text-4xl font-bold'>
                  {project.title.charAt(0)}
                </span>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                  {project.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>{project.desc}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                 <div className="flex items-center gap-4 pl-3 mt-3">
                  <Link
                    href={"#"}
                    target="_blank"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    title="Live Demo"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </Link>
                  <Link
                    href={"#"}
                    target="_blank"
                    className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                    title="GitHub Repository"
                  >
                    <FiGithub className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center'>
          <Link
            href='/projects'
            className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors'
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
