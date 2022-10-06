/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from '../../../../style';

export const StyledMainContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: ${({ pd }) => pd};
`;
