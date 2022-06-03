import React, { Component } from 'react';
import Body from '../body/Body';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import "./home.css";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div>
                    <Header />
                </div>
    
                <div>
                    <Body />
                </div>
    
                <div>
                    <Footer />
                </div>
            </div>
        )
    }    
}

export default Home;
