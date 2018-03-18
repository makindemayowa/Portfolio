import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about-w3layouts" id="about">
        <div className="container">
          <div className="tittle-agileinfo">
            <div className="title-wthree">
              <h5 className="title-w3">About Me</h5>
              <div className="clearfix"></div>
            </div>
            <br/>
            <br/>
          </div>
          <div className="col-md-4 about-left-agileits">
            <div className="services-grids social">
              <a className="fa fa-delicious" aria-hidden="true"></a>
              <p className="para-agileits-w3layouts">CSS3, Javascript, ES6, React, Vue, Angular</p>
              <div className="clearfix"></div>
              <h6>Front-end</h6>
            </div>
            <div className="services-grids">
              <a className="fa fa-globe" aria-hidden="true"></a>
              <p className="para-agileits-w3layouts">NodeJS, Flask, Django, APIs, Devops, NoSQL, SQL</p>
              <h6>Back-end</h6>
            </div>
            <div className="services-grids">
              <a className="fa fa-mobile" aria-hidden="true"></a>
              <p className="para-agileits-w3layouts">AWS, Google, Firebase, Heroku</p>
              <h6>Cloud</h6>
            </div>
            <div className="clearfix"></div>
          </div>

          <div className="col-md-8 about-right">
            <div className="about-border-w3ls">
            </div>
            <div className="person-info-agileits-w3layouts">
              <p className="para-agileits-w3layouts"><span>Hi!, I am Mayowa Makinde </span>
              I've always been drawn to the overlap between design and development.
              My skills are broad: from ux to design, front end to back end development.
              I enjoy each aspect, and love building sites from start to finish,
              for clients all over the world.
              I work primarily with Node.js and flask on the back-end and ReactJs on the 
              front-end but picking up new frameworks isn’t a problem.
              </p>
              <ul>
                <li><a href="https://docs.google.com/document/d/1FljFkPLZpWz7EuBnd39JUYsAm_A2YrCsWsykXP8FM7c/edit" target="_blank" className="botton-w3ls">View CV</a></li>
              </ul>
              <div className="clearfix"></div>

              <div className="pos-w3ls">
                <h4><span className="red-w3ls">Get</span> in touch</h4>
                <div className="button-w3layouts"><a href="#contact" className="scroll">Contact Me</a></div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
