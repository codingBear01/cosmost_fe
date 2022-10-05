import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from './../../../style/';

export const StyledCourseImg = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ border_radius }) =>
    border_radius ? border_radius : `${br.default}`}};

  @media (max-width: 1250px) {
    width: 26.5rem;
  }
`;
