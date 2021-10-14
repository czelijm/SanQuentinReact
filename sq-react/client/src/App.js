import React, { lazy, Suspense } from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';

// import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
// import GigsComponent from './pages/gigs/gigs.component';
// import NewsComponent from './pages/news/news.component';
// import BandComponent from './pages/band/band.component';
// import ContactComponent from './pages/contact/contact.component';
// import VideoComponent from './pages/videos/videos.component';
// import GalleryComponent from './pages/gallery/gallery.component';
// import AlbumsComponent from './pages/albums/albums.component';

import {GlobalStyle} from './global.styles'
// import FriendsComponent from './pages/firends/friends.component';
// import { HomePageGlobalStyle } from './pages/homepage/homepage.styles';
import SpinnerAbsolute from './components/spinner/spinner.component';
// import ErrorComponent from './pages/error/error.component';
// import { Switch } from '@material-ui/core';


const HomePage = lazy( () => import('./pages/homepage/homepage.component'));
const GigsComponent = lazy( () => import('./pages/gigs/gigs.component'));
const NewsComponent = lazy( () => import('./pages/news/news.component'));
const BandComponent = lazy( () => import('./pages/band/band.component'));
const ContactComponent = lazy( () => import('./pages/contact/contact.component'));
const VideoComponent = lazy( () => import('./pages/videos/videos.component'));
const GalleryComponent = lazy( () => import('./pages/gallery/gallery.component'));
const AlbumsComponent = lazy( () => import('./pages/albums/albums.component'));
const FriendsComponent = lazy( () => import('./pages/firends/friends.component'));
const ErrorComponent = lazy( () => import('./pages/error/error.component'));



function App() {
  return (
    <div className="App">
      <Header/>
      <GlobalStyle/>
      <Switch>
        <Suspense fallback={<SpinnerAbsolute/>}>
          {/* {window.location.pathname==="/" &&<HomePageGlobalStyle/>} */}
          <Route exact path={'/'} component={HomePage} />
          {/* <Route exact path={'/'} render={()=><div><HomePageGlobalStyle/><HomePage/></div>} /> */}
          <Route path={'/gigs'} component={GigsComponent} />
          <Route path={'/news'} component={NewsComponent} />
          <Route path={'/band'} component={BandComponent} />
          <Route path={'/contact'} component={ContactComponent} />
          <Route path={'/video'} component={VideoComponent} />
          <Route path={'/gallery'} component={GalleryComponent} />
          <Route path={'/albums'} component={AlbumsComponent} />
          <Route path={'/friends'} component={FriendsComponent} />
          <Route path={'/404'} component={ErrorComponent} />        
          {/* <Route path={'*'} component={ErrorComponent} /> */}
          {/* <Redirect to={'/404'}/> */}
          {/* <Route path='*'> <ErrorComponent/> </Route> */}
        </Suspense>
          {/* <Route component={ErrorComponent} /> */}
      </Switch>
    </div>
  );
}

export default App;
