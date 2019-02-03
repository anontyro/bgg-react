import * as React from 'react';
import { connect } from 'react-redux';

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
    console.log(this.props.match.params);
    this.setState({
      boardGameId: this.props.match.params.id,
    });
  }

  public render() {
    return <p>{this.props.match.params.id}</p>;
  }
}

export default connect()(BoardgameDetails);
