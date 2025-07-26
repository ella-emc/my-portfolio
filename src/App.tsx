import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection"
import ScrollFadeIn from "./components/ScrollFadeIn";
import ExperienceSection from "./sections/ExperienceSection";

function App() {
  return (
    <>
      <ScrollFadeIn className="py-[100px] px-16 lg:py-60 lg:px-80">
        <HeroSection />
      </ScrollFadeIn>

      <ScrollFadeIn className="py-[100px] px-8 lg:py-60 lg:px-80">
        <AboutSection />
      </ScrollFadeIn>

      <ScrollFadeIn className="py-[100px] px-8 lg:py-60 lg:px-80">
        <ExperienceSection />
      </ScrollFadeIn>
    </>
  )
}

export default App
