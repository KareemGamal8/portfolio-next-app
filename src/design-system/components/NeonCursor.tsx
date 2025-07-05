"use client"; // Required for client-side interactivity

import { useEffect, useState } from "react";

export default function NeonCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => {
      setIsHovering(true);
    };

    const handleLeave = () => {
      setIsHovering(false);
    };

    // Track mouse movement
    window.addEventListener("mousemove", updatePosition);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"]'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className={`
        absolute top-[50%] w-22 blur-2xl h-22 left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full transition-all duration-300
        ${isHovering ? "bg-cyan-500/40" : "bg-blue-500/40"}
 
      `}
      ></div>
    </div>
  );
}
