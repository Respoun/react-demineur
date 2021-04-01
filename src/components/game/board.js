import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import GameCell from './cell';

class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.onOpenCell = this.onOpenCell.bind(this);
    this.onFlagCell = this.onFlagCell.bind(this);
  }

  onOpenCell(cell) {
    if (this.props.gameStatus === 'GAME_OVER' || this.props.gameStatus === 'GAME_WON') {
      return;
    }

    this.props.onOpenCell(cell);
  }

  onFlagCell(cell) {
    if (this.props.gameStatus === 'GAME_OVER' || this.props.gameStatus === 'GAME_WON') {
      return;
    }

    this.props.onFlagCell(cell);
  }

  render() {
    const rows = this.props.board.map((row, rowIndex) => {
      return (
        <tr key={rowIndex}>
          {
            row.map((cell, cellIndex) => {
              const processedCell = Object.assign({}, cell);
              if (this.props.gameStatus === 'GAME_OVER') {
                if (processedCell.value === -1) {
                  processedCell.isOpen = true;
                }
              } else if (this.props.gameStatus === 'GAME_WON') {
                if (processedCell.value === -1) {
                  processedCell.isFlagged = true;
                } else {
                  processedCell.isOpen = true;
                }
              }
              return (
                <GameCell
                  key={cellIndex}
                  cell={processedCell}
                  onOpenCell={this.onOpenCell}
                  onFlagCell={this.onFlagCell}
                />
              );
            })
          }
        </tr>
      );
    });

    return (
      <GameTable>
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </GameTable>
    );
  }
}

GameBoard.propTypes = {
  board: PropTypes.array.isRequired,
  gameStatus: PropTypes.string.isRequired,
  onOpenCell: PropTypes.func.isRequired,
  onFlagCell: PropTypes.func.isRequired,
};

const GameTable = styled.div`
  border-collapse: collapse;
`

export default GameBoard;
