import { TypeAnimation } from "react-type-animation";
import RotatingText from "../components/RotatingText";

const HeroSection = () => {
  return (
    <section className='h-screen flex flex-col items-center justify-center px-12 lg:px-56 gap-y-3 lg:gap-y-12'>
      <p className='text-accent font-space-grotesk text-base lg:text-lg'>👋 Hi, I'm Ella</p>
      <div className="flex flex-row flex-wrap justify-center items-center gap-x-6">
        <RotatingText
          texts={['Mobile', 'Web', 'Full Stack', 'AI']}
          mainClassName="px-2 sm:px-2 md:px-3 bg-primary text-[42px] lg:text-6xl text-background font-space-grotesk font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={3000}
        />
        <p 
          style={{
            backgroundImage: "linear-gradient(to right, #A35CF0 0%, #F0FF6F 100%)",
            WebkitBackgroundClip: "text", 
            backgroundClip: "text",
            color: "transparent", 
          }}
          className="text-[42px] lg:text-6xl font-space-grotesk font-bold text-text"
        >
          Developer
        </p>
      </div>
      <p className='font-space-grotesk text-center text-text-low-contrast text-base lg:text-lg lg:w-2/3'>
        I design 
        <span className='font-bold text-text'> colorful </span> 
        interfaces and develop 
        <span className='font-bold text-text'> dynamic </span> 
        web and mobile applications. I'm actively involved in my university's tech startup community as a <span className="font-bold text-text">front-end developer</span>,
        and developer student community as a <span className="font-bold text-text">former campus lead</span>.
      </p>
      <div className="card-wrapper flex items-center justify-center w-42 cosmic-glow">
        <button className="card-content font-sora text-text rounded-2xl py-3 px-8 text-base">
          Contact me
        </button>
      </div>
    </section>
  )
}

export default HeroSection