import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <p className='text-accent font-space-grotesk'>Hi, I'm Ella</p>
      <TypeAnimation 
        sequence={[
          'A web developer',
          1500,
          'A mobile developer',
          1500,
          'A full-stack developer',
          1500,
          'An AI and data science enthusiast',
          1500
        ]}
        wrapper="span"
        speed={{ type: "keyStrokeDelayInMs", value: 90 }}
        style={{
          backgroundImage: "linear-gradient(to right, #A35CF0 0%, #F0FF6F 100%)",
          WebkitBackgroundClip: "text", 
          backgroundClip: "text",
          color: "transparent", 
        }}
        className="font-space-grotesk font-bold"
        repeat={Infinity}
        cursor={true}
      />
      <p className='font-space-grotesk text-text-low-contrast'>I design <span className='font-bold text-text'>colorful</span> interfaces and develop <span className='font-bold text-text'>dynamic</span> web and mobile applications.</p>
    </section>
  )
}

export default HeroSection