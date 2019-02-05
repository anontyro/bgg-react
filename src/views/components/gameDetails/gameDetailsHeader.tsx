import styled from '@emotion/styled';
import * as React from 'react';
import FullBoardGameType from 'src/types/graphql/boardGameType';

const GenericFlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ThumbNail = styled.img`
  position: absolute;
  top: 1rem;
  left: 1rem;
  max-width: 190px;
`;

const HeaderContainer = styled.div`
  height: 20rem;
  position: relative;
  width: 100vw;
`;

const HeaderContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 1rem;
  width: 96vw;
  z-index: 10;
  display: flex;
  justify-content: space-between;
`;

interface HeaderProps {
  image: string;
}

const HeaderImage = styled.div<HeaderProps>`
  height: 100%;
  width: 100%;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -15rem;
  opacity: 0.6;
  background-attachment: fixed;
  position: relative;
  filter: blur(8px);
  -webkit-filter: blur(8px);
  background-image: url(${(props: HeaderProps) => props.image});
`;

const NameStyle = styled.p`
  margin: unset;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  color: white;
  -webkit-text-stroke: 1px black;
  font-weight: bold;
`;

interface NameProps {
  name: string;
  yearPublished?: number;
}

const MainName = (props: NameProps) => {
  const content = props.yearPublished
    ? `${props.name}(${props.yearPublished})`
    : props.name;
  return <NameStyle>{content}</NameStyle>;
};

interface Props {
  data?: { boardgame: FullBoardGameType };
}

function GameDetailHeader(props: Props) {
  if (!props.data) {
    return null;
  }
  const game = props.data.boardgame;

  return (
    <HeaderContainer>
      <HeaderImage image={game.images[0]} />
      <ThumbNail src={game.thumbnails[0]} />
      <HeaderContent>
        <div
          style={{
            width: '100%',
          }}
        >
          <MainName
            name={game.name[0].name}
            yearPublished={game.yearPublished}
          />
          <GenericFlexDiv>
            <GenericFlexDiv>
              <span>
                Players: {game.minPlayers} - {game.maxPlayers}
              </span>
            </GenericFlexDiv>
            <GenericFlexDiv>
              <span>Play Time: {game.playTime} minutes</span>
            </GenericFlexDiv>
          </GenericFlexDiv>
          <GenericFlexDiv>
            <span>Catagories: </span>
            {game.category.map((item: any) => (
              <span key={Date.now().toString()}>{item.name}</span>
            ))}
          </GenericFlexDiv>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default GameDetailHeader;
