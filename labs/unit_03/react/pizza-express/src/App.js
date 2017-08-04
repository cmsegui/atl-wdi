import React, { Component } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import SplashImage from './components/SplashImage';
import Description from './components/Description';
import MenuList from './components/MenuList';
import Location from './components/Location';
import Contact from './components/Contact';
import MenuItem from './components/MenuItem';
import LocationList from './components/LocationList';

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Navbar />
        <SplashImage />
        <Description />
        <MenuList />
        <LocationList />
        <Contact />

        
      </div>
    );
  }
}

export default App;
