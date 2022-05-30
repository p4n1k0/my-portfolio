import React from 'react';
import './about.css';
import logo from '../../../images/top.jpg';

function About() {
  const name = 'Gabriel Tarick A. Silva'
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <p>Olá, Sou <br/>
          <span className="about-name">{name}</span>.
          <h6>A vida só gosta de quem gosta dela</h6>
          Estudante de desenvolvimento web <br/>
          Em várias linguagens de programação
          </p>
        </div>

        <div className="about-photo">
          <img src={logo} alt="gabriel-img" className="picture"/>
        </div>

      </div>
    </div>
  )
}

export default About;
