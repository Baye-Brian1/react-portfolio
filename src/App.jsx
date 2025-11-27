import React from 'react';
// import './App.css'; // REMOVED: Styles are now handled by Tailwind utilities and theme files
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Index from './pages/index'
import Project from './pages/project';
import Technology from './pages/technology';
import Experience from './pages/experience';
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/project" element={<Project />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;