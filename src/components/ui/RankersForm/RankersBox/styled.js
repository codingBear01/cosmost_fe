/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
} from '../../../../style';

export const StyledRankersBox = styled.div`
  width: 30rem;
  height: 35rem;
  padding: 1.5rem;
  box-shadow: ${({ i }) => i !== 0 && `0 0 2px 2px ${color.grey}`};
  border-radius: ${br.default};
`;
