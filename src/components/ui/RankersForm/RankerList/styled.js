/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
} from '../../../../style';

export const RankerList = styled.ul``;

export const RankerItem = styled.li`
  display: flex;
  align-items: center;
  align-self: start;
  gap: 3rem;
  margin-bottom: 2rem;
`;

export const RankerMedal = styled.div`
  width: 0.27rem;
  font-size: ${fs.l};
`;

export const RankerItemText = styled.span`
  font-size: ${({ type }) => (type === 'bestCourses' ? `${fs.s}` : `${fs.xl}`)};
  font-weight: 600;
  text-align: center;
`;
