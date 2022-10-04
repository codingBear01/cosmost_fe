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

/* styled components */
export const MainPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 76.8rem;
  padding: 7rem 0;
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
  flex-direction: column;
  align-self: start;
  animation: ${mainTextFadeIn} 3s;
`;

export const MainText = styled.span`
  margin: ${({ mr }) => mr};
  font-size: ${({ fs }) => fs};
  font-weight: 600;
  color: ${({ col }) => col};
  transition: 0.15s;

  &:hover {
    color: ${({ hover_col }) => hover_col};
  }
`;

export const CourseRegisterBtn = styled(Link)`
  display: flex;
  align-items: center;
  margin: 15rem 0 5rem;
  padding-bottom: ${gap.s};
  border-bottom: 2px solid ${color.white};
  align-self: end;
  font-size: 2.5rem;
  font-weight: 600;
  color: ${color.white};
  transition: 0.15s;
  animation: ${mainTextFadeIn} 3s;

  &:hover {
    scale: 1.01;
    color: ${color.skyBlue};
    border-bottom: 2px solid ${color.skyBlue};
  }

  svg {
    margin-top: 0.5rem;
    margin-left: ${gap.m};
    font-size: 2rem;
    font-weight: 600;
  }
`;

export const MainCourse = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  align-self: ${({ align_self }) => align_self};
  height: 45rem;
  width: 35rem;
  margin-top: 5rem;
  padding: 5rem;
  box-shadow: 0 0 2px 1px ${color.grey};
  background-color: ${color.white};
  border-radius: 1.8rem;
  color: ${color.black};
  transition: 0.2s;

  &:hover {
    scale: 1.01;
  }
`;

export const CourseTextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CourseTitle = styled.span`
  font-size: 3rem;
  font-weight: 600;
`;

export const CoureseLink = styled(Link)`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  color: ${color.lightBlue};

  &:hover {
    padding-bottom: 0.3rem;
    border-bottom: 2px solid ${color.lightBlue};
  }

  svg {
    margin-top: 0.3rem;
    margin-left: 0.5rem;
  }
`;

export const CourseIcon = styled.div`
  height: 15rem;
  font-size: 15rem;
`;
