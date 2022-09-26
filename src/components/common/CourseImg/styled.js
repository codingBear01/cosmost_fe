import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from './../../../style/';

export const CourseImgWrap = styled.div`
  position: relative;
  cursor: pointer;
`;

export const StyledCourseImg = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${br.default};
`;

export const CourseTotalRate = styled.span`
  position: absolute;
  bottom: 5%;
  right: 3%;
  padding: ${gap.xs};
  border-radius: ${br.default};
  background-color: ${color.black};
  opacity: 0.7;
  font-size: ${fs.s};
  font-weight: 600;
  color: ${color.white};
`;
