import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa'

function Social() {
    return (
        <div className="social-contact">

            <div className="social-icon-div">

                <div className="social-icon-git">
                    <a href="https://github.com/p4n1k0">
                        <FaGithub size={50} />
                    </a>
                </div>

                <div className="social-icon-linkedin">
                    <a href="https://www.linkedin.com/in/gabriel-tarick-bb708917b/">
                        <FaLinkedin size={50} />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Social;
