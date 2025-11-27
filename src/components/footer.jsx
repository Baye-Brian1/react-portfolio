import React from "react";
import { Github, Linkedin } from "lucide-react"; // Lucide Icons
import '../../global.css'

function Footer(){
  return(
    <footer>
      <div className="max-w-4xl mx-auto border-t border-gray-300 dark:border-gray-800"></div> {/* Separator line */}
      <div className="max-w-4xl mx-auto flex justify-between items-center py-4 px-5 text-gray-600 dark:text-gray-400">
        <p>&copy;2025</p>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/baye-brian-208a85350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-xl text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/Baye-Brian1" target="_blank" className="text-xl text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition">
            <Github size={24} />
          </a>
        </div> 
      </div>
    </footer>
  );
}
export default Footer;