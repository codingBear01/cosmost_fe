import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from '../../../style';

export const StyledHashtag = styled.button`
  margin: 0.25rem;
  border-radius: ${br.default};
  background-color: ${color.lightBlue};
  font-size: ${({ fontSize }) => fontSize};
  color: ${color.white};
  cursor: pointer;
  transition: all 0.15s ease-in;
  &:hover {
    background-color: ${color.blue};
  }
`;
