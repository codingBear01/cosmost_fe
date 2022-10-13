import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from './../../../style/';

export const StyledCourseUtillityModal = styled.div`
  position: absolute;
  z-index: 1;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 10rem;
  height: 10rem;
  padding: 2rem;
  border: 1px solid ${color.white};
  border-radius: ${br.default};
  background-color: ${color.black};
`;

export const CourseUtilityModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${color.white};
  font-size: ${fs.s};

  svg {
    font-size: ${fs.m};
  }
`;
