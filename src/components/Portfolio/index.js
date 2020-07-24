import React from 'react';

import Project from '../Project/index';
import projects from '../../projects';

function Portfolio() {

  return(
    <div>
      <div className="container">

        <div className="mt-3 mb-4s">
          <h2 className="d-inline"><u>My Projects</u></h2>
          <h6 className="d-inline"> For the complete set of my projects, please visit my <a href="https://github.com/mjb527">Github</a></h6>
        </div>

        { /* create a Project for each in projects */}
        { projects.map(project => <Project {...project} key={project._id}/>) }


      </div>
    </div>
  );

}

export default Portfolio;
