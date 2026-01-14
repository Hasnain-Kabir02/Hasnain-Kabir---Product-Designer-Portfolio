
import React from 'react';
import { EXPERIENCE, EDUCATION } from '../data/content';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-off-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-20 text-center">Trajectory & Foundations</h2>
        
        <div className="space-y-32">
          {/* Work Experience */}
          <div className="space-y-12">
            <h3 className="text-2xl font-black text-slate-900 border-b-2 border-slate-900 inline-block pb-2">Experience</h3>
            <div className="space-y-16">
              {EXPERIENCE.map((item, idx) => (
                <div key={idx} className="group flex flex-col md:flex-row gap-4 md:gap-12">
                  <div className="md:w-1/3">
                    <p className="text-sm font-black text-emerald-600 uppercase tracking-widest mb-1">{item.period}</p>
                    <h4 className="text-xl font-extrabold text-slate-900">{item.company}</h4>
                    <p className="text-slate-500 font-bold">{item.role}</p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-12">
            <h3 className="text-2xl font-black text-slate-900 border-b-2 border-slate-900 inline-block pb-2">Education</h3>
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-12">
                  <div className="md:w-1/3">
                    <p className="text-sm font-black text-emerald-600 uppercase tracking-widest mb-1">{edu.period}</p>
                    <h4 className="text-xl font-extrabold text-slate-900 leading-tight">{edu.institution}</h4>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-lg font-bold text-slate-800 mb-2">{edu.degree}</p>
                    <p className="text-slate-500 leading-relaxed">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
