import React from "react";
import { useEffect, useRef } from "react";

type ScrollFadeInProps = {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollFadeIn({ children, className }: ScrollFadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = ref.current; // store in case ref changes

    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentElement.classList.add("animate-fade-in");
        } else {
          currentElement.classList.remove("animate-fade-in");
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
      observer.disconnect();
    };
  }, []);


  return <div ref={ref} className={className}>{children}</div>;
}