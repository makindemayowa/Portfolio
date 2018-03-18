import React, { Component } from 'react';
import Header from './Header';

class Banner extends Component {
  render() {
    return (
      <div className="banner" id="home">
        <div className="container">
          <Header />
          <div className="banner-text-w3-agileits">
            <h5>Hi, I'm</h5>
            <h2><span>M</span>ayowa <span>M</span>akinde</h2>
            <p>Full Stack Developer</p>
            <div className="botton">
              <a href="#about" className="scroll">About me <span className="fa fa-caret-right"></span></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
