import styled from '@emotion/styled';
import * as React from 'react';
import GRAPHQL_RETURNED_NAMES from 'src/data/constants/graphQlReturnedNames';
import GraphQlQueryWrap from 'src/HOC/graphQlQueryWrap';
import { BASIC_SEARCH_QUERY } from 'src/queries/searchQuery';
import { SearchBoardGameType } from 'src/types/graphql/boardGameType';
import SearchResultItem from './searchResultsItem';

const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 48vh;
  overflow-y: auto;
`;

interface Props {
  query: string;
}

const GAME_TYPE = 'boardgame';

const ResultsList = ({ data }: any) => {
  const boardGameData = data.searchGame.filter(
    (item: SearchBoardGameType) => item.itemType === GAME_TYPE,
  );

  return (
    <SearchResultsContainer>
      {boardGameData.map((game: SearchBoardGameType) => (
        <SearchResultItem key={Date.now().toString()} game={game} />
      ))}
    </SearchResultsContainer>
  );
};

const SearchResults = ({ query }: Props) => (
  <GraphQlQueryWrap
    query={BASIC_SEARCH_QUERY}
    variables={{ query }}
    returnedId={GRAPHQL_RETURNED_NAMES.SEARCH_QUERY}
  >
    <ResultsList />
  </GraphQlQueryWrap>
);

export default SearchResults;
