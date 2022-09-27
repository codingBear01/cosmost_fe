import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from './../../../style/';

export const Header = styled.header`
  width: 100%;
  height: 7rem;
  background-color: ${color.darkBlue};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${gap.l};
  height: 100%;
`;

export const HeaderUtilWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuModal = styled.div`
  visibility: ${(props) => (props.isMenuOpen ? 'visible' : 'hidden')};
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  right: ${(props) => (props.isMenuOpen ? '0' : '-100%')};
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 400ms;

  ${media.mobile} {
    right: 0;
    top: ${(props) => (props.isMenuOpen ? '-2%' : '-110%')};
    width: 100%;
    heigth: 100%;
  }
`;

export const MenuModalList = styled.ul`
  visibility: ${(props) => (props.isMenuOpen ? 'visible' : 'hidden')};
  position: fixed;
  z-index: 999;
  top: -20px;
  right: ${(props) => (props.isMenuOpen ? '0' : '-100%')};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 40rem;
  height: 100vh;
  margin-top: ${gap.l};
  padding: ${gap.xl} 0;
  background-color: ${color.white};
  border-radius: ${br.default};
  box-shadow: inset 0 0 2px 1px ${color.grey};
  font-size: ${fs.l};
  font-weight: 600;
  color: ${color.darkBlue};
  transition: 400ms;

  > svg:first-child {
    align-self: end;
    margin-right: 4rem;
    font-size: 2.5rem;
    cursor: pointer;
  }

  ${media.mobile} {
    right: 0;
    top: ${(props) => (props.isMenuOpen ? '-2%' : '-110%')};
    width: 100%;
    height: 25%;
  }
`;

export const MenuModalListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  margin: 1rem 0;
  padding: ${gap.s} ${gap.xl};
  border-radius: ${br.default};
  cursor: pointer;
  transition: 150ms;

  &:hover {
    box-shadow: inset 0 0 2px 1px ${color.grey};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: ${color.darkBlue};
  }

  svg {
    font-size: 3rem;
  }

  span:nth-child(2) {
    margin-left: ${gap.l};
  }

  ${media.mobile} {
    width: 20%;
    margin: 0.5rem 0;
  }
`;
