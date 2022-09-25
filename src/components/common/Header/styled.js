import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
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

const StyledHeaderLogo = styled.span`
  font-size: 4rem;
  font-weight: 600;
  color: ${color.white};
  cursor: pointer;
`;

export const HeaderLogo = ({ logoTxt }) => (
  <StyledHeaderLogo>{logoTxt}</StyledHeaderLogo>
);

export const HeaderUtilWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderMenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  margin-left: 2rem;
  border-radius: ${br.circle};
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    border-radius: ${br.circle};
    background-color: ${color.blue};
  }

  svg {
    width: 4rem;
    height: 4rem;
    color: ${color.white};
  }
`;
