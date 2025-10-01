import ProjectsClient from '@/components/models/ProjectsClient/ProjectsClient';
import { features } from 'process';
import React from 'react';

const ProjectsPage = () => {
  const data = [{
    id: 1,
    title: 'Project 1',
    description: 'This is project 1',
    features: "Features of project 1",
    thumbnail: 'https://via.placeholder.com/150',
    technologies: ['React', 'Next.js'],
    liveUrl: 'https://project1.com',
    githubUrl: 'https://github.com/project1',
    category: 'Web Development',
    startDate: '2023-01-01',
    endDate: '2023-02-01',
    status: 'completed',
      },
      {
        id: 2,
        title: 'Project 2',
        description: 'This is project 2',
        features: "Features of project 2",
        thumbnail: 'https://via.placeholder.com/150',
        technologies: ['React', 'Next.js'],
        liveUrl: 'https://project2.com',
        githubUrl: 'https://github.com/project2',
        category: 'Web Development',
        startDate: '2023-01-01',
        endDate: '2023-02-01',
        status: 'in-progress',
      }];
  return (
    <div>
      <ProjectsClient projects={data}/>
    </div>
  );
};

export default ProjectsPage;