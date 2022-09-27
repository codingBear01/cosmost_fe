import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from './../../../../style/';

export const StyledHeaderSearchIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  margin-right: ${gap.xl};
  border-radius: ${br.circle};
  background: none;
  transition: all 0.15s ease-in;
  cursor: pointer;

  &:hover {
    border-radius: ${br.circle};
    background-color: ${color.blue};
  }

  svg {
    width: 4rem;
    height: 4rem;
    color: ${color.white};
  }
`;
