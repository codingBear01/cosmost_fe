/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
} from '../../../../style';

export const StyledCourseContent = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  padding: 0.5rem 2rem;
  border-radius: ${br.default};
  background-color: ${color.darkBlue};

  svg,
  span,
  p {
    font-size: ${fs.m};
  }

  svg {
    margin-right: 1rem;
  }
`;
