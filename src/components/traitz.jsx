import { useState } from "react";
import React from "react";
import { ArrowRight } from "lucide-react";


const ReadMoreText = ({limit=200}) =>{
  const [expanded, setExpanded]=useState(false);
  const text= `Completed a one-month internship focused on front-end development.  
        Worked with HTML, CSS, and Tailwind to build a responsive layout visually appealing to the user. 
        During this internship our first task for the internship was to build a portfolio with basic HTML and it was kind of a childs game but I dunno why it was kind of cheap but I can definitely HTML is the easiest language to learn. 
        The first week was annoying and boring, given that i had already started learning web dev on Youtube but things were getting interesting as we started studying css learning all those cool stuffs in styling. I styled a portfolio
        `
  const reduceText= text.substring(0, limit); 

  return(
   <div>
        
    {expanded?(
     <>
       // ... (text display unchanged) ...
       {text}
        <p className="flex items-center gap-1 cursor-pointer text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition" onClick={()=>setExpanded(false)}>
          Read Less <ArrowRight size={16}/>
        </p>
        </>
     
    ):(
      <>
       {reduceText}
        {text.length>limit &&(
          <p className="flex items-center gap-1 cursor-pointer text-white dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition" onClick={()=>setExpanded(true)}>
            Read More <ArrowRight size={16}/>
          </p>
        )}
      
      </>
    )
  }
   </div>
  );
  };
  export default ReadMoreText
