import styled from '@emotion/styled';
import * as React from 'react';
import MainFooter from './_layout/MainFooter';
import MainHeader from './_layout/MainHeader';
import './App.css';
import AppRouter from './routing/appRouter';

const SiteContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const SiteMainContent = styled.div`
  flex: 1;
`;

class App extends React.Component {
  public render() {
    return (
      <SiteContainer>
        <MainHeader />
        <SiteMainContent>
          <AppRouter />
        </SiteMainContent>
        <MainFooter />
      </SiteContainer>
    );
  }
}

export default App;
