/* libraries */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
  mainTextFadeIn,
} from '../../../style';

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
