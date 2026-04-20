"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp } from "tabler-icons-react";

export default function AffixButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after 300px
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 300);

      // Calculate scroll percentage
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / height) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG circle calculations
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[60] group"
          aria-label="Scroll to top"
        >
          {/* Progress Circle Container */}
          <div className="relative flex items-center justify-center p-3 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/10 shadow-2xl group-hover:border-cyan-500/50 transition-colors duration-500">
            {/* SVG Progress Circle */}
            <svg className="absolute inset-0 -rotate-90" width="100%" height="100%" viewBox="0 0 50 50">
              <circle
                cx="25"
                cy="25"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-white/10"
              />
              <motion.circle
                cx="25"
                cy="25"
                r={radius}
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2"
                strokeDasharray={circumference}
                style={{ strokeDashoffset: offset }}
                className="transition-all duration-200"
              />
            </svg>

            {/* Icon and Inner Glow */}
            <div className="relative z-10 text-white flex items-center justify-center">
              <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full scale-0 group-hover:scale-110 transition-transform duration-500" />
              <ArrowUp 
                size={36} 
                strokeWidth={2.5} 
                className="relative z-10 transition-transform group-hover:-translate-y-1"
              />
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

