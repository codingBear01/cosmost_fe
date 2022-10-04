/* libraries */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from '../../../style';

export const StyledNextBtn = styled(Link)`
  display: flex;
  align-items: center;
  align-self: end;
  font-size: ${fs.m};
  color: ${color.lightGrey};
  transition: 0.15s ease-in;

  &:hover {
    color: ${color.white};
  }

  span {
    margin-right: ${gap.xs};
  }
`;
