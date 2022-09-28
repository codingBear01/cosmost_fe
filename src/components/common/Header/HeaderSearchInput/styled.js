import styled from 'styled-components';
import { Input } from '../../Input';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from './../../../../style/';

// isSearchBarOpen이 true라면 Header에 input 표시
export const StyledSearchInput = styled(Input)`
  visibility: ${({ isSearchBarOpen, scrollY, pathName }) =>
    !isSearchBarOpen || (pathName === '/' && scrollY < 307)
      ? 'hidden'
      : 'visible'};
  position: relative;
  right: -8rem;
  scale: ${({ isSearchBarOpen, scrollY, pathName }) =>
    !isSearchBarOpen || (pathName === '/' && scrollY < 307) ? '0' : '1'};
  transition: all 0.15s ease-in;

  &:focus {
    outline: none;
  }

  // ${media.mobile} {
  //   right: -2.5rem;
  //   width: 30rem;
  // }

  // @media (max-width: 400px) {
  //   width: 20rem;
  // }
`;
