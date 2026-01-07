const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="pt-12 sm:pt-6 mx-4 sm:mx-10 lg:mx-40 pb-4 sm:pb-8">
      <nav>
        <div className="flex justify-center">
          <ul className="flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-8 list-none text-sm sm:text-lg lg:text-xl px-2">
            <li>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); scrollToSection('about') }}
                className="text-gray-900 dark:text-gray-100 no-underline transition-all duration-300 hover:text-gray-500 dark:hover:text-gray-400 hover:underline hover:underline-offset-2 whitespace-nowrap"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                onClick={(e) => { e.preventDefault(); scrollToSection('education') }}
                className="text-gray-900 dark:text-gray-100 no-underline transition-all duration-300 hover:text-gray-500 dark:hover:text-gray-400 hover:underline hover:underline-offset-2 whitespace-nowrap"
              >
                Education
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                onClick={(e) => { e.preventDefault(); scrollToSection('experience') }}
                className="text-gray-900 dark:text-gray-100 no-underline transition-all duration-300 hover:text-gray-500 dark:hover:text-gray-400 hover:underline hover:underline-offset-2 whitespace-nowrap"
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}
                className="text-gray-900 dark:text-gray-100 no-underline transition-all duration-300 hover:text-gray-500 dark:hover:text-gray-400 hover:underline hover:underline-offset-2 whitespace-nowrap"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
                className="text-gray-900 dark:text-gray-100 no-underline transition-all duration-300 hover:text-gray-500 dark:hover:text-gray-400 hover:underline hover:underline-offset-2 whitespace-nowrap"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <p className="flex justify-center mt-4 mb-4 sm:mb-8 text-gray-600 dark:text-gray-400 text-xs sm:text-sm lg:text-base px-2">Thank you for visiting my page</p>
    </footer>
  )
}

export default Footer

