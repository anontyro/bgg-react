import * as React from 'react';
import './App.css';
import AppRouter from './routing/appRouter';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <AppRouter />
      </React.Fragment>
    );
  }
}

export default App;
