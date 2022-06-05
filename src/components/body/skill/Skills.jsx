import React from 'react'
import './../skill/skills.css'

const Skill = (value) => { return (<li key={value}>{value}</li>) };

const habilidades = ['Git', 'HTML', 'JavaScript', 'DOM', 'HOFs', 'React'];

function Skills() {
  return (
    <div className="skills">
      <div className="skills-info">
        <h3 id="hability">Habilidades:</h3>
        <ul>{habilidades.map((habilidade) => Skill(habilidade))}</ul>

      </div>
    </div>
  )
}

export default Skills;
