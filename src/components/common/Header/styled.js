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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 7rem;
  background-color: ${color.darkBlue};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 76.8rem;
  height: 100%;
  padding: 0 ${gap.l};
`;

export const HeaderUtilWrap = styled.div`
  svg {
    margin-right: ${gap.l};
  }
`;
