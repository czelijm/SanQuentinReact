import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';



import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import GigsComponent from './pages/gigs/gigs.component';
import NewsComponent from './pages/news/news.component';
import BandComponent from './pages/band/band.component';
import ContactComponent from './pages/contact/contact.component';

import {GlobalStyle} from './global.styles'





function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header />
      <Route exact path={'/'} component={HomePage} />
      <Route path={'/gigs'} component={GigsComponent} />
      <Route path={'/news'} component={NewsComponent} />
      <Route path={'/band'} component={BandComponent} />
      <Route path={'/contact'} component={ContactComponent} />
    </div>
  );
}

export default App;
