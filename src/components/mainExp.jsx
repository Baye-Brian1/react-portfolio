import React from "react";

function MainExp() {
  return(
    <>
     <main>
    <section className="container3">
        <h1>Experience !</h1>
        <div className="experience-card">
      <h3>Front-End Intern</h3>
      <h4>Traitz Tech</h4>
      <p className="date">February 2025 – March 2025 (1 month)</p>
      <p className="desc">
        Completed a one-month internship focused on front-end development.  
        Worked with <strong>HTML, CSS, and Tailwind</strong> to build a responsive layout visually appealing
        to the user
      </p>
    </div>

    <div className="experience-card">
      <h3>Front-End Intern</h3>
      <h4>Tic Foundation</h4>
      <p className="date">September 2025 – Present</p>
      <p className="desc">
        Currently interning at Tic Foundation where I work on mini-projects <strong>API integration, blogging systems, and UI/UX improvements</strong>.  
        Gaining hands-on experience with real projects in javascript
      </p>
    </div>
      
    </section>
  </main>
    </>
  );
}
export default MainExp;