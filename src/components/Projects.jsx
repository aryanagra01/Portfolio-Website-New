import { useRef, useEffect, useState } from 'react'

const Projects = () => {
  const scrollContainerRef = useRef(null)
  const [paddingLeft, setPaddingLeft] = useState(0)
  const [paddingRight, setPaddingRight] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  const gap = 16

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

  const getCardWidth = () => {
    const windowWidth = window.innerWidth
    return windowWidth < 640 ? windowWidth * 0.55 : windowWidth < 1024 ? 380 : 480
  }

  const scrollToCard = (index) => {
    if (scrollContainerRef.current) {
      const currentCardWidth = getCardWidth()
      const scrollPosition = index * (currentCardWidth + gap)
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
    if (currentIndex < projects.length - 1) {
      scrollToCard(currentIndex + 1)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft
        const currentCardWidth = getCardWidth()
        const newIndex = Math.round(scrollLeft / (currentCardWidth + gap))
        if (newIndex >= 0 && newIndex < projects.length) {
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

  const baseUrl = import.meta.env.BASE_URL

  const projects = [
    {
      image: `${baseUrl}assets/wellnessbuddy.png`,
      title: 'WellnessBuddy',
      description: 'Created a full stack web application for wellness, leveraging smart contracts and blockchain technologies for Blockchain@NTU X Base Hackathon',
      buttons: [
        { text: 'GitHub', link: 'https://github.com/' },
        { text: 'Slides', link: 'https://example.com/' }
      ]
    },
    {
      image: `${baseUrl}assets/space-shooter.png`,
      title: 'Space Shooter',
      description: 'Fun game programmed on Unity for 2 players that works on multiple devices',
      buttons: [
        { text: 'GitHub', link: 'https://github.com/' }
      ]
    },
    {
      image: `${baseUrl}assets/recycling-warriors.png`,
      title: 'Recycling Warriors',
      description: 'Fun mobile game to teach children on how to recycle properly',
      buttons: [
        { text: 'GitHub', link: 'https://github.com/' }
      ]
    },
    {
      image: `${baseUrl}assets/freefyler.png`,
      title: 'Research on Orbital Manuvering',
      description: 'Use FreeFlyer to run simulations to help figure out efficient orbital routes',
      buttons: [
        { text: 'Research Paper', link: `${baseUrl}assets/PH017_SSEF_Project Report.pdf` }
      ]
    },
    {
      image: `${baseUrl}assets/tea-time.png`,
      title: 'Tea-Time',
      description: 'Fun quiz to see your type of tea based on MBTI personalities after some questions',
      buttons: [
        { text: 'GitHub', link: 'https://github.com/' },
        { text: 'Link', link: 'https://example.com/' }
      ]
    },
    {
      image: `${baseUrl}assets/yac-kenneth.png`,
      title: 'Youth Action Challenge: Kenneth Reeses\'s Puffs',
      description: 'Built an interactive recycling game with an $8.6k NYC grant, worked with industry experts, and got media coverage in Singapore',
      buttons: [
        { text: 'Slides', link: 'https://example.com/' },
        { text: 'Video', link: 'https://example.com/' }
      ]
    },
    {
      image: `${baseUrl}assets/legalease.png`,
      title: 'LegalEase',
      description: 'Prompting coach for law students for SMU LIT Hackathon',
      buttons: [
        { text: 'GitHub', link: 'https://github.com/' },
        { text: 'Slides', link: 'https://example.com/' }
      ]
    },
    {
      image: `${baseUrl}assets/project-meliora.png`,
      title: 'Project Meliora',
      description: 'Partnered with MINDS, raised over $2.7k through merchandise and donations, and led ~60 volunteers across schools with on-site volunteering at adult centres.',
      buttons: [
        { text: 'Instagram', link: 'https://www.instagram.com/' }
      ]
    },
    {
      image: `${baseUrl}assets/mimoso.png`,
      title: 'Project Mimoso',
      description: 'Partnered with CWW to raise over $2,300 and increased awareness for underprivileged children',
      buttons: [
        { text: 'Instagram', link: 'https://www.instagram.com/project.mimoso/' }
      ]
    }
  ]

  return (
    <section id="projects" className="relative pt-12 sm:pt-6 min-h-fit mx-4 sm:mx-6 lg:mx-10 xl:mx-40">
      <p className="text-sm sm:text-lg lg:text-xl text-center mb-3 sm:mb-4 text-gray-600 dark:text-gray-400">Browse My Recent</p>
      <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center mb-4 sm:mb-7 lg:mb-8 text-gray-900 dark:text-white">Projects</h1>
      
      <div className="relative px-4 sm:px-8 lg:px-12">
        {/* Left Fade Gradient */}
        <div className="absolute left-4 sm:left-8 lg:left-12 top-0 bottom-0 w-10 sm:w-16 lg:w-20 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none"></div>

        {/* Right Fade Gradient */}
        <div className="absolute right-4 sm:right-8 lg:right-12 top-0 bottom-0 w-10 sm:w-16 lg:w-20 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none"></div>

        {/* Left Arrow Button */}
        <button
          onClick={scrollLeft}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-900 rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-80 hover:opacity-100'
          }`}
          aria-label="Scroll left"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 dark:text-white"
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
              className="group px-2 pt-2 pb-4 sm:px-6 sm:pt-6 sm:pb-8 lg:px-8 lg:pt-8 lg:pb-10 flex-shrink-0 w-[55vw] sm:w-[380px] lg:w-[480px] bg-white dark:bg-gray-950 rounded-3xl border border-gray-400 dark:border-gray-700 text-center snap-center transition-all duration-700 ease-in-out hover:shadow-xl hover:-translate-y-1 flex flex-col min-h-[260px] sm:min-h-[380px] lg:min-h-[400px] relative overflow-hidden"
            >
              {/* Background image that appears on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out rounded-3xl"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              {/* Dark overlay that appears on hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-700 ease-in-out rounded-3xl"></div>
              
              {/* Content wrapper with relative positioning */}
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h2 className="text-gray-900 dark:text-white group-hover:text-white font-semibold text-lg sm:text-2xl lg:text-3xl mb-2 sm:mb-3 lg:mb-4 transition-colors duration-700 ease-in-out">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-white text-xs sm:text-sm lg:text-base mb-4 sm:mb-5 lg:mb-6 px-2 sm:px-4 transition-colors duration-700 ease-in-out">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto flex flex-wrap justify-center gap-2 sm:gap-3">
                  {project.buttons.map((button, btnIndex) => (
                    <button
                      key={btnIndex}
                      className="px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 rounded-full hover:bg-gray-700 dark:hover:bg-gray-300 transition-all duration-300 text-xs sm:text-sm w-fit group-hover:bg-white group-hover:text-gray-900"
                      onClick={() => {
                        if (button.link.startsWith('http') || button.link.startsWith('/')) {
                          window.open(button.link, '_blank')
                        } else {
                          window.open(button.link, '_blank')
                        }
                      }}
                    >
                      {button.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={scrollRight}
          disabled={currentIndex === projects.length - 1}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-900 rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ${
            currentIndex === projects.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-80 hover:opacity-100'
          }`}
          aria-label="Scroll right"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 dark:text-white"
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

