import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection"
import ScrollFadeIn from "./components/ScrollFadeIn";
import ExperienceSection from "./sections/ExperienceSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./sections/ProjectsSection";
import CommunityInvolvementsSection from "./sections/CommunityInvolvementsSection";
import ContactMeSection from "./sections/ContactMeSection";

function App() {
  return (
    <>
      <section className="flex justify-end md:justify-center">
        <Navbar />
      </section>

      <ScrollFadeIn className="py-[100px] px-16 lg:py-40 lg:px-80">
        <HeroSection />
      </ScrollFadeIn>

      <ScrollFadeIn className="py-[100px] px-8 lg:py-40 lg:px-80">
        <AboutSection />
      </ScrollFadeIn>

      <ScrollFadeIn className="py-[100px] px-8 lg:py-40 lg:px-80">
        <ExperienceSection />
      </ScrollFadeIn>

      <ScrollFadeIn className="py-[100px] px-8 lg:py-40 lg:px-80">
        <ProjectsSection />
      </ScrollFadeIn>

      <ScrollFadeIn className="py-[100px] px-8 lg:py-40 lg:px-80">
        <CommunityInvolvementsSection />
      </ScrollFadeIn>

      <ScrollFadeIn className="py-[100px] px-8 lg:py-40 lg:px-80">
        <ContactMeSection />
      </ScrollFadeIn>

      <ScrollFadeIn className="pb-36 px-8">
        <footer>
          <p className="text-sm text-center font-space-grotesk text-text-low-contrast">Copyright 2024 <br/>Ella Mae Cañaveral</p>
        </footer>
      </ScrollFadeIn>
    </>
  )
}

export default App
