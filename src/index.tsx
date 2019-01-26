import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {myStore} from './store';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';

const SERVERS = {
  LOCAL: 'http://graphql.localhost.tv:4000/graphql',
  PROD: 'https://bgg-api.alexwilkinson.co/graphql',
};

const client = new ApolloClient({
  uri: SERVERS.PROD,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={myStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
