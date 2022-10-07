/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
  mainTextFadeIn,
} from '../../../../style';

export const StyledCourseUpperInfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  width: 100%;
  height: 6.5rem;
  padding: 1rem;
  border-bottom: 1px solid ${color.white};
`;

export const CourseTitleAndRateWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const CourseTitle = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
`;

export const CourseAverageRate = styled.span`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${color.white};
  border-radius: ${br.default};
  font-size: ${fs.l};
  font-weight: 600;
`;

export const CourseCreatedDataAndMoreIconWrap = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;

  svg {
    margin-left: ${gap.l};
    font-size: ${fs.xl};
    cursor: pointer;
  }
`;

export const CourseCreatedDate = styled.div`
  font-size: ${fs.m};
`;
