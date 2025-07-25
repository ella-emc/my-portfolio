import React from 'react';

const HeroSection = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <p className='text-accent font-space-grotesk'>Hi, I'm Ella</p>
      <h1 className='text-text font-space-grotesk'>A web developer</h1>
      <p className='font-space-grotesk text-text-low-contrast'>I design <span className='font-bold text-text'>colorful</span> interfaces and develop <span className='font-bold text-text'>dynamic</span> web and mobile applications.</p>
    </section>
  )
}

export default HeroSection