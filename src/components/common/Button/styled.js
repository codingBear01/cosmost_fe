import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from './../../../style/';

export const StyledButton = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${br.default};
  background-color: ${color.lightBlue};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 600;
  color: ${color.white};
  transition: all 0.15s ease-in;
  cursor: pointer;

  &:hover {
    background-color: ${color.blue};
  }
`;
