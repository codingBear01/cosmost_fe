import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from './../../../style/';

export const StyledInput = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding-left: ${gap.s};
  background: transparent;
  border-bottom: 1px solid ${color.white};
  outline: none;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : `${fs.s}`)};
  color: ${color.white};

  &::placeholder {
    color: ${color.grey};
  }

  &:focus {
    outline: none;
  }
`;
