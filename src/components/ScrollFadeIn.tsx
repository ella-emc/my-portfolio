import React from "react";
import { useEffect, useRef } from "react";

type ScrollFadeInProps = {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollFadeIn({ children, className }: ScrollFadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.add("animate-fade-in");
        } else {
          ref.current.classList.remove("animate-fade-in");
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();

  }, []);

  return <div ref={ref} className={className}>{children}</div>;
}