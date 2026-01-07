import { useRef, useEffect, useState } from 'react'

const Experience = () => {
  const scrollContainerRef = useRef(null)
  const [paddingLeft, setPaddingLeft] = useState(0)
  const [paddingRight, setPaddingRight] = useState(0)
  const [expandedCardIndex, setExpandedCardIndex] = useState(null)

  useEffect(() => {
    // Calculate padding dynamically based on container width
    const calculatePadding = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current
        const containerWidth = container.clientWidth
        const windowWidth = window.innerWidth
        const cardWidth = windowWidth < 640 ? windowWidth * 0.55 : windowWidth < 1024 ? 380 : 480
        
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
      const cardWidth = window.innerWidth < 640 ? window.innerWidth * 0.55 : window.innerWidth < 1024 ? 380 : 480
      scrollContainerRef.current.scrollBy({
        left: -cardWidth - 16,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = window.innerWidth < 640 ? window.innerWidth * 0.55 : window.innerWidth < 1024 ? 380 : 480
      scrollContainerRef.current.scrollBy({
        left: cardWidth + 16,
        behavior: 'smooth'
      })
    }
  }

  const experiences = [
    {
      icon: '/assets/scia.png',
      company: 'Singapore-Cambodia International Academy',
      role: 'Management Consultant Intern',
      period: 'Dec 2025',
      description: 'Conducted primary and secondary market research, stakeholder interviews, and data analysis, applying consulting frameworks to develop clear, actionable recommendations to improve student acquisition, retention, and competitive positioning'
    },
    {
      icon: '/assets/kyndryl.png',
      company: 'Kyndryl',
      role: 'Service Desk Engineer',
      period: 'Feb 2025 - May 2025',
      description: 'Providing IT support for Singapore\'s healthcare system, troubleshooting applications, infrastructure, and end-user technologies to ensure seamless operations.'
    },
    {
      icon: '/assets/saf.png',
      company: 'Singapore Armed Forces',
      role: 'Information Systems Specialist',
      period: 'Nov 2023 - Jan 2025',
      description: 'Designed, deployed, and maintained secure network architectures for mission-critical military operations, ensuring high availability and efficiency.'
    },
    {
      icon: '/assets/imda.png',
      company: 'IMDA',
      role: 'Project Intern',
      period: 'Jan 2023 - March 2023',
      description: 'Conducted in-depth research on emerging technologies and assisted in planning and executing AsiaTech x Singapore (ATxSG),'
    },
    {
      icon: '/assets/techie-tykes.jpg',
      company: 'Techie Tykes',
      role: 'Assistant Teacher',
      period: 'Dec 2020',
      description: 'Conducted science and coding lessons for kindergarten and primary school children, designing and organizing engaging lesson plans.'
    }
  ]

  return (
    <section id="experience" className="relative pt-6 min-h-fit mx-4 sm:mx-6 lg:mx-10 xl:mx-40">
      <p className="text-sm sm:text-lg lg:text-xl text-center mb-3 sm:mb-4 text-gray-600 dark:text-gray-400">Explore My</p>
      <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center mb-4 sm:mb-7 lg:mb-8 text-gray-900 dark:text-white">Experience</h1>
      
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
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-card-index={index}
              className="px-2 pt-2 pb-4 sm:px-6 sm:pt-6 sm:pb-8 lg:px-8 lg:pt-8 lg:pb-10 flex-shrink-0 w-[55vw] sm:w-[380px] lg:w-[480px] bg-white dark:bg-gray-950 rounded-3xl border border-gray-400 dark:border-gray-700 text-center snap-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col min-h-[260px] sm:min-h-[380px] lg:min-h-[400px]"
            >
              <div className="flex-grow">
                <img src={exp.icon} alt={`${exp.company} icon`} className="h-8 sm:h-12 lg:h-14 mx-auto mb-3 sm:mb-5 lg:mb-6 cursor-pointer" />
                <h2 className="text-gray-600 dark:text-gray-300 font-semibold text-lg sm:text-2xl lg:text-3xl mb-2 sm:mb-2 lg:mb-3">{exp.company}</h2>
                <div className="h-12 sm:h-15 lg:h-16 mb-0 flex items-center justify-center">
                  <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white px-2">{exp.role}</h3>
                </div>
                <div className="h-6 sm:h-7 lg:h-8 mb-3 sm:mb-5 lg:mb-6 flex items-center justify-center">
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-base lg:text-lg">
                    {exp.period}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setExpandedCardIndex(index)}
                className="mt-auto px-6 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 rounded-full hover:bg-gray-700 dark:hover:bg-gray-300 transition-all duration-300 w-fit mx-auto"
              >
                Read more
              </button>
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

      {/* Modal Overlay */}
      {expandedCardIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 z-50 flex items-center justify-center p-4"
          onClick={() => setExpandedCardIndex(null)}
        >
          <div
            className="bg-white dark:bg-gray-950 rounded-3xl border border-gray-400 dark:border-gray-700 px-3 pt-3 pb-6 sm:px-5 sm:pt-5 sm:pb-8 lg:px-8 lg:pt-8 lg:pb-10 max-w-[95vw] sm:max-w-2xl lg:max-w-4xl w-full max-h-[90vh] overflow-y-auto relative mx-2 sm:mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setExpandedCardIndex(null)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Expanded Card Content */}
            {(() => {
              const exp = experiences[expandedCardIndex]
              return (
                <div className="text-center px-2 sm:px-4">
                  <img src={exp.icon} alt={`${exp.company} icon`} className="h-12 sm:h-14 lg:h-16 mx-auto mb-4 sm:mb-5 lg:mb-6" />
                  <h2 className="text-gray-900 dark:text-white font-semibold text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-3 lg:mb-4">{exp.company}</h2>
                  <h3 className="text-gray-700 dark:text-gray-200 text-base sm:text-lg lg:text-xl mb-2">{exp.role}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10">{exp.period}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg text-left px-2 sm:px-4 lg:px-8">
                    {exp.description}
                  </p>
                </div>
              )
            })()}
          </div>
        </div>
      )}
    </section>
  )
}

export default Experience

