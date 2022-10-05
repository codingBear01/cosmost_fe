import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from './../../../style/';

// 헤더가 7rem만큼 크기 잡아 먹으므로 각 section마다 padding-top 7rem씩 줘야 레이아웃 안 깨짐
export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  width: 100%;
  height: 7rem;
  background-color: ${color.black};
`;

export const HeaderContainer = styled.div`
  visibility: ${({ isSearchBarOpen }) =>
    isSearchBarOpen ? 'hidden' : 'visible'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 76.8rem;
  height: 100%;
  margin: 0 auto;
  padding: 0 ${gap.l};
  transition: all 0.2s ease;

  ${media.mobile} {
    width: 100%;
  }
`;

export const HeaderUtilWrap = styled.div`
  svg {
    margin-right: ${gap.l};
  }
`;

export const HeaderSearchBarOverlay = styled.div`
  position: ${({ isSearchBarOpen }) => (isSearchBarOpen ? 'fixed ' : '')};
  top: ${({ isSearchBarOpen }) => (isSearchBarOpen ? '0' : '')};
  left: ${({ isSearchBarOpen }) => (isSearchBarOpen ? '0' : '')};
  width: ${({ isSearchBarOpen }) => (isSearchBarOpen ? '100%' : '')};
  height: ${({ isSearchBarOpen }) => (isSearchBarOpen ? '100vh' : '')};
  z-index: ${({ isSearchBarOpen }) => (isSearchBarOpen ? '100' : '')};
  background: ${({ isSearchBarOpen }) =>
    isSearchBarOpen ? 'rgba(0, 0, 0, 0.48)' : ''};
  transition: all 0.4s ease;
`;
