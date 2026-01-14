
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-48 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-12 tracking-tighter leading-none">
          Let's talk <br/><span className="text-slate-300">Strategy.</span>
        </h2>
        
        <p className="text-2xl text-slate-500 mb-16 max-w-2xl mx-auto font-medium">
            Currently open to full-time opportunities or high-impact consulting projects.
        </p>

        <a 
          href="mailto:hasnainkabir16@gmail.com"
          className="inline-block px-12 py-6 bg-slate-900 text-white font-black rounded-xl hover:bg-emerald-600 transition-all text-xl uppercase tracking-widest shadow-2xl shadow-slate-200"
        >
          Email Hasnain
        </a>

        <div className="mt-48 flex flex-col md:flex-row items-center justify-between border-t border-slate-100 pt-12 gap-8">
          <div className="text-left">
            <p className="text-sm font-black uppercase tracking-widest text-slate-900">Hasnain Kabir</p>
            <p className="text-xs font-bold text-slate-400">Technical Product Designer</p>
          </div>

          <div className="flex items-center space-x-12">
            <a 
                href="https://www.linkedin.com/in/hasnain-muhammad-kabir-3641a1231/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-black uppercase tracking-widest text-slate-900 hover:text-emerald-600 transition-colors"
            >
                LinkedIn
            </a>
            <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-black uppercase tracking-widest text-slate-900 hover:text-emerald-600 transition-colors"
            >
                GitHub
            </a>
            <a 
                href="https://www.figma.com/@hasnain_kabir02" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-black uppercase tracking-widest text-slate-900 hover:text-emerald-600 transition-colors"
            >
                Figma
            </a>
          </div>

          <div className="text-slate-300 text-[10px] font-black uppercase tracking-widest">
            Handcrafted with TypeScript — 2024
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
