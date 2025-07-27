import React from 'react';
import image from "../assets/headshot.png";

const AboutSection = () => {
  return (
    <section>
      <h2 className='font-space-grotesk text-primary text-center text-base lg:text-2xl'>About</h2>

      {/* Headshot and about */}
      <div className='flex flex-row flex-wrap gap-3.5 lg:gap-6'>
        <div>
          <img src={image} />
          <div className='text-accent font-sora font-bold py-8 px-4 glassmorph rounded-2xl'>
            More than just a developer
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

        // <div className='glassmorph text-text-low-contrast font-space-grotesk text-base p-4'>
        //   I'm <span className='text-text'>Ella Mae Cañaveral </span>
        //   , a multifaceted developer with a knack for <span className='text-text'>design</span>, <span className='text-text'>drawing</span>, and
        //   <span className='text-text'> language learning</span>.
        // </div>