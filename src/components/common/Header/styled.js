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
  box-sizing: border-box;
  position: fixed;
  z-index: 1;
  right: ${(props) => (props.isMenuOpen ? '0' : '-100%')};
  align-items: center;
  justify-content: flex-end;
  width: 40rem;
  margin-top: ${gap.l};
  background-color: ${color.white};
  border-radius: ${br.default};
  font-size: ${fs.l};
  font-weight: 600;
  color: ${color.darkBlue};
  transition: 850ms;
  border: 1px solid white;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40rem;

    li {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 60%;
      margin: ${gap.m};
    }
  }
`;
