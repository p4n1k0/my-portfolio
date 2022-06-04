import React, { Component } from 'react';
import Home from './components/home/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Project from './components/body/project/Project';
import Skills from './components/body/skill/Skills';
import Contact from './components/body/contact/Contact';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Home exact path="/" component={Home}/>
        <Route path="/project" component={Project} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    );
  }

}

export default App;
