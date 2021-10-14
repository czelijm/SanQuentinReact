import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from '@apollo/client';

import './index.css';

import App from './App';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import BandProvider from './providers/band/band.provider';
import AlbumProvider from './providers/album/album.provider';

const httpLink = new HttpLink(
  {
    //  uri: 'http://localhost:8080/graphql' 
     uri: process.env.REACT_APP_YT_GRAPHQL_URI
    //  ,credentials: 'include' 
  }
);

const client = new ApolloClient({
  // uri: 'http://localhost:8080/graphql',
  link:httpLink,
  cache: new InMemoryCache()
  ,fetchOptions: {
    mode: 'no-cors'
  }
});

ReactDOM.render(
  <AlbumProvider>
    <BandProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </ApolloProvider>
    </BandProvider>
   </AlbumProvider>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
