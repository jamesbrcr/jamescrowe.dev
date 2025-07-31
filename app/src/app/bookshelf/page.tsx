'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import pragmaticprogrammerImage from './../../images/The-Pragmatic-Programmer.png';

const readingList = [
  {
    id: 1,
    title: 'The Pragmatic Programmer',
    type: 'Book',
    image: pragmaticprogrammerImage,
    thoughts:
      "A classic that has stood the test of time. It's filled with practical advice from software development to work environment etiquette.",
    link: 'https://www.pragmaticprogrammer.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition',
  },
];

export default function Reads() {
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

  const currentlyReading = readingList[0];
  const otherBooks = readingList.slice(1);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-start p-6 pt-32 text-white">
        <h1 className="text-4xl font-bold mb-10 text-red-500">My Bookshelf</h1>

        {/* Currently Reading */}
        <div className="bg-[#1e1e1e] p-6 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.6)] w-full max-w-3xl mb-12">
          <h2 className="text-xl font-semibold text-red-400 mb-4">Currently Reading</h2>
          <div className="flex gap-6 items-start">
            <Image
              src={currentlyReading.image}
              alt={currentlyReading.title}
              width={100}
              height={140}
              className="rounded-md object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-white underline mb-1">
                {currentlyReading.title}
              </h3>
              <p className="text-sm text-gray-400 italic mb-1">
                {currentlyReading.type}
              </p>
              <p className="text-gray-300 text-sm mb-2">
                {currentlyReading.thoughts}
              </p>
              <a
                href={currentlyReading.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-red-400 hover:text-red-300"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Other Books */}
        {otherBooks.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
            {otherBooks.map((item) => (
              <div
                key={item.id}
                className="bg-[#1e1e1e] p-4 rounded-xl shadow-md flex flex-col"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={140}
                  className="rounded object-cover mb-3"
                />
                <h3 className="text-lg font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 italic mb-1">{item.type}</p>
                <p className="text-sm text-gray-300 mb-2">{item.thoughts}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}