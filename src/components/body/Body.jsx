import React from 'react';
import './body.css';
import About from './about/About';
import Skills from './skill/Skills';
import Project from './project/Project';
import Contact from './contact/Contact';
import { Link } from 'react-router-dom';

function Body() {
        return (
            <div className="body">
                <section id="about">
                    <About name="Gabriel" lastName="Tarick" />
                </section>

                <section id="project">
                    <Project />
                </section>

                <section id="skills">
                    <Link to="/skill" component={Skills}>Skills</Link>
                </section>

                <section id="contact">
                    <Contact />
                </section>
            </div>
        )   
}

export default Body;