import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggler } from "../../components/animatex/themetoggler";
// global styles are imported once in `src/main.jsx` (via `animatex.css`)
// avoid importing global.css here to prevent duplicate Tailwind imports / ordering issues
import clsx from "clsx";


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <header className="fixed top-0 left-0 w-full z-1000 bg-white/95 dark:bg-[#0b0b0b]/95 backdrop-blur-sm shadow-md transition duration-300">
      <div className="max-w-4xl mx-auto px-5 py-5">
        
        {/* TOP ROW */}
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-gray-900 font-bold text-xl hover:text-gray-600 dark:text-white dark:hover:text-gray-400 transition"
          >
            Brian
          </Link>

          <div className="flex items-center gap-4">
            <ThemeToggler />

            {/* Mobile button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-900 dark:text-white"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
        
          {/* NAVIGATION */}
          <nav
            className={clsx(
              // mobile: show only when opened; md and up: always show as flex row
              isOpen ? "flex" : "hidden",
              "flex-col items-center space-y-3 mt-4 md:flex md:flex-row md:space-y-0 md:space-x-6 md:mt-0"
            )}
          >
        <Link to="/project" className="py-1 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400">Projects</Link>
        <Link to="/technology" className="py-1 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400">Stacks</Link>
        <Link to="/experience" className="py-1 text-gray-900 dark:text-white hover:text-gray-400">Experience</Link>
        <Link to="/contact" className="py-1 text-gray-900 dark:text-white hover:text-gray-400">Contact</Link>
      </nav>

      </div>
    </header>
  );
}

export default Header;
