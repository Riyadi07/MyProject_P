import { useState, useEffect } from 'react';
import { useTheme } from '../components/MeteorCanvas';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const { theme, toggleTheme } = useTheme();

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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-slate-950/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#home" className="group relative flex items-center gap-3 py-1">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-slate-400 via-slate-300 to-slate-200 dark:from-blue-600 dark:via-indigo-500 dark:to-cyan-400 opacity-20 dark:opacity-30 blur-lg transition duration-500 group-hover:opacity-80"></div>
            <div className="relative flex items-center font-extrabold tracking-wider text-2xl">
              <span className="text-black dark:text-white transition duration-300 group-hover:text-slate-700 dark:group-hover:text-blue-400">
                Riyadi
              </span>
            </div>
          </a>

          {/* Desktop & Tablet Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-slate-200 text-black font-extrabold dark:bg-blue-500/10 dark:text-blue-400 dark:ring-1 dark:ring-inset dark:ring-blue-500/40 shadow-sm'
                      : 'text-slate-900 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-black dark:hover:text-blue-400'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            {/* Slider Switcher Theme Mode (Desktop) */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="ml-3 relative inline-flex h-8 w-14 items-center rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 p-1 transition-colors duration-300 focus:outline-none shadow-inner"
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-200 shadow-md transform transition-transform duration-300 ${
                  theme === 'dark' ? 'translate-x-0' : 'translate-x-6'
                }`}
              >
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-3.5 w-3.5 text-slate-900">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-3.5 w-3.5 text-slate-900">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m8.966-8.966h-2.25m-13.5 0H3m15.364 6.364l-1.591-1.591M6.758 6.758L5.167 5.167m12.728 0l-1.591 1.591M6.758 17.242l-1.591 1.591M12 18a6 6 0 100-12 6 6 0 000 12z" />
                  </svg>
                )}
              </span>
            </button>
          </div>

          {/* Area Mobile Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 p-1 transition-colors duration-300 focus:outline-none shadow-inner"
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-200 shadow-md transform transition-transform duration-300 ${
                  theme === 'dark' ? 'translate-x-0' : 'translate-x-6'
                }`}
              >
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-3.5 w-3.5 text-slate-900">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-3.5 w-3.5 text-slate-900">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m8.966-8.966h-2.25m-13.5 0H3m15.364 6.364l-1.591-1.591M6.758 6.758L5.167 5.167m12.728 0l-1.591 1.591M6.758 17.242l-1.591 1.591M12 18a6 6 0 100-12 6 6 0 000 12z" />
                  </svg>
                )}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 transition hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dropdown Menu Mobile */}
        {mobileOpen && (
          <div className="border-t border-slate-200 dark:border-slate-800/80 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? 'bg-slate-200 text-black font-extrabold dark:bg-blue-500/10 dark:text-blue-400'
                        : 'text-slate-900 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:text-black dark:hover:text-blue-400'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}