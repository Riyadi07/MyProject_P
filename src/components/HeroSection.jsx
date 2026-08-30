import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function HeroSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Software Developer', 'Backend Developer'],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-12 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16">
      <div className="absolute -right-40 -top-40 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-3xl font-semibold text-blue-400">Hi, I'm</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Slamet Riyadi
            </h1>
            <h2 className="mt-4 text-2xl font-semibold text-slate-300 sm:text-3xl h-10">
              <span ref={typedRef} className="text-blue-400"></span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              Lulusan S1 Informatika yang memiliki minat dalam pengembangan web, pengembangan backend, dan machine learning. Saya senang membangun solusi digital yang bermanfaat, andal, dan berorientasi pada pengguna.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-nowrap items-center gap-2 sm:gap-3.5 w-full overflow-x-auto">
              <a
                href="#projects"
                className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-blue-600 px-3 py-2.5 sm:px-5 sm:py-3 text-[11px] sm:text-xs lg:text-sm font-semibold text-white whitespace-nowrap shadow-lg shadow-blue-600/30 transition duration-300 hover:bg-blue-500 hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-3 w-3 sm:h-4 sm:w-4 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                </svg>
              </a>

              <a
                href="/cv/CV_Slamet_Riyadi.pdf"
                download="CV_Slamet_Riyadi.pdf"
                className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-blue-500/40 bg-blue-500/10 px-3 py-2.5 sm:px-5 sm:py-3 text-[11px] sm:text-xs lg:text-sm font-semibold text-blue-400 whitespace-nowrap backdrop-blur-md transition duration-300 hover:border-blue-400 hover:bg-blue-500/20 hover:text-white hover:-translate-y-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-3 w-3 sm:h-4 sm:w-4 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span>Download CV</span>
              </a>

              <a
                href="https://github.com/Riyadi07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2.5 sm:px-4 sm:py-3 text-[11px] sm:text-xs lg:text-sm font-semibold text-slate-300 whitespace-nowrap backdrop-blur-md transition duration-300 hover:border-slate-700 hover:bg-slate-800 hover:text-white hover:-translate-y-0.5"
              >
                <i className="devicon-github-original text-sm sm:text-lg shrink-0"></i>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="order-1 flex justify-center mt-6 sm:mt-0 lg:order-2 lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 blur-2xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
              <div
                className="relative overflow-hidden border-2 border-blue-500/30 p-2 shadow-2xl transition duration-500 hover:scale-105"
                style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
              >
                <img
                  src="/images/profile.jpg"
                  alt="Slamet Riyadi"
                  className="h-[300px] w-[240px] object-cover object-top sm:h-[390px] sm:w-[285px] transition duration-500 group-hover:scale-110"
                  style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}