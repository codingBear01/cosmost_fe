import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from './../../../style/';

export const StyledCoursesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${gap.s};
  ${media.mobile} {
    margin-top: 0;
  }
`;
