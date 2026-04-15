import rawData from "./resume.json";
import type { ResumeData } from "./resume.types";

export type {
  AttachmentItem,
  CareerDetail,
  CareerEntry,
  EducationItem,
  ExperienceItem,
  IntroductionDetail,
  IntroductionSection,
  Profile,
  ProjectItem,
  ResumeCategory,
  ResumeData,
  SkillCategory,
  TaskItem,
  TrainingItem,
} from "./resume.types";

const data = rawData as ResumeData;

export const profile = data.profile;
export const experience = data.experience;
export const resumeItems = data.resumeItems;
export const education = data.education;
export const about = data.about;
export const training = data.training;
