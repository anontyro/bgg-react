import * as React from 'react';
import { connect } from 'react-redux';
import GraphQlQueryWrap from 'src/HOC/graphQlQueryWrap';
import BOARDGAME_DETAIL_QUERY from 'src/queries/boardgameDetailQuery';
import { GameHeaderDetailComponent } from './components/gameDetails/component';

interface Props {
  match: { params: { id: string } };
}

interface State {
  boardGameId: string;
}

class BoardgameDetails extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      boardGameId: '',
    };
  }
  public componentDidMount() {
    this.setState({
      boardGameId: this.props.match.params.id,
    });
  }

  public render() {
    if (this.state.boardGameId === '') {
      return null;
    }
    const gameId = parseInt(this.state.boardGameId, 10);
    return (
      <GraphQlQueryWrap query={BOARDGAME_DETAIL_QUERY} variables={{ gameId }}>
        <GameHeaderDetailComponent />
      </GraphQlQueryWrap>
    );
  }
}

export default connect()(BoardgameDetails);
