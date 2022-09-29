import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from './../../../../style/';

export const MenuBar = styled.nav`
  visibility: ${({ isMenuBarOpen }) => (isMenuBarOpen ? 'visible' : 'hidden')};
  position: fixed;
  z-index: 3;
  right: ${({ isMenuBarOpen }) => (isMenuBarOpen ? '0' : '-100%')};
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;
  width: 40rem;
  height: 100vh;
  border-radius: ${br.default} 0 0 ${br.default};
  background-color: ${color.white};
  transition: 500ms;
`;

export const MenuBarCloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  margin: 1rem;
  padding: 0;
  border-radius: ${br.circle};
  color: ${color.black};
  transition: 500ms;

  &:hover {
    background-color: ${color.lightGrey};
  }

  svg {
    font-size: 7rem;
  }
`;

export const MenuBarList = styled.ul`
  width: 100%;
`;

export const MenuBarListItem = styled.li`
  padding: 1rem 10rem;
  padding-left: ${({ cat }) => (cat ? '12rem' : '')};
  transition: 500ms;
  &:hover {
    background-color: ${color.lightGrey};
  }
  svg {
    font-size: 3rem;
  }
`;

export const MenuBarItemLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: ${fs.xl};
  font-weight: 600;
  color: ${color.black};
`;

export const MenuBarItemTitle = styled.span`
  margin-left: 3rem;
`;
