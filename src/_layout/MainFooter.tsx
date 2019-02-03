import styled from '@emotion/styled';
import * as React from 'react';
import { BGG_BLUE } from 'src/data/constants/colours';

const FooterContainer = styled.div`
  padding: 1rem;
  background-color: ${BGG_BLUE};
  color: white;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 2rem;
`;

const MainFooter = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <div>BGG stuff</div>
      <div>Copyright {year}</div>
      <div>Additional information</div>
    </FooterContainer>
  );
};

export default MainFooter;
