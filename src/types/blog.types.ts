export interface BlogFormData {
  title: string;
  content: string;
  description: string;
  category: string;
  tags: string[];
  thumbnail: File[] | null;
}

export interface BlogPost extends BlogFormData {
  id: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export const blogCategories = [
    'Technology',
    'Web_Development',
    'Programming',
    'Lifestyle',
    'Travel',
    'Photography',
    'Food',
    'Education',
    'Business',
    'Other'
] as const;

export type BlogCategory = (typeof blogCategories)[number];
