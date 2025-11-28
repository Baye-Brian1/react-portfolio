import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Lucide icons
import { ThemeToggler } from '../../components/animatex/themetoggler';
import '../../global.css'; // Use the new global CSS

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // FIX 1: Added background color (bg-white/95) and dark mode background (dark:bg-[#0b0b0b]/95) 
    // to prevent content from showing through. Added backdrop-blur for a modern effect.
    <header className="fixed top-0 left-0 w-full z-1000 bg-white/9 dark:bg-[#0b0b0b]/95 backdrop-blur-sm transition duration-300 dark:shadow-none">
      <div className="max-w-4xl mx-auto px-5 py-5 flex justify-between items-center">
        {/* FIX: Corrected logo colors (text-gray-900 for Light Mode, dark:text-white for Dark Mode) */}
        <div className="text-gray-900 font-bold text-xl hover:text-gray-600 dark:text-white dark:hover:text-gray-400 transition">
          <Link to="/">Brian</Link>
        </div>

        <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} md:static absolute left-0 top-[70px] w-full md:w-auto bg-white dark:bg-[#0b0b0b] md:bg-transparent z-50 p-0 md:p-0 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-5 transition-all duration-300`}>
          
          {/* FIX 2: Corrected link colors: text-gray-900 (dark) by default, dark:text-white (light) in dark mode */}
          <Link to="/project" className="text-gray-900 text-base no-underline hover:text-gray-600 dark:text-white dark:hover:text-gray-400 p-2.5">Projects</Link>
          <Link to="/technology" className="text-gray-900 text-base no-underline hover:text-gray-600 dark:text-white dark:hover:text-gray-400 p-2.5">Stacks</Link>
          <Link to="/experience" className="text-gray-900 text-base no-underline hover:text-gray-600 dark:text-white dark:hover:text-gray-400 p-2.5">Experience</Link>
          <Link to="/contact" className="text-gray-900 text-base no-underline hover:text-gray-600 dark:text-white dark:hover:text-gray-400 p-2.5">Contact</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <ThemeToggler/>
          {/* FIX: Corrected mobile icon colors for visibility */}
          <div className="md:hidden cursor-pointer text-gray-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto border-b border-gray-600/30"></div>
    </header>
  );
}
export default Header;