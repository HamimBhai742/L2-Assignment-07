import Herosection from '@/components/models/Home/Herosection';
import AboutSection from '@/components/models/Home/AboutSection';
import ProjectSection from '@/components/models/Home/ProjectSection';
import BlogsSection from '@/components/models/Home/BlogsSection';
import ContactSection from '@/components/models/Home/ContactSection';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800'>
      {/* Hero Section */}
      <Herosection />

      {/* About Preview Section */}
      <AboutSection />

      {/* Featured Projects Section */}
      <ProjectSection />

      {/* Latest Blog Posts Section */}
      <BlogsSection />

      {/* Contact/CTA Section */}
      <ContactSection />
    </div>
  );
}
