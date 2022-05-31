import React from 'react'
import './../skill/skills.css'

const Task = (value) => { return (<li key={value}>{value}</li>) };

const habilidades = ['Git', 'HTML', 'CSS', 'JavasCript', 'DOM', 'HOFs', 'React'];

function Skills() {
  return (
    <div className="skills">
      <div className="skills-info">        
        <ul>{habilidades.map((habilidade) => Task(habilidade))}</ul>
      </div>
    </div>
  )
}

export default Skills;
