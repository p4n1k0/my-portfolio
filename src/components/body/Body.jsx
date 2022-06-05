import React from 'react';
import './body.css';
import About from './about/About';
// import Skills from './skill/Skills';
// import Project from './project/Project';
// import Contact from './contact/Contact';

function Body() {
        return (
            <div className="body">
                <section id="about">
                    <About name="Gabriel" lastName="Tarick" />
                </section>

                {/* <section id="project">
                    <Project />
                </section> */}

                {/* <section id="skills">
                    <Skills />
                </section>

                <section id="contact">
                    <Contact />
                </section> */}
            </div>
        )   
}

export default Body;