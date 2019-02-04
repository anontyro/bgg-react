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
