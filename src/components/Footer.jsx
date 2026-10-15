export default function Footer() {
  return (
    <footer className="relative mt-20 bg-slate-100 dark:bg-slate-950/90 backdrop-blur-md text-slate-900 dark:text-white z-10 transition-colors duration-300">
      <div className="absolute -top-20 left-0 w-full overflow-hidden leading-none sm:-top-24 pointer-events-none z-20">
        <svg className="relative block h-24 w-full sm:h-28" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80 C180 80 250 15 460 15 C650 15 690 100 850 100 C1040 100 1110 25 1260 25 C1340 25 1390 45 1440 65"
            fill="none"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="8"
            className="[filter:blur(9px)]"
          />
          <path
            d="M0 80 C180 80 250 15 460 15 C650 15 690 100 850 100 C1040 100 1110 25 1260 25 C1340 25 1390 45 1440 65"
            fill="none"
            stroke="rgba(59, 130, 246, 0.4)"
            strokeWidth="3"
            className="[filter:blur(8px)]"
          />
          <path
            d="M0 80 C180 80 250 15 460 15 C650 15 690 100 850 100 C1040 100 1110 25 1260 25 C1340 25 1390 45 1440 65 L1440 120 L0 120 Z"
            className="fill-slate-100 dark:fill-slate-950 transition-colors duration-300"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-14 lg:px-8 lg:pt-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Slamet Riyadi</h2>
            <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">Software Developer</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
              Lulusan S1 Informatika yang memiliki minat pada pengembangan web, backend development, dan machine learning.
            </p>
            <a href="mailto:riyadiputrar@gmail.com" className="mt-5 inline-flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 transition hover:text-blue-600 dark:hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-8.69 5.793a2.25 2.25 0 0 1-2.12 0L2.25 6.75" />
              </svg>
              riyadiputrar@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest text-slate-900 dark:text-white">NAVIGATION</h3>
            <nav className="mt-5 flex flex-col gap-3 text-sm">
              <a href="#home" className="text-slate-600 dark:text-slate-400 transition duration-300 hover:translate-x-1 hover:text-blue-600 dark:hover:text-blue-400">Home</a>
              <a href="#about" className="text-slate-600 dark:text-slate-400 transition duration-300 hover:translate-x-1 hover:text-blue-600 dark:hover:text-blue-400">About</a>
              <a href="#skills" className="text-slate-600 dark:text-slate-400 transition duration-300 hover:translate-x-1 hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
              <a href="#projects" className="text-slate-600 dark:text-slate-400 transition duration-300 hover:translate-x-1 hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
              <a href="#contact" className="text-slate-600 dark:text-slate-400 transition duration-300 hover:translate-x-1 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest text-slate-900 dark:text-white">CONNECT</h3>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
              Temukan saya melalui beberapa platform berikut untuk melihat aktivitas dan proyek yang saya kerjakan.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/slamet-riyadi7"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-blue-600 dark:hover:border-blue-500 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white"
              >
                <i className="devicon-linkedin-plain text-lg"></i>
              </a>
              <a href="https://github.com/Riyadi07" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-blue-600 dark:hover:border-blue-500 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white">
                <i className="devicon-github-original text-lg"></i>
              </a>
              <a href="https://instagram.com/riyadii0_" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-blue-600 dark:hover:border-blue-500 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.facebook.com/riyadi.putraragel" target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-blue-600 dark:hover:border-blue-500 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 dark:border-slate-800/80 py-6">
          <div className="flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Slamet Riyadi.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}