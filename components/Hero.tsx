
import React from 'react';

interface HeroProps {
    onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-3 px-4 py-1.5 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-full text-xs font-bold mb-8 uppercase tracking-widest">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
          <span>Technical Product Designer</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-slate-900 mb-8 leading-[0.9]">
          Design that scales.<br/>
          <span className="text-slate-400">Products that work.</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12">
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                I help companies solve complex business problems through <span className="text-slate-900">rigorous product thinking</span> and technical execution.
            </p>
            <div className="space-y-6">
                <p className="text-slate-500 leading-relaxed">
                    With a background in Computer Science and UX Research, I bridge the gap between abstract business goals and concrete technical solutions. No fluff—just high-impact, data-informed design.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={onCtaClick}
                    className="px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-emerald-600 transition-all flex items-center group"
                  >
                    View Case Studies
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <a 
                    href="mailto:hasnainkabir16@gmail.com"
                    className="px-8 py-4 bg-white text-slate-900 font-bold border border-slate-200 rounded-lg hover:border-slate-900 transition-all"
                  >
                    Contact
                  </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
