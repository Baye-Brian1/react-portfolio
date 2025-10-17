import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function MainCont() {
  return(
      <main>
    <section className="container3">
        <h1>Wanna Chat !</h1>
      <form>
        <input type="text" placeholder="Name" required/>
        <input type="tel" placeholder="Phone Number" required/>
        <input type="email" placeholder="Email" required/>
        <input type="text" placeholder="Subject" required/>
        <textarea name="message" placeholder="Your Message" className="area" required></textarea>
        <div className="sub">
          <button className="submit">Submit</button>
          <div className="icon">
            <a href="https://www.linkedin.com/in/baye-brian-208a85350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="fa-brands fa-linkedin"/></a>  
          </div>
        </div>
      </form>
    </section>
  </main>
  );

}
export default MainCont;