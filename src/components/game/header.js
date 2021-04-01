import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Emojify from 'react-emojione';
import moment from 'moment';
import styled from 'styled-components'

class GameHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeElasped: 0,
    };

    this.onSmileyClick = this.onSmileyClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.startTime === null) {
      this.setState({ timeElasped : 0 });
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.props.startTime && this.props.gameStatus !== 'GAME_OVER'
        && this.props.gameStatus !== 'GAME_WON') {
        const timeElasped = (moment() - this.props.startTime);
        this.setState({ timeElasped });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  onSmileyClick(e) {
    e.preventDefault();

    this.props.onCreateGame();
  }

  render() {
    return (
    <GameHead>
        <GameFlag>
          <Emojify style={{ top: 0 }}>
            🚩
          </Emojify>
          {this.props.bombsLeft}
        </GameFlag>
        <GameSmiley>
          <button onClick={this.onSmileyClick}>
            {this.props.gameStatus === 'GAME_OVER' ? <Emojify style={{ top: 0 }}>😵</Emojify> : ''}
            {this.props.gameStatus === 'GAME_WON' ? <Emojify style={{ top: 0 }}>😎</Emojify> : ''}
            {this.props.gameStatus === 'NOT_STARTED' ? <Emojify style={{ top: 0 }}>😐</Emojify> : ''}
            {this.props.gameStatus === 'STARTED' ? <Emojify style={{ top: 0 }}>🙂</Emojify> : ''}
          </button>
        </GameSmiley>
        <GameTime>
          {Math.min(parseInt(this.state.timeElasped / 1000 , 10) , 999)}
          <Emojify style={{ top: 0 }}>
            ⌛
          </Emojify>
        </GameTime>
      </GameHead>
    );
  }
}

GameHeader.propTypes = {
  bombsLeft: PropTypes.number.isRequired,
  onCreateGame: PropTypes.func.isRequired,
  startTime: PropTypes.object,
  gameStatus: PropTypes.string.isRequired,
};

const GameHead = styled.div`
  display: flex;
  margin-top: 1em;
  margin-bottom: 1em;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const GameFlag = styled.div`
  justify-content: flex-start;
`
const GameSmiley = styled.div`
  justify-content: center;
`
const GameTime = styled.div`
  justify-content: flex-end;
`

export default GameHeader;
