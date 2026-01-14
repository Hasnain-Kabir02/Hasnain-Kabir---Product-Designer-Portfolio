
export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  role: string;
  process: string[];
  outcome: string;
  tags: string[];
  imageUrl: string;
  details: {
    research: string;
    design: string;
    metrics: string[];
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}
