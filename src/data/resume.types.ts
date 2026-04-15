export interface Profile {
  name: string;
  summary: string;
  email: string;
  github?: string;
  linkedin?: string;
  blog?: string;
  location?: string;
  birthdate?: string;
  hobbies?: string;
  specialties?: string;
  mbti?: string;
}

export interface TrainingItem {
  name: string;
  institution: string;
  period: string;
  description?: string;
}

export interface TaskItem {
  text: string;
  subItems?: string[];
  attachments?: AttachmentItem[];
}

export interface AttachmentItem {
  type: "pdf" | "image" | "xlsx";
  label: string;
  filename: string;
}

export interface ExperienceItem {
  company: string;
  projectName?: string;
  pos?: string;
  role?: string;
  period: string;
  summary?: string;
  description?: string;
  teamSize?: string;
  tools?: string;
  tasks: TaskItem[];
  skills?: string[];
  attachments?: AttachmentItem[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface CareerEntry {
  period: string;
  company: string;
  pos: string;
  duration: string;
  bullets: string[];
  stack: string;
}

export interface CareerDetail {
  totalExp: string;
  entries: CareerEntry[];
}

export interface IntroductionSection {
  title: string;
  bullets: string[];
}

export interface IntroductionDetail {
  sections: IntroductionSection[];
}

export interface ResumeCategory {
  category: string;
  type: "resume" | "career" | "introduction";
  icon: string;
  iconSize?: number;
  iconColor?: "text" | "light" | "muted" | "accent";
  detail?: string;
  careerDetail?: CareerDetail;
  introductionDetail?: IntroductionDetail;
}

export interface ProjectItem {
  name: string;
  period?: string;
  description: string;
  role?: string;
  achievements: string[];
  skills?: string[];
  link?: string;
}

export interface EducationItem {
  school: string;
  major?: string;
  degree?: string;
  period: string;
}

export interface ResumeData {
  profile: Profile;
  experience: ExperienceItem[];
  resumeItems: ResumeCategory[];
  education: EducationItem[];
  about: string;
  training: TrainingItem[];
}
