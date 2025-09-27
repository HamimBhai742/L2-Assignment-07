
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">John Doe</span>
            </h1>
            <div className="h-16 mb-8">
              <p className="text-xl sm:text-2xl text-gray-600 transition-all duration-500">
                {roles[currentRole]}
              </p>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Passionate about creating digital experiences that make a difference. 
              I build modern web applications with clean code and beautiful design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View My Work
              </Link>
              <Link href="/contact" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-6xl font-bold">
                JD
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a passionate developer with 5+ years of experience creating digital solutions 
              that bridge the gap between design and functionality.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { skill: 'Frontend Development', icon: '💻', desc: 'React, Next.js, TypeScript' },
              { skill: 'Backend Architecture', icon: '⚙️', desc: 'Node.js, Express, Prisma' },
              { skill: 'UI/UX Design', icon: '🎨', desc: 'Figma, Tailwind CSS, Design Systems' }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.skill}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/about" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
              Learn More About Me
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Some of my recent work that I'm proud of</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'E-Commerce Platform', tech: ['Next.js', 'Stripe', 'Prisma'], desc: 'Full-stack e-commerce solution with payment integration' },
              { title: 'Task Management App', tech: ['React', 'Node.js', 'MongoDB'], desc: 'Collaborative project management tool with real-time updates' },
              { title: 'Portfolio Website', tech: ['Next.js', 'Tailwind', 'Framer'], desc: 'Modern portfolio with smooth animations and responsive design' }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">{project.title.charAt(0)}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                      Live Demo
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-gray-700 font-medium">
                      Source Code
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
            <p className="text-xl text-gray-600">Thoughts, tutorials, and insights from my journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Building Modern Web Apps with Next.js', date: 'March 15, 2024', category: 'Tutorial' },
              { title: 'The Future of Web Development', date: 'March 10, 2024', category: 'Opinion' },
              { title: 'Optimizing React Performance', date: 'March 5, 2024', category: 'Guide' }
            ].map((post, index) => (
              <article key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">📝</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to create performant and scalable web applications using the latest features and best practices...
                  </p>
                  <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center">
            <Link href="/blog" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Read All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Start a Project
            </Link>
            <Link href="/resume" className="border border-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Download Resume
            </Link>
          </div>
          <div className="flex justify-center gap-6">
            {[
              { name: 'GitHub', icon: '🐙' },
              { name: 'LinkedIn', icon: '💼' },
              { name: 'Twitter', icon: '🐦' }
            ].map((social) => (
              <Link key={social.name} href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <span className="text-2xl">{social.icon}</span>
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
