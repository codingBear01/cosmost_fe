/* libraries */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
/* icons */
import * as AiIcons from 'react-icons/ai';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from '../../../style';

export const FindedUserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 240px;
  height: 240px;
  border: 1px solid ${color.white};
  border-radius: ${br.xl};
  font-size: 20px;
  font-weight: 600;

  a,
  a:link,
  a:visited,
  a:active {
    padding-bottom: 5px;
    color: white;

    &: hover {
      border-bottom: 1px solid ${color.white};
    }
  }
`;
