import { debounce } from 'lodash';
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

export interface Props {}

export interface State {
  query: string;
}

class GeekSearch extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { query: '' };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSubmitSearch = debounce(this.onSubmitSearch, 600);
  }

  public onSearchChange(event: any) {
    event.preventDefault();
    this.setState({
      query: event.currentTarget.value,
    });
    this.onSubmitSearch();
  }

  public onSubmitSearch() {
    console.log(`Submitted: ${this.state.query}`);
  }

  public render() {
    return (
      <SearchContainer>
        <GeekLogo src={logo} />
        <SearchBar
          onChange={this.onSearchChange}
          placeholder='Search Board Games...'
        />
      </SearchContainer>
    );
  }
}

export default GeekSearch;
