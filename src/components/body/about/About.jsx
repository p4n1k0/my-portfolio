import React, { Component } from 'react';
import './about.css';
import top from '../../../assets/top.jpg';
import Image from '../about/Image';
import PropTypes from 'prop-types';

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
              Estudante de desenvolvimento web <br/>
              em várias linguagens de programação.
            </p> 
            <p>
              Brasileiro, morando em <br/>
              São Paulo - SP. <br/>               
            </p>
          </div>
  
          <div className="about-photo">
            <Image source={top} alternatiText="gabriel-img" />
          </div>
  
        </div>
      </div>
    )
  }  
}

About.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
}.isRequired
