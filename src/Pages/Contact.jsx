import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        // <section className='relative min-h-screen bg-[#0b0f1a] text-white flex items-center justify-center overflow-hidden'>


        //     <div className="relative z-10 text-center px-6">

        //         <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        //             <span className="bg-linear-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
        //                 Let's Work Together
        //             </span>
        //         </h2>

        //         <p className="text-gray-400 text-sm md:text-base mb-8 max-w-md mx-auto">
        //             Java Full-Stack Developer available for full-time roles, freelance
        //             projects & collaborations.
        //         </p>

        //         {/* Quick Info */}
        //         <div className="flex flex-col sm:flex-row gap-6 justify-center text-gray-300 text-sm mb-10">

        //             <span className="flex items-center gap-2">
        //                 <MdEmail className="text-lg" />
        //                 mashudamaisha@gmail.com
        //             </span>

        //             <span className="flex items-center gap-2">
        //                 <FaMapMarkerAlt className="text-lg" />
        //                 Sylhet, Bangladesh
        //             </span>

        //         </div>

        //         <div className="flex justify-center gap-5">
        //             <a
        //                 href="#"
        //                 className="px-8 py-3 rounded-full text-sm font-semibold
        //     bg-linear-to-r from-pink-500 to-purple-600
        //     hover:scale-105 transition-all duration-300
        //     shadow-[0_0_25px_rgba(236,72,153,0.5)]"
        //             >
        //                 Contact Me
        //             </a>

        //             <a
        //                 href="#"
        //                 className="px-8 py-3 rounded-full text-sm font-semibold
        //     border border-cyan-400 text-cyan-400
        //     hover:bg-cyan-400 hover:text-black transition-all duration-300"
        //             >
        //                 GitHub
        //             </a>
        //         </div>
        //     </div>
        // </section>
        <section className='relative min-h-screen bg-[#0b0f1a] text-white flex items-center justify-center overflow-hidden'>

            <motion.div
                className="relative z-10 text-center px-6"
                initial={{ opacity: 0, y: 50 }}       // ⭐ fade + slide up
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >

                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <span className="bg-linear-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                        Let's Work Together
                    </span>
                </motion.h2>

                <motion.p
                    className="text-gray-400 text-sm md:text-base mb-8 max-w-md mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    Java Full-Stack Developer available for full-time roles, freelance
                    projects & collaborations.
                </motion.p>

                {/* Quick Info */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center text-gray-300 text-sm mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="flex items-center gap-2">
                        <MdEmail className="text-lg" />
                        mashudamaisha@gmail.com
                    </span>

                    <span className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-lg" />
                        Sylhet, Bangladesh
                    </span>
                </motion.div>

                {/* Buttons */}
                <div className="flex justify-center gap-5">
                    <motion.a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(236,72,153,0.6)" }} // ⭐ hover motion
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-full text-sm font-semibold
                        bg-linear-to-r from-pink-500 to-purple-600
                        transition-all duration-300"
                    >
                        Contact Me
                    </motion.a>

                    <motion.a
                        href="https://github.com/mashudasiddikamaisha"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.08, backgroundColor: "rgb(34,211,238)", color: "black" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-full text-sm font-semibold
                        border border-cyan-400 text-cyan-400
                        transition-all duration-300"
                    >
                        GitHub
                    </motion.a>
                </div>
            </motion.div>
        </section>

    )
}

export default Contact