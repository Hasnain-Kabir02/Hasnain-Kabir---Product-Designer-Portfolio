
import React from 'react';
import { SKILLS } from '../data/content';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-black text-slate-900 mb-12 tracking-tighter leading-none">
              The Hybrid <br/>Advantage.
            </h2>
            <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-medium">
              <p>
                Most designers stop at the prototype. My background in <span className="text-slate-900 underline decoration-emerald-400 underline-offset-4">Computer Science</span> allows me to push through to production-ready logic.
              </p>
              <p>
                I believe a great product designer is part architect, part psychologist, and part engineer. I don't just design buttons; I design the state machines that control them.
              </p>
              <div className="pt-12 grid grid-cols-2 gap-8">
                  <div>
                      <h4 className="text-4xl font-black text-slate-900 mb-2">4+</h4>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Years of Practice</p>
                  </div>
                  <div>
                      <h4 className="text-4xl font-black text-slate-900 mb-2">10+</h4>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Impact Projects</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                    <h3 className="text-sm font-black text-emerald-600 uppercase tracking-widest mb-6">Execution</h3>
                    <ul className="space-y-4">
                        {SKILLS.design.map(skill => (
                            <li key={skill} className="text-slate-900 font-bold flex items-center">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-8 bg-slate-900 text-white rounded-2xl shadow-xl">
                    <h3 className="text-sm font-black text-emerald-400 uppercase tracking-widest mb-6">Technical</h3>
                    <ul className="space-y-4">
                        {SKILLS.technical.map(skill => (
                            <li key={skill} className="text-slate-100 font-bold flex items-center">
                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></span>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
