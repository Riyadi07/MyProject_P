import { useState } from 'react';
import { createPortal } from 'react-dom';
import { projectsData } from '../data/portfolioData';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImgIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImg = () => {
    if (selectedProject) {
      setCurrentImgIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImg = () => {
    if (selectedProject) {
      setCurrentImgIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <section id="projects" className="relative z-10 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/10 py-12 sm:py-16 overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-6 px-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Selected works</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">Projects</h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            Beberapa proyek yang telah saya kembangkan, pengembangan perangkat lunak, teknologi web maupun mobile, dan machine learning.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {projectsData.map((project) => (
            <article
              key={project.id}
              onClick={() => openModal(project)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950/20 p-3 sm:p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-slate-900/40 hover:shadow-xl hover:shadow-blue-600/10 cursor-pointer shadow-sm"
            >
              <div>
                <div className="relative aspect-video overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                  <img
                    src={`/images/${project.thumbnail}`}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100 flex items-end p-3">
                    <span className="text-[11px] font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-1 bg-white/90 dark:bg-slate-900/90 px-2.5 py-1 rounded-lg border border-blue-200 dark:border-blue-500/30 shadow-sm transition">
                      Lihat Detail
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mt-3">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white sm:text-base transition duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

{project.technologies.length > 0 && (
  <div className="mt-3 flex flex-wrap gap-1.5 pt-1">
    {project.technologies.slice(0, 3).map((tech, idx) => (
      <span
        key={idx}
        className="rounded-md bg-slate-100 border border-slate-300 text-slate-700 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-400 px-2 py-0.5 text-[10px] font-semibold transition-colors duration-300"
      >
        {tech}
      </span>
    ))}
    {project.technologies.length > 3 && (
      <span className="text-[10px] text-slate-500 dark:text-slate-400 self-center font-medium">
        +{project.technologies.length - 3}
      </span>
    )}
  </div>
)}
            </article>
          ))}
        </div>
      </div>

      {selectedProject &&
        createPortal(
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-900/60 dark:bg-slate-950/85 backdrop-blur-xl transition-all duration-300 p-3 sm:p-6 overflow-y-auto">
            <div className="relative flex flex-col w-full max-w-[90%] sm:max-w-xl md:max-w-3xl lg:max-w-3xl h-[75vh] sm:h-[80vh] md:h-[85vh] max-h-[650px] rounded-2xl sm:rounded-3xl border border-blue-500/30 dark:border-blue-500/50 bg-white dark:bg-slate-950 shadow-2xl overflow-hidden text-slate-900 dark:text-white my-auto transform scale-100 transition-all duration-300">
              <button
  type="button"
  onClick={closeModal}
  className="absolute top-2.5 right-2.5 z-40 flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/80 dark:bg-slate-950/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/80 backdrop-blur-md transition shadow-lg text-xs sm:text-sm"
>
  ✕
</button>

              <div className="relative w-full h-[42%] sm:h-[50%] md:h-[55%] bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-blue-500/40 shrink-0 group overflow-hidden">
                <img
                  src={`/images/${selectedProject.images[currentImgIndex]}`}
                  alt="Project Image"
                  className="w-full h-full object-cover object-top transition-all duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none"></div>

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImg}
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/80 dark:bg-slate-950/80 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700/80 backdrop-blur-md hover:bg-blue-600 hover:text-white transition duration-300 z-30 text-xs sm:text-sm"
                    >
                      ❮
                    </button>
                    <button
                      onClick={nextImg}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/80 dark:bg-slate-950/80 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700/80 backdrop-blur-md hover:bg-blue-600 hover:text-white transition duration-300 z-30 text-xs sm:text-sm"
                    >
                      ❯
                    </button>
                  </>
                )}

                <div className="absolute bottom-2.5 inset-x-0 flex justify-center gap-1.5 z-30">
                  {selectedProject.images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full transition-all ${idx === currentImgIndex ? 'bg-blue-600 dark:bg-blue-500 w-5' : 'bg-slate-300 dark:bg-slate-600 w-2'}`}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="flex-1 flex flex-col min-h-0 bg-white dark:bg-slate-950 relative overflow-hidden">
                <div className="flex-1 overflow-y-auto p-3.5 sm:p-5 space-y-3 custom-scrollbar">
                  <div>
                    <h3 className="text-sm sm:text-xl font-bold text-slate-900 dark:text-white pr-6 leading-snug">{selectedProject.title}</h3>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 whitespace-pre-line">{selectedProject.fullDescription}</p>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1.5">Bahasa & Teknologi:</p>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {selectedProject.technologies.map((t, idx) => (
                        <span key={idx} className="rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-2.5 sm:p-3.5 border-t border-slate-200 dark:border-slate-800/90 bg-slate-50 dark:bg-slate-950 shrink-0 flex items-center justify-end">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/90 px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition"
                    >
                      <span>Source Code</span>
                      <i className="devicon-github-original text-xs sm:text-sm"></i>
                      
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}