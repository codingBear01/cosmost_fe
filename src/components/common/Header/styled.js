import styled from 'styled-components';
import { Input } from '../Input';
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
  z-index: 2;
  top: 0;
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

export const HeaderSearchWrap = styled.div`
  width: 100rem;
  margin: 0 ${gap.xl};
  ${media.tablet} {
    width: 50rem;
  }
  ${media.mobile} {
    width: 30rem;
  }
`;

export const HeaderUtilWrap = styled.div`
  display: flex;
  align-items: center;
`;
