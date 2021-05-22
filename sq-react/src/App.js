import React from 'react';
// import './App.css';

import HomePage from './pages/homepage/homepage.component'

import {GlobalStyle} from './global.styles'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <HomePage/> 
    </div>
  );
}

export default App;
