import styled from '@emotion/styled';
import { debounce } from 'lodash';
import * as React from 'react';
import logo from '../../../static/images/bgg-logo.svg';
import SearchResults from './searchResults';

interface SearchContainerProps {
  searching: boolean;
}

const SearchContainer = styled.div<SearchContainerProps>`
  display: flex;
  flex-wrap: nowrap;
  margin: ${(props: SearchContainerProps) =>
    props.searching ? '1rem 5rem' : '10rem 5rem'};

  @media (max-width: 600px) {
    flex-wrap: wrap;
    margin: unset;
  }
`;
const GeekLogo = styled.img<SearchContainerProps>`
  height: 6rem;
  margin-right: 0.5rem;

  @media (max-width: 600px) {
    margin: 1rem auto;
    display: ${(props: SearchContainerProps) =>
      props.searching ? 'none' : 'block'};
  }
`;

const SearchBar = styled.input`
  width: 90%;
  margin: auto;
  font-size: 2rem;
  padding: 0.3rem;
  border-radius: 0.5rem;
  outline: none;
  box-shadow: 8px 8px 20px -10px black;

  @media (max-width: 600px) {
    margin: 1rem auto;
  }
`;

export interface Props {}

export interface State {
  query: string;
  searching: boolean;
  hasResults: boolean;
}

class GeekSearch extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasResults: false,
      query: '',
      searching: false,
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.setHasResults = this.setHasResults.bind(this);
    this.onSubmitSearch = debounce(this.onSubmitSearch, 600);
  }

  public setHasResults(hasResults: boolean) {
    this.setState({
      hasResults,
    });
  }

  public onSearchChange(event: any) {
    event.preventDefault();
    const query = event.currentTarget.value;
    this.setState({
      hasResults: false,
      query,
      searching: false,
    });
    if (this.state.query && this.state.query.length > 1) {
      this.onSubmitSearch();
    }
  }

  public onSubmitSearch() {
    this.setState({
      searching: true,
    });
  }

  public render() {
    const hasQuery = this.state.query && this.state.query.length > 1;
    return (
      <React.Fragment>
        <SearchContainer
          searching={this.state.searching && this.state.query.length > 1}
        >
          <GeekLogo
            searching={this.state.searching && this.state.query.length > 1}
            src={logo}
          />
          <SearchBar
            onChange={this.onSearchChange}
            placeholder='Search Board Games...'
          />
        </SearchContainer>
        {this.state.searching && hasQuery && (
          <SearchResults query={this.state.query} />
        )}
      </React.Fragment>
    );
  }
}

export default GeekSearch;
