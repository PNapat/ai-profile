export interface Skill {
  name: string;
  category: string;
  level: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  credential_url: string;
  logo: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  photo: string;
  about: string[];
  skills: Skill[];
  projects: Project[];
  certificates: Certificate[];
  resume_url: string;
  social: Record<string, string>;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  sources?: string[];
}
