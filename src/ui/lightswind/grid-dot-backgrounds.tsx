"use client";

import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

// Grid Background Component
export interface GridBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  gridSize?: number;
  gridColor?: string;
  darkGridColor?: string;
  showFade?: boolean;
  fadeIntensity?: number;
  children?: React.ReactNode;
}

export const GridBackground = ({
  className,
  children,
  gridSize = 20,
  gridColor = "#e4e4e7",
  darkGridColor = "#262626",
  showFade = true,
  fadeIntensity = 20,
  ...props
}: GridBackgroundProps) => {
  const [currentGridColor, setCurrentGridColor] = useState(gridColor);

  useEffect(() => {
    const isDarkModeActive = document.documentElement.classList.contains("dark");
    setCurrentGridColor(isDarkModeActive ? darkGridColor : gridColor);

    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.attributeName === "class") {
          const updatedIsDarkModeActive =
            document.documentElement.classList.contains("dark");
          setCurrentGridColor(
            updatedIsDarkModeActive ? darkGridColor : gridColor
          );
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return function () {
      return observer.disconnect();
    };
  }, [gridColor, darkGridColor]);

  return (
    <div
      className={cn(
        "relative flex h-[50rem] w-full items-center justify-center bg-transparent",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: gridSize + "px " + gridSize + "px", // String concatenation
          backgroundImage:
            "linear-gradient(to right, " +
            currentGridColor +
            " 1px, transparent 1px), " +
            "linear-gradient(to bottom, " +
            currentGridColor +
            " 1px, transparent 1px)", // String concatenation
        }}
      />

      {showFade && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black"
          style={{
            maskImage:
              "radial-gradient(ellipse at center, transparent " +
              fadeIntensity +
              "%, black)", // String concatenation
            WebkitMaskImage:
              "radial-gradient(ellipse at center, transparent " +
              fadeIntensity +
              "%, black)", // String concatenation
          }}
        />
      )}

      <div className="relative z-20 w-full min-w-0">{children}</div>
    </div>
  );
};

// Dot Background Component
export interface DotBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  dotSize?: number;
  dotColor?: string;
  darkDotColor?: string;
  spacing?: number;
  showFade?: boolean;
  fadeIntensity?: number;
  children?: React.ReactNode;
}

export const DotBackground = ({
  className,
  children,
  dotSize = 1,
  dotColor = "#000",
  darkDotColor = "#fff",
  spacing = 20,
  showFade = true,
  fadeIntensity = 20,
  ...props
}: DotBackgroundProps) => {
  const patternStyle = (color: string): React.CSSProperties => ({
    backgroundSize: `${spacing}px ${spacing}px`,
    backgroundImage: `radial-gradient(${color} ${dotSize}px, transparent ${dotSize}px)`,
  });

  return (
    <div
      className={cn(
        "relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 dark:hidden" style={patternStyle(dotColor)} />
      <div className="absolute inset-0 hidden dark:block" style={patternStyle(darkDotColor)} />

      {showFade && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black"
          style={{
            maskImage:
              "radial-gradient(ellipse at center, transparent " +
              fadeIntensity +
              "%, black)", // String concatenation
            WebkitMaskImage:
              "radial-gradient(ellipse at center, transparent " +
              fadeIntensity +
              "%, black)", // String concatenation
          }}
        />
      )}

      <div className="relative z-20 w-full min-w-0">{children}</div>
    </div>
  );
};

export default { GridBackground, DotBackground };
