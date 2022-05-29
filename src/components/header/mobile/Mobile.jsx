import React from 'react';
import './mobile.css'

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi-rr-cross-circle"></i>
      </div>

      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project"> <i class="fi-rr-edit-alt option-icon">Projetos</i> </a>
        </div>

        <div className="mobile-option">
          <a href="#skills"> <i class="fi-rr-laptop option-icon">Habilidades</i> </a>
        </div>

        <div className="mobile-option">
          <a href="#contact"> <i class="fi-rr-user option-icon">Contato</i> </a>
        </div>
      </div>
    </div>
  )
}

export default Mobile;

