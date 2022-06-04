import React from 'react';
import { Link } from 'react-router-dom';
import './mobile.css'

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">

      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi-rr-cross-circle"></i>
      </div>

      <div className="mobile-options">
        <div className="mobile-option">
          <Link to="/project"> <i class="fi-rr-edit-alt option-icon">Projetos</i> </Link>
        </div>

        <div className="mobile-option">
          <Link to="/skills"> <i class="fi-rr-laptop option-icon">Habilidades</i> </Link>
        </div>

        <div className="mobile-option">
          <Link to="/contact"> <i class="fi-rr-user option-icon">Contato</i> </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Mobile;
