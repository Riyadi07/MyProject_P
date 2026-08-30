import { useEffect, useState, useRef } from 'react';
import MeteorCanvas from './components/MeteorCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const glowRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {loading && (
        <div id="preloader" className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 transition-opacity duration-700">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-24 w-24 rounded-2xl bg-blue-600/30 blur-xl animate-pulse"></div>
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-500/40 bg-slate-900/90 shadow-2xl shadow-blue-500/20 animate-pulse">
              <span className="text-3xl font-extrabold tracking-wider text-blue-400">SR</span>
            </div>
          </div>
          <p className="mt-4 text-xs font-semibold tracking-widest text-slate-400 uppercase animate-pulse">
            Loading...
          </p>
        </div>
      )}

      <div className="relative min-h-screen bg-slate-950 text-slate-100 antialiased overflow-x-hidden">
        <MeteorCanvas />
        <div
          ref={glowRef}
          className="fixed pointer-events-none z-0 w-[400px] h-[400px] rounded-full bg-blue-600/25 blur-[120px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        ></div>

        <Navbar />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}