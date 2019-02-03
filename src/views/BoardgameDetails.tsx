import * as React from 'react';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
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
      <Query query={BOARDGAME_DETAIL_QUERY} variables={{ gameId }}>
        {({ loading, error, data }) => {
          if (loading) {
            return <p>LOADING...</p>;
          }
          if (error) {
            return <p>ERROR</p>;
          }
          if (data.boardgame) {
            return <GameHeaderDetailComponent game={data.boardgame} />;
          } else {
            return <p>No Data for {this.state.boardGameId}</p>;
          }
        }}
      </Query>
    );
  }
}

export default connect()(BoardgameDetails);
