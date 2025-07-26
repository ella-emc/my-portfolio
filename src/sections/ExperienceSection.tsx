import React from 'react'
import experiences from "../data/experience.json";
import Badge from '../components/Badge';

const ExperienceSection = () => {
  return (
    <section>
      <h2 className='font-space-grotesk text-primary text-center text-base lg:text-2xl mb-8 lg:mb-16'>Experience</h2>

      <div className='flex flex-col gap-16'>
        {experiences.map((experience, index) => (
          <div key={index} className='flex flex-col gap-y-2 lg:gap-y-4'>
            <p className='text-accent/80 font-space-grotesk text-xs lg:text-base'>
              {experience.start_year} - {experience.end_year ? experience.end_year : "present"}
            </p>

            <div className='flex flex-col gap-y-2'>
              <p className='text-text font-space-grotesk font-medium text-base lg:text-xl'>{experience.job_title} <span className='text-text-low-contrast'>@ {experience.company}</span></p>
              <div className='flex flex-row flex-wrap gap-2 lg:gap-4'>
                {experience.technologies.map((item) => (
                  <Badge label={item} />
                ))}
              </div>
              <p className='text-text-low-contrast font-space-grotesk text-sm lg:text-base mt-2'>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection