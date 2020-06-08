import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ToastContainer } from 'react-toastify';
import AppRoot from './app_root';
import client from './graphql/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppRoot />
    <ToastContainer />
  </ApolloProvider>,
  document.getElementById('root')
);
