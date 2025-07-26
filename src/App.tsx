import { useRef } from "react"
import HeroSection from "./components/HeroSection"
import { useIsVisible } from "./hooks/useIsVisible";

function App() {
const ref1 = useRef<HTMLDivElement>(null);
  const isHeroSectionVisible = useIsVisible(ref1);

  return (
    <>
      <div 
        ref={ref1} 
        className={`transition-opacity ease-in duration-700 ${isHeroSectionVisible ? "opacity-100" : "opacity-0"}`}
      >
        <HeroSection />
      </div>
    </>
  )
}

export default App
