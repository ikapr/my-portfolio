import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Header from './header';  // Assuming 'header' is the correct case for your component
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar /> {/* Include the NavBar component */}
        <Route path="/" exact component={Header} />
        <Route path="/about" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
};

export default App;