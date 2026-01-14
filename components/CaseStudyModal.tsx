
import React, { useEffect } from 'react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  project: CaseStudy | null;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-white">
      {/* Navigation */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-sm z-10 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-4">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-600">Ownership Deep Dive</span>
              <span className="text-slate-300">/</span>
              <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">{project.title}</span>
          </div>
          <div className="flex items-center space-x-4">
            {project.figmaUrl && (
              <a 
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center space-x-2 px-4 py-2 bg-slate-900 text-white hover:bg-emerald-600 rounded-lg transition-colors font-bold text-xs uppercase tracking-widest"
              >
                <span>View Figma File</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            <button 
              onClick={onClose}
              className="flex items-center space-x-2 px-4 py-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-900 font-bold text-sm uppercase"
            >
              <span>Close</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16 md:py-32">
        {/* Header */}
        <header className="mb-20">
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter">
            {project.title}
          </h1>
          <p className="text-2xl md:text-3xl text-slate-500 font-medium leading-tight max-w-3xl">
            {project.subtitle}
          </p>
          
          {project.figmaUrl && (
            <div className="mt-10 md:hidden">
              <a 
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-4 bg-slate-900 text-white hover:bg-emerald-600 rounded-xl transition-all font-bold text-sm uppercase tracking-widest"
              >
                <span>Open Figma Project</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}
        </header>

        {/* Executive Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 border-y border-slate-100 py-16">
          <div className="md:col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Core Role</h4>
            <p className="text-slate-900 font-bold">{project.role}</p>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">The Challenge</h4>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">{project.problem}</p>
          </div>
        </div>

        {/* Hero Asset */}
        <div className="bg-slate-50 p-4 md:p-8 rounded-2xl mb-24">
            <img src={project.imageUrl} alt={project.title} className="w-full h-auto rounded-lg shadow-2xl" />
        </div>

        {/* Narrative Content */}
        <div className="space-y-32">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
                <h3 className="text-2xl font-black text-slate-900 sticky top-32">The Strategy</h3>
            </div>
            <div className="md:col-span-2 space-y-8">
                <p className="text-slate-600 text-xl leading-relaxed">
                    Success in this project wasn't just about UI components. It required aligning stakeholders on a shared technical vision.
                </p>
                <div className="grid grid-cols-1 gap-6">
                    {project.process.map((step, idx) => (
                        <div key={idx} className="flex items-start p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <span className="text-emerald-600 font-black mr-4 mt-1">{String(idx + 1).padStart(2, '0')}</span>
                            <p className="text-slate-900 font-bold">{step}</p>
                        </div>
                    ))}
                </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
                <h3 className="text-2xl font-black text-slate-900 sticky top-32">Validation & Impact</h3>
            </div>
            <div className="md:col-span-2 space-y-12">
                <div className="prose prose-slate prose-lg max-w-none">
                    <p className="text-slate-600 text-xl leading-relaxed italic border-l-4 border-emerald-500 pl-8">
                        "{project.details.research}"
                    </p>
                    <p className="text-slate-700 text-lg leading-relaxed mt-10">
                        {project.details.design}
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {project.details.metrics.map((metric, idx) => (
                        <div key={idx} className="p-8 bg-emerald-600 text-white rounded-2xl shadow-lg shadow-emerald-200">
                            <p className="text-sm font-black uppercase tracking-widest opacity-70 mb-2">Metric</p>
                            <p className="text-xl font-bold leading-tight">{metric}</p>
                        </div>
                    ))}
                </div>
            </div>
          </section>
        </div>

        {/* Next Step / Footer */}
        <div className="mt-48 pt-24 border-t border-slate-100 text-center">
            <h4 className="text-4xl font-black text-slate-900 mb-8">Next Case Study?</h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                  onClick={onClose}
                  className="w-full sm:w-auto px-12 py-5 bg-slate-900 text-white font-black rounded-lg hover:bg-emerald-600 transition-all uppercase tracking-widest text-sm"
              >
                  Back to Index
              </button>
              {project.figmaUrl && (
                <a 
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-12 py-5 border-2 border-slate-900 text-slate-900 font-black rounded-lg hover:bg-slate-50 transition-all uppercase tracking-widest text-sm flex items-center justify-center space-x-2"
                >
                  <span>View on Figma</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
        </div>
      </article>
    </div>
  );
};

export default CaseStudyModal;
