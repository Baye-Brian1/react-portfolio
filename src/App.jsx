import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Index from './pages/index'
import Project from './pages/project';
import Technology from './pages/technology';
import Experience from './pages/experience';
import Contact from './pages/contact';

function App() {
  const [lightMode, setLightMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'light'; // returns true or false
  });

  useEffect(() => {
    localStorage.setItem('theme', lightMode ? 'light' : 'dark');
    document.body.classList.toggle("light-mode")
  }, [lightMode]);

  const toggleTheme = () => {
     console.log("Toggle clicked");
    setLightMode((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <Header lightMode={lightMode} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/project" element={<Project />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
