const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="relative pt-6 min-h-fit mx-4 sm:mx-6 lg:mx-10 xl:mx-40">
      <p className="text-sm sm:text-lg lg:text-xl text-center mb-3 sm:mb-4 text-gray-600 dark:text-gray-400">Get to know more</p>
      <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center mb-4 sm:mb-7 lg:mb-8 text-gray-900 dark:text-white">About Me</h1>
      
      <div className="block">
        <div className="text-container mt-8">
          <hr className="w-full my-4 border-gray-400 dark:border-gray-700" />
          <p id="description" className="m-4 sm:m-6 lg:m-8 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 text-center lg:text-left">
              I am a curious and driven undergraduate with a strong interest in data, business and technology. I enjoy analysing problems, learning new concepts quickly and translating insights into practical solutions. I am particularly motivated by roles that allow me to continuously learn, work with data and contribute to meaningful outcomes in collaborative environments.          </p>
          <hr className="w-full my-4 border-gray-400 dark:border-gray-700" />
        </div>
      </div>
      
      <img 
        src="/assets/arrow.png" 
        alt="arrow-pic" 
        className="hidden lg:block absolute -right-20 bottom-10 h-8 cursor-pointer" 
        onClick={() => scrollToSection('experience')}
      />
    </section>
  )
}

export default About

