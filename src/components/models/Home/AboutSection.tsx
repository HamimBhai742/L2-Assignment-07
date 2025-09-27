/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';

export default function AboutSection() {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            About Me
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            I'm a passionate developer with 5+ years of experience creating
            digital solutions that bridge the gap between design and
            functionality.
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          {[
            {
              skill: 'Frontend Development',
              icon: '💻',
              desc: 'React, Next.js, TypeScript',
            },
            {
              skill: 'Backend Architecture',
              icon: '⚙️',
              desc: 'Node.js, Express, Prisma',
            },
            {
              skill: 'UI/UX Design',
              icon: '🎨',
              desc: 'Figma, Tailwind CSS, Design Systems',
            },
          ].map((item, index) => (
            <div
              key={index}
              className='text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors'
            >
              <div className='w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>{item.icon}</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                {item.skill}
              </h3>
              <p className='text-gray-600 dark:text-gray-300'>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className='text-center'>
          <Link
            href='/about'
            className='inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium'
          >
            Learn More About Me
            <svg
              className='ml-2 w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
