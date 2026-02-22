import React from 'react'

const Footer = () => {
  return (
    <footer className='relative bg-[#0b0f1a] text-gray-400 py-6 overflow-hidden'>

      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-pink-500 to-transparent"></div>
      <div className="max-w-6xl max-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">

        <p>&copy; {new Date().getFullYear()} {" "}
          <span className="text-white font-medium">Maisha</span>
        </p>

        <p className="text-gray-500">
          Java Front-End Developer
        </p>

        <div className="flex gap-4">
          <a href="https://github.com/mashudasiddikamaisha" target="_blank" rel="noopener noreferrer" className='hover:text-pink-400 transition'>
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className='hover:text-cyan-400 transition'>
            LinkedIn
          </a>
        </div>


      </div>

    </footer>
  )
}

export default Footer