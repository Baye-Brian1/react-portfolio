import React from "react";
import { Linkedin,MessageCircleCode } from "lucide-react"; // Lucide Icon

function MainCont() {
  return(
    <main>
      <section className="max-w-4xl min-h-screen mx-auto text-gray-700 dark:text-gray-400 p-5 pt-20">
        <h1 className="text-gray-900 dark:text-white text-xl mt-5 flex items-center gap-2">
          Wanna Chat <MessageCircleCode size={20} className="inline"/>
          </h1>
        <form className="flex flex-col rounded-[15px] mx-auto justify-center w-full md:w-[600px] h-[480px] shadow-lg shadow-gray-300 dark:shadow-gray-900/50 p-5 items-center bg-white dark:bg-gray-950/50 mt-2">
          <input type="text" placeholder="Name" required className="bg-transparent text-gray-900 dark:text-white w-full md:w-[500px] my-2.5 p-3 outline-none border-b border-gray-300 dark:border-gray-600/30"/>

          <input type="tel" placeholder="Phone Number" required className="bg-transparent text-gray-900 dark:text-white w-full md:w-[500px] my-2.5 p-2.5  outline-none border-b border-gray-300 dark:border-gray-600/30"/>
          <input type="email" placeholder="Email" required className="bg-transparent text-gray-900 dark:text-white w-full md:w-[500px] my-2.5 p-3  outline-none border-b border-gray-300 dark:border-gray-600/30"/>
          <input type="text" placeholder="Subject" required className="bg-transparent text-gray-900 dark:text-white w-full md:w-[500px] my-2.5 p-3  outline-none border-b border-gray-300 dark:border-gray-600/30"/>
          <textarea name="message" placeholder="Your Message" required
            className="bg-transparent w-full md:w-[500px] md:h-[200px] p-5 rounded-lg h-[150px] outline-none text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600/30 mt-5"></textarea>
          
          <div className="flex w-full md:w-[500px] p-5 justify-between items-center">
            <button className=" cursor-pointer p-1.5 rounded-lg w-25 text-base bg-black text-white dark:bg-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-200 transition">Submit</button>
            <div className="text-xl text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition">
              <a href="https://www.linkedin.com/in/baye-brian-208a85350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                <Linkedin size={24}/>
              </a> 
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
export default MainCont;