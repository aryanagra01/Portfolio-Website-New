import { useTheme } from '../contexts/ThemeContext'

const Contact = () => {
  const { theme } = useTheme()
  
  return (
    <section id="contact" className="flex justify-center flex-col h-[70vh] pt-12 sm:pt-6 mx-4 sm:mx-10 lg:mx-40">
      <p className="text-base sm:text-xl text-center mb-4 text-gray-600 dark:text-gray-400">Get in Touch</p>
      <h1 className="text-3xl sm:text-5xl text-center mb-6 sm:mb-8 text-gray-900 dark:text-white">Contact Me</h1>
      
      <div className="flex flex-col lg:flex-row justify-center rounded-3xl border border-gray-400 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 m-4 sm:m-8">
        <div className="flex items-center justify-center gap-2 m-4 flex-wrap">
          <img src={`${import.meta.env.BASE_URL}assets/email.png`} alt="Email icon" className="h-8 sm:h-10 cursor-default flex-shrink-0" />
          <p className="text-sm sm:text-lg break-all">
            <a href="mailto:aryanagra11@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white break-words">
              aryanagra11@gmail.com
            </a>
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 m-4">
          <img 
            key={`linkedin-contact-${theme}`}
            src={theme === 'dark' ? `${import.meta.env.BASE_URL}assets/white_linkedin.png` : `${import.meta.env.BASE_URL}assets/linkedin.png`} 
            alt="LinkedIn icon" 
            className="h-6 sm:h-8 cursor-default transition-all duration-500 ease-in-out opacity-100 flex-shrink-0"
          />
          <p className="text-sm sm:text-lg">
            <a 
              href="https://www.linkedin.com/in/aryan-agrawal-699a60226/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact

