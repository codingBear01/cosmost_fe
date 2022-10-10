/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from '../../../style';

export const StyledOrderingModalButton = styled.button`
  display: flex;
  align-items: center;
  align-self: end;
  padding: 1rem;
  font-size: ${fs.s};
  font-weight: 600;
  color: ${color.white};

  svg {
    font-size: 2.5rem;
  }
`;
