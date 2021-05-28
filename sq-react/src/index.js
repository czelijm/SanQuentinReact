import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from '@apollo/client';

import './index.css';

import App from './App';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';


const httpLink = new HttpLink(
  {
     uri: 'http://localhost:8080/graphql' 
  }
);

const client = new ApolloClient({
  // uri: 'http://localhost:8080/graphql',
  link:httpLink,
  cache: new InMemoryCache()
  // ,fetchOptions: {
  //   mode: 'no-cors'
  // }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ApolloProvider>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
