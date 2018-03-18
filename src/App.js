import React, { Component } from 'react';
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
