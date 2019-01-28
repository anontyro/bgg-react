import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import HotItemType from 'src/types/graphql/hotItemType';
import styled from 'styled-components';

interface QueryResponse {
  loading: boolean;
  error: any;
  data: any;
}

const PostersContainer = styled.div`
  display: flex;
  overflow-x: auto;
`;

const PosterItem = styled.div`
  background-image: ${(props: any) => props.image};
  min-width: 10rem;
  max-width: 10rem;
`;

const GamePoster = (item: HotItemType) => {
  return (
    <PosterItem key={item.id}>
      <p>{item.name}</p>
    </PosterItem>
  );
};

const createHotItemView = ({ loading, error, data }: QueryResponse) => {
  if (loading) {
    return <p>LOADING...</p>;
  }
  if (error) {
    console.error(error);
    return <p>ERROR</p>;
  }

  return (
    <PostersContainer>
      {data.hotItems.map((item: HotItemType) => GamePoster(item))}
    </PostersContainer>
  );
};

function HotItems() {
  return (
    <Query
      query={gql`
        {
          hotItems {
            name
            id
            thumbnail
            index
            yearpublished
          }
        }
      `}
    >
      {({ loading, error, data }) =>
        createHotItemView({ loading, error, data })
      }
    </Query>
  );
}

export default HotItems;
