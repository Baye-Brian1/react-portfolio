import React from 'react';
import { Github, Code, Palette, FileText} from 'lucide-react'; // Lucide Icons
import Vercel from '../assets/Vercel.png'
import Netlify from '../assets/netlify.svg'
import Tailwind from '../assets/download.png'
import reactImage from '../assets/react.svg'
import { Code2 } from 'lucide-react';

function MainTech() {
  return(
    <main>
      <div className="max-w-4xl min-h-screen mx-auto text-gray-700 dark:text-gray-400 p-5 pt-20">
        <h1 className="text-gray-900 dark:text-white text-xl mt-10 flex items-center gap-2">
          Stacks <Code2 size={20} className='inline'/>
          </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:px-16 gap-5">
          
          {/* HTML Stack */}
          <div className="cursor-pointer p-1 rounded-xl border border-gray-300 dark:border-gray-800 w-[94%] h-[250px] text-left bg-white dark:bg-gray-900/50 shadow-md dark:shadow-none hover:border-gray-400 dark:hover:border-gray-700 transition">
            <div className="flex bg-gray-100 dark:bg-gray-800 justify-center items-center mb-4 w-full h-40 border border-gray-300 dark:border-gray-800 rounded-lg text-5xl dark:text-white">
              <FileText size={50}/> {/* Replaced faHtml5 with FileText */}
            </div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-50 mb-[-10px] text-lg p-1.5">HTML</h2>
            <p className="text-md p-1.5 text-gray-600 dark:text-gray-400">The Genesis of Web Dev</p>
          </div>
          
          {/* CSS Stack */}
          <div className="cursor-pointer p-1.5 rounded-xl border border-gray-300 dark:border-gray-800 w-[94%] h-[250px] text-left bg-white dark:bg-gray-900/50 shadow-md dark:shadow-none hover:border-gray-400 dark:hover:border-gray-700 transition">
            <div className="flex bg-gray-100 dark:bg-gray-800 justify-center items-center mb-4 w-full h-40 border border-gray-300 dark:border-gray-800 rounded-lg text-5xl dark:text-white">
              <Palette size={50}/> {/* Replaced faCss3 with Palette */}
            </div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-50 mb-[-10px] text-lg p-1.5">CSS</h2>
            <p className="text-md p-1.5 text-gray-600 dark:text-gray-400">Styling Upon Styling</p>
          </div>
          
          {/* JavaScript Stack */}
          <div className="cursor-pointer p-1.5 rounded-xl border border-gray-300 dark:border-gray-800  w-[94%] h-[250px] text-left bg-white dark:bg-gray-900/50 shadow-md dark:shadow-none hover:border-gray-400 dark:hover:border-gray-700 transition">
            <div className="flex bg-gray-100 dark:bg-gray-800 justify-center w-full items-center mb-4 h-40 border border-gray-300 dark:border-gray-800 rounded-lg text-5xl dark:text-white">
              <Code size={50}/> {/* Replaced faJs with Code */}
            </div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-50 mb-[-10px] text-lg p-1.5">JavaScript</h2>
            <p className="text-md p-1.5 text-gray-600 dark:text-gray-400">To boost Web Interactivity</p>
          </div>
          
          {/* Github Stack */}
          <div className="cursor-pointer p-1.5 rounded-xl border border-gray-300 dark:border-gray-800 w-[94%] h-[250px] text-left bg-white dark:bg-gray-900/50 shadow-md dark:shadow-none hover:border-gray-400 dark:hover:border-gray-700 transition">
            <div className="flex bg-gray-100 dark:bg-gray-800 justify-center items-center mb-4 w-full h-40 border border-gray-300 dark:border-gray-800 rounded-lg text-5xl text-gray-900 dark:text-white">
              <Github size={50}/> {/* Replaced faGithub with Github */}
            </div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-50 mb-[-10px] text-lg p-1.5">Github</h2>
            <p className="text-md p-1.5 text-gray-600 dark:text-gray-400">Hardwork through commits</p>
          </div>
          
          {/* React Stack */}
          <div className="cursor-pointer p-1 rounded-xl border border-gray-300 dark:border-gray-800 w-[94%] h-[250px] text-left bg-white dark:bg-gray-900/50 shadow-md dark:shadow-none hover:border-gray-400 dark:hover:border-gray-700 transition">
            <div className="flex bg-gray-100 dark:bg-gray-800 justify-center items-center mb-4 w-full h-40 border border-gray-300 dark:border-gray-800 rounded-lg">
              <img src={reactImage} alt="react" className="flex justify-center mx-auto w-[70px] h-[70px] rounded-xl"/>
            </div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-50 mb-[-10px] text-lg p-1.5">React</h2>
            <p className="text-md p-1.5 text-gray-600 dark:text-gray-400">Components and User Core Interface</p>
          </div>
          
          {/* Tailwind CSS Stack */}
          <div className="cursor-pointer p-1 rounded-xl border border-gray-300 dark:border-gray-800 w-[94%] h-[250px] text-left bg-white dark:bg-gray-900/50 shadow-md dark:shadow-none hover:border-gray-400 dark:hover:border-gray-700 transition">
            <div className="flex bg-gray-100 dark:bg-gray-800 justify-center items-center mb-4 w-full h-40 border border-gray-300 dark:border-gray-800 rounded-lg">
              <img src={Tailwind} alt="tailwindcss" className="flex justify-center mx-auto w-[70px] h-[70px] rounded-xl"/>
            </div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-50 mb-[-10px] text-lg p-1.5">Tailwind css</h2>
            <p className="text-md p-1.5 text-gray-600 dark:text-gray-400">Good and Responsive UI</p>
          </div>
        </div>
      </div> 	
      <div className="max-w-4xl mx-auto border-b border-gray-300 dark:border-gray-800"></div>
    </main>
  );
} 
export default MainTech;