'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaDiscord, FaInstagram } from 'react-icons/fa';
import { ReactNode } from 'react';

interface SocialButtonProps {
  href: string;
  icon: ReactNode;
  color: string;
}

export default function Contact() {
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

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center p-24 text-white">
        <h1 className="text-6xl font-bold mb-8 text-white">Let&apos;s Work Together!</h1>
        <div className="mb-8 text-center">
          <a
            href="mailto:crowe@cs.wisc.edu"
            className="text-2xl text-gray-200 hover:text-white"
          >
            crowe@cs.wisc.edu
          </a>
        </div>
        <div className="flex space-x-6 flex-wrap justify-center">
          <SocialButton
            href="https://www.linkedin.com/in/james-crowe-44ab902b7/"
            icon={<FaLinkedin size={32} />}
            color="bg-[#0A66C2]"
          />
          <SocialButton
            href="https://github.com/jamesbrcr"
            icon={<FaGithub size={32} />}
            color="bg-[#181717]"
          />
          <SocialButton
            href="https://discord.com/users/wakey0125"
            icon={<FaDiscord size={32} />}
            color="bg-[#5865F2]"
          />
          <SocialButton
            href="https://www.instagram.com/jamesbrcr/?hl=en"
            icon={<FaInstagram size={32} />}
            color="bg-[#E4405F]"
          />
        </div>
      </main>
    </div>
  );
}

function SocialButton({ href, icon, color }: SocialButtonProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <div className="relative group">
        <div
          className={`w-16 h-16 ${color} text-white rounded-full flex items-center justify-center shadow-lg transform transition duration-300 hover:scale-110 hover:rotate-3 hover:shadow-red-400/40`}
        >
          {icon}
        </div>
      </div>
    </Link>
  );
}
