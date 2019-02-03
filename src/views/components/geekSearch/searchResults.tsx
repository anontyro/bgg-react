import styled from '@emotion/styled';
import * as React from 'react';
import { Query } from 'react-apollo';
import { BASIC_SEARCH_QUERY } from 'src/queries/searchQuery';
import { SearchBoardGameType } from 'src/types/graphql/boardGameType';
import SearchResultItem from './searchResultsItem';

const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 50vh;
  overflow-y: auto;
`;

interface Props {
  query: string;
}

const SearchResults = ({ query }: Props) => (
  <Query query={BASIC_SEARCH_QUERY} variables={{ query }}>
    {({ loading, error, data }) => {
      if (loading) {
        return <p>LOADING...</p>;
      }
      if (error) {
        return <p>ERROR</p>;
      }
      if (data.searchGame && data.searchGame.length > 0) {
        return (
          <SearchResultsContainer>
            {data.searchGame.map((game: SearchBoardGameType) => (
              <SearchResultItem game={game} />
            ))}
          </SearchResultsContainer>
        );
      } else {
        return <p>No Results :(</p>;
      }
    }}
  </Query>
);

export default SearchResults;
