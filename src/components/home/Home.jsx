import React, { Component } from 'react';
// import Body from '../body/Body';
// import Footer from '../footer/Footer';
import Header from '../header/Header';
import "./home.css";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />

                {/* <div>
                    <Body />
                </div>

                <div>
                    <Footer />
                </div> */}
            </div>
        )
    }
}
