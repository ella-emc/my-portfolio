import involvements from "../data/involvements.json";

const CommunityInvolvementsSection = () => {
  return (
    <section>
      <h2 id="projects" className='font-space-grotesk text-primary text-center text-base lg:text-2xl mb-8 lg:mb-16'>Community Involvements</h2>
    
      <div className="grid grid-cols-12 gap-6">
        {involvements.map((involvement, index) => (
          <div key={index} className='col-span-6 flex flex-col gap-y-6'>
            <div className="relative max-w-full max-h-64 overflow-hidden rounded-2xl group">
              <img
                src={involvement.image_link}
              
                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-purple-700 opacity-40 group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none"></div>
            </div>
            <div className='space-y-4'>
              <p className="text-accent font-space-grotesk text-sm">{involvement.date ? involvement.date : involvement.start_date + " - " + involvement.end_date}</p>
              <p className='text-text font-space-grotesk font-medium text-base lg:text-xl'>{involvement.role}, <span className="text-text-low-contrast">{involvement.institution}</span></p>
              <p className='text-text-low-contrast font-space-grotesk text-base'>{involvement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CommunityInvolvementsSection