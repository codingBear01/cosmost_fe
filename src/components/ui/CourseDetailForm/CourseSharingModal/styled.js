/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
} from '../../../../style';

export const StyledCourseSharingModal = styled.div`
  width: 30rem;
  height: 7rem;
  background-color: ${color.white};
  border-radius: ${br.default};
  color: ${color.black};
`;

export const CourseSharingButtonList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  margin: auto 0;
`;

export const CourseSharingButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: ${br.default};
  background-color: ${({ bgColor }) => bgColor};
  font-size: 2.5rem;
  color: ${({ color }) => color};
  cursor: pointer;
`;
