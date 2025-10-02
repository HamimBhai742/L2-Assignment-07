import { Project } from '@/types/project';
import ProjectListItem from './ProjectListItem';

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">📁</div>
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No projects found</h3>
        <p className="text-gray-600 dark:text-gray-400">Try adjusting your filters to see more projects.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <ProjectListItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
