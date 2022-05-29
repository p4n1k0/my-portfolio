import React from 'react';
import './body.css';
import About from './about/About';
import Project from './project/Project';
import Skills from './skill/Skills';
import Contact from './contact/Contact';

function Body() {
        return (
            <div className="body">
                <section id="about">
                    <About />
                </section>

                <section id="project">
                    <Project />
                </section>

                <section id="skills">
                    <Skills />
                </section>

                <section id="contact">
                    <Contact />
                </section>
            </div>
        )   
}

export default Body;