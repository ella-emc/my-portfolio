import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className='flex flex-col items-center justify-center py-[100px] px-16 lg:py-60 lg:px-80 gap-y-3 lg:gap-y-6'>
      <p className='text-accent font-space-grotesk text-base lg:text-xl'>Hi, I'm Ella</p>
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
        className="font-space-grotesk font-bold text-center leading-tight text-[42px] lg:text-6xl"
        repeat={Infinity}
        cursor={true}
      />
      <p className='font-space-grotesk text-center text-text-low-contrast text-base lg:text-2xl lg:w-2/3'>
        I design 
        <span className='font-bold text-text'> colorful </span> 
        interfaces and develop 
        <span className='font-bold text-text'> dynamic </span> 
        web and mobile applications.
      </p>
      <button className="mt-6 bg-primary font-sora text-text rounded-2xl py-3 px-16 text-base lg:text-lg">
        Contact me
      </button>
    </section>
  )
}

export default HeroSection