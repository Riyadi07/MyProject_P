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

    const meteors = Array.from({ length: 35 }, () => new Meteor());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      meteors.forEach((m) => {
        m.update();
        m.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} class="fixed inset-0 pointer-events-none z-0 opacity-70" />;
}