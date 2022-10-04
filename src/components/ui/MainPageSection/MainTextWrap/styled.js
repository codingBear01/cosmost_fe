/* libraries */
import styled, { keyframes } from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
  mainTextFadeIn,
} from '../../../../style';

export const StyledMainTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  animation: ${mainTextFadeIn} 3s;
`;

export const MainText = styled.span`
  margin: ${({ mr }) => mr};
  font-size: ${({ fs }) => fs};
  font-weight: 600;
  color: ${({ col }) => col};
  transition: 0.15s;

  &:hover {
    color: ${({ hover_col }) => hover_col};
  }
`;
