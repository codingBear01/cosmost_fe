/* libraries */
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from '../../../style';

/* animation */
const mainTextFadeIn = keyframes`
0% {
  visibility: hidden;
  opacity: 0;
}
100% {
  visibility: visible;
  opacity: 1;
}
`;

export const MainPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 76.8rem;
  padding-top: 7rem;
  background-color: ${color.black};
  color: ${color.white};
`;

export const MainContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: ${({ pd }) => pd};
`;

export const MainTextWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  animation: ${mainTextFadeIn} 3s;
`;

export const MainText = styled.span`
  margin: ${({ mr }) => mr};
  font-size: ${({ fs }) => fs};
  font-weight: 600;
  color: ${({ col }) => col};
`;

export const CourseRegisterBtn = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 15rem;
  padding-bottom: ${gap.s};
  border-bottom: 2px solid ${color.white};
  align-self: end;
  font-size: 2.5rem;
  font-weight: 600;
  color: ${color.white};
  transition: 0.15s;
  animation: ${mainTextFadeIn} 3s;

  &:hover {
    scale: 1.02;
    color: ${color.lightGreen};
    border-bottom: 2px solid ${color.lightGreen};
  }

  svg {
    margin-top: 0.5rem;
    margin-left: ${gap.m};
    font-size: 2rem;
    font-weight: 600;
  }
`;
