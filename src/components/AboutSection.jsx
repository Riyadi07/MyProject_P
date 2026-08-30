import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const cardRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvasString = canvasRef.current;
    const card = cardRef.current;
    if (!container || !canvasString || !card) return;

    const ctxString = canvasString.getContext('2d');
    let anchorX = 0, anchorY = 0;
    let cardX = 0, cardY = -450;
    let targetX = 0, targetY = 0;
    let vx = 0, vy = 0;
    let isDragging = false;
    let dragStartX = 0, dragStartY = 0;
    let animationFrameId;

    const setupPositions = () => {
      canvasString.width = container.clientWidth;
      canvasString.height = container.clientHeight + 160;
      anchorX = canvasString.width / 2;
      targetX = canvasString.width / 2 - card.clientWidth / 2;
    };

    setupPositions();
    window.addEventListener('resize', setupPositions);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            cardY = -350;
            vy = 28;
            vx = (Math.random() - 0.5) * 16;
          } else {
            setInView(false);
            cardY = -450;
            vx = 0;
            vy = 0;
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    const onMouseDown = (e) => {
      isDragging = true;
      dragStartX = e.clientX - cardX;
      dragStartY = e.clientY - cardY;
    };
    const onMouseMove = (e) => {
      if (isDragging) {
        cardX = e.clientX - dragStartX;
        cardY = e.clientY - dragStartY;
      }
    };
    const onMouseUp = () => {
      isDragging = false;
    };

    card.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    const renderElasticCard = () => {
      if (container) {
        const isMobile = window.innerWidth < 640;
        if (!isDragging) {
          const springK = 0.045;
          const damping = 0.83;
          const mobileTargetY = isMobile ? 20 : targetY;
          const forceX = (targetX - cardX) * springK;
          const forceY = (mobileTargetY - cardY) * springK;
          vx = (vx + forceX) * damping;
          vy = (vy + forceY) * damping;
          cardX += vx;
          cardY += vy;
        }

        const maxRot = isMobile ? 8 : 15;
        const rotationZ = Math.max(-maxRot, Math.min(maxRot, vx * 0.5));
        card.style.transform = `translate3d(${cardX - (canvasString.width / 2 - card.clientWidth / 2)}px, ${cardY}px, 0) rotateZ(${rotationZ}deg)`;

        ctxString.clearRect(0, 0, canvasString.width, canvasString.height);

        if (cardY > -300) {
          const cardHangerX = cardX + card.clientWidth / 2;
          const cardHangerY = cardY + 160;
          const deltaY = targetY - cardY;
          const pushUpBend = deltaY > 0 ? deltaY * 0.8 : 0;
          const controlX = (anchorX + cardHangerX) / 2 + (isDragging ? (cardX - targetX) * 0.25 : pushUpBend + (cardX - targetX) * 0.1);
          const controlY = (anchorY + cardHangerY) / 2 + (isDragging ? 30 : pushUpBend * 0.4);

          ctxString.beginPath();
          ctxString.moveTo(anchorX, 0);
          ctxString.quadraticCurveTo(controlX, controlY, cardHangerX, cardHangerY);
          const gradient = ctxString.createLinearGradient(anchorX, 0, cardHangerX, cardHangerY);
          gradient.addColorStop(0, '#212121');
          gradient.addColorStop(1, '#1f1f1f');
          ctxString.strokeStyle = gradient;
          ctxString.lineWidth = 12;
          ctxString.lineCap = 'round';
          ctxString.stroke();

          ctxString.beginPath();
          ctxString.moveTo(anchorX, 0);
          ctxString.quadraticCurveTo(controlX, controlY, cardHangerX, cardHangerY);
          ctxString.strokeStyle = '#fdfdfde0';
          ctxString.lineWidth = 1.5;
          ctxString.setLineDash([6, 6]);
          ctxString.stroke();
          ctxString.setLineDash([]);

          ctxString.beginPath();
          ctxString.arc(cardHangerX, cardHangerY - 2, 6, 0, Math.PI * 2);
          ctxString.fillStyle = '#cbd5e1';
          ctxString.fill();
          ctxString.lineWidth = 1.5;
          ctxString.strokeStyle = '#334155';
          ctxString.stroke();
        }
      }
      animationFrameId = requestAnimationFrame(renderElasticCard);
    };

    renderElasticCard();

    return () => {
      window.removeEventListener('resize', setupPositions);
      observer.disconnect();
      card.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="about" className="relative z-10 border-y border-slate-800/80 bg-slate-900/40 py-12 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative z-30 text-center max-w-2xl mx-auto mb-6 px-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-400">Kenali Saya</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1">Tentang Saya</h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-400 mt-2 leading-relaxed">Sedikit cerita tentang latar belakang dan minat saya di dunia teknologi.</p>
        </div>

        <div className="mt-2 grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div ref={containerRef} className="lg:col-span-5 flex justify-center items-start relative min-h-[420px] overflow-visible">
            <canvas ref={canvasRef} className={`absolute inset-x-0 -top-40 w-full h-[calc(100%+160px)] pointer-events-none z-10 transition-opacity duration-300 ${inView ? 'opacity-100' : 'opacity-0'}`} />
            <div
              ref={cardRef}
              className={`relative z-20 w-72 h-[390px] rounded-3xl border-2 border-blue-500/40 bg-slate-950 shadow-[0_10px_35px_rgba(59,130,246,0.25)] p-3.5 overflow-hidden cursor-grab active:cursor-grabbing select-none group transition-opacity duration-300 transform-gpu shrink-0 ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ willChange: 'transform' }}
            >
              <div className="absolute top-2 left-1/2 -translate-x-1/2 z-40 h-3.5 w-11 rounded-full bg-slate-800 border border-slate-600 flex justify-center items-center shadow-md">
                <div className="h-1.5 w-6 rounded-full bg-blue-400"></div>
              </div>
              <div className="relative w-full h-[300px] mt-2 overflow-hidden rounded-2xl border border-slate-800 shadow-md">
                <img src="/images/profile2.jpg" alt="Profile 2" className="w-full h-full object-cover object-top pointer-events-none transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              </div>
              <div className="flex flex-col items-center text-center mt-2">
                <h3 className="text-base font-bold text-white tracking-wide">Slamet Riyadi</h3>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/50 p-6 sm:p-7 backdrop-blur-sm">
                <p className="mt-1 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
                    Saya adalah lulusan S1 Informatika dari Universitas Jenderal Achmad Yani Yogyakarta dengan minat yang kuat pada pengembangan perangkat lunak, 
                    teknologi web modern, dan machine learning. Pengalaman saya mencakup pembuatan aplikasi web, apalikasi mobile, perancangan arsitektur backend,
                    serta natural Language Processing (NLP).
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">Pendidikan</p>
                <p className="mt-1 text-base font-bold text-white">S1 Informatika</p>
                <p className="text-xs text-slate-400 mt-0.5 mb-5">Universitas Jenderal Achmad Yani Yogyakarta</p>
                <p className="mt-1 text-base font-bold text-white">SMA Negeri 1 Semaka</p>
                <p className="text-xs text-slate-400 mt-0.5">MIPA (Matematika dan Ilmu Pengetahuan Alam)</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">Minat & Keahlian</p>
                <div className="space-y-3 text-sm font-medium">
                  <div className="flex items-center gap-3 text-slate-200">
                    <i className="devicon-go-original-wordmark text-xl text-blue-400"></i>
                    <span>Backend / Golang & Node.js</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-200">
                    <i className="devicon-react-original text-xl text-cyan-400"></i>
                    <span>Frontend / React & Laravel</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-200">
                    <i className="devicon-python-plain text-xl text-yellow-400"></i>
                    <span>Machine Learning & NLP (Python)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}