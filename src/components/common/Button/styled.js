import styled from 'styled-components';
import { BORDER_RADIUS_LIST as br } from './../../../style/';

export const StyledButton = styled.button`
  align-self: ${({ alignSelf }) => alignSelf};
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
