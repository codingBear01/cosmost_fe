import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from './../../../../style/';

export const StyledHeaderMenuBarBg = styled.div`
  visibility: ${({ isMenuBarOpen }) => (isMenuBarOpen ? 'visible' : 'hidden')};
  position: fixed;
  z-index: 2;
  top: ${({ isMenuBarOpen }) => (isMenuBarOpen ? '0' : '-110%')};
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 400ms;
`;
