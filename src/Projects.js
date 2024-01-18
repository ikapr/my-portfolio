// Projects.js
import React from 'react';
import Header from './Header';

const Projects = () => {
  return (
    <>
        <Header />
        <div>
            <a href="/project1">Project 1</a>
            <a href="/project2">Project 2</a>
            {/* ... other projects */}
        </div>
    </>
  );
};

export default Projects;
