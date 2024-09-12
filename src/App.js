import React from 'react';
import Spline from '@splinetool/react-spline';

import './App.css';
import './normalize.css';

export default function App() {
  return (
    <body>
      <div className="App">
      <Spline scene="https://prod.spline.design/3IOM2PXwFxPmyeYa/scene.splinecode" />
      </div>
      <nav>
        <div>
          <h1>WIB</h1>
        </div>
        <div>
          <div>
            <a>Home</a>
            <a>About</a>
            <a>Services</a>
            <a>Contact</a>
          </div>
          <div>
            <a>Learn More</a>
          </div>
          
        </div>
      </nav>
    </body>
  );
}