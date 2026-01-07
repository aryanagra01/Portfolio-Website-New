const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="pt-6 mx-10 lg:mx-40">
      <nav>
        <div className="flex justify-center">
          <ul className="flex gap-8 list-none text-xl">
            <li>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); scrollToSection('about') }}
                className="text-gray-900 dark:text-gray-100 no-underline transition-all duration-300 hover:text-gray-500 dark:hover:text-gray-400 hover:underline hover:underline-offset-2"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                onClick={(e) => { e.preventDefault(); scrollToSection('experience') }}
                className="text-gray-900 dark:text-gray-100 no-underline transition-all duration-300 hover:text-gray-500 dark:hover:text-gray-400 hover:underline hover:underline-offset-2"
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}
                className="text-gray-900 dark:text-gray-100 no-underline transition-all duration-300 hover:text-gray-500 dark:hover:text-gray-400 hover:underline hover:underline-offset-2"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
                className="text-gray-900 dark:text-gray-100 no-underline transition-all duration-300 hover:text-gray-500 dark:hover:text-gray-400 hover:underline hover:underline-offset-2"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <p className="flex justify-center mt-4 mb-8 text-gray-600 dark:text-gray-400">Thank you for visiting my page</p>
    </footer>
  )
}

export default Footer

