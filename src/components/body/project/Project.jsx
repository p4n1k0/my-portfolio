import React, { Component } from 'react';
import './../project/project.css';

export default class Project extends Component {
  render() {
    return (
      <div className="projects">
        <fieldset>
          <legend id="fieldset">Projetos:</legend>
          <div className="project-link">
          <a href="https://github.com/p4n1k0/project-lessons-learned"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lições Aprendidas
          </a>      
          </div>    
          <div className="project-link">
          <a href="https://github.com/p4n1k0/react-project-solar-system"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sistema Solar
          </a>
          </div>
        </fieldset>
      </div>
    )
  }
}

