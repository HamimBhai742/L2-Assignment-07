/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';

export default function ContactSection() {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto text-center'>
        <h2 className='text-3xl sm:text-4xl font-bold mb-4'>
          Let's Work Together
        </h2>
        <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
          Have a project in mind? I'd love to hear about it and discuss how we
          can bring your ideas to life.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
          <Link
            href='/contact'
            className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors'
          >
            Start a Project
          </Link>
          <Link
            href='/resume'
            className='border border-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors'
          >
            Download Resume
          </Link>
        </div>
        <div className='flex justify-center gap-6'>
          {[
            { name: 'GitHub', icon: '🐙' },
            { name: 'LinkedIn', icon: '💼' },
            { name: 'Twitter', icon: '🐦' },
          ].map((social) => (
            <Link
              key={social.name}
              href='#'
              className='text-gray-400 hover:text-white transition-colors flex items-center gap-2'
            >
              <span className='text-2xl'>{social.icon}</span>
              <span className='sr-only'>{social.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
