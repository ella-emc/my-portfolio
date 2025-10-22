import projects from "../data/projects.json";
import Badge from '../components/Badge';

const ProjectsSection = () => {
  return (
    <section>
      <h2 id="projects" className='font-space-grotesk text-primary text-center text-base lg:text-2xl mb-8 lg:mb-16'>Projects</h2>

      <div className="flex flex-row flex-wrap gap-y-16 gap-x-8">
        {projects.map((project, index) => (
          <div key={index} className='w-full md:w-[calc(50%-16px)] flex flex-col gap-y-6'>
            <div className="relative max-w-full h-64 overflow-hidden rounded-2xl group">
              <a href={project.link} target="_blank">
                <img
                  src={project.image_link}
                
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </a>
              <div className="absolute inset-0 md:bg-purple-700 md:opacity-40 group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none"></div>
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