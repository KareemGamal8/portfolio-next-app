"use client";

export function Copyrights() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col md:flex-row gap-2 justify-center items-center py-6 text-white/70 text-sm font-sans tracking-wide">
      <p>
        Designed & Built by <span className="text-white font-bold hover:text-cyan-400 transition-colors cursor-default">Kareem Gamal</span>
      </p>
      <span className="hidden md:block">•</span>
      <p>© {currentYear} All rights reserved</p>
    </div>
  );
}

