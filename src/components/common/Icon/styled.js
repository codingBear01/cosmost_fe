import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from './../../../style/';

export const StyledHeaderIcon = styled.button`
  height: 2.5rem;
  margin: auto 0;
  margin-right: ${({ marginRight }) => marginRight};
  color: ${color.white};

  svg {
    margin-right: 0;
    font-size: 20px;
  }
`;
