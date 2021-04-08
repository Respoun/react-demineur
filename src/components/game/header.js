import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Emojify from 'react-emojione';
import moment from 'moment';
import styled from 'styled-components'

const GameHeader = (props) => {
  const [ gameStatus, setGameStatus ] = useState('')
  const [timeElasped, setTimeElapsed] = useState('')

  useEffect((nextProps) => {
    if (nextProps.startTime === null) {
      this.setState({ timeElasped : 0 });
    }
  })

  useEffect(() => {
    if (props.startTime && props.gameStatus !== 'GAME_OVER'
      && props.gameStatus !== 'GAME_WON') {
      const timeElasped = (moment() - props.startTime);
      this.setState({ timeElasped });
    }
  }, 1000);

  useEffect(() => {
    return () => { clearInterval(this.timer); }
  }, [])

  const onSmileyClick = (e) => {
    e.preventDefault();

    this.props.onCreateGame();
  }

  return (
    <GameHead>
      <GameFlag>
        <Emojify style={{ top: 0 }}>
          🚩
        </Emojify>
        {props.bombsLeft}
      </GameFlag>
      <GameSmiley>
        <button onClick={onSmileyClick}>
          {setGameStatus('GAME_OVER') ? <Emojify style={{ top: 0 }}>😵</Emojify> : ''}
          {setGameStatus('GAME_WON') ? <Emojify style={{ top: 0 }}>😎</Emojify> : ''}
          {setGameStatus('NOT_STARTED') ? <Emojify style={{ top: 0 }}>😐</Emojify> : ''}
          {setGameStatus('STARTED') ? <Emojify style={{ top: 0 }}>🙂</Emojify> : ''}
        </button>
      </GameSmiley>
      <GameTime>
        {Math.min(parseInt(timeElasped / 1000 , 10) , 999)}
        <Emojify style={{ top: 0 }}>
          ⌛
        </Emojify>
      </GameTime>
    </GameHead>
  );
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
