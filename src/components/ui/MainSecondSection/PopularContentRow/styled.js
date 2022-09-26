import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from './../../../../style/';

export const PopularContentRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  max-width: 120rem;
  margin: 3rem auto;
  gap: 3rem;

  ${media.mobile} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
