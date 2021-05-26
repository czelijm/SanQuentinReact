import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';


import HomePage from './pages/homepage/homepage.component';
import HeaderComponent from './components/header/header.component';
import GigsComponent from './pages/gigs/gigs.component';
import NewsComponent from './pages/news/news.component';


import {GlobalStyle} from './global.styles'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <HeaderComponent />
      <Route exact path={'/'} component={HomePage} />
      <Route path={'/gigs'} component={GigsComponent} />
      <Route path={'/news'} component={NewsComponent} />
      
    </div>
  );
}

export default App;
