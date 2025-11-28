import React from 'react';
import { Github,Pin } from 'lucide-react'; // Lucide Icon
import design from '../assets/desktop-design.jpg'
import task from '../assets/task.PNG'
import user from '../assets/user.PNG'
import restaurant from '../assets/RestaurantWeb.png'

function MainProject() {
  return(
    <section className="max-w-4xl min-h-screen mx-auto text-gray-700 dark:text-gray-400 p-5 pt-20">
      <h1 className="text-gray-900 dark:text-white text-xl mt-10 flex items-center gap-2">
        Projects<Pin size={20} className='inline rotate-12'/>
         </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:px-16 gap-5">

        {/* E-commerce Project */}
        <div className="cursor-pointer p-1 rounded-xl border border-gray-300 dark:border-gray-800 w-[94%] h-[250px] text-left bg-white dark:bg-gray-900/50 shadow-md dark:shadow-none hover:border-gray-400 dark:hover:border-gray-700 transition"
          onClick={() => window.location.href = 'https://learn-js-brian.vercel.app/'}>
          <div className="flex bg-gray-100 dark:bg-gray-800 justify-center items-center mb-4 w-full h-40 border border-gray-300 dark:border-gray-800 rounded-lg">
            <img src={design} alt="main-design" className="w-full h-40 rounded-lg object-fill" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-[-10px] text-xl p-1.5">E-commerce Landing Page</h3>
          <p className="text-md p-1.5 text-gray-600 dark:text-gray-400">Interactive E-commerce Landing page</p>
        </div>

        {/* Task Scheduler Project */}
        <div className="cursor-pointer p-1 rounded-xl border border-gray-300 dark:border-gray-800 w-[94%] h-[250px] text-left bg-white dark:bg-gray-900/50 shadow-md dark:shadow-none hover:border-gray-400 dark:hover:border-gray-700 transition"
          onClick={() => window.location.href = 'https://task-scheduler-seven-orpin.vercel.app/'}>
          <div className="flex bg-gray-100 dark:bg-gray-800 justify-center items-center mb-4 w-full h-40 border border-gray-300 dark:border-gray-800 rounded-lg">
            <img src={task} alt="task" className="w-full h-40 rounded-lg object-fill" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-[-10px] text-xl p-1.5">Task scheduler</h3>
          <p className="text-md p-1.5 text-gray-600 dark:text-gray-400">Schedule your various Tasks</p>
        </div>

        {/* Random User Project */}
        <div className="cursor-pointer p-1 rounded-xl border border-gray-300 dark:border-gray-800 w-[94%] h-[250px] text-left bg-white dark:bg-gray-900/50 shadow-md dark:shadow-none hover:border-gray-400 dark:hover:border-gray-700 transition"
          onClick={() => window.location.href = 'https://random-user-git-main-baye-brian-s-projects.vercel.app/'}>
          <div className="flex bg-gray-100 dark:bg-gray-800 justify-center items-center mb-4 w-full h-40 border border-gray-300 dark:border-gray-800 rounded-lg">
            <img src={user} alt="alt" className="w-full h-40 rounded-lg object-fill" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-[-10px] text-xl p-1.5">Random User</h3>
          <p className="text-md p-1.5 text-gray-600 dark:text-gray-400">Random User Generator</p>
        </div>

        {/* Restaurant Project */}
        <div className="cursor-pointer p-1 rounded-xl border border-gray-300 dark:border-gray-800 w-[94%] h-[250px] text-left bg-white dark:bg-gray-900/50 shadow-md dark:shadow-none hover:border-gray-400 dark:hover:border-gray-700 transition"
          onClick={() => window.location.href = 'https://brianrestaurant.netlify.app/'}>
          <div className="flex bg-gray-100 dark:bg-gray-800 justify-center items-center mb-4 w-full h-40 border border-gray-300 dark:border-gray-800 rounded-lg">
            <img src={restaurant} alt="restaurant" className="w-full h-40 rounded-lg object-fill" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-[-10px] text-xl p-1.5">Restaurant</h3>
          <p className="text-md p-1.5 text-gray-600 dark:text-gray-400">Responsive UI built with Tailwind CSS</p>
        </div>

        {/* Github Link Project */}
        <div className="cursor-pointer p-1 rounded-xl border border-gray-300 dark:border-gray-800 w-[94%] h-[250px] text-left bg-white dark:bg-gray-900/50 shadow-md dark:shadow-none hover:border-gray-400 dark:hover:border-gray-700 transition"
          onClick={() => window.location.href = 'https://github.com/Baye-Brian1'}>
          <div className="flex bg-gray-100 dark:bg-gray-800 justify-center items-center mb-4 w-full h-40 border border-gray-300 dark:border-gray-800 rounded-lg text-5xl text-gray-900 dark:text-white">
            <Github size={50}></Github> {/* Replaced faGithub with Github */}
          </div>
          <h2 className="font-semibold text-gray-900 dark:text-gray-50 mb-[-10px] text-xl p-1.5">Github</h2>
          <p className="text-md p-1.5 text-gray-600 dark:text-gray-400">Visit My Github</p>
        </div>
      </div>
    </section>
  );
} 
export default MainProject;