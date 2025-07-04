"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "tabler-icons-react";
import { twMerge } from "tailwind-merge";
import { useDrawer } from "../hooks";

type DrawerProps = {
  toggleButton: React.ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
  width?: string | number;
};

const getDirectionStyles = (
  direction: NonNullable<DrawerProps["direction"]>,
  width?: string | number
): React.CSSProperties => {
  const size = width ?? "300px";
  switch (direction) {
    case "right":
      return {
        top: 0,
        right: 0,
        height: "100%",
        transform: "translateX(100%)",
      };
    case "left":
      return {
        top: 0,
        left: 0,
        height: "100%",
        transform: "translateX(-100%)",
      };
    case "top":
      return {
        top: 0,
        left: 0,
        height: size,
        transform: "translateY(-100%)",
      };
    case "bottom":
      return {
        bottom: 0,
        left: 0,
        height: size,
        transform: "translateY(100%)",
      };
    default:
      return {};
  }
};

const getActiveStyle = (direction: DrawerProps["direction"]) => {
  switch (direction) {
    case "left":
    case "right":
      return { transform: "translateX(0)" };
    case "top":
    case "bottom":
      return { transform: "translateY(0)" };
    default:
      return {};
  }
};

export function ModernDrawer({
  toggleButton,
  direction = "right",
  className,
  children,
  containerClassName,
  width,
}: DrawerProps) {
  const { closeDrawer, isOpen, toggleDrawer } = useDrawer();

  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    // Create portal container and append to body
    const container = document.createElement("div");
    document.body.appendChild(container);
    setPortalContainer(container);

    return () => {
      // Cleanup portal container
      document.body.removeChild(container);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className={twMerge(containerClassName)}>
      <span onClick={toggleDrawer} className="cursor-pointer">
        {toggleButton}
      </span>

      {/* Portal-rendered content */}
      {portalContainer &&
        createPortal(
          <>
            {/* Overlay */}
            <div
              className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ease-in-out ${
                isOpen
                  ? "opacity-20 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              onClick={closeDrawer}
              aria-label="Close drawer overlay"
            />

            {/* Drawer */}
            <div
              className={twMerge(
                `fixed p-4 z-50 bg-white shadow-lg transition-transform duration-300 ease-in-out w-full md:w-[${
                  width ?? "300px"
                }]`,
                className
              )}
              style={{
                ...getDirectionStyles(direction, width),
                ...(isOpen ? getActiveStyle(direction) : {}),
                pointerEvents: isOpen ? "auto" : "none",
              }}
              role="dialog"
              aria-modal="true"
            >
              <button
                onClick={closeDrawer}
                aria-label="Close drawer"
                className="border ms-auto block border-gray-700 p-2 rounded-full"
              >
                <X color="#fff" />
              </button>
              <div>{children}</div>
            </div>
          </>,
          portalContainer
        )}
    </div>
  );
}
