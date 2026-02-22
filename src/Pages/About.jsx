import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "Hibernate",
  "REST APIs",
  "JWT",
  "MySQL",
  "React",
  "Tailwind CSS",
  "JavaScript",
  "Git",
  "Postman",
];

const About = () => {

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  }

  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 }
    })
  }

  return (
    // <section className='relative bg-[#0b0f1a] text-white py-24 overflow-hidden'>

    //   <div className="relative z-10 max-w-6xl mx-auto px-6">

    //     {/* Heading  */}
    //     <div className="text-center mb-16">
    //       <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
    //         <span className="bg-linear-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
    //           About Me
    //         </span>
    //       </h2>
    //       <p className="text-gray-400 max-w-2xl mx-auto">
    //         Get to know more about me, my skills, and what I love building.
    //       </p>
    //     </div>

    //     <div className="grid md:grid-cols-2 gap-14 text-center">
    //       <div>
    //         <h3 className="text-2xl font-bold mb-4 text-pink-400">
    //           Java Full Stack Developer
    //         </h3>
    //         <p className="text-gray-300 leading-relaxed mb-6">
    //           I’m{" "}
    //           <span className="text-white font-semibold">Maisha</span>, a
    //           passionate Java Full-Stack Developer who loves building secure,
    //           scalable, and performance-driven web applications.
    //         </p>

    //         <p className="text-gray-400 mb-6">
    //           My core strength lies in backend development using{" "}
    //           <span className="text-cyan-400">Java & Spring Boot</span>, creating
    //           RESTful APIs, handling authentication, and designing efficient
    //           databases. I also enjoy crafting modern, responsive UIs using{" "}
    //           <span className="text-pink-400">React & Tailwind CSS</span>.
    //         </p>

    //         {/* Stats  */}
    //         <div className="grid grid-cols-3 gap-6 mt-8">
    //           <div className="text-center p-4 rounded-xl bg-white/5 border-white/10">
    //             <h4 className="text-3xl font-bold text-cyan-400">10+</h4>
    //             <p className="text-gray-400 text-sm">Projects</p>
    //           </div>
    //           <div className="text-center p-4 rounded-xl bg-white/5 border-white/10">
    //             <h4 className="text-3xl font-bold text-pink-400">1+</h4>
    //             <p className="text-gray-400 text-sm">Year Learning</p>
    //           </div>
    //           <div className="text-center p-4 rounded-xl bg-white/5 border-white/10">
    //             <h4 className="text-3xl font-bold text-purple-400">100%</h4>
    //             <p className="text-gray-400 text-sm">Passion</p>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Right Skills  */}

    //       <div className="rounded-2xl bg-[#0f1525] p-8 border border-white/10 shadow-xl">
    //         <h3 className="text-xl font-bold mb-6 text-center text-cyan-400">
    //           Tech Stack
    //         </h3>
    //         <div className="flex flex-wrap justify-center gap-3">
    //           {skills.map((skill, index) => (
    //           <span 
    //             key={index}
    //           className="px-4 py-2 rounded-full text-sm bg-linear-to-r from-pink-500/20 to-purple-500/20 border border-white-20 text-white hover:scale-105 transition">
    //             {skill}
    //           </span>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
     <section className='relative bg-[#0b0f1a] text-white py-24 overflow-hidden'>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading  */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-linear-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about me, my skills, and what I love building.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 text-center">

          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-pink-400">
              Java Full Stack Developer
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I’m <span className="text-white font-semibold">Maisha</span>, a passionate Java Full-Stack Developer who loves building secure, scalable, and performance-driven web applications.
            </p>

            <p className="text-gray-400 mb-6">
              My core strength lies in backend development using <span className="text-cyan-400">Java & Spring Boot</span>, creating RESTful APIs, handling authentication, and designing efficient databases. I also enjoy crafting modern, responsive UIs using <span className="text-pink-400">React & Tailwind CSS</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { value: "10+", label: "Projects", color: "cyan-400" },
                { value: "1+", label: "Year Learning", color: "pink-400" },
                { value: "100%", label: "Passion", color: "purple-400" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={statVariants}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-xl bg-white/5 border-white/10"
                >
                  <h4 className={`text-3xl font-bold text-${stat.color}`}>{stat.value}</h4>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-[#0f1525] p-8 border border-white/10 shadow-xl"
          >
            <h3 className="text-xl font-bold mb-6 text-center text-cyan-400">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={skillVariants}
                  viewport={{ once: true }}
                  className="px-4 py-2 rounded-full text-sm bg-linear-to-r from-pink-500/20 to-purple-500/20 border border-white/20 text-white hover:scale-105 transition"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About