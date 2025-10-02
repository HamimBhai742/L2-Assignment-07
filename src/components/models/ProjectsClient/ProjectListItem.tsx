import { Project } from '@/types/project';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface ProjectListItemProps {
  project: Project;
}

const ProjectListItem = ({ project }: ProjectListItemProps) => {
  const statusColors = {
    completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'in-progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    planned: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="relative w-full lg:w-48 h-32 flex-shrink-0 overflow-hidden rounded-lg">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    title="Live Demo"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                    title="GitHub Repository"
                  >
                    <FiGithub className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                  {project.category}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                  {project.status.replace('-', ' ')}
                </span>
              </div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 text-right">
              <div>{formatDate(project.startDate)} - {formatDate(project.endDate)}</div>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
            {project.description}
          </p>

          <div className="mb-3">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Features:</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
              {project.features}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectListItem;
