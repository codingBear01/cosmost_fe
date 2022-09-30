import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from './../../../style/';

export const StyledEachCourseWrap = styled.div`
  width: 27.5rem;
  height: ${({ height }) => height};
  border-radius: ${br.default};
  box-shadow: ${({ box_shadow }) => box_shadow};
  @media (max-width: 1250px) {
    width: 26.5rem;
  }
`;
