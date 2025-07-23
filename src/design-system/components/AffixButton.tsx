"use client";

import { ArrowUp } from "tabler-icons-react";

export default function AffixButton() {
  const affixScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`p-2 absolute cursor-pointer top-[40%] md:top-6 md:end-5 right-3 z-50 w-fit hover:bg-background rounded-full  border-3 bg-secondary transition-all duration-500`}
      onClick={affixScroll}
      aria-label="Scroll to top"
    >
      <ArrowUp color="#fff" size={35} />
    </button>
  );
}
