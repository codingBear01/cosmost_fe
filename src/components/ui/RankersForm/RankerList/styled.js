/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  BREAK_POINTS as media,
} from '../../../../style';

export const RankerList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  ${media.mobile} {
    margin: 0 auto;
  }
`;

export const RankerItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin: 1rem 0;
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
