import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from './../../../../style/';

// 메인 페이지에서 scrollY가 307보다 작다면 icon 표시 안 함
export const StyledHeaderSearchIcon = styled.button`
  visibility: ${({ pathName, scrollY }) =>
    pathName === '/' && scrollY < 307 ? 'hidden' : 'visible'};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  margin-right: ${gap.xl};
  border-radius: ${br.circle};
  background: none;
  transition: all 0.15s ease-in;
  cursor: pointer;
  scale: ${({ pathName, scrollY }) =>
    pathName === '/' && scrollY < 307 ? '0' : '1'};

  &:hover {
    border-radius: ${br.circle};
    background-color: ${color.blue};
  }

  ${media.mobile} {
    margin-right: ${gap.s};
  }

  svg {
    width: 4rem;
    height: 4rem;
    color: ${color.white};
  }
`;
