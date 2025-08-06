import image from "/headshot.png";

const AboutSection = () => {
  return (
    <section>
      <h2 id="about" className='font-space-grotesk text-primary text-center text-base lg:text-2xl my-4 '>About</h2>

      <div className="space-y-6">
        <div className='md:grid md:grid-cols-12 md:grid-rows-5 md:gap-6 space-y-6'>
          <div className='glassmorph rounded-2xl pt-6 col-span-5 row-span-5 flex flex-col justify-between md:mb-0'>
            <h3 className='font-bold font-sora text-accent text-2xl lg:text-3xl pl-6'>More than just a developer</h3>
            <img src={image} className='rounded-b-2xl' />
          </div>
          <div className='glassmorph rounded-2xl p-6 flex items-center justify-center col-span-7 row-span-2 md:mb-0'>
            <p className='font-space-grotesk text-base text-text-low-contrast'>
              I'm <span className="text-text">Ella Mae Cañaveral</span>, a multifaceted developer with a knack for design, drawing, and language learning.
            </p>
          </div>
          <div className='glassmorph rounded-2xl p-6 flex items-center justify-center col-span-7 row-span-3'>
            <p className='font-space-grotesk text-base text-text-low-contrast'>
              My developer journey started at 14 when I was introduced to HTML and CSS. I'd aspired to become a web designer, but it wasn't until my freshman year of university that I aspired to become a software engineer.
              I currently work at Uppend, a start-up I co-founded, as a front-end developer and COO.
              In my free time, I read, write fiction, learn languages (I currently speak 5!), and draw.
            </p>
          </div>
        </div>
        <div className='md:grid md:grid-cols-12 gap-6 space-y-6'>
          <div className='glassmorph col-span-7 rounded-2xl p-6 flex flex-col gap-y-6 md:mb-0'>
            <p className='font-space-grotesk text-base text-text-low-contrast'>
              I have been active in the developer community since my freshman year.
              Since then, I've been giving back to the community through <span className="text-text">my talks</span>.
            </p>
            <div className='flex flex-row gap-x-2 justify-end items-center'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#FCFF6F" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9.172 14.829l5.657-5.657M7.05 11.293l-1.414 1.414a4 4 0 1 0 5.657 5.657l1.412-1.414m-1.413-9.9l1.414-1.414a4 4 0 1 1 5.657 5.657l-1.414 1.414"/></svg>
              </span>
              <p className='font-space-grotesk text-accent text-end text-sm'>See my journey</p>
            </div>
          </div>
          <div className='glassmorph col-span-5 rounded-2xl p-6 flex flex-col gap-y-6'>
            <p className='font-space-grotesk text-base text-text-low-contrast'>
              I love to <span className="text-text">draw portraits</span> in my free time. Graphite, charcoal, and color pencils are my playground!
            </p>
            <div className='flex flex-row gap-x-2 justify-end items-center'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#FCFF6F" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9.172 14.829l5.657-5.657M7.05 11.293l-1.414 1.414a4 4 0 1 0 5.657 5.657l1.412-1.414m-1.413-9.9l1.414-1.414a4 4 0 1 1 5.657 5.657l-1.414 1.414"/></svg>
              </span>
              <p className='font-space-grotesk text-accent text-end text-sm'>See my art</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
