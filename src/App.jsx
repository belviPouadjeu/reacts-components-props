import React from 'react'
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';

const App = () => {
  const title = "My Portfolio";
  const description = "Hello! I'm a developer with a passion for creating innovative web applications.";
  const projects = ["Project 1", "Project 2", "Project 3"];

    return (
      <div>
        <Header title={title}/>
        <AboutMe description={description}/>
        <Projects projects={projects}/>
      </div>
    )
}

export default App