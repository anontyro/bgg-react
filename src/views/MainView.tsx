import * as React from 'react';
import gql from 'graphql-tag';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {Query} from 'react-apollo';
import * as actions from '../store/general/actions';
import Username from './components/username/component';

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
    this.state = {username: this.props.username};

    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onUsernameSubmit = this.onUsernameSubmit.bind(this);
  }

  onUserNameChange(event: any) {
    event.preventDefault();
    this.setState({
      username: event.currentTarget.value,
    });
  }

  onUsernameSubmit(event: any) {
    event.preventDefault();
    this.props.setUsername(this.state.username);
  }

  public render() {
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
          {({loading, error, data}) => {
            if (loading) return <p>LOADING...</p>;
            if (error) return <p>ERROR</p>;
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
  }
}

const mapStateToProps = ({general}: any) => ({
  username: general.username,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setUsername: (name: string) => dispatch(actions.setUsername(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView);
