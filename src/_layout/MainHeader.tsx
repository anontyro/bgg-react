import * as React from 'react';
import { BGG_BLUE } from 'src/data/constants/colours';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 2rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  color: white;
  width: 100vw;
  background-color: ${BGG_BLUE};
`;

const MainHeader = () => {
  return (
    <HeaderContainer>
      <div>LOGO</div>
      <div>SEARCH</div>
      <div>LINKS</div>
    </HeaderContainer>
  );
};

export default MainHeader;
