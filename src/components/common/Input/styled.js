import styled from 'styled-components';
import { COLOR_LIST as color, GAP_LIST as gap } from './../../../style/';

export const StyledInput = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding-left: ${gap.s};
  background: transparent;
  border-bottom: 1px solid ${color.white};
  outline: none;
  font-size: 14px;
  color: ${color.white};

  &::placeholder {
    color: ${color.grey};
  }

  &:focus {
    outline: none;
  }
`;
