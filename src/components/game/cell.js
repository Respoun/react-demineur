import React, {  } from 'react';
import PropTypes from 'prop-types';
import { FaFlag, FaBomb } from 'react-icons/fa';

const GameCell = (props) => {

  const onCellFlag = (e) => {
    e.preventDefault();
    this.props.onFlagCell(props.cell);
  }

  const onCellClick = (e) => {
    e.preventDefault();
    this.props.onOpenCell(props.cell);
  }

  if (props.cell.isOpen) {
    let cellContent = props.cell.value;
    if (cellContent === 0) {
      cellContent = '';
    } else if (cellContent === -1) {
      cellContent = <FaBomb />;
    }
    return (
      <td className="game-cell game-cell-open">
        <div className={`game-number-${props.cell.value}`}>
          {cellContent}
        </div>
      </td>
    );
  }
  else {
    return (
      <td className="game-cell">
        <div>
          <button onClick={onCellClick} onContextMenu={onCellFlag}>
            {props.cell.isFlagged ? <FaFlag /> : ''}
          </button>
        </div>
      </td>
    );
  }
}

GameCell.propTypes = {
  cell: PropTypes.object.isRequired,
  onOpenCell: PropTypes.func.isRequired,
  onFlagCell: PropTypes.func.isRequired,
};

export default GameCell;
