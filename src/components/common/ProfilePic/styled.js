/* libraries */
import styled from 'styled-components';
/* static data */
import { BORDER_RADIUS_LIST as br } from '../../../style';

export const StyledProfilePic = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${br.default};
`;
