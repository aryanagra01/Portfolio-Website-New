import { useRef, useEffect, useState } from 'react'

const Projects = () => {
  const scrollContainerRef = useRef(null)
  const [paddingLeft, setPaddingLeft] = useState(0)
  const [paddingRight, setPaddingRight] = useState(0)

  useEffect(() => {
    // Calculate padding dynamically based on container width
    const calculatePadding = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current
        const containerWidth = container.clientWidth
        const windowWidth = window.innerWidth
        const cardWidth = windowWidth < 640 ? windowWidth * 0.55 : windowWidth < 1024 ? 350 : 400
        
        if (containerWidth > 0) {
          const padding = Math.max(0, containerWidth / 2 - cardWidth / 2)
          setPaddingLeft(padding)
          setPaddingRight(padding)
          return padding
        }
      }
      return 0
    }
    
    // Calculate initial padding
    calculatePadding()
    
    window.addEventListener('resize', calculatePadding)
    
    return () => {
      window.removeEventListener('resize', calculatePadding)
    }
  }, [])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = window.innerWidth < 640 ? window.innerWidth * 0.55 : window.innerWidth < 1024 ? 350 : 400
      scrollContainerRef.current.scrollBy({
        left: -cardWidth - 16,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = window.innerWidth < 640 ? window.innerWidth * 0.55 : window.innerWidth < 1024 ? 350 : 400
      scrollContainerRef.current.scrollBy({
        left: cardWidth + 16,
        behavior: 'smooth'
      })
    }
  }

  const baseUrl = import.meta.env.BASE_URL

  const projects = [
    {
      image: `${baseUrl}assets/unity symbol.png`,
      title: 'Games on Unity',
      link: 'https://github.com/',
      linkText: 'Github'
    },
    {
      image: `${baseUrl}assets/freefyler.png`,
      title: 'Research on Orbital Manuvering',
      link: `${baseUrl}assets/PH017_SSEF_Project Report.pdf`,
      linkText: 'Research Paper'
    },
    {
      image: `${baseUrl}assets/mimoso.png`,
      title: 'Project Mimoso (CWW)',
      link: 'https://www.instagram.com/project.mimoso/',
      linkText: 'Instagram'
    }
  ]

  return (
    <section id="projects" className="relative pt-6 min-h-fit mx-4 sm:mx-6 lg:mx-10 xl:mx-40">
      <p className="text-sm sm:text-lg lg:text-xl text-center mb-3 sm:mb-4 text-gray-600 dark:text-gray-400">Browse My Recent</p>
      <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center mb-4 sm:mb-7 lg:mb-8 text-gray-900 dark:text-white">Projects</h1>
      
      <div className="relative px-4 sm:px-8 lg:px-12">
        {/* Left Fade Gradient */}
        <div className="absolute left-4 sm:left-8 lg:left-12 top-0 bottom-0 w-12 sm:w-16 lg:w-20 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none"></div>
        
        {/* Right Fade Gradient */}
        <div className="absolute right-4 sm:right-8 lg:right-12 top-0 bottom-0 w-12 sm:w-16 lg:w-20 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none"></div>

        {/* Left Arrow Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-900 rounded-full p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 opacity-80 hover:opacity-100"
          aria-label="Scroll left"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory py-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingRight: `${paddingRight}px`,
            scrollPaddingLeft: `${paddingLeft}px`,
            scrollPaddingRight: `${paddingRight}px`
          }}
        >
          {/* Spacer for first card centering */}
          {paddingLeft > 0 && <div style={{ width: `${paddingLeft}px`, flexShrink: 0 }} />}
          {projects.map((project, index) => (
            <div
              key={index}
              data-card-index={index}
              className="px-2 pt-2 pb-4 sm:px-5 sm:pt-5 sm:pb-6 lg:px-6 lg:pt-6 lg:pb-8 flex-shrink-0 w-[55vw] sm:w-[350px] lg:w-[400px] bg-white dark:bg-gray-950 rounded-3xl border border-gray-400 dark:border-gray-700 text-center flex flex-col snap-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-fit mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="rounded-3xl h-[90%] w-[90%] mx-auto object-contain"
                />
              </div>
              <div className="mt-auto relative bottom-2.5">
                <h2 className="text-gray-800 dark:text-white font-semibold text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 m-2 sm:m-4">{project.title}</h2>
                <button 
                  className="text-black dark:text-white border border-gray-400 dark:border-gray-500 px-4 py-3 rounded-full w-40 transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-300 hover:text-white dark:hover:text-gray-900 hover:border-white dark:hover:border-gray-300"
                  onClick={() => {
                    if (project.link.startsWith('http')) {
                      window.open(project.link, '_blank')
                    } else {
                      window.open(project.link, '_blank')
                    }
                  }}
                >
                  {project.linkText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-900 rounded-full p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 opacity-80 hover:opacity-100"
          aria-label="Scroll right"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Projects

