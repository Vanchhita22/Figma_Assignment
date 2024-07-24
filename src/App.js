// src/App.js
import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Content from './Components/content';
import Contentimg from "./Components/contentimg";
import Section from "./Components/section";
import Services from './pages/Services';
import Sectionmain from './/Components/section-main';
import Sectionfooter from './/Components/section-footer';
import Media from './pages/Media';
import Cases from './pages/Cases';
import Faq from './pages/FAQ';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Content/>
      <Contentimg />
      <Section/>
      <Sectionmain/>
      <Sectionfooter/>
      <Routes>
        <Route path="/services" component={Services} />
        <Route path="/media" component={Media} />
        <Route path="/cases" component={Cases} />
        <Route path="/faq" component={Faq} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </Router>
  );
};

export default App;
