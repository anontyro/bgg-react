import ApolloClient from 'apollo-boost';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { myStore } from './store';

const SERVERS = {
  LOCAL: 'http://graphql.localhost.tv:4000/graphql',
  PROD: 'https://bgg-api.alexwilkinson.co/graphql',
};

export const graphQlClient = new ApolloClient({
  uri: SERVERS.PROD,
});

ReactDOM.render(
  <ApolloProvider client={graphQlClient}>
    <Provider store={myStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
