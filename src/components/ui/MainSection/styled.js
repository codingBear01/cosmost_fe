/* libraries */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
/* static data */
import {
  COLOR_LIST as color,
  GAP_LIST as gap,
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
  transition: all 0.15s ease-in;
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
