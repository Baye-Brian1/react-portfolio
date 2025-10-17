import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Vercel from '../assets/Vercel.png'
import Netlify from '../assets/netlify.svg'
import Tailwind from '../assets/download.png'
import {faGithub,  faJs, faCss3, faHtml5} from '@fortawesome/free-brands-svg-icons';

function MainTech() {
  return(
    <>
  <main>
    <div className="container3">
       <h1>Technology</h1>
      <div className="grid">
        <div className="projects">
          <div className="icx">
            <FontAwesomeIcon icon={faHtml5} className="fa-brands fa-html5"/>
          </div>
          <h2>HTML</h2>
          <p>The Genesis of Web Dev</p>
        </div>
        <div className="projects">
          <div className="icx">
            <FontAwesomeIcon icon={faCss3} className="fa-brands fa-css3"/>
          </div>
          <h2>CSS</h2>
          <p>Styling Upon Styling</p>
        </div>
        <div className="projects">
          <div className="icx">
            <FontAwesomeIcon icon={faJs} className="fa-brands fa-js"/>
          </div>
          <h2>JavaScript</h2>
          <p>To boost Web Interactivity</p>
        </div>
        <div className="projects">
          <div className="icx">
            <FontAwesomeIcon icon={faGithub} className="fa-brands fa-github"/>
          </div>
          <h2>Github</h2>
          <p>Hardwork through commits</p>
        </div>
        <div className="projects">
          <div className="icxx">
            <img src={Vercel} alt="vercel" className="imgx"/>
          </div>
          <h2>Vercel</h2>
          <p>Hosted Most projects on vercel</p>
        </div>
        <div className="projects">
          <div className="icxx">
            <img src={Netlify} alt="netlify" className="imgx"/>
          </div>
          <h2>Netlify</h2>
          <p>Hosted on Netlify</p>
        </div>
        <div className="projects">
          <div className="icxx">
            <img src={Tailwind} alt="tailwindcss" className="imgx"/>
          </div>
            <h2>Tailwind css</h2>
            <p>Good and Responsive UI</p>
        </div>
      </div>
    </div>  
    <div className="line"></div>
  </main>
    </>
  );
} 
export default MainTech;

