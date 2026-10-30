"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/animation";

interface SplitTitleProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightClass?: string;
}

export function SplitTitle({
  text,
  className = "",
  highlightWords = [],
  highlightClass = "text-[#F0582C]",
}: SplitTitleProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion()) return;

    const words = containerRef.current.querySelectorAll(".word-reveal");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: 28,
          filter: "blur(6px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.04,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text]);

  const words = text.split(" ");

  return (
    <h2 ref={containerRef} className={className}>
      {words.map((word, index) => {
        const isHighlight = highlightWords.some((hw) =>
          word.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <span
            key={index}
            className={`word-reveal inline-block mr-2.5 transition-colors ${
              isHighlight ? highlightClass : ""
            }`}
          >
            {word}
          </span>
        );
      })}
    </h2>
  );
}

