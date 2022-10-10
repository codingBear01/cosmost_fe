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
  mainTextFadeIn,
} from '../../../style';

export const SearchedCourseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 2.4rem 1.2rem;
  ${media.mobile} {
    flex-direction: column;
  }
`;

export const SearchedCourseWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${media.mobile} {
    flex-direction: column;
  }
`;
