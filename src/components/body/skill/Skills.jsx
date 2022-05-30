import React from 'react'

const Task = (value) => { return (<li key={value}>{value}</li>) };

const habilidades = ['Git', 'HTML', 'CSS', 'JavasCript', 'DOM', 'React'];

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
