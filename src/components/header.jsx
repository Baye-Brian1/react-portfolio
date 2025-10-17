import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import '../App.css'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import Theme from './theme';

function Header({toggleTheme, lightMode}) {
  const[open, setOpen]= useState(false);
 
  const handleToggle= () =>{
    setOpen(!open);
  }
  return(
    <header>
    <div className="container navbar">
      <div className="logo" ><Link to="/index">Brian</Link></div>
        <nav className={`navbarr ${open?'show':""}`}>
        <Link to="/project">Projects</Link>
        <Link to="/technology">Technologies</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="icon-flex">
        <Theme lightMode={lightMode} toggleTheme={toggleTheme}/>
        <FontAwesomeIcon icon={open? faTimes:faBars} style={{fontSize: '18px'}} onClick={handleToggle}/>
      </div>
    </div>
    <div className="line"></div>
  </header>
  );
}
export default Header;