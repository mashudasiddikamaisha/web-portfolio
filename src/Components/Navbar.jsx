import { useState, useEffect } from 'react';
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navItems = ["home", "projects", "about", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3; // mid-screen
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i]);
        if (section && scrollPos >= section.offsetTop) {
          setActive(navItems[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-linear-to-r from-[#0f0c29]/90 via-[#302b63]/90 to-[#24243e]/90 shadow-[0_0_30px_rgba(236,72,153,0.25)]">
      <div className='px-4 md:px-8 py-4 flex justify-between items-center'>
        {/* Logo */}
        <h1 className='text-2xl font-extrabold bg-linear-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse'>
          Maisha
        </h1>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-8 font-medium'>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`relative px-3 py-2 transition-all duration-300 ${
                active === item
                  ? "text-pink-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-linear-to-r after:from-pink-500 after:to-purple-500"
                  : "text-gray-300 hover:text-white hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-linear-to-r after:from-cyan-400 after:to-pink-500 after:transition-all after:duration-300"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div
          className='md:hidden text-3xl text-pink-400 cursor-pointer'
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className='md:hidden mx-4 mb-4 rounded-xl bg-linear-to-r from-[#1f1c2c] to-[#928dab] p-4 flex flex-col gap-3 shadow-xl animate-slideDown'>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className={`text-lg px-4 py-2 rounded-lg ${
                active === item ? "text-pink-400" : "text-white"
              } bg-black/30 hover:bg-linear-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;