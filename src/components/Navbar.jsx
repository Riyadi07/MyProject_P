import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveId(id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#home" className="group relative flex items-center gap-3 py-1">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 opacity-30 blur-lg transition duration-500 group-hover:opacity-100 group-hover:blur-xl"></div>
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/40 bg-slate-900/90 shadow-lg shadow-blue-500/20 backdrop-blur-md transition duration-500 group-hover:scale-110 group-hover:border-blue-400 group-hover:bg-blue-600/20">
              <span className="font-mono text-base font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-blue-400 via-cyan-300 to-white">SR</span>
            </div>
            <div className="relative flex items-center font-extrabold tracking-wider text-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 transition duration-300 group-hover:from-blue-400 group-hover:to-cyan-300">Riyadi</span>
            </div>
          </a>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-blue-500/10 text-blue-400 font-bold ring-1 ring-inset ring-blue-500/50'
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-blue-400'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 transition hover:bg-slate-800 hover:text-white md:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-800/80 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-slate-900/50 hover:text-blue-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}