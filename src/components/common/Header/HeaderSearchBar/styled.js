/* libraries */
import styled from 'styled-components';
/* components */
import { Input } from '../../Input';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from './../../../../style/';

export const HeaderSearchBar = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  visibility: ${({ isSearchBarOpen }) =>
    isSearchBarOpen ? 'visible' : 'hidden'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ isSearchBarOpen }) => (isSearchBarOpen ? '76.8rem' : '0')};
  height: 7rem;
  padding: 0 ${gap.l};
  background-color: ${color.darkBlue};
  transition: 0.25s;
`;

export const StyledSearchInput = styled(Input)`
  border-radius: 0;
  border-bottom: 1px solid ${color.white};
  background: none;
  outline: none;
  color: ${color.white};

  &::placeholder {
    color: ${color.lightGrey};
  }
`;
