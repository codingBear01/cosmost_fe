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
