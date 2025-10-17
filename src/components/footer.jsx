import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import '../App.css'

function Footer() {
  return(
    <footer>
      <div className="line"></div>
 <div className="foot">
   <p>&copy;2025</p>
    <div className="icon">
        <a href="https://www.linkedin.com/in/baye-brian-208a85350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="fa-brands fa-linkedin"/></a>
        <a href="https://github.com/Baye-Brian1" target="_blank"><FontAwesomeIcon icon={faGithub} className="fa-brands fa-github"/></a>
    </div>   
 </div>
</footer>
  );
}
export default Footer;