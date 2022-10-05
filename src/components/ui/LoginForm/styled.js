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
export const LoginFindWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 150px;
  margin: ${gap.m} 0;
`;

export const LoginServiceLink = styled(Link)`
  font-size: 12px;
  color: ${color.white};
  transition: all 0.15s ease-in;

  &:hover {
    color: ${color.skyBlue};
  }

  span {
    color: ${color.white};
  }
`;

export const LoginBtns = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 340px;
  height: 40px;
  margin-bottom: 10px;
  border-radius: ${br.default};
  background-color: ${({ bg_color }) => bg_color};
  color: ${({ col }) => col};
  font-weight: 600;
  transition: all 0.15s ease-in;
  cursor: pointer;

  &:hover {
    background-color: ${({ hovered_col }) => hovered_col};
  }

  svg {
    font-size: 20px;
  }

  span {
    margin-left: 10px;
  }
`;
