import React from 'react';
import { ArrowRight, Pin, Code, Palette, FileText } from 'lucide-react'; // Lucide Icons
import user from '../assets/user.PNG';
import todo from '../assets/todo.PNG';
import { Link } from 'react-router-dom';

function MainBody() {

  return (
    <main className="flex-1">
      <section className="max-w-4xl min-h-[60vh] mx-auto text-gray-700 dark:text-gray-400 p-5 pt-20">
        <h1 className="mt-5 text-gray-900 dark:text-white text-xl">Hello! I’m Baye Brian,</h1>
        <p className="leading-relaxed text-base mb-5">
          I'm a passionate <span className="text-gray-900 dark:text-inherit">Front-end Developer</span> and love building modern and responsive web interfaces. I have completed an internship in web development where I specialized in Front-end Development using HTML, CSS, Tailwind CSS, and JavaScript. I enjoy creating clean, user-friendly websites and constantly learning new technologies to improve my skills.
        </p>
        <p className="leading-relaxed text-base mb-5">
          I focus on writing semantic, maintainable code and I love turning design ideas into fully functional web applications. My goal is to build impactful digital experiences and continue growing as a developer.
        </p>
      </section>

      <section className="max-w-4xl min-h-screen mx-auto text-gray-700 dark:text-gray-400 p-5">
        <span className="w-full flex items-center justify-between">
          <h1 className="text-gray-900 dark:text-white text-xl flex items-center gap-2">
            Recent Projects <Pin size={18} className='inline rotate-12 text-gray-500' />
          </h1>
          <Link to="/project">
            <p className='text-gray-500 hover:text-gray-700 dark:hover:text-gray-400 transition no-underline flex items-center gap-1'>
              View More <ArrowRight size={16} />
            </p>
          </Link>
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:px-16 gap-5">
          {/* Project Card 1 */}
          <div className="cursor-pointer p-1.5 rounded-xl border border-gray-300 dark:border-gray-800 w-full h-[250px] text-left bg-white dark:bg-gray-900/50 shadow-md dark:shadow-none hover:border-gray-400 dark:hover:border-gray-700 transition">
            <div className="flex bg-gray-100 dark:bg-gray-800 justify-center items-center mb-4 w-full h-40 border border-gray-300 dark:border-gray-800 rounded-lg">
              <img src={todo} alt="main-design" className="w-full h-40 rounded-lg object-fill" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-[-10px] text-lg pl-1.5">Todo-list</h3>
            <p className="text-sm pl-1.5 text-gray-600 dark:text-gray-400">Built With React</p>
          </div>

          {/* Project Card 2 */}
          <div className="cursor-pointer p-1.5 rounded-xl border border-gray-300 dark:border-gray-800 w-full h-[250px] text-left bg-white dark:bg-gray-900/50 shadow-md dark:shadow-none hover:border-gray-400 dark:hover:border-gray-700 transition"
            onClick={() => window.location.href = 'https://random-user-git-main-baye-brian-s-projects.vercel.app/'}>
            <div className="flex bg-gray-100 dark:bg-gray-800 justify-center items-center mb-4 w-full h-40 border border-gray-300 dark:border-gray-800 rounded-lg">
              <img src={user} alt="alt" className="w-full h-40 rounded-lg object-fill" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-[-10px] text-lg pl-1.5">Random User</h3>
            <p className="text-sm pl-1.5 text-gray-600 dark:text-gray-400">Random User Generator</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl min-h-screen mx-auto text-gray-700 dark:text-gray-400 p-5">
        <span className='w-full flex items-center justify-between'>
          <h1 className="text-gray-900 dark:text-white text-xl">Stacks !</h1>
          <Link to="/technology">
            <p className='text-gray-500 hover:text-gray-700 dark:hover:text-gray-400 transition no-underline flex items-center gap-1'>
              View More <ArrowRight size={16} />
            </p>
          </Link>
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:px-16 gap-5">
          {/* HTML Stack */}
          <div className="cursor-pointer p-1.5 rounded-xl border border-gray-300 dark:border-gray-800 w-full h-[250px] text-left bg-white dark:bg-gray-900/50 shadow-md dark:shadow-none hover:border-gray-400 dark:hover:border-gray-700 transition">
            <div className="flex bg-gray-100 dark:bg-gray-800 justify-center items-center mb-4 w-full h-40 border border-gray-300 dark:border-gray-800 rounded-lg text-5xl text-red-500">
              <FileText size={50} /> {/* Replaced faHtml5 with FileText */}
            </div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-50 mb-[-10px] text-lg pl-1.5">HTML</h2>
            <p className="text-sm pl-1.5 text-gray-600 dark:text-gray-400">HTML! Skeleton of Web Dev</p>
          </div>

          {/* CSS Stack */}
          <div className="cursor-pointer p-1.5 rounded-xl border border-gray-300 dark:border-gray-800 w-full h-[250px] text-left bg-white dark:bg-gray-900/50 shadow-md dark:shadow-none hover:border-gray-400 dark:hover:border-gray-700 transition">
            <div className="flex bg-gray-100 dark:bg-gray-800 justify-center items-center mb-4 w-full h-40 border border-gray-300 dark:border-gray-800 rounded-lg text-5xl text-blue-500">
              <Palette size={50} /> {/* Replaced faCss3 with Palette */}
            </div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-50 mb-[-10px] text-lg pl-1.5">CSS</h2>
            <p className="text-sm pl-1.5 text-gray-600 dark:text-gray-400">worked with CSS on Numerous projects</p>
          </div>

          {/* JavaScript Stack */}
          <div className="cursor-pointer p-1.5 rounded-xl border border-gray-300 dark:border-gray-800 w-full h-[250px] text-left bg-white dark:bg-gray-900/50 shadow-md dark:shadow-none hover:border-gray-400 dark:hover:border-gray-700 transition">
            <div className="flex bg-gray-100 dark:bg-gray-800 justify-center items-center mb-4 w-full h-40 border border-gray-300 dark:border-gray-800 rounded-lg text-5xl text-yellow-500">
              <Code size={50} /> {/* Replaced faJs with Code */}
            </div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-50 mb-[-10px] text-lg pl-1.5">JavaScript</h2>
            <p className="text-sm pl-1.5 text-gray-600 dark:text-gray-400">Build projects with JavaScript</p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default MainBody;