import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import design from '../assets/desktop-design.jpg'
import task from '../assets/task.PNG'
import user from '../assets/user.PNG'
import restaurant from '../assets/RestaurantWeb.png'
import {faGithub} from '@fortawesome/free-brands-svg-icons';

function MainProject() {
  return(
    <>
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
            <div className="projects" onClick={()=>window.location.href='https://github.com/Baye-Brian1'}>
              <div className="icx">
                <FontAwesomeIcon icon={faGithub} className="fa-brands fa-github"></FontAwesomeIcon>
              </div>
              <h2>Github</h2>
              <p>Visit My Github</p>
            </div>
          </div>
        </section>
    </>
  );
} 
export default MainProject;

