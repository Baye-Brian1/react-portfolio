import React from "react";
import ReadMoreText from "./traitz";
import Read from "./tic"
import { Sparkles } from "lucide-react";

function MainExp() {
  return(
    <main>
      <section className="max-w-4xl min-h-screen mx-auto text-gray-700 dark:text-gray-400 p-5 pt-20">
        <h1 className="text-gray-900 dark:text-white text-xl mb-5 mt-10 flex items-center gap-2">
          Experience<Sparkles size={20} className="inline"/>
          </h1>
        
        {/* Experience Card 1 */}
        <div className="bg-white dark:bg-transparent p-6 rounded-xl shadow-lg shadow-gray-300 dark:shadow-gray-900/50 mb-8 transition-all duration-200 border border-transparent dark:border-gray-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-400 dark:hover:shadow-gray-800">
          <h3 className="text-2xl text-gray-900 dark:text-white">Front-End Intern</h3>
          <h4 className="text-xl text-gray-600 dark:text-gray-400 mt-1 mb-2">Traitz Tech</h4>
          <p className="text-sm text-gray-500 mb-4">February 2025 – March 2025 (1 month)</p>
          <div className="text-gray-700 dark:text-gray-200 leading-relaxed text-base">
            <ReadMoreText/>
          </div>
        </div>

        {/* Experience Card 2 */}
        <div className="bg-white dark:bg-transparent p-6 rounded-xl shadow-lg shadow-gray-300 dark:shadow-gray-900/50 mb-8 transition-all duration-200 border border-transparent dark:border-gray-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-400 dark:hover:shadow-gray-800">
          <h3 className="text-2xl text-gray-900 dark:text-white">Front-End Intern</h3>
          <h4 className="text-xl text-gray-600 dark:text-gray-400 mt-1 mb-2">Tic Foundation</h4>
          <p className="text-sm text-gray-500 mb-4">September 2025 – Present</p>
          <div className="text-gray-700 dark:text-gray-200 leading-relaxed text-base">
            <Read/>
          </div>
        </div>
        
      </section>
    </main>
  );
}
export default MainExp;