import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from '../../../../style';

export const PopularCourseWrap = styled.div`
  width: 27.5rem;
`;

export const PoplularCourseBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 35%;
  padding: ${gap.xs};
`;

export const PopularCourseTitle = styled.span`
  margin-bottom: ${gap.l};
  font-size: ${fs.l};
  font-weight: 600;
  cursor: pointer;
`;

export const PopularHashtag = styled.button`
  margin: 0.25rem;
  border-radius: ${br.default};
  background-color: ${color.blue};
  opacity: 0.5;
  font-size: ${fs.xs};
  color: ${color.white};
  cursor: pointer;
`;
