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
  height: 100%;
  border-radius: ${br.default} 0 0 ${br.default};
  background-color: ${color.darkBlue};
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
  color: ${color.white};
  transition: 500ms;
  &:hover {
    background-color: ${color.blue};
  }
  svg {
    font-size: 7rem;
  }
`;

export const MenuBarList = styled.ul`
  width: 100%;
`;

export const MenuBarItemLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  // height: ${({ subCat }) => (subCat ? '10rem' : '100%')};
  padding: ${({ subCat }) => (subCat ? '0.5rem 0' : '1rem 10rem')};
  // padding-left: ${({ cat, subCat }) =>
    cat ? '15rem' : subCat ? '18rem' : ''};
  padding-left: ${({ cat, subCat }) => (cat ? '15rem' : '')};
  font-size: ${fs.l};
  font-weight: 600;
  color: ${color.white};
  &:hover {
    background-color: ${color.blue};
  }
`;

export const MenuBarListItem = styled.li`
  display: flex;
  align-items: center;
  transition: 500ms;
  cursor: pointer;
  svg {
    font-size: 2rem;
  }
`;

export const SubCategoriesWrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  // width: 5rem;
  height: 18rem;
`;

export const CategoryIsOpendIcon = styled.button`
  margin-left: ${({ cat }) => (cat ? '1rem' : '2rem')};
  svg {
    font-size: ${fs.xl};
    color: ${color.white};
  }
`;

export const MenuBarItemTitle = styled.span`
  margin-left: 3rem;
  font-size: ${({ cat, subCat }) =>
    cat ? `${fs.m}` : subCat ? `${fs.s}` : ''};
`;
