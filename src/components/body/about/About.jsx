import React, {Component } from 'react';
import './about.css';
import logo from '../../../images/top.jpg';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about-top">
          <div className="about-info">
            <p>
              Olá &#128075;, Sou<br/>
              <span className="info-name">{this.props.name} {this.props.lastName}</span>.<br />
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
}
