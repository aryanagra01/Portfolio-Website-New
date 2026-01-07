import { useRef, useEffect, useState } from 'react'

const Education = () => {
  const scrollContainerRef = useRef(null)
  const [paddingLeft, setPaddingLeft] = useState(0)
  const [paddingRight, setPaddingRight] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [expandedCardIndex, setExpandedCardIndex] = useState(null)

  const gap = 16
  const baseUrl = import.meta.env.BASE_URL

  const educations = [
    {
      icon: `${baseUrl}assets/ntu_image.png`,
      institution: 'Nanyang Technological University Singapore',
      program: 'Renaissance Engineering Programme',
      period: 'Aug 2025 - Dec 2029',
      grade: 'GPA: 4.9',
      activities: 'Thrive Social Consulting, CBC, IIC, REPJamband, ENABLE',
      awards: [
        'SingHacks 2025 Ancileo x MISG Track: 2nd Runners Up',
        'Blockchain@NTU X Base Hackathon: 2nd Runners Up'
      ],
      otherActivities: [],
      others: ''
    },
    {
      icon: `${baseUrl}assets/vjc2.png`,
      institution: 'Victoria Junior College',
      program: '',
      period: 'Jan 2021 - Dec 2022',
      grade: '90RP - AAAA/AA, H3 Dist',
      activities: 'Dance Club, Malay Cultural Society (Project Manager), Science Society, Guitar Ensemble',
      subjects: 'H2 Physics, H2 Chemistry, H2 Economics, H2 Mathematics, H3 Chemistry, H1 General Paper, H1 Hindi, H1 Project Work',
      awards: [
        'EAGLES Award for Service (2023)',
        'SINDA Excellence Award (2023)',
        'OVA Gold Medal for Academic Excellence (2023)',
        'Chemistry Olympiad Bronze (2021)',
        'Euclid Math Contest 2022 - High Distinction',
        'Australian Math Competition - Distinction'
      ],
      otherActivities: [
        'School Based Science Research Programme (2022)',
        'Orientation Group Leader (2022)',
        'School Ambassador (2022)'
      ],
      others: ''
    },
    {
      icon: `${baseUrl}assets/vs.png`,
      institution: 'Victoria School',
      program: '',
      period: 'Jan 2017 - Dec 2020',
      grade: '3.92 GPA',
      activities: 'Chinese Orchestra (Section Leader), Prefectorial Board',
      subjects: 'English, Integrated Mathematics, Biology, Chemistry, Physics, Hindi, Geography, Malay Special Programme',
      awards: [
        'Academic Excellence Award (2021)',
        'SINDA Excellence Award (2021)',
        'Best in Physics (2020)',
        'Social Innovator Award (2020)',
        'Physics Olympiad Bronze (2019)',
        'Math Olympiad Bronze (2018, 2019)',
        'Best in Malay Special Programme (2017, 2018)',
        'Nanyang Polytechnic Science and Technology Challenge (2017, 2018, 2019 - all 1st Place)',
        'Drone Odyssey Challenge (3rd in SEA)',
        'East Zone IoT and Cybersecurity Hackathon - 1st Place'
      ],
      otherActivities: [],
      others: ''
    }
  ]

  useEffect(() => {
    // Calculate padding dynamically based on container width
    const calculatePadding = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current
        const containerWidth = container.clientWidth
        const windowWidth = window.innerWidth
        const cardWidth = windowWidth < 640 ? windowWidth * 0.55 : windowWidth < 1024 ? 500 : 700
        
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

  // Center the first card when padding is set - only once
  useEffect(() => {
    if (paddingLeft > 0 && scrollContainerRef.current) {
      const timeout = setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft = 0
        }
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [paddingLeft])

  const scrollToCard = (index) => {
    if (scrollContainerRef.current) {
      const windowWidth = window.innerWidth
      const cardWidth = windowWidth < 640 ? windowWidth * 0.75 : windowWidth < 1024 ? 500 : 700
      const scrollPosition = paddingLeft + index * (cardWidth + gap)
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
      setCurrentIndex(index)
    }
  }

  const scrollLeft = () => {
    if (currentIndex > 0) {
      scrollToCard(currentIndex - 1)
    }
  }

  const scrollRight = () => {
    if (currentIndex < educations.length - 1) {
      scrollToCard(currentIndex + 1)
    }
  }

  // Update current index when user scrolls manually
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft
        const windowWidth = window.innerWidth
        const cardWidth = windowWidth < 640 ? windowWidth * 0.55 : windowWidth < 1024 ? 500 : 700
        const cardPosition = scrollLeft - paddingLeft
        const newIndex = Math.round(cardPosition / (cardWidth + gap))
        if (newIndex >= 0 && newIndex < educations.length) {
          setCurrentIndex(newIndex)
        }
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [paddingLeft])

  return (
    <section id="education" className="relative pt-6 min-h-fit mx-4 sm:mx-6 lg:mx-10 xl:mx-40">
      <p className="text-sm sm:text-lg lg:text-xl text-center mb-3 sm:mb-4 text-gray-600 dark:text-gray-400">My Academic</p>
      <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center mb-4 sm:mb-7 lg:mb-8 text-gray-900 dark:text-white">Education</h1>
      
      <div className="relative px-4 sm:px-8 lg:px-12">
        {/* Left Fade Gradient */}
        <div className="absolute left-4 sm:left-8 lg:left-12 top-0 bottom-0 w-12 sm:w-16 lg:w-20 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none"></div>
        
        {/* Right Fade Gradient */}
        <div className="absolute right-4 sm:right-8 lg:right-12 top-0 bottom-0 w-12 sm:w-16 lg:w-20 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none"></div>

        {/* Left Arrow Button */}
        <button
          onClick={scrollLeft}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-900 rounded-full p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-80 hover:opacity-100'
          }`}
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
          {educations.map((edu, index) => (
            <div
              key={index}
              data-card-index={index}
              className="px-2 pt-2 pb-4 sm:px-6 sm:pt-6 sm:pb-8 lg:px-8 lg:pt-8 lg:pb-10 flex-shrink-0 w-[55vw] sm:w-[500px] lg:w-[700px] bg-white dark:bg-gray-950 rounded-3xl border border-gray-400 dark:border-gray-700 text-center snap-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col min-h-[280px] sm:min-h-[450px] lg:min-h-[500px]"
            >
              <div className="flex-grow">
                <img src={edu.icon} alt={`${edu.institution} icon`} className="h-10 sm:h-14 lg:h-16 mx-auto mb-3 sm:mb-5 lg:mb-6" />
                <h2 className="text-gray-900 dark:text-white font-semibold text-lg sm:text-2xl lg:text-3xl mb-2 sm:mb-3 lg:mb-4">{edu.institution}</h2>
                {edu.program && (
                  <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-lg lg:text-xl mb-1 sm:mb-2">{edu.program}</p>
                )}
                {edu.period && (
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-base lg:text-lg mb-2 sm:mb-3 lg:mb-4">{edu.period}</p>
                )}
                {edu.grade && (
                  <p className="text-gray-900 dark:text-white text-sm sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 lg:mb-4">{edu.grade}</p>
                )}
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
          disabled={currentIndex === educations.length - 1}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-900 rounded-full p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ${
            currentIndex === educations.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-80 hover:opacity-100'
          }`}
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
              const edu = educations[expandedCardIndex]
              return (
                <div className="text-center px-2 sm:px-4">
                  <img src={edu.icon} alt={`${edu.institution} icon`} className="h-12 sm:h-14 lg:h-16 mx-auto mb-4 sm:mb-5 lg:mb-6" />
                  <h2 className="text-gray-900 dark:text-white font-semibold text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-3 lg:mb-4">{edu.institution}</h2>
                  {edu.program && (
                    <p className="text-gray-700 dark:text-gray-200 text-base sm:text-lg lg:text-xl mb-2">{edu.program}</p>
                  )}
                  {edu.period && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg mb-3 sm:mb-3 lg:mb-4">{edu.period}</p>
                  )}
                  {edu.grade && (
                    <p className="text-gray-900 dark:text-white text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-3 lg:mb-4">{edu.grade}</p>
                  )}
                  {edu.activities && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg mb-3 sm:mb-3 lg:mb-4">
                      <span className="font-semibold">Activities & societies:</span> {edu.activities}
                    </p>
                  )}
                  {edu.subjects && (
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-3 lg:mb-4">
                      <span className="font-semibold">Subjects Offered:</span> {edu.subjects}
                    </p>
                  )}
                  {edu.awards && edu.awards.length > 0 && (
                    <div className="text-left text-gray-600 dark:text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-3 lg:mb-4">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">Awards:</p>
                      <ul className="list-disc list-inside space-y-0.5 sm:space-y-1">
                        {edu.awards.map((award, i) => (
                          <li key={i}>{award}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {edu.otherActivities && edu.otherActivities.length > 0 && (
                    <div className="text-left text-gray-600 dark:text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-3 lg:mb-4">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">Other Activities:</p>
                      <ul className="list-disc list-inside space-y-0.5 sm:space-y-1">
                        {edu.otherActivities.map((activity, i) => (
                          <li key={i}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {edu.others && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg">
                      <span className="font-semibold">Others:</span> {edu.others}
                    </p>
                  )}
                </div>
              )
            })()}
          </div>
        </div>
      )}
    </section>
  )
}

export default Education

