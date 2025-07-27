// TO-DO:
// 1. Make navbar appear when scrolled down
// 2. Design navbar for smaller screens

const Navbar = () => {
  const sections = ["about", "experience", "projects", "community involvements", "contact me"];

  return (
    <nav className='flex flex-row justify-center gap-6 glassmorph max-w-2/3 py-4 px-8 rounded-b-2xl'>
      {sections.map((section, index) => (
        <div key={index} className='flex flex-row items-center justify-center gap-6'>
          <div className='text-text-low-contrast font-space-grotesk text-sm hover-zoom'>{section}</div>
          {index == sections.length - 1 ? "" : (
            <div className='text-text-ultra-low-contrast'>//</div>
          )}
        </div>
      ))}
    </nav>
  )
}

export default Navbar