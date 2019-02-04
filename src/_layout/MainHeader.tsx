import styled from '@emotion/styled';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { BGG_BLUE } from 'src/data/constants/colours';
import APP_ROUTES from 'src/routing/AppRoutes';
import logo from '../static/images/bgg-logo.svg';

const HeaderContainer = styled.div`
  height: 2rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  color: white;
  background-color: ${BGG_BLUE};
`;

const NavContainer = styled.div`
  line-height: 2rem;
`;

const LogoImg = styled.img`
  height: 2.2rem;
`;

const NavLogo = () => (
  <Link to={APP_ROUTES.HOME}>
    <LogoImg src={logo} />
  </Link>
);

const NavBar = () => {
  return <Link to={APP_ROUTES.ABOUT}>About</Link>;
};

const MainHeader = () => {
  return (
    <HeaderContainer>
      <NavLogo />
      <NavContainer>
        <NavBar />
      </NavContainer>
    </HeaderContainer>
  );
};

export default MainHeader;
