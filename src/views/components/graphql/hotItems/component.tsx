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
  width: 96%;
  margin: auto;
`;

interface PosterProps {
  image: string;
}

const PosterItem = styled.div<PosterProps>`
  background-image: url(${(props: any) => props.image});
  background-repeat: no-repeat;
  height: 10rem;
  min-width: 10rem;
  max-width: 10rem;
  margin: 1rem;
  background-size: 100%;
`;

const GamePoster = (item: HotItemType) => {
  const image = item.thumbnail;
  return (
    <PosterItem image={image} key={item.id}>
      &nbsp;
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
