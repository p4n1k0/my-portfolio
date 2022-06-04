import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './web.css';

export default class Web extends Component {
    render() {
        return (
            <div className="web">
                <div className="web-option">
                    <Link to="/project"> <i class="fi-rr-edit-alt option-icon">Projetos</i> </Link>
                </div>

                <div className="web-option">
                    <Link to="/skills"> <i class="fi-rr-laptop option-icon">Habilidades</i> </Link>
                </div>

                <div className="web-option">
                    <Link to="/contact"> <i class="fi-rr-user option-icon">Contato</i> </Link>
                </div>                
            </div>
        )
    }

}
