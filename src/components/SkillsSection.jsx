import { skillsData } from '../data/portfolioData';

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 border-b border-slate-800/80 bg-slate-950/30 py-14 sm:py-18 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-6 px-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-400">Skills</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1">Teknologi Yang Saya Gunakan</h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-400 mt-2 leading-relaxed">
            Berbagai teknologi dan perangkat yang saya gunakan dalam pengembangan perangkat lunak, sistem web, dan machine learning.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center items-stretch -mx-2">
          {skillsData.map((skill, index) => (
            <div key={index} className="w-1/2 lg:w-1/4 p-2 flex flex-col">
              <div className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-3.5 sm:p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/50 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-blue-600/20 h-full w-full">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-600/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"></div>
                <div className="relative flex items-center gap-2.5 sm:gap-4 h-full">
                  <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-950/80 transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-600/10 group-hover:scale-105 shadow-inner">
                    <i className={`${skill.icon} text-2xl sm:text-3xl transition duration-300 group-hover:scale-110`}></i>
                  </div>
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <h3 className="text-xs sm:text-base font-bold text-white transition duration-300 group-hover:text-blue-400 leading-snug break-words">
                      {skill.name}
                    </h3>
                    <p className="mt-0.5 text-[10px] sm:text-xs font-medium text-slate-400 truncate">
                      {skill.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}