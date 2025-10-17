import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import design from '../assets/desktop-design.jpg'
import task from '../assets/task.PNG'
import user from '../assets/user.PNG'
import restaurant from '../assets/RestaurantWeb.png'
import {faGithub, faJs, faCss3, faHtml5} from '@fortawesome/free-brands-svg-icons';



 function MainBody() {
  return(
    <>
      <main>
      <section className="container1">
       <h1>Hello! I’m Baye Brian,</h1>
       <p>I'm a passionate <span class="white"> Front-end Developer</span> and love building modern and responsive web interfaces. I have completed an internship in web development where I specialized in Front-end Development using HTML, CSS, Tailwind CSS, and JavaScript. I enjoy creating clean, user-friendly websites and constantly learning new technologies to improve my skills.</p>

       <p>I focus on writing semantic, maintainable code and I love turning design ideas into fully functional web applications. My goal is to build impactful digital experiences and continue growing as a developer.</p>
      </section>
   <section className="container2">
       <h1>Projects</h1>
      <div className="grid">
        <div className="project" onClick={()=>window.location.href='https://learn-js-brian.vercel.app/'}>
            <div className="imgb">
              <img src={design} alt="main-design"/>
            </div>
            <h3>E-commerce Landing Page</h3>
            <p>Interactive E-commerce Landing page</p>
        </div>
         <div className="project" onClick={()=>window.location.href='https://task-scheduler-seven-orpin.vercel.app/'}>
            <div className="imgb">
              <img src={task} alt="task"/>
            </div>
            <h3>Task scheduler</h3>
            <p>Schedule your various Tasks</p>
        </div>
         <div className="project" onClick={()=>window.location.href='https://random-user-git-main-baye-brian-s-projects.vercel.app/'}>
            <div className="imgb">
              <img src={user} alt="alt"/>
            </div>
            <h3>Random User</h3>
            <p>Random User Generator</p>
        </div>
         <div className="project" onClick={()=>window.location.href='https://brianrestaurant.netlify.app/'}>
            <div className="imgb">
              <img src={restaurant} alt="restaurant"/>
            </div>
            <h3>Restaurant</h3>
            <p>Responsive UI built with Tailwind CSS</p>
        </div>
      </div>
    </section>
    <section className="container3">
     <h1>Technology</h1>
        <div className="grid">
          <div className="projects">
            <div className="icx">
              <FontAwesomeIcon icon={faHtml5} className='i'/>
            </div>
            <h2>HTML</h2>
            <p>HTML! Skeleton of Wed Dev</p>
          </div>
          <div className="projects">
            <div className="icx">
              <FontAwesomeIcon icon={faCss3} className='i'/>
            </div>
            <h2>CSS</h2>
            <p>worked with CSS on Numerous projects</p>
         </div>
          <div className="projects">
            <div className="icx">
              <FontAwesomeIcon icon={faJs} className='i'/>
            </div>
            <h2>JavaScript</h2>
            <p>Build projects with JavaScript</p>
          </div>
          <div className="projects">
            <div className="icx">
              <FontAwesomeIcon icon={faGithub} className='i'/>
            </div>
            <h2>Github</h2>
            <p>Worked on Github</p>
          </div>
        </div>
      </section>
   </main>
  </>
  );
 }
export default MainBody;