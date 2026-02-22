import React from 'react'
import profile from "/public/maisha3.jpeg"
import { BsPersonHeart } from 'react-icons/bs'
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0f1a] text-white'>

      {/* Glow Blobs  */}
      <div className='absolute -top-32 -left-32 w-96 h-96 rounded-full bg-pink-500/30  blur-3xl animate-pulse'></div>
      <div className='absolute -top-1/2 -right-32 w-96 h-96 rounded-full bg-cyan-400/30 blur-3xl animate-pulse delay-1000'></div>
      <div className='absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-purple-600/30 blur-3xl animate-pulse delay-500'></div>

      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff15_1px, transparent_0)] bg-size-[40px_40px] opacity-30"></div> */}
      <motion.div
        className='relative z-10 max-w-6xl w-full px-6 grid md:grid-cols-2 gap-16 items-center'
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* <div className='relative z-10 max-w-6xl w-full px-6 grid md:grid-cols-2 gap-16 items-center'> */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Left Text  */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              <span className='bg-linear-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-text'>
                React Front-End
              </span>
              <br />
              Developer
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-8">
              Hi, I'm{" "}
              <span className='text-pink-400 font-bold'>Maisha</span><BsPersonHeart className="inline ml-2 text-purple-400" />
              <br />
              I build scalable, secure & high-performance web applications. using
              <span className="text-cyan-400 font-medium"> JavaScript</span>,
              <span className="text-pink-400 font-medium"> React </span>&
              <span className="text-purple-400 font-medium"> MongoDB</span>.
            </p>

            <p className="text-gray-400 max-w-xl">
              Passionate about backend logic, Rest APIs, authentication, and database design and crafting modern responsive UIs with React & Tailwind CSS.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-4">
              {/* <button className="px-10 py-4 rounded-full font-semibold text-lg bg-linear-to-r from-pink-500 to-purple-600
             hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(236,72,153,0.6)]">
              View Projects
            </button> */}
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-10 py-4 rounded-full font-semibold text-lg bg-linear-to-r from-pink-500 to-purple-600 shadow-[0_0_30px_rgba(236,72,153,0.6)]"
              >
                View Projects
              </motion.a>


              {/* <button className="px-10 py-4 rounded-full font-semibold text-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400
              hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(34, 211, 238, 0.4)]">
              Download Resume
            </button> */}
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/mashudasiddikamaisha/"
                target="_blank"
                rel="noopener noreferrer"

                className="px-10 py-4 rounded-full font-semibold text-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black shadow-[0_0_30px_rgba(34,211,238,0.4)]"
              >
                Download Resume
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Right Profile Image  */}

        {/* <div className="flex justify-center"> */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative group">

            <div className="relative p-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_0_60px_rgba(236,72,153,0.6)]">

              <img
                src={profile}
                alt="Profile"
                className="
                w-80 h-80
                md:w-105 md:h-105
                lg:w-115 lg:h-115
                object-cover rounded-full
                group-hover:scale-110 transition duration-700
                " />
            </div>
          </div>
        </motion.div>

      </motion.div>

      <div className="absolute bottom-0 w-full h-0.5 bg-linear-to-r from-transparent via-pink-500 to-transparent animate-pulse"></div>
    </section>
  )
}

export default Home