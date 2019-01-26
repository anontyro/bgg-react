import * as React from 'react';
import Username from './components/username/component';
import {connect} from 'react-redux';
import * as actions from '../store/general/actions';
import {Dispatch} from 'redux';

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
