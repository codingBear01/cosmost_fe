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

export const StyledCourseContent = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  margin-right: 2rem;
  padding: 0 2rem;
  border-radius: ${br.default};
  background-color: ${color.darkBlue};

  svg,
  span {
    font-size: ${fs.m};
  }

  svg {
    margin-right: 1rem;
  }
`;
