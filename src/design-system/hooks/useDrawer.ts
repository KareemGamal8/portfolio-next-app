import React, { useEffect } from "react";

export function useDrawer() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => setIsOpen((prev) => !prev);
  const closeDrawer = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [isOpen]);

  return {
    isOpen,
    toggleDrawer,
    closeDrawer,
  };
}