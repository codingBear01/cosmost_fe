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
  margin: ${({ margin }) => margin};
  border-radius: ${br.default};
  background-color: ${({ bgColor }) => bgColor};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 600;
  color: ${({ color }) => color};
  transition: all 0.15s ease-in;
  cursor: pointer;

  &:hover {
    border: none;
    background-color: ${({ hoveredBgColor }) => hoveredBgColor};
  }
`;
