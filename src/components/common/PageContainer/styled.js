/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from '../../../style';

export const UtilPageContainerHeader = styled.header`
  position: fixed;
  padding: ${gap.l} ${gap.xl};
  font-size: 20px;
  color: ${color.white};

  svg {
    cursor: pointer;
  }
`;

export const StyledUtilPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 360px;
  height: 100%;
  margin: 0 auto;
  padding: 7rem 0;
  color: ${color.white};

  svg {
    font-size: 2.5rem;
    align-self: start;
    cursor: pointer;
  }
`;
