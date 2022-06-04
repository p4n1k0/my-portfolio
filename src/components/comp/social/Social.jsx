import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Social = () => {
    return (
        <div className="social-contact">
            <div className="social-icon-div">

                <Link to="https://github.com/p4n1k0">
                    <FaGithub size={50} />
                </Link>

                <Link to="https://www.linkedin.com/in/gabriel-tarick-bb708917b/">
                    <FaLinkedin size={50} />
                </Link>
            </div>
        </div>
    )
}

export default Social;
