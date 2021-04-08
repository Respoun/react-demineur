import React, {  } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import GameCell from './cell';

const GameBoard = (props) => {

  const onOpenCell = (cell) => {
    cell.preventDefault();
    if (props.gameStatus === 'GAME_OVER' || props.gameStatus === 'GAME_WON') {
      return;
    }
    props.onOpenCell(cell);
  }

  const onFlagCell = (cell) => {
    cell.preventDefault();
    if (props.gameStatus === 'GAME_OVER' || props.gameStatus === 'GAME_WON') {
      return;
    }
    props.onFlagCell(cell);
  }

    const rows = props.board.map((row, rowIndex) => {
      return (
        <tr key={rowIndex}>
          {
            row.map((cell, cellIndex) => {
              const processedCell = Object.assign({}, cell);
              if (props.gameStatus === 'GAME_OVER') {
                if (processedCell.value === -1) {
                  processedCell.isOpen = true;
                }
              } else if (props.gameStatus === 'GAME_WON') {
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
                  onOpenCell={onOpenCell}
                  onFlagCell={onFlagCell}
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
