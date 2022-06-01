import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Social() {
    return (
        <div className="social-contact">
            <div className="social-icon-div">

                <a href="https://github.com/p4n1k0">
                    <FaGithub size={50} />
                </a>

                <a href="https://www.linkedin.com/in/gabriel-tarick-bb708917b/">
                    <FaLinkedin size={50} />
                </a>
            </div>
        </div>
    )
}