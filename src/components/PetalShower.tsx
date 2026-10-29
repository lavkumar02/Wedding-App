import React, { useEffect, useRef } from 'react';

interface PetalShowerProps {
  active?: boolean;
}

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  type: 'rose' | 'marigold' | 'goldDust';
}

export const PetalShower: React.FC<PetalShowerProps> = ({ active = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const colors = [
      '#d93856', // Rose pink-red
      '#b81d3d', // Deep crimson rose
      '#e65c78', // Soft pink rose
      '#f59e0b', // Marigold orange
      '#fbbf24', // Marigold yellow
      '#d4af37'  // Gold flake
    ];

    const petalCount = Math.min(30, Math.floor(width / 35));
    const petals: Petal[] = Array.from({ length: petalCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 12 + 8,
      speedY: Math.random() * 1.2 + 0.8,
      speedX: Math.sin(Math.random() * Math.PI) * 0.8,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.5,
      opacity: Math.random() * 0.5 + 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
      type: Math.random() > 0.4 ? 'rose' : Math.random() > 0.3 ? 'marigold' : 'goldDust'
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.y / 40) * 0.6 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'rose') {
          // Curved petal
          ctx.beginPath();
          ctx.fillStyle = p.color;
          ctx.moveTo(0, -p.size / 2);
          ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size / 1.5, p.size / 2, 0, p.size);
          ctx.bezierCurveTo(-p.size / 1.5, p.size / 2, -p.size / 2, -p.size / 2, 0, -p.size / 2);
          ctx.fill();
        } else if (p.type === 'marigold') {
          // Rounded petal
          ctx.beginPath();
          ctx.fillStyle = p.color;
          ctx.ellipse(0, 0, p.size / 2, p.size / 3.5, 0, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Gold dust sparkle
          ctx.fillStyle = '#fef08a';
          ctx.shadowColor = '#eab308';
          ctx.shadowBlur = 4;
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};
