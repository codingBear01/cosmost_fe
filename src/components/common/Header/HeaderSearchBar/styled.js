/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BREAK_POINTS as media,
} from './../../../../style/';

export const HeaderSearchBar = styled.div`
  position: fixed;
  top: 0;
  left: 31%;
  z-index: 200;
  display: flex;
  align-items: center;
  width: 76.8rem;
  height: 7rem;
  background-color: ${color.black};
  opacity: ${({ isSearchBarOpened }) => (!isSearchBarOpened ? '0' : '1')};
  pointer-events: ${({ isSearchBarOpened }) =>
    !isSearchBarOpened ? 'none' : ''};
  transition: all 0.2s ease;

  ${media.mobile} {
    width: 90%;
    left: 5%;
  }
`;
