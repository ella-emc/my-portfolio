// TO-DO:
// 1. Make navbar appear when scrolled down
// 2. Design navbar for smaller screens

import { useEffect, useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const sections = [
    { href: "#about", label: "about" },
    { href: "#experience", label: "experience" },
    { href: "#projects", label: "projects" },
    { href: "#community-involvements", label: "community involvements" },
    { href: "#contact-me", label: "contact me" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavBar = () => {
      const currrentScrollY = window.scrollY;
      if (currrentScrollY > lastScrollY && currrentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currrentScrollY;
    }

    window.addEventListener("scroll", controlNavBar);
    return () => window.removeEventListener("scroll", controlNavBar);
  }, [])

  return (
    <nav>
      <div className="max-w-screen flex items-center justify-between md:justify-center">
        <button className="hover-zoom ml-auto hover:cursor-pointer p-6 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="#A35CF0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M7 12h13m-10 6h10"/></svg>
        </button>

        <div className="hidden md:bg-gray-600/40 md:bg-clip-padding md:backdrop-filter md:backdrop-blur-2xl md:border md:border-gray-500 md:rounded-b-2xl md:flex md:items-center md:justify-center md:px-10 py-4  md:gap-6">
          {sections.map((section, index) => (
            <div key={index} className="text-text-low-contrast text-sm font-space-grotesk flex flex-row gap-x-6">
              <a href={section.href} className="hover-zoom">{section.label}</a>
              {index !== sections.length - 1 && (
                <span className="text-text-ultra-low-contrast">//</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>

  )
}

export default Navbar