import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GameBoard from './board';
import GameHeader from './header';

const Game = (props) => {
  const [difficulty, setDifficulty] = useState('easy');

  const onCreateGame = e => {
    switch (this.state.difficulty) {
      case 'easy':
        this.props.createGame(9, 9, 10);
        break;
      case 'medium':
        this.props.createGame(16, 16, 40);
        break;
      case 'hard':
        this.props.createGame(16, 30, 99);
        break;
      default:
        this.props.createGame(9, 9, 10);
        break;
    }
  };

  useEffect(() => {
    this.onCreateGame(this.state.difficulty);
  });

  const onDifficultyOptionChange = e => {
    setDifficulty(e.target.value);
    this.onCreateGame();
  };

    return (
      <div className="Game">
        <div className="game-wrapper">
          <div className="game-options">
            <select value={difficulty} onChange={onDifficultyOptionChange}>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <GameHeader
            bombsLeft={props.bombsLeft}
            startTime={props.startTime}
            gameStatus={props.status}
            onCreateGame={onCreateGame} />
          <GameBoard
            gameStatus={props.status}
            board={props.board}
            onOpenCell={props.openCell}
            onFlagCell={props.flagCell} />
        </div>
      </div>
    );
  }

Game.defaultProps = {
  startTime: null,
};

Game.propTypes = {
  board: PropTypes.array.isRequired,
  bombsLeft: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  startTime: PropTypes.object,

  createGame: PropTypes.func.isRequired,
  openCell: PropTypes.func.isRequired,
  flagCell: PropTypes.func.isRequired,
};

export default Game;
