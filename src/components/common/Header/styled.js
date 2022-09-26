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
  overflow: hidden;
  position: relative;
  transform: ${(props) =>
    props.isMenuOpen ? 'translateX(375%)' : 'translateX(550%)'};
  height: 100%;
  width: 40rem;
  transition: all 800ms cubic-bezier(0.8, 0, 0.33, 1);
  border-radius: ${(props) =>
    props.isMenuOpen ? '0% 0% 0% 0%' : '0% 0% 100% 50%'};
  background: ${(props) =>
    props.isMenuOpen ? 'rgba(255, 255, 255, 0.6)' : 'none'};

  ${media.tablet} {
    transform: ${(props) =>
      props.isMenuOpen ? 'translateX(150rem)' : 'translateX(190rem)'};
  }
`;
