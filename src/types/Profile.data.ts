export interface ProfileData {
  name: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  title: string;
  website: string;
  experience: string;
  githubUrl: string;
  linkedInUrl: string;
  facebookUrl: string;
  skills: string[];
  createdAt: string;
  picture: string;
}

export interface EditData {
  name: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  title: string;
  website: string;
  experience: string;
  githubUrl: string;
  linkedInUrl: string;
  facebookUrl: string;
  skills: string[];
  createdAt: string;
  picture: File | null;
}