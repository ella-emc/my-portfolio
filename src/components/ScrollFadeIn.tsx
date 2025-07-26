import React from "react";
import { useEffect, useRef } from "react";

export default function ScrollFadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.add("animate-fade-in");
        } else {
          if (ref.current) {
            ref.current.classList.remove("animate-fade-in");
          }
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();

  }, []);

  return <div ref={ref}>{children}</div>;
}