import { ProjectCategory, ProjectStatus } from '@/types/project';

interface ProjectFilterProps {
  categories: ProjectCategory[];
  selectedCategory: ProjectCategory | 'All';
  selectedStatus: ProjectStatus | 'All';
  onCategoryChange: (category: ProjectCategory | 'All') => void;
  onStatusChange: (status: ProjectStatus | 'All') => void;
}

const ProjectFilter = ({
  categories,
  selectedCategory,
  selectedStatus,
  onCategoryChange,
  onStatusChange
}: ProjectFilterProps) => {
  const allCategories: (ProjectCategory | 'All')[] = ['All', ...categories];
  const statuses: (ProjectStatus | 'All')[] = ['All', 'completed', 'in-progress', 'planned'];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Filter by Category</h3>
        <div className="flex flex-wrap gap-2">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Filter by Status</h3>
        <div className="flex flex-wrap gap-2">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => onStatusChange(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                selectedStatus === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
              }`}
            >
              {status === 'All' ? status : status.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;
