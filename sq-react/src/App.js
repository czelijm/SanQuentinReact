import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import GigsComponent from './pages/gigs/gigs.component';
import NewsComponent from './pages/news/news.component';
import BandComponent from './pages/band/band.component';
import ContactComponent from './pages/contact/contact.component';
import VideoComponent from './pages/videos/videos.component';
import GalleryComponent from './pages/gallery/gallery.component';
import AlbumsComponent from './pages/albums/albums.component';

import {GlobalStyle} from './global.styles'
import FriendsComponent from './pages/firends/friends.component';



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
      <Route path={'/video'} component={VideoComponent} />
      <Route path={'/gallery'} component={GalleryComponent} />
      <Route path={'/albums'} component={AlbumsComponent} />
      <Route path={'/friends'} component={FriendsComponent} />
    </div>
  );
}

export default App;
