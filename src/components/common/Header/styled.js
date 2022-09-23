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
  height: 70px;
  padding: ${gap.l} 0;
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
  font-size: 40px;
  font-weight: 600;
  color: ${color.white};

  &:hover {
    cursor: pointer;
  }
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
  width: 50px;
  height: 50px;
  margin-left: 20px;
  border-radius: ${br.circle};
  transition: all 0.2s ease-in;

  &:hover {
    border-radius: ${br.circle};
    background-color: ${color.blue};
    cursor: pointer;
  }

  svg {
    width: 40px;
    height: 40px;
    color: ${color.white};
  }
`;
