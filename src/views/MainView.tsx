import styled from '@emotion/styled';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../store/general/actions';
import GeekSearch from './components/geekSearch/component';
import HotItems from './components/graphql/hotItems/component';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export interface Props {
  username: string;
  setUsername: (username: string) => void;
}

export interface State {
  username: string;
}

export class MainView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { username: this.props.username };

    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onUsernameSubmit = this.onUsernameSubmit.bind(this);
  }

  public onUserNameChange(event: any) {
    event.preventDefault();
    this.setState({
      username: event.currentTarget.value,
    });
  }

  public onUsernameSubmit(event: any) {
    event.preventDefault();
    this.props.setUsername(this.state.username);
  }

  public render() {
    return (
      <MainContainer>
        <GeekSearch />
        <HotItems />
      </MainContainer>
    );
  }
}

const mapStateToProps = ({ general }: any) => ({
  username: general.username,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setUsername: (name: string) => dispatch(actions.setUsername(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainView);

/*
   return (
      <React.Fragment>
        <h1>Username: {this.state.username}</h1>
        <Username
          username={this.props.username}
          onUsernameChange={this.onUserNameChange}
          onUsernameSubmit={this.onUsernameSubmit}
        />
        <Query
          query={gql`
            {
              searchGame(query: "7 wonders") {
                name {
                  name
                }
                id
                itemType
                yearPublished
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) {
              return <p>LOADING...</p>;
            }
            if (error) {
              return <p>ERROR</p>;
            }
            console.log(data);

            // return data.searchGame[0].name[0].name;

            return data.searchGame.map((game: any) => (
              <div key={Date.now() + game.id}>
                <p>ID: {game.id}</p>
                <p>{game.name[0].name}</p>
                <p>{game.itemType}</p>
                <p>{game.yearPublished}</p>
              </div>
            ));
          }}
        </Query>
      </React.Fragment>
    );
 */
