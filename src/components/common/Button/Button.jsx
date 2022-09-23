import React from 'react';
import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from './../../../style/';

export const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${br.default};
  background-color: ${color.lightBlue};
  color: ${color.white};
  transition: all 0.15s ease-in;

  &:hover {
    background-color: ${color.blue};
    cursor: pointer;
  }
`;

function Button({ width, height, btnTxt }) {
  return (
    <StyledButton width={width} height={height}>
      {btnTxt}
    </StyledButton>
  );
}

export default Button;
