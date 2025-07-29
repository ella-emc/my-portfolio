import React from 'react'
import projects from "../data/projects.json";
import Badge from '../components/Badge';

const ProjectsSection = () => {
  return (
    <section>
      <h2 id="projects" className='font-space-grotesk text-primary text-center text-base lg:text-2xl mb-8 lg:mb-16'>Projects</h2>
    
      <div className="grid grid-cols-12 gap-6">
        {projects.map((project, index) => (
          <div key={index} className='col-span-6 flex flex-col gap-y-6'>
            <div className='glassmorph max-w-full max-h-64 overflow-hidden rounded-2xl'>
              <img src={project.image_link} className='w-full h-full object-cover' />
            </div>
            <div className='space-y-4'>
              <p className='text-text font-space-grotesk font-medium text-base lg:text-xl'>{project.title}</p>
              <div className='flex flex-row flex-wrap gap-2 lg:gap-4'>
                {project.technologies.map((item) => (
                  <Badge label={item} />
                ))}
              </div>
              <p className='text-text-low-contrast font-space-grotesk text-base'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection