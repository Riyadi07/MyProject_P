import { useEffect, useRef } from 'react';

export default function MeteorCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // ==========================================
    // 1. CLASS METEOR (TETAP SAMA)
    // ==========================================
    class Meteor {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width * 1.5 - canvas.width * 0.5;
        this.y = -50;
        this.length = Math.random() * 100 + 70;
        this.speed = Math.random() * 8 + 4;
        this.opacity = Math.random() * 0.8 + 0.4;
        this.width = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.speed * 0.7;
        this.y += this.speed;
        if (this.y > canvas.height || this.x > canvas.width) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(255, 255, 255, 1)';

        const gradient = ctx.createLinearGradient(
          this.x, this.y,
          this.x - this.length * 0.7, this.y - this.length
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(0.3, `rgba(147, 197, 253, ${this.opacity * 0.8})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.length * 0.7, this.y - this.length);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.width;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.restore();
      }
    }

    // ==========================================
    // 2. CLASS PIRING TERBANG (UFO) BARU
    // ==========================================
    class FlyingSaucer {
      constructor() {
        this.x = 80;
        this.y = canvas.height * 0.22;
        this.speedX = 2;
        this.angle = 0;
        this.lightPhase = 0;
      }

      update() {
        this.x += this.speedX;
        this.angle += 0.04;
        // Efek melayang naik turun secara halus (oscillation)
        this.y += Math.sin(this.angle) * 1.2;
        this.lightPhase += 0.1;

        // Jika keluar di kanan layar, reset kembali dari sebelah kiri
        if (this.x > canvas.width + 120) {
          this.x = -120;
          this.y = Math.random() * (canvas.height * 0.35) + 60;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);

        // Kemiringan rotasi saat melayang
        const tilt = Math.cos(this.angle) * 0.1;
        ctx.rotate(tilt);

        // A. Sinar Abduksi Bawah (Blue Tractor Beam)
        const beamGradient = ctx.createLinearGradient(0, 8, 0, 150);
        beamGradient.addColorStop(0, 'rgba(56, 189, 248, 0.4)');
        beamGradient.addColorStop(1, 'rgba(56, 189, 248, 0)');

        ctx.beginPath();
        ctx.moveTo(-10, 8);
        ctx.lineTo(10, 8);
        ctx.lineTo(35, 150);
        ctx.lineTo(-35, 150);
        ctx.closePath();
        ctx.fillStyle = beamGradient;
        ctx.fill();

        // B. Kubah Kaca Atas UFO (Glowing Glass Dome)
        ctx.beginPath();
        ctx.ellipse(0, -5, 16, 12, 0, Math.PI, 0);
        ctx.fillStyle = 'rgba(186, 230, 253, 0.85)';
        ctx.shadowBlur = 18;
        ctx.shadowColor = '#38bdf8';
        ctx.fill();

        // C. Badan Metalik UFO
        ctx.beginPath();
        ctx.ellipse(0, 2, 38, 11, 0, 0, Math.PI * 2);
        const metalGrad = ctx.createLinearGradient(-38, 0, 38, 0);
        metalGrad.addColorStop(0, '#334155');
        metalGrad.addColorStop(0.5, '#cbd5e1');
        metalGrad.addColorStop(1, '#1e293b');
        ctx.fillStyle = metalGrad;
        ctx.shadowBlur = 12;
        ctx.shadowColor = 'rgba(0,0,0,0.8)';
        ctx.fill();
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1;
        ctx.stroke();

        // D. Lampu Navigasi Berkedip/Berputar
        const lightColors = ['#f43f5e', '#38bdf8', '#10b981', '#fbbf24'];
        for (let i = 0; i < 4; i++) {
          const lx = Math.cos((this.lightPhase + i * (Math.PI / 2))) * 28;
          const ly = Math.sin((this.lightPhase + i * (Math.PI / 2))) * 5 + 2;

          ctx.beginPath();
          ctx.arc(lx, ly, 2.8, 0, Math.PI * 2);
          ctx.fillStyle = lightColors[i];
          ctx.shadowBlur = 12;
          ctx.shadowColor = lightColors[i];
          ctx.fill();
        }

        ctx.restore();
      }
    }

    // Inisialisasi Objek
    const meteors = Array.from({ length: 35 }, () => new Meteor());
    const ufo = new FlyingSaucer();

    // Loop Animasi Utama
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Gambar Meteor
      meteors.forEach((m) => {
        m.update();
        m.draw();
      });

      // Gambar UFO
      ufo.update();
      ufo.draw();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-70" />;
}