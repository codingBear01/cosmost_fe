/* libraries */
import styled from 'styled-components';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../style';

export const StyledOrderingModalButton = styled.button`
  display: flex;
  align-items: center;
  align-self: end;
  padding: 1rem;
  font-size: ${fs.s};
  font-weight: 600;
  color: ${color.white};

  svg {
    font-size: 2.5rem;
  }
`;
