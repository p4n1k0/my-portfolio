import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import '../../comp/social/social.css';

const Social = () => {
    return (
        <div className="social-contact">
            <div className="social-icon-div">

                
                <a href="https://github.com/p4n1k0"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub size={50} color="black"/>
                </a>


                <a href="https://www.linkedin.com/in/gabriel-tarick-bb708917b/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin size={50} color="blue"/>
                </a>

                <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5511958437544"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp size={50} color="green"/>
                </a>

            </div>
        </div>
    )
}

export default Social;
