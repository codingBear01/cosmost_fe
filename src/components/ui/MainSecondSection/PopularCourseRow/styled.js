import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from '../../../../style';

export const PopularCourseRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 120rem;
  gap: 3rem;

  ${media.mobile} {
    flex-wrap: wrap;
    width: 60rem;
  }
`;
