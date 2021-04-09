import React from "react";
import styled from 'styled-components'

const NumberDisplay = ({ value }) => {
  return (
    <NumberDisplayDiv>
      {value < 0
        ? `-${Math.abs(value)
            .toString()
            .padStart(2, "0")}`
        : value.toString().padStart(3, "0")}
    </NumberDisplayDiv>
  );
};

const NumberDisplayDiv = styled.div`
  width: 80px;
  height: auto;
  padding:8px;
  border-radius:3px;
  background: black;
  font-size: 28px;
  text-align: center;
  color: white;
`

export default NumberDisplay;
