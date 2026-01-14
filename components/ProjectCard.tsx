
import React from 'react';
import { CaseStudy } from '../types';

interface ProjectCardProps {
  project: CaseStudy;
  onClick: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="group cursor-pointer bg-white rounded-lg overflow-hidden border border-slate-200 transition-all duration-300 hover:border-emerald-500"
      onClick={() => onClick(project.id)}
    >
      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105"
        />
      </div>
      <div className="p-10">
        <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600">Case Study</span>
            <span className="text-xs font-medium text-slate-400">{project.tags[0]}</span>
        </div>
        <h3 className="text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
          {project.subtitle}
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-8 pt-8 border-t border-slate-100">
            <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Key Result</p>
                <p className="text-sm font-bold text-slate-900">{project.details.metrics[0]}</p>
            </div>
            <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Impact Area</p>
                <p className="text-sm font-bold text-slate-900">{project.tags[2]}</p>
            </div>
        </div>

        <div className="flex items-center text-sm font-bold text-slate-900 uppercase tracking-widest group-hover:text-emerald-600">
          Read Full Analysis
          <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
