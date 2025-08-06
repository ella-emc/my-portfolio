import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection"
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

      <div className="px-6 lg:px-80 space-y-36">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CommunityInvolvementsSection />
        <ContactMeSection />
      </div>

      <footer>
        <p className="text-sm text-center font-space-grotesk text-text-low-contrast">Copyright 2024 <br/>Ella Mae Cañaveral</p>
      </footer>
    </>
  )
}

export default App
