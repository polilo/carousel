import React, { Component } from "react";

import slidesData from '../slidesData';
import Carousel from './organisms/Carousel';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Carousel slides={slidesData} />
      </div>
    )
  }
};

export default App;