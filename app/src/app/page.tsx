'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import jamesCroweImage from '../images/james-crowe-1.png';

export default function Home() {
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

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      <main className="relative z-10 flex min-h-screen items-center justify-center p-6 text-white">
        <div className="bg-[#1e1e1e] p-10 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.9)] max-w-4xl flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-bold text-red-500">Hey, I&apos;m James</h1>
            <p className="text-lg text-gray-200">
              I build fun stuff.
            </p>
            <p className="text-lg text-gray-200">
              I like AI, game dev, and trying out new ideas.
            </p>
            <p className="text-lg text-gray-200">
              Currently at{' '}
              <a
                href="https://www.wisc.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300"
              >
                UW Madison
              </a>{' '}
              studying Comp Sci + Data Sci.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[rgba(128,128,128,0.2)] text-white rounded-lg hover:bg-[#353042] transition-colors"
              >
                Here&apos;s my resume
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src={jamesCroweImage}
              alt="James Crowe"
              width={300}
              height={300}
              className="rounded"
            />
          </div>
        </div>
      </main>
    </div>
  );
}



//[#14003b] - dark blue og
//[#191919] - dark gray
//[#095779] - light blue