import HeroSection from "./components/HeroSection"
import ScrollFadeIn from "./components/ScrollFadeIn";

function App() {
  return (
    <>
      <ScrollFadeIn className="py-[100px] px-16 lg:py-60 lg:px-80">
        <HeroSection />
      </ScrollFadeIn>
    </>
  )
}

export default App
