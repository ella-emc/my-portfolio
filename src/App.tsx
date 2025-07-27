import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection"
import ScrollFadeIn from "./components/ScrollFadeIn";
import ExperienceSection from "./sections/ExperienceSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <section className="flex justify-center">
        <Navbar />
      </section>

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
