import React, { useEffect } from "react";
import styled from 'styled-components'

const Button = ({ onClick, onContext, row, col, state, value }) => {
  const displayContent = () => {
    if (state === 2) {
      return <span>🚩</span>;
    }

    if (state === 1) {
      if (value === -1) {
        return <span>💣</span>;
      }

      if (value > 0) {
        return value;
      }
    }

    return null;
  };

  return (
    <ButtonDiv state={state} value={value}
      onClick={onClick(row, col)}
      onContextMenu={onContext(row, col)}
    >
      {displayContent()}
    </ButtonDiv>
  );
};

const ButtonDiv = styled.div`
  min-width: 30px;
  min-height: 30px;
  border-width: 4px;
  border-style: solid;
  border-top-color: white;
  border-left-color: white;
  border-right-color: #7b7b7b;
  border-bottom-color: #7b7b7b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;

  background: ${props => (props.value === 0 ? '#bdbdbd' : '')};

  border-color: ${props => (props.state === 1 ? '#7b7b7b' : '')};
  border-width: ${props => (props.state === 1 ? '1px' : '')};

  color: ${props => (props.value === 1 ? 'blue' : '')};
  color: ${props => (props.value === 2 ? 'green' : '')};
  color: ${props => (props.value === 3 ? 'red' : '')};
  color: ${props => (props.value === 4 ? 'purple' : '')};
  color: ${props => (props.value === 5 ? 'maroon' : '')};
  color: ${props => (props.value === 6 ? 'turquoise' : '')};
  color: ${props => (props.value === 7 ? 'black' : '')};
  color: ${props => (props.value === 8 ? 'gray' : '')};


  &:active{
    border-top-color: #7b7b7b;
    border-left-color: #7b7b7b;
    border-right-color: white;
    border-bottom-color: white;
  }

  span{
    display: block;
    margin-left: 2px;
    font-size: 12px;
  }
`


export default Button;
