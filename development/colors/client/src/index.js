import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Hex: {
        keyFields: ["value"]
      },
      Name: {
        keyFields: ["value"]
      },
      Contrast: {
        keyFields: ["value"]
      },
      Rgb: {
        keyFields: ["value"]
      },
    },
  }),
  link: new HttpLink({
    uri: 'http://localhost:4000',
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();