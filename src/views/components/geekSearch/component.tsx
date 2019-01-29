import * as React from 'react';
import styled from 'styled-components';
import logo from '../../../static/images/bgg-logo.svg';

const SearchContainer = styled.div`
  display: flex;
  margin: 10rem 5rem;
`;
const GeekLogo = styled.img`
  height: 10rem;
  margin-right: 0.5rem;
`;

const SearchBar = styled.input`
  width: 100%;
  margin: auto;
  font-size: 2rem;
  padding: 0.3rem;
  border-radius: 0.5rem;
  outline: none;
  box-shadow: 8px 8px 20px -10px black;
`;

function GeekSearch() {
  return (
    <SearchContainer>
      <GeekLogo src={logo} />
      <SearchBar placeholder='Search Board Games...' />
    </SearchContainer>
  );
}

export default GeekSearch;
