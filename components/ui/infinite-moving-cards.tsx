"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: {
    description: string;
    icon: any;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow"| "rslow"| "rrslow"| "rrrslow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate animation duration based on speed
  const getAnimationDuration = () => {
    switch (speed) {
      case "fast":
        return 15; // 15 seconds
      case "normal":
        return 30; // 30 seconds
      case "slow":
        return 60; // 60 seconds
      case "rslow":
        return 90; // 60 seconds
      case "rrslow":
        return 120; // 60 seconds
      case "rrrslow":
        return 150; // 60 seconds
      default:
        return 30; // default to normal speed
    }
  };

  useEffect(() => {
    if (scrollerRef.current) {
      const duration = getAnimationDuration();
      // Set animation style dynamically
      scrollerRef.current.style.setProperty(
        "animation",
        `scroll-${direction} ${duration}s linear infinite`
      );
    }
  }, [direction, speed]);

  // CSS for scrolling
  const scrollStyle = `
    @keyframes scroll-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(-70%); }
    }
    @keyframes scroll-right {
      0% { transform: translateX(-70%); }
      100% { transform: translateX(0); }
    }
  `;

  return (
    <>
      <style>{scrollStyle}</style>
      <div
        ref={containerRef}
        className={cn(
          "relative z-20 max-w-7xl overflow-hidden",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex whitespace-nowrap transition-transform duration-500",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
          style={{
            animationPlayState: pauseOnHover ? "paused" : "running",
            display: "flex",
            width: "max-content", // Use max-content to accommodate all items
            paddingRight: direction === "right" ? "100%" : "0", // Start padding for the right scroll
          }}
        >
          {/* Render items twice for infinite scrolling effect */}
          {[...items, ...items].map((item, idx) => (
            <li
              className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] mx-2 my-3"
              style={{
                background:
                  "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
              }}
              key={item.title + idx}
            >
              <blockquote className="flex flex-row items-start gap-4">
                {/* Icon on the left */}
                <div className="flex flex-col items-center">
                  <div className=" text-2xl">{item.icon}</div>
                  <span className="mt-2 text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </div>

                {/* Description on the right */}
                <span className="text-sm leading-[1.6] font-normal max-w-[250px] break-words">
                  <label className="flex !whitespace-break-spaces">
                    {item.description}
                  </label>
                </span>

              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
