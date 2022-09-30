import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from './../../../style/';

export const StyledCourseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 120rem;
  margin-top: ${({ mt }) => mt};
  gap: 3rem;

  ${media.tablet} {
    flex-wrap: wrap;
    width: 90rem;
  }

  ${media.mobile} {
    flex-wrap: wrap;
    width: 60rem;
  }
`;
