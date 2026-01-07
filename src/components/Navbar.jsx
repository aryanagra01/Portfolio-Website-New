import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Nav */}
      <nav id="desktop-nav" className="hidden lg:flex justify-around items-center h-[17vh]">
        <div className="text-3xl font-semibold text-gray-900 dark:text-white">ARYAN</div>
        <div className="flex items-center gap-8">
          <ul className="flex gap-8 list-none text-2xl">
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
                href="#education" 
                onClick={(e) => { e.preventDefault(); scrollToSection('education') }}
                className="text-gray-900 dark:text-gray-100 no-underline transition-all duration-300 hover:text-gray-500 dark:hover:text-gray-400 hover:underline hover:underline-offset-2"
              >
                Education
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
          <ThemeToggle />
        </div>
      </nav>

      {/* Hamburger Nav */}
      <nav id="hamburger-nav" className="lg:hidden flex justify-around items-center h-[17vh]">
        <div className="text-3xl font-semibold text-gray-900 dark:text-white">ARYAN</div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="relative inline-block">
            <div 
              className={`flex flex-col justify-between h-6 w-8 cursor-pointer transition-all duration-300 ${isMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
            >
              <span className={`w-full h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
            <div className={`absolute top-full right-0 bg-white dark:bg-black w-fit max-h-0 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[300px]' : ''}`}>
              <ul className="list-none">
                <li>
                  <a 
                    href="#about" 
                    onClick={(e) => { e.preventDefault(); scrollToSection('about') }}
                    className="block p-2.5 text-center text-2xl text-gray-900 dark:text-gray-100 no-underline transition-all duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#education" 
                    onClick={(e) => { e.preventDefault(); scrollToSection('education') }}
                    className="block p-2.5 text-center text-2xl text-gray-900 dark:text-gray-100 no-underline transition-all duration-300"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a 
                    href="#experience" 
                    onClick={(e) => { e.preventDefault(); scrollToSection('experience') }}
                    className="block p-2.5 text-center text-2xl text-gray-900 dark:text-gray-100 no-underline transition-all duration-300"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}
                    className="block p-2.5 text-center text-2xl text-gray-900 dark:text-gray-100 no-underline transition-all duration-300"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
                    className="block p-2.5 text-center text-2xl text-gray-900 dark:text-gray-100 no-underline transition-all duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

