import React from 'react';
import './about.css';
import logo from '../../../images/top.jpg';

function About() {
  const name = <strong>Gabriel Tarick</strong>;

  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <p>
            Olá &#128075;, Sou<br/>
            <span className="info-name">{name}</span>.<br />
            <h6>Menos é mais. Ser simples requer tempo e esforço.</h6>
            Estudante de desenvolvimento web <br />
            Em várias linguagens de programação.
          </p> 
        </div>

        <div className="about-photo">
          <img src={logo} alt="gabriel-img" className="picture" />
        </div>

      </div>
    </div>
  )
}

export default About;
