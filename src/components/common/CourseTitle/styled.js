import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from './../../../style/';

export const CourseTitleWrap = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledCourseTitle = styled.span`
  margin-bottom: ${gap.m};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 600;
  cursor: pointer;
`;

export const CourseTotalRate = styled.span`
  height: ${({ height }) => height};
  padding: ${gap.xs};
  border-radius: ${br.default};
  background-color: ${color.black};
  opacity: 0.7;
  font-size: ${fs.s};
  font-weight: 600;
  color: ${color.white};
`;
