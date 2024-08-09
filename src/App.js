import React from 'react';
import Spline from '@splinetool/react-spline';

import './App.css';
import './normalize.css';

export default function App() {
  return (
    <body>
      <div className="App">
        <Spline scene="https://prod.spline.design/hWFn4mygo3IaW4u7/scene.splinecode" />
      </div>
      <main>
        <nav>
          <div>HOME PAGE</div>
          <div>TIKTOK</div>
        </nav>
        <footer>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </footer>
      </main>
      
    </body>
  );
}