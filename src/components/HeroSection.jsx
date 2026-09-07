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
    <section id="home" className="relative overflow-hidden pt-28 pb-12 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background Glow Ringan (Hanya Muncul Pas Mode Gelap) */}
      <div className="absolute -right-40 -top-40 -z-10 h-96 w-96 rounded-full bg-slate-200/50 dark:bg-blue-600/20 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">

          {/* Kolom Teks Nama & Deskripsi */}
          <div className="order-2 md:order-1">
            <p className="text-3xl font-semibold text-blue-600 dark:text-blue-400">Hi, I'm</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Slamet Riyadi
            </h1>
            <h2 className="mt-4 text-2xl font-semibold text-slate-700 dark:text-slate-300 sm:text-3xl h-10">
              <span ref={typedRef} className="text-blue-600 dark:text-blue-400"></span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
              Lulusan S1 Informatika yang memiliki minat dalam pengembangan web, pengembangan backend, dan machine learning. Saya senang membangun solusi digital yang bermanfaat, andal, dan berorientasi pada pengguna.
            </p>

            {/* Tombol Aksi */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3.5 w-full">
              <a
                href="#projects"
                className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-slate-900 dark:bg-blue-600 px-2.5 py-2.5 sm:px-4 sm:py-3 text-[11px] sm:text-xs lg:text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-slate-700 dark:hover:bg-blue-500 hover:shadow-slate-900/20 active:scale-95 hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                </svg>
              </a>

              <a
                href="/cv/CV_Slamet_Riyadi.pdf"
                download="CV_Slamet_Riyadi.pdf"
                className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-slate-300 dark:border-blue-500/30 bg-slate-200/60 dark:bg-blue-500/10 px-2.5 py-2.5 sm:px-4 sm:py-3 text-[11px] sm:text-xs lg:text-sm font-semibold text-slate-800 dark:text-blue-400 backdrop-blur-md transition duration-300 hover:bg-slate-300/80 dark:hover:bg-blue-500/20 hover:-translate-y-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span>Download CV</span>
              </a>

              <a
                href="https://github.com/Riyadi07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[100px] inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/80 px-2.5 py-2.5 sm:px-4 sm:py-3 text-[11px] sm:text-xs lg:text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm backdrop-blur-md transition duration-300 hover:border-slate-400 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white hover:-translate-y-0.5"
              >
                <i className="devicon-github-original text-sm sm:text-lg shrink-0"></i>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Kolom Foto Profil Pas Mode Light/Dark */}
          <div className="order-1 flex justify-center mt-6 md:mt-0 md:order-2 md:justify-end">
            <div className="relative group">
              {/* Glow di Belakang Foto: Lembut abu-abu di mode terang, Biru di mode gelap */}
              <div className="absolute -inset-4 rounded-full bg-slate-300/40 dark:bg-gradient-to-r dark:from-blue-400 dark:to-indigo-500 opacity-30 dark:opacity-50 blur-2xl group-hover:opacity-60 dark:group-hover:opacity-80 transition duration-500"></div>

              {/* Bingkai Foto Profil */}
              <div
                className="relative overflow-hidden border-2 border-slate-200 dark:border-blue-500/30 p-2 shadow-lg dark:shadow-2xl transition duration-500 hover:scale-105 bg-white dark:bg-slate-900"
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