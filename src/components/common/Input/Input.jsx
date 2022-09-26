import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from './../../../style/';

export const Input = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding-left: ${gap.s};
  border-radius: ${br.default};
  background-color: ${color.white};
  font-size: ${({ fontSize }) => fontSize};
  color: ${color.black};

  &: hover {
    outline: none;
  }
`;
