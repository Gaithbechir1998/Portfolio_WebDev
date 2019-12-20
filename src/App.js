import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import DataDev from './DataDev';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header DataDev={DataDev}/>
        <About DataDev={DataDev}/>
        <Resume DataDev={DataDev}/>
        <Portfolio DataDev={DataDev}/>
        <Testimonials DataDev={DataDev}/>
        <ContactUs DataDev={DataDev}/>
        <Footer DataDev={DataDev}/>
      </div>
    );
  }
}

export default App;