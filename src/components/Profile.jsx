import { useTheme } from '../contexts/ThemeContext'

const Profile = () => {
  const { theme } = useTheme()
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="profile" className="flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-20 h-[80vh] pt-6 mx-4 sm:mx-6 lg:mx-10 xl:mx-40">
      <div className="flex h-[200px] w-[200px] sm:h-[275px] sm:w-[275px] lg:h-[400px] lg:w-[400px] mx-auto lg:mx-0 mb-6 sm:mb-8 lg:mb-0">
        <img 
          id="aryan_photo" 
          src={`${import.meta.env.BASE_URL}assets/AryanGuitar.png`} 
          alt="Aryan's Photo" 
          className="w-full h-full object-cover rounded-full transition-opacity duration-500"
        />
      </div>
      <div className="self-center text-center">
        <p className="text-base sm:text-lg lg:text-xl mb-2 text-gray-600 dark:text-gray-400">Hello I'm</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Aryan Agrawal</h1>
        <div className="flex justify-center gap-4 mb-4">
          <button 
            className="font-semibold transition-all duration-300 px-4 py-3 rounded-full w-40 border border-gray-800 dark:border-gray-300 hover:bg-gray-800 dark:hover:bg-gray-300 hover:text-white dark:hover:text-gray-900 text-gray-900 dark:text-gray-100"
            onClick={() => window.open(`${import.meta.env.BASE_URL}assets/Aryan Agrawal Resume.pdf`, '_blank')}
          >
            Resume
          </button>
          <button 
            className="font-semibold transition-all duration-300 px-4 py-3 rounded-full w-40 border border-gray-800 dark:border-gray-300 bg-gray-800 dark:bg-gray-300 text-white dark:text-gray-900 hover:bg-black dark:hover:bg-gray-200"
            onClick={() => scrollToSection('contact')}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container" className="flex justify-center mt-4 gap-4">
          <a href="https://www.linkedin.com/in/aryan-agrawal-699a60226/" target="_blank" rel="noopener noreferrer">
            <img 
              key={`linkedin-${theme}`}
              src={theme === 'dark' ? `${import.meta.env.BASE_URL}assets/white_linkedin.png` : `${import.meta.env.BASE_URL}assets/linkedin.png`} 
              alt="My LinkedIn Profile" 
              className="h-8 cursor-pointer transition-all duration-500 ease-in-out opacity-100 hover:opacity-80"
            />
          </a>
          <a href="https://github.com/aryanagra01" target="_blank" rel="noopener noreferrer">
            <img 
              key={`github-${theme}`}
              src={theme === 'dark' ? `${import.meta.env.BASE_URL}assets/github_white.png` : `${import.meta.env.BASE_URL}assets/github.png`} 
              alt="My GitHub Profile" 
              className="h-8 cursor-pointer transition-all duration-500 ease-in-out opacity-100 hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Profile

