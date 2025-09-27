import Link from 'next/link'
import React from 'react'

export default function BlogsSection() {
  return (
     <section className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
              Latest Blog Posts
            </h2>
            <p className='text-xl text-gray-600'>
              Thoughts, tutorials, and insights from my journey
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
            {[
              {
                title: 'Building Modern Web Apps with Next.js',
                date: 'March 15, 2024',
                category: 'Tutorial',
              },
              {
                title: 'The Future of Web Development',
                date: 'March 10, 2024',
                category: 'Opinion',
              },
              {
                title: 'Optimizing React Performance',
                date: 'March 5, 2024',
                category: 'Guide',
              },
            ].map((post, index) => (
              <article
                key={index}
                className='bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow'
              >
                <div className='relative h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center'>
                  <span className='text-white text-4xl font-bold'>📝</span>
                </div>
                <div className='p-6'>
                  <div className='flex items-center gap-2 mb-2'>
                    <span className='text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded'>
                      {post.category}
                    </span>
                    <span className='text-sm text-gray-500'>{post.date}</span>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                    {post.title}
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    Learn how to create performant and scalable web applications
                    using the latest features and best practices...
                  </p>
                  <Link
                    href='#'
                    className='text-blue-600 hover:text-blue-700 font-medium'
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className='text-center'>
            <Link
              href='/blog'
              className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors'
            >
              Read All Posts
            </Link>
          </div>
        </div>
      </section>
  )
}
