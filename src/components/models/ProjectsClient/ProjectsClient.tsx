'use client';

import { useState, useMemo } from 'react';
import { Project, ProjectCategory, ProjectStatus } from '@/types/project';
import ProjectFilter from './ProjectFilter';
import ProjectGrid from './ProjectGrid';

interface ProjectsClientProps {
  projects: Project[];
}

const ProjectsClient = ({ projects }: ProjectsClientProps) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | 'All'>('All');

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(projects.map(p => p.category)));
    return uniqueCategories as ProjectCategory[];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
      const statusMatch = selectedStatus === 'All' || project.status === selectedStatus;
      return categoryMatch && statusMatch;
    });
  }, [projects, selectedCategory, selectedStatus]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:p-8">
        <ProjectGrid projects={filteredProjects} />
      </div>
    </div>
  );
};

export default ProjectsClient;