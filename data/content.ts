
import { CaseStudy, ExperienceItem, EducationItem } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'grameen-go',
    title: 'GrameenGo Service Ecosystem',
    subtitle: 'Standardizing digital logistics for 200k+ rural users.',
    problem: 'Digital service delivery was fragmented across multiple legacy platforms, leading to high drop-off rates and increased operational support costs in rural hubs.',
    role: 'Lead UX Designer & Product Owner',
    process: [
      'Operational Audit of rural service hubs',
      'Logic Flow Consolidation (3 platforms into 1)',
      'Design System Architecture for low-spec devices',
      'Technical validation with engineering leads'
    ],
    outcome: 'Unified the service delivery logic into a single modular framework. Reduced manual support interventions by 45% and improved hub agent productivity by 2.5x.',
    tags: ['Product Ownership', 'Service Design', 'Enterprise UI'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    details: {
      research: 'Conducted longitudinal studies with field agents. Discovered that 70% of "user errors" were actually due to inconsistent feedback loops between the API latency and the UI state.',
      design: 'Engineered a "state-aware" UI system that provided immediate optimistic feedback, specifically optimized for high-latency 3G environments common in rural areas.',
      metrics: ['45% reduction in support tickets', '150% increase in hub transaction volume', '98% agent adoption rate']
    }
  },
  {
    id: 'agri-dashboard',
    title: 'AgriDemand Intelligence',
    subtitle: 'Transforming raw yield data into actionable supply-chain strategy.',
    problem: 'Regional managers relied on delayed PDF reports for supply planning, resulting in frequent crop wastage and stock-outs in high-demand zones.',
    role: 'Product Designer (Technical Lead)',
    process: [
      'Data Mapping & Stakeholder Interviews',
      'Dashboard Archetype Definition',
      'Interactive Prototyping in High-Fidelity',
      'A/B Testing with Regional Managers'
    ],
    outcome: 'Deployed a real-time visualization layer over the central database. Reduced decision-making cycles from 7 days (report-based) to 15 minutes (dashboard-based).',
    tags: ['Data Visualization', 'B2B Product', 'Decision UX'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    details: {
      research: 'Identified that "Total Yield" was a vanity metric; managers actually needed "Yield Variance by Transit Time" to optimize logistics.',
      design: 'Developed a custom visualization component library focused on high-density information display without cognitive overload.',
      metrics: ['93% reduction in reporting lead-time', '12% decrease in regional logistics overhead', 'Active daily use by 100% of management']
    }
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Yunus Center',
    role: 'Technical Product Intern',
    period: '2022 - 2023',
    description: 'Led the UI overhaul of social business tracking tools. Translated complex social impact metrics into intuitive digital dashboards for global stakeholders.'
  },
  {
    company: 'Ahsania Cancer Hospital',
    role: 'Systems UX Intern',
    period: '2021',
    description: 'Optimized patient intake workflows. Mapped and redesigned the digital touchpoints of the patient journey to reduce wait times by 20%.'
  },
  {
    company: 'Radisson Blu Water Garden',
    role: 'Operations & IT Attachment',
    period: '2020',
    description: 'Analyzed enterprise ERP systems to identify friction points in staff digital workflows, resulting in a proposed 15% efficiency gain in service logs.'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Independent University, Bangladesh',
    degree: 'BSc in Computer Science',
    period: '2019 — 2023',
    details: 'Graduated with a focus on HCI and Software Architecture. Thesis: User-centric design in high-latency network environments.'
  }
];

export const SKILLS = {
  design: ['Systems Thinking', 'User Research', 'Product Strategy', 'Interactive Prototyping', 'Documentation'],
  technical: ['React / Next.js', 'Tailwind CSS', 'TypeScript', 'API Integration Logic', 'Version Control'],
  tools: ['Figma', 'Linear', 'GitHub', 'Notion', 'Mixpanel']
};
