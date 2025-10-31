"use client";

import { useEffect, useState } from "react";

interface FloatingOrb {
  id: number;
  left: number;
  top: number;
  width: number;
  height: number;
  animationDelay: number;
  animationDuration: number;
}

export default function Home() {
  const [orbs, setOrbs] = useState<FloatingOrb[]>([]);

  useEffect(() => {
    const generatedOrbs = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      width: Math.random() * 300 + 50,
      height: Math.random() * 300 + 50,
      animationDelay: Math.random() * 5,
      animationDuration: Math.random() * 10 + 10,
    }));
    setOrbs(generatedOrbs);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-50 font-sans dark:bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 animate-pulse" />
        <div className="absolute inset-0">
          {orbs.map((orb) => (
            <div
              key={orb.id}
              className="absolute rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 animate-float"
              style={{
                left: `${orb.left}%`,
                top: `${orb.top}%`,
                width: `${orb.width}px`,
                height: `${orb.height}px`,
                animationDelay: `${orb.animationDelay}s`,
                animationDuration: `${orb.animationDuration}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <main className="flex w-full max-w-3xl flex-col items-center justify-center gap-8 px-8 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-6xl">
            Coming Soon
          </h1>

          <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
            Eventually, this will be a portfolio of my work. For now, check out
            my GitHub!
          </p>

          <a
            href="https://github.com/nicjrichDEV"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            <svg
              className="h-5 w-5 transition-transform group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">Follow on GitHub</span>
          </a>
        </main>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          33% {
            transform: translateY(-20px) translateX(10px) scale(1.05);
          }
          66% {
            transform: translateY(10px) translateX(-10px) scale(0.95);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}
