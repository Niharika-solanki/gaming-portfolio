import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />
      <div
        className="absolute top-0 h-full w-4 bg-white/50 blur-sm"
        style={{ left: `${scrollProgress * 100}%`, transform: 'translateX(-50%)' }}
      />
    </div>
  );
};

export default ScrollProgress;

