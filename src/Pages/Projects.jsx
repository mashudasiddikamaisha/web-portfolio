import React from 'react'
import { motion } from "framer-motion";

const projects = [
  {
    title: "Travel-Ease Booking Web App",
    desc: "TravelEase is a fully functional full‑stack travel booking web application that lets users explore, select, and book travel services with ease. Built with modern web technologies, it offers a smooth, intuitive interface for browsing destinations, managing bookings, and tracking travel details.",
    tech: [
      "JavaScript",
      "REST API",
      "JWT",
      "MongoDB",
      "React",
      "Tailwind CSS",
    ],
    live: "https://travelease-app-11884.web.app/",
    github: "https://github.com/mashudasiddikamaisha/travel-ease-app",
  },
  {
    title: "English Janala Project",
    desc: "“English Janala” is an interactive English learning platform designed to help users begin or improve their English language skills in an easy and engaging way. The word Janala (জানালা) means “window” in Bengali, symbolizing a window to English learning opportunities.",
    tech: [
      "JavaScript",
      "Tailwind CSS",
      "React",
      "Axios",
    ],
    live: "https://mashudasiddikamaisha.github.io/english-janala-project/",
    github: "https://github.com/mashudasiddikamaisha/english-janala-project",
  },
  {
    title: "Portfolio Website",
    desc: "Personal developer portfolio with animations and responsive UI.",
    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],
    live: "#",
    github: "#",
  },    
  {
    title: "Skill Swap App",
    desc: "Skill Swap is a community‑driven learning platform designed to help people teach what they know and learn what they don’t — all through exchanging skills with others. It connects learners and teachers in a collaborative environment where everyone contributes and grows together.",
    tech: [
      "React",
      "Tailwind CSS",
      "Responsive Design",
      "Firebase"
    ],
    live: "https://skill-swap-msm.netlify.app/",
    github: "/",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: i => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.6 } })
}

const Projects = () => {
  return (
    // <section className="relative bg-[#0b0f1a] text-white py-24 overflow-hidden">

    //   <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full"></div>
    //   <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full"></div>

    //   <div className="relative z-10 max-w-7xl mx-auto px-6">
    //     {/* Headline  */}
    //     <div className="text-center mb-16">
    //       <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
    //         <span className="bg-linear-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent ">
    //           Projects
    //         </span>
    //       </h2>
    //       <p className="text-gray-400 max-w-2xl mx-auto">
    //         Real-world projects showcasing my Java Full-Stack development skills.
    //       </p>
    //     </div>

    //     {/* Cards  */}
    //     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
    //       {projects.map((project, index) => (
    //         <div
    //           key={index}
    //           className="group relative rounded-2xl p-px bg-linear-to-r from-pink-500 via-purple-500 to-cyan-400 hover:scale-[1.03] transition-all duration-300">

    //           <div className="h-full rounded-2xl bg-[#0f1525] p-6 flex flex-col">

    //             <h3 className="text-xl font-bold mb-3 group-hover:text-pink-400 transition">
    //               {project.title}
    //             </h3>

    //             <p className="text-gray-400 text-sm mb-5 grow">
    //               {project.desc}
    //             </p>

    //             {/* Skills  */}
    //             <div className="flex flex-wrap gap-2 mb-6">
    //               {project.tech.map((skill, i) => (
    //                 <span
    //                   key={i}
    //                   className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-cyan-300">
    //                   {skill}
    //                 </span>
    //               ))}
    //             </div>

    //             {/* Buttons  */}

    //             <div className="flex gap-4">
    //               <a
    //                 href={project.github}
    //                 className='flex-1 text-center px-4 py-4 rounded-full border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition'
    //               >
    //                 GitHub
    //               </a>
    //               <a
    //                 href={project.github}
    //                 className='flex-1 text-center px-4 py-4 rounded-full bg-linear-to-r from-pink-500 to-purple-600 hover:opacity-90 transition'
    //               >
    //                 Link
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //   </div>

    // </section>
    <section className="relative bg-[#0b0f1a] text-white py-24 overflow-hidden">

      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Headline  */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-linear-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent ">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world projects showcasing my Java Full-Stack development skills.
          </p>
        </div>

        {/* Cards  */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="group relative rounded-2xl p-px bg-linear-to-r from-pink-500 via-purple-500 to-cyan-400 hover:scale-[1.03] transition-all duration-300"
            >
              <div className="h-full rounded-2xl bg-[#0f1525] p-6 flex flex-col">

                <h3 className="text-xl font-bold mb-3 group-hover:text-pink-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-5 grow">
                  {project.desc}
                </p>

                {/* Skills  */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-cyan-300">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Buttons  */}
                <div className="flex gap-4">
                  {project.github && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='flex-1 text-center px-4 py-4 rounded-full border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition'
                    >
                      GitHub
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='flex-1 text-center px-4 py-4 rounded-full bg-linear-to-r from-pink-500 to-purple-600 hover:opacity-90 transition'
                    >
                      Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects