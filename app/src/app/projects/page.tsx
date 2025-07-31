'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import presentlyImage from './../../images/presently-pic-1.png';
import RLnnImage from './../../images/RLnnImage-pic-1.png';

export default function Projects() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const dots = Array.from({ length: 120 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < dots.length; i++) {
        const p = dots[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#ff1a1a';
        ctx.fill();

        for (let j = i + 1; j < dots.length; j++) {
          const q = dots[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            const opacity = Math.max(0.1, 1 - dist / 150);
            ctx.strokeStyle = `rgba(255, 26, 26, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Presently',
      description:
        'A fine-tuned (gpt-4o-mini) gift recommendation app that helps you find the perfect gift using Amazons most purchased list. Built for MadData25 Hackathon!',
      image: presentlyImage,
      link: 'https://github.com/VishnuR121/presently',
    },
    {
      id: 2,
      title: 'Rogue Lineage Race Detection NN',
      description:
        'A 2-layer neural network that can accurately detect the race of a player character in the HIT mmorpg Rogue Lineage.',
      image: RLnnImage,
      link: 'https://github.com/jamesbrcr/neural-network',
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-start p-6 pt-32 text-white">
        <h1 className="text-4xl font-bold mb-10 text-red-500"></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1e1e1e] p-6 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.6)] flex flex-col hover:scale-[1.02] transition-transform duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="rounded-md object-cover mb-4"
              />
              <h2 className="text-2xl font-semibold text-red-400 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block self-start mt-auto text-sm text-white bg-red-500 px-4 py-2 rounded hover:bg-red-400 transition-colors"
              >
                View Repo
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
