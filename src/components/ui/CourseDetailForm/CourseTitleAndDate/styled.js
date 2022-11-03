/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from '../../../../style';

// 코스 제목, 평점, 작성일, 더보기 버튼
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

export const CourseCreatedDateAndMoreIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 20rem;
  height: 100%;

  svg {
    margin-left: ${gap.l};
    font-size: ${fs.xl};
    cursor: pointer;
  }
`;

export const CourseCreatedDate = styled.span`
  font-size: ${fs.m};
  font-weight: 600;
`;
