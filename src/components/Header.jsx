import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <header>
        <div className="header-bottom-agileits">
          <div className="w3-logo">
            <h1>
              <a href="index.html">Mayowa Makinde</a>
            </h1>
          </div>
          <nav className="navbar navbar-default shift">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
                <li>
                  <a className="active" href="index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a className="scroll" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="scroll" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="scroll" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="clearfix"></div>
      </header>
    );
  }
}

export default About;
