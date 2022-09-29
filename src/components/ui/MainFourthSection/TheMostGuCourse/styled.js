import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from '../../../../style';

export const TheMostGuCourseWrap = styled.div`
  width: 27.5rem;
`;

export const TheMostGuCourseBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 35%;
  padding: ${gap.xs};
`;

export const CourseCount = styled.span`
  width: 4rem;
  font-size: ${fs.xs};
  font-weight: 600;
  color: ${color.grey};
  text-align: center;
  ${media.mobile} {
    width: 6rem;
  }
`;
