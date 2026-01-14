
import React from 'react';

interface NavbarProps {
  onNavigate: (section: string) => void;
  activeSection?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('home')}
          className="text-xl font-bold tracking-tight text-slate-900 hover:opacity-70 transition-opacity"
        >
          HK.
        </button>
        
        <div className="hidden md:flex space-x-8 items-center">
          {['Projects', 'About', 'Experience', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item.toLowerCase())}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.toLowerCase() 
                  ? 'text-emerald-600' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {item}
            </button>
          ))}
          <a 
            href="mailto:contact@hasnain.me"
            className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-colors shadow-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Placeholder - simple for now */}
        <div className="md:hidden">
            <button className="p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
