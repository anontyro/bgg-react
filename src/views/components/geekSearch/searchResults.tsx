import styled from '@emotion/styled';
import * as React from 'react';
import GraphQlQueryWrap from 'src/HOC/graphQlQueryWrap';
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

const ResultsList = ({ data }: any) => (
  <SearchResultsContainer>
    {data.searchGame.map((game: SearchBoardGameType) => (
      <SearchResultItem key={Date.now().toString()} game={game} />
    ))}
  </SearchResultsContainer>
);

const SearchResults = ({ query }: Props) => (
  <GraphQlQueryWrap query={BASIC_SEARCH_QUERY} variables={{ query }}>
    <ResultsList />
  </GraphQlQueryWrap>
);

export default SearchResults;
